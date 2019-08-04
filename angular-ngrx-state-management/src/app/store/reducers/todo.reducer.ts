import { createReducer, on, Action, createFeatureSelector } from '@ngrx/store';
import * as TodoActions from '../actions/todo.action';
import { ITodo, ITodoStatus } from '../../models/todo.model';

export interface TodoState {
  data: ITodo[];
  loading: boolean;
  loaded: boolean;
}

export const TodoInitialState: TodoState = {
  data: [{ name: 'New Todo', date: new Date(), status: ITodoStatus.notstarted }],
  loading: false,
  loaded: false
};


const todosReducer = createReducer(
  TodoInitialState,
  on(TodoActions.LOAD_TODOS, state => ({ ...state, loading: true })),
  on(TodoActions.LOAD_TODOS_SUCCESS, state => ({ ...state, loaded: true, loading: false })),
  on(TodoActions.LOAD_TODOS_FAIL, state => ({ ...state, loading: false, loaded: false })),
  on(TodoActions.ADD_TODO, (state, newTodo) => ({ ...state, newTodo }))
);

export function reducer(state: TodoState | undefined, action: Action): TodoState {
  return todosReducer(state, action);
}


/**
 * selectors
 */


export const getTodoLoading = (state: TodoState) => state.loading;
export const getTodoLoaded = (state: TodoState) => state.loaded;
export const getTodos = (state: TodoState) => state.data;
