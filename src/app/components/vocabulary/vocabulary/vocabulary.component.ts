import {Component, OnInit, computed, effect, inject, signal} from '@angular/core';
import {ParlaStore} from '../../../state/store';
import {Term} from '../../../entities/vocabulary';
import {VocabularyListComponent} from "../../user-vocabulary-list/vocabulary-list.component";

export const userId = '64b6fc3f8d2eaa00123abcde';
@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrl: './vocabulary.component.less',
  standalone: true,
  imports: [
    VocabularyListComponent
  ],
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
