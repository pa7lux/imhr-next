import React, { ComponentType, FC, useState } from 'react';
import { Theme } from '../../models/theme';
import {
  InjectedProps,
  ContextProps,
  ThemeProviderProps,
} from '../../models/themeContext';

const ThemeContext = React.createContext<InjectedProps>(['theme-purple', null]);

const useTheme = () => React.useContext<InjectedProps>(ThemeContext);

const withTheme =
  <P extends ContextProps = ContextProps>(Component: ComponentType<P>) =>
  (props: Omit<P, keyof ContextProps>) => {
    const [theme, onChange] = useTheme();

    return <Component {...(props as P)} theme={theme} onChange={onChange} />;
  };

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('theme-purple');

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, useTheme, withTheme, ThemeProvider };
