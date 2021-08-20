import { AppState } from '../index';
import { createSelector } from '@ngrx/store';
import { FilterState, TodosState } from './todo.state';

export const selectFeature = (state: AppState) => state.todos;

export const selectAll = createSelector(selectFeature, (state: TodosState) => Object.values(state.todos));

export const selectFilter = (state: AppState) => state.todos.filter.state;

export const selectFilteredTodos = createSelector(selectFeature, (state: TodosState) => {
  return Object.values(state.todos).filter((todo) => {
    const filter = state.filter.state;
    let includeInResults = true;

    switch (filter) {
      case FilterState.Active:
        includeInResults = !todo.completed;
        break;
      case FilterState.Completed:
        includeInResults = todo.completed;
        break;
    }
    return includeInResults;
  });
});

export const selectItemsRemaining = createSelector(selectAll, (todos) => {
  return todos.reduce((count, todo) => count + (todo.completed ? 0 : 1), 0);
});

export const selectFetchTodosState = (state: AppState) => {
  return {
    error: state.todos.error,
    loading: state.todos.loading,
  };
};
