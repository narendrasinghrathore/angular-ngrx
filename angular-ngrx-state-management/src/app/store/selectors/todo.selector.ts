import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../reducers';
import * as fromTodoReducer from '../reducers/todo.reducer';

export const todoKey = 'todos';

const getAppState = createFeatureSelector<fromTodoReducer.TodoState>(todoKey);
// get todo state
const getTodoState = createSelector(
  getAppState,
  (state: fromTodoReducer.TodoState) => state
);
// get todos
export const getAllTodos = createSelector(
  getTodoState,
  fromTodoReducer.getTodos
);
// get todo loading
export const getTodosLoading = createSelector(
  getTodoState,
  fromTodoReducer.getTodoLoading
);
// get todos loaded
export const getTodosLoaded = createSelector(
  getTodoState,
  fromTodoReducer.getTodoLoaded
);
