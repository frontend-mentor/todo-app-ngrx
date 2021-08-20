import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { removeCompletedTodos } from '../../store/todo/todo.actions';
import { selectItemsRemaining } from '../../store/todo/todo.selectors';
import { selectIsDarkMode } from '../../store/theme/theme.selectors';

@Component({
  selector: 'app-todo-summary',
  templateUrl: './todo-summary.component.html',
  styleUrls: ['./todo-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoSummaryComponent {
  darkMode$ = this.store.select(selectIsDarkMode);
  itemsRemaining$ = this.store.select(selectItemsRemaining);

  constructor(private store: Store<AppState>) {}

  onClearCompleted() {
    this.store.dispatch(removeCompletedTodos());
  }
}
