import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Term } from "../entities/vocabulary";
import { DictionaryService } from "../services/dictionary.service";
import { inject } from "@angular/core";


export type ParlaState = {
    vocabulary: Term[];
    isLoading: boolean;
}

export const initialState: ParlaState = {
    vocabulary: [],
    isLoading: false
}

export const ParlaStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods(
        (store, dictionaryService = inject(DictionaryService)) => (
            {
              loadAll() {
                    patchState(store, {isLoading: true});
                    dictionaryService.getDictionary().subscribe(
                      dictionary => patchState(store, {vocabulary: dictionary, isLoading: false})
                    );
                },
              addTerm(term: Term) {
                patchState(store, {vocabulary: [...store.vocabulary(),term]});
              }
            }
        )
    )
);

