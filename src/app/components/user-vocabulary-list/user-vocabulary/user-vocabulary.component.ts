import {Component, effect, inject, Input, OnInit} from '@angular/core';
import {MatList, MatListItem} from "@angular/material/list";
import {Vocabulary} from "../../../entities/vocabulary";
import {ParlaStore} from "../../../state/store";

@Component({
  selector: 'app-user-vocabulary',
  standalone: true,
  imports: [
    MatList,
    MatListItem
  ],
  templateUrl: './user-vocabulary.component.html',
  styleUrl: './user-vocabulary.component.less'
})
export class UserVocabularyComponent {
  store = inject(ParlaStore);
  currentVocabulary: Vocabulary | undefined;

  constructor() {
    effect(() => {
      this.currentVocabulary = this.store.currentVocabulary();
    });
  }

}
