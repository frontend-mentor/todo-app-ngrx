export enum SupportedTheme {
  System = 'system',
  Light = 'light',
  Dark = 'dark',
}

export type ThemeState = {
  current: SupportedTheme;
  available: SupportedTheme[];
};

export const initialState: ThemeState = {
  current: SupportedTheme.System,
  available: [SupportedTheme.System, SupportedTheme.Light, SupportedTheme.Dark],
};
