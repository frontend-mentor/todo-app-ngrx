import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from '../../store/todo/todo.state';
import { selectIsDarkMode } from '../../store/theme/theme.selectors';
import { AppState } from '../../store';
import { Store } from '@ngrx/store';
import { removeTodo, toggleTodo, updateTodo } from '../../store/todo/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent implements OnChanges {
  @Input() todo!: Todo;
  editableTodoTitle!: string;
  previousTodoTitle!: string;
  darkMode$ = this.store.select(selectIsDarkMode);

  constructor(private store: Store<AppState>) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.todo) {
      this.editableTodoTitle = this.previousTodoTitle = this.todo.title;
    }
  }

  updateTodo(newTitle: string) {
    this.store.dispatch(updateTodo({ id: this.todo.id, title: newTitle }));
  }

  onToggleTodo() {
    this.store.dispatch(toggleTodo({ id: this.todo.id, completed: !this.todo.completed }));
  }

  onDeleteTodo() {
    this.store.dispatch(removeTodo({ id: this.todo.id }));
  }

  onTodoTitleKeyDown(e: KeyboardEvent) {
    if (e.key.startsWith('Esc')) {
      this.editableTodoTitle = this.previousTodoTitle;
    }
  }

  onInputValueChanged() {
    const value = this.editableTodoTitle.trim();

    if (value) {
      this.updateTodo(value);
    } else {
      this.editableTodoTitle = this.previousTodoTitle;
    }
  }
}
