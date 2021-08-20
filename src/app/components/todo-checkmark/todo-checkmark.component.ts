import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { selectIsDarkMode } from '../../store/theme/theme.selectors';

@Component({
  selector: 'app-todo-checkmark',
  templateUrl: './todo-checkmark.component.html',
  styleUrls: ['./todo-checkmark.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCheckmarkComponent {
  @Input() size: string | number = 20;
  @Input() checked = false;

  darkMode$ = this.store.select(selectIsDarkMode);

  constructor(private store: Store<AppState>) {}
}
