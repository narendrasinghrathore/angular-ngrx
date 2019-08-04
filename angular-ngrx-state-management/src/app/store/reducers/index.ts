import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromTodoReducer from './todo.reducer';
/**
 * Defining structure of state tree
 */
export interface AppState {
 todos: fromTodoReducer.TodoState;

}

export const reducers: ActionReducerMap<AppState> = {
  todos : fromTodoReducer.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
