import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../store';
import { selectIsDarkMode } from '../../store/theme/theme.selectors';
import { selectFilteredTodos } from '../../store/todo/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
  darkMode$ = this.store.select(selectIsDarkMode);
  filteredTodos$ = this.store.select(selectFilteredTodos);

  inlineFilterVisible = false;

  constructor(private store: Store<AppState>, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    const onMediaChange = (e: MediaQueryListEvent) => {
      this.inlineFilterVisible = e.matches;
      this.cdRef.markForCheck();
    };
    const media = window.matchMedia('(min-width: 592px)');
    media.addEventListener('change', onMediaChange);
    this.inlineFilterVisible = media.matches;
  }
}
