import {Component, OnInit, computed, effect, inject, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {ParlaStore} from '../../../state/store';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {
  MatDialog
} from '@angular/material/dialog';
import {AddTermDialogComponent} from '../dialogs/add-term-dialog/add-term-dialog.component';
import {Term} from '../../../entities/vocabulary';
import {EMPTY, Observable, of} from "rxjs";
import {SearchComponent} from "../../search/search.component";
import {MatFormField} from "@angular/material/form-field";
import {UserVocabularyListComponent} from "../../user-vocabulary-list/user-vocabulary-list.component";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";


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
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    ReactiveFormsModule,
    MatInput,
    MatButton
  ],
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
     // console.log(JSON.stringify(this.store.vocabulary()));
    }, {
      allowSignalWrites: true
    });
  }


  ngOnInit(): void {
    this.store.loadAll();
  }
}
