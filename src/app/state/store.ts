import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import {Term, Vocabulary} from "../entities/vocabulary";
import {VocabularyService} from "../services/vocabulary.service";
import {inject} from "@angular/core";


export type ParlaState = {
  vocabularies: Vocabulary[];
  currentVocabulary: Vocabulary | undefined;
  isLoading: boolean;
}

export const initialState: ParlaState = {
  vocabularies: [],
  currentVocabulary: undefined,
  isLoading: false
}

export const ParlaStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withMethods(
    (store, vocabularyService = inject(VocabularyService)) => (
      {
        loadAll(userId: string) {
          patchState(store, {isLoading: true});
          vocabularyService.getVocabulary(userId).subscribe(
            dictionary => patchState(store, {vocabularies: dictionary, isLoading: false})
          );
        },
        setCurrentVocabulary(vocabularyId: string) {
          const currentVocabulary = store.vocabularies().find(item => item._id === vocabularyId);
          if(currentVocabulary) {
            vocabularyService.getVocabularyTerms(vocabularyId)
              .subscribe((result) => {
                currentVocabulary.terms = result;
                console.log("current Vocabulary");
                console.log(JSON.stringify(result));
                patchState(store, {currentVocabulary: currentVocabulary});
              })
          }
        },
        addTerm(term: Term) {
          patchState(store, {
            vocabularies: store.vocabularies().map(
              (vocabulary: Vocabulary) => {
                if (term.vocabularyId === vocabulary._id) {
                  return {...vocabulary, terms: [...vocabulary.terms, term]}
                } else {
                  return vocabulary;
                }
              }
            )
          });
        }
      }
    )
  )
);

