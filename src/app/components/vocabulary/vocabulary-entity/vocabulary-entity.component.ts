import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ParlaStore} from "../../../state/store";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-vocabulary-entity',
  imports: [
    JsonPipe
  ],
  standalone: true,
  templateUrl: './vocabulary-entity.component.html',
  styleUrl: './vocabulary-entity.component.less'
})
export class VocabularyEntityComponent {

  store = inject(ParlaStore);
  route = inject(ActivatedRoute);
  currentVocabulary = computed(() => this.store.currentVocabulary());

  ngOnInit(): void {
    const vocabularyId = this.route.snapshot.params['id'];
    console.log(vocabularyId);
    this.store.setCurrentVocabulary(vocabularyId);
  }
}
