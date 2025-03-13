import {Component, inject, Input} from '@angular/core';
import {Vocabulary} from "../../../entities/vocabulary";
import {RouterLink} from "@angular/router";
import {ParlaStore} from "../../../state/store";

@Component({
  selector: 'app-user-vocabulary-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './vocabulary-card.component.html',
  styleUrl: './vocabulary-card.component.less'
})
export class VocabularyCardComponent {

  @Input() vocabulary!: Vocabulary;
  store = inject(ParlaStore);

  updateStoreWithCurrentId() {
    this.store.setCurrentVocabulary(this.vocabulary._id);
  }

}
