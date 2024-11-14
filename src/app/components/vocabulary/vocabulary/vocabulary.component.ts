import {Component, OnInit, computed, effect, inject, signal} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ParlaStore} from '../../../state/store';
import {MatIconModule} from '@angular/material/icon';
import {
  MatDialog
} from '@angular/material/dialog';
import {AddTermDialogComponent} from '../dialogs/add-term-dialog/add-term-dialog.component';
import {Term} from '../../../entities/vocabulary';
import {DictionaryService} from "../../../services/dictionary.service";
import {EMPTY, Observable, of} from "rxjs";
import {SearchComponent} from "../../search/search.component";


type Translations  = {
  results: Result[]
}

type Result = {
  definition: string;
  partOfSpeech: string;
}

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrl: './vocabulary.component.less',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VocabularyComponent implements OnInit {

  readonly dialog = inject(MatDialog);
  readonly loading = computed(() => {
    if (this.store.isLoading()) {
      console.log('isLoading');
      return true;
    } else {
      console.log('not Loading');
      return false;
    }
  });

  word = new FormControl('');



  openAddTermDialog() {
    this.dialog.open(AddTermDialogComponent, {width: '350px', height: '200px'});
  }

  openSearchDialog() {
    const position = {left: '2%', top: '10%'};
    const dialogRef = this.dialog.open(SearchComponent, {width: '80%', height:'60%', position, data: {searchText: this.word.value}});
    dialogRef.afterClosed().subscribe(result => {
      this.word.setValue(result);
    })
  }

  readonly store = inject(ParlaStore);
  vocabulary = signal<Term[]>([]);

  constructor() {
    effect(() => {
      console.log('Effect isLoading: ' + this.store.isLoading());
      console.log(JSON.stringify(this.store.vocabulary()));
    }, {
      allowSignalWrites: true
    });
  }


  ngOnInit(): void {
    this.store.loadAll();
  }
}
