import {Component, OnInit, computed, effect, inject, signal} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ParlaStore} from '../../../state/store';
import {
  MatDialog
} from '@angular/material/dialog';
import {AddTermDialogComponent} from '../dialogs/add-term-dialog/add-term-dialog.component';
import {Term} from '../../../entities/vocabulary';
import {SearchComponent} from "../../search/search.component";

export const userId = '64b6fc3f8d2eaa00123abcde';
@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrl: './vocabulary.component.less',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VocabularyComponent implements OnInit {


  readonly loading = computed(() => {
    if (this.store.isLoading()) {
      console.log('isLoading');
      return true;
    } else {
      console.log('not Loading');
      return false;
    }
  });




  readonly store = inject(ParlaStore);
  vocabulary = signal<Term[]>([]);

  constructor() {
    effect(() => {
      console.log('Effect isLoading: ' + this.store.isLoading());
      console.log(JSON.stringify(this.store.vocabularies()));
    }, {
      allowSignalWrites: true
    });
  }


  ngOnInit(): void {
    this.store.loadAll(userId);
  }
}
