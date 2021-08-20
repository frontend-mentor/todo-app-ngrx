import { createAction, props } from '@ngrx/store';
import { FilterState, Todo } from './todo.state';

export const addTodo = createAction('@todos/add', props<{ title: string }>());

export const toggleTodo = createAction('@todos/toggle', props<{ id: number; completed: boolean }>());

export const removeTodo = createAction('@todos/remove', props<{ id: number }>());

export const updateTodo = createAction('@todos/update', props<{ id: number; title: string }>());

export const removeCompletedTodos = createAction('@todos/remove-completed');

export const filterTodos = createAction('@todos/filter', props<{ filter: { state?: FilterState } }>());

export const fetchTodos = createAction('@todos/fetch');

export const fetchTodosPending = createAction('@todos/fetch/pending');

export const fetchTodosFulfilled = createAction('@todos/fetch/fulfilled', props<{ todos: Todo[] }>());

export const fetchTodosRejected = createAction('@todos/fetch/rejected', props<{ error: string }>());
