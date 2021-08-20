import { AppState } from '../index';
import { SupportedTheme } from './theme.state';

export const selectIsDarkMode = (state: AppState) => {
  return state.theme.current === SupportedTheme.Dark;
};
