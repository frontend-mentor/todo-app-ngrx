import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppState } from '../../store';
import { Store } from '@ngrx/store';
import { selectIsDarkMode } from '../../store/theme/theme.selectors';
import { addTodo } from '../../store/todo/todo.actions';

@Component({
  selector: 'app-new-todo-form',
  templateUrl: './new-todo-form.component.html',
  styleUrls: ['./new-todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTodoFormComponent {
  darkMode$ = this.store.select(selectIsDarkMode);
  title: string = '';

  constructor(private store: Store<AppState>) {}

  onEnterKey() {
    const value = this.title.trim();
    if (value.length > 0) {
      this.store.dispatch(addTodo({ title: value }));
      this.title = '';
    }
  }
}
