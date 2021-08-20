import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FilterState } from '../../store/todo/todo.state';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { filterTodos } from '../../store/todo/todo.actions';
import { selectIsDarkMode } from '../../store/theme/theme.selectors';
import { selectFilter } from '../../store/todo/todo.selectors';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFiltersComponent {
  readonly supportedFilters: { label: string; filter: FilterState }[] = [
    { label: 'All', filter: FilterState.All },
    { label: 'Active', filter: FilterState.Active },
    { label: 'Completed', filter: FilterState.Completed },
  ];
  darkMode$ = this.store.select(selectIsDarkMode);
  filter$ = this.store.select(selectFilter);

  constructor(private store: Store<AppState>) {}

  onFilter(filter: FilterState) {
    this.store.dispatch(filterTodos({ filter: { state: filter } }));
  }
}
