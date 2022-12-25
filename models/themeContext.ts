import { Theme } from './theme';

export type ContextProps = {
  theme: Theme;
  onChange: React.Dispatch<React.SetStateAction<Theme>>;
};

export interface WithTheme {
  theme: Theme;
}

export type ThemeProviderProps = {
  children: JSX.Element;
};

export type InjectedProps = [
  theme: Theme,
  onChange: React.Dispatch<React.SetStateAction<Theme>> | null
];
