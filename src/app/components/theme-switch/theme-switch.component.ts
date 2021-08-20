import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { changeTheme } from '../../store/theme/theme.actions';
import { selectIsDarkMode } from '../../store/theme/theme.selectors';
import { SupportedTheme } from '../../store/theme/theme.state';
import { AppState } from '../../store';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitchComponent {
  darkMode$ = this.store.select(selectIsDarkMode);

  constructor(private store: Store<AppState>) {}

  changeTheme(darkMode: boolean) {
    this.store.dispatch(changeTheme({ theme: darkMode ? SupportedTheme.Dark : SupportedTheme.Light }));
  }
}
