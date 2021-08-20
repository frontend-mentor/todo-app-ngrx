import { createReducer, on } from '@ngrx/store';
import produce from 'immer';

import { initialState } from './theme.state';
import { changeTheme } from './theme.actions';

export const reducer = createReducer(
  initialState,
  on(changeTheme, (state, { theme }) =>
    produce(state, (draft) => {
      draft.current = theme;
    })
  )
);
