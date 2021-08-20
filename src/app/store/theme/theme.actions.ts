import { createAction, props } from '@ngrx/store';
import { SupportedTheme } from './theme.state';

export const changeTheme = createAction('@theme/change', props<{ theme: SupportedTheme }>());
