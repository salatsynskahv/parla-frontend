import { createAction, props } from '@ngrx/store';
import { Term } from '../entities/vocabulary';

export const addItem = createAction('[Parla] Add Item', props<{term: Term}>());
