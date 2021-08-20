import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { fetchTodos, fetchTodosFulfilled } from './store/todo/todo.actions';
import { selectIsDarkMode } from './store/theme/theme.selectors';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  darkMode$ = this.store.select(selectIsDarkMode);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.next(
      fetchTodosFulfilled({
        todos: [
          {
            userId: 1,
            id: 1,
            title: 'Complete online JavaScript course',
            completed: true,
          },
          {
            userId: 1,
            id: 2,
            title: 'Jog around the park 3x',
            completed: false,
          },
          {
            userId: 1,
            id: 3,
            title: '10 minutes meditation',
            completed: false,
          },
          {
            userId: 1,
            id: 4,
            title: 'Read for 1 hour',
            completed: false,
          },
          {
            userId: 1,
            id: 5,
            title: 'Pick up groceries',
            completed: false,
          },
          {
            userId: 1,
            id: 6,
            title: 'Complete Todo App on Frontend Mentor',
            completed: false,
          },
        ],
      })
    );

    if (environment.liveTodos) {
      this.store.dispatch(fetchTodos());
    }
  }
}
