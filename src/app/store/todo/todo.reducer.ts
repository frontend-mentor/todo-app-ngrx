import { createReducer, on } from '@ngrx/store';
import { FilterState, TodosState } from './todo.state';
import * as actions from './todo.actions';
import produce from 'immer';

export const initialState: TodosState = {
  todos: {},
  filter: { state: FilterState.All },
  error: '',
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(actions.addTodo, (state, { title }) =>
    produce(state, (draft) => {
      const id = Date.now();
      draft.todos[id] = {
        id,
        userId: 0,
        completed: false,
        title,
      };
    })
  ),
  on(actions.toggleTodo, (state, { id, completed }) =>
    produce(state, (draft) => {
      const todo = draft.todos[id];
      if (todo) todo.completed = completed;
    })
  ),
  on(actions.removeTodo, (state, { id }) =>
    produce(state, (draft) => {
      const todo = draft.todos[id];
      if (todo) delete draft.todos[id];
    })
  ),
  on(actions.updateTodo, (state, { id, title }) =>
    produce(state, (draft) => {
      const todo = draft.todos[id];
      if (todo) todo.title = title;
    })
  ),
  on(actions.removeCompletedTodos, (state) =>
    produce(state, (draft) => {
      for (const key of Object.keys(draft.todos)) {
        if (draft.todos[key].completed) delete draft.todos[key];
      }
    })
  ),
  on(actions.filterTodos, (state, { filter }) =>
    produce(state, (draft) => {
      draft.filter = filter;
    })
  ),
  on(actions.fetchTodosPending, (state) =>
    produce(state, (draft) => {
      draft.error = '';
      draft.loading = true;
    })
  ),
  on(actions.fetchTodosFulfilled, (state, { todos }) =>
    produce(state, (draft) => {
      draft.error = '';
      draft.loading = false;
      draft.todos = Object.fromEntries(todos.map((item) => [item.id, item]));
    })
  ),
  on(actions.fetchTodosRejected, (state, { error }) =>
    produce(state, (draft) => {
      draft.error = error;
      draft.loading = false;
    })
  )
);
