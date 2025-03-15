import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {VocabularyService} from "../../services/vocabulary.service";
import {MatIconModule} from "@angular/material/icon";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {JsonPipe} from "@angular/common";
import {Translations} from "../../entities/Translations";
import {DictionaryService} from "../../services/dictionary.service";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.less'
})
export class SearchComponent implements OnInit {


  word = new FormControl('');
  searchResult = signal({});
  translations = computed<Translations>(() => {
    let result: Translations = {};
    const value = this.searchResult();
    // @ts-ignore
    if (value[0]['shortdef']) {
      // @ts-ignore
      result.definitions = (value[0]['shortdef'][0])?.split(',');
      console.log(result.definitions)
    } else {
      result.alternatives = value as [];
    }
    return result;
  })

  private dictionary = inject(DictionaryService);
  readonly data = inject<{ searchText: string }>(MAT_DIALOG_DATA);


  ngOnInit(): void {
    this.word.setValue(this.data.searchText);
    !!this.data.searchText && this.search(this.data.searchText);
  }

  search(text: any) {
    if (text) {
      this.dictionary.getMerriamWebsterTranslations(text).subscribe(
        result => {
          this.searchResult.set(result);
        }
      )
    }
  }

  selectAlternative(text: string) {
    this.word.setValue(text);
    this.search(text);
  }
}
