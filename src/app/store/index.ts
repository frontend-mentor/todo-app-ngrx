import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './todo/todo.state';
import { reducer as todoReducer } from './todo/todo.reducer';

import * as fromTheme from './theme/theme.state';
import { reducer as themeReducer } from './theme/theme.reducer';

export interface AppState {
  theme: fromTheme.ThemeState;
  todos: fromTodo.TodosState;
}

export const initialState: AppState = {
  theme: fromTheme.initialState,
  todos: fromTodo.initialState,
};

export const reducers: ActionReducerMap<AppState> = {
  theme: themeReducer,
  todos: todoReducer,
};
