import {Component, computed, inject, linkedSignal} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ParlaStore} from "../../../state/store";
import {Term} from "../../../entities/vocabulary";
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
  isLoading = computed(() => !this.currentVocabulary());
  vocabularyName = computed(() =>{
    return this.currentVocabulary()?.name
  } );
  terms = computed<Term[]>(() => {
    return this.currentVocabulary()?.terms || []
  });


  ngOnInit(): void {
    const vocabularyId = this.route.snapshot.params['id'];
    console.log(vocabularyId);
    this.store.setCurrentVocabulary(vocabularyId);
  }
}
