import { createAction, props } from '@ngrx/store';
import { ITodo } from '../../models/todo.model';

/**
 * For purpose of type safety
 */
export enum TODOS_ACTIONS {
  LOAD_TODOS = '[Todos] Load Todos',
  LOAD_TODOS_SUCCESS = '[Todos] Load Todos Success',
  LOAD_TODOS_FAIL = '[Todos] Load Todos Fail',
  ADD_TODO = '[Todos] Add Todo',
  REMOVE_TODO = '[Todos] Remove Todo',
  UPDATE_TODO = '[Todos] Update Todo'
}


/**
 * Action for load todo
 */
export const LOAD_TODOS = createAction(
  TODOS_ACTIONS.LOAD_TODOS
);
/**
 * Action for load todo success
 */
export const LOAD_TODOS_SUCCESS = createAction(
  TODOS_ACTIONS.LOAD_TODOS_SUCCESS,
  props<ITodo[]>()
);
/**
 * Action for load todo failure
 */
export const LOAD_TODOS_FAIL = createAction(
  TODOS_ACTIONS.LOAD_TODOS_FAIL,
  props<ITodo[]>()
);

export const ADD_TODO = createAction(
  TODOS_ACTIONS.ADD_TODO,
  props<ITodo>()
);

export const REMOVE_TODO = createAction(
  TODOS_ACTIONS.REMOVE_TODO
);

export const UPDATE_TODO = createAction(
  TODOS_ACTIONS.UPDATE_TODO
);
