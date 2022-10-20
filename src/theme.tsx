import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { FC } from 'react';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';

const theme = {
  primary: '#0082c3',
  primaryLight: '#b2e0f7',
  primaryDark: '#005783',

  secondary: '#fed766',

  orange: '#fe4a49',

  success: '#40C959',

  white: '#eefcff',
  black: '#151519',
  greyLight: '#616161',
  grey: '#414141',
  greyThin: '#eff1f3',

  borderRadius: '6px',
  mobileSize: '500px',
};

const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.primary,
      light: theme.primaryLight,
      dark: theme.primaryDark,
    },
    secondary: { main: theme.secondary },
    warning: { main: theme.orange },
    success: { main: theme.success },
    text: {
      primary: theme.black,
      disabled: theme.grey,
      secondary: theme.white,
    },
  },
  shape: {
    borderRadius: theme.borderRadius,
  },
  typography: {
    allVariants: {
      fontFamily:
        "'Roboto Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
    },
  },
});

const ThemeProvider: FC<WithChildren> = ({ children }) => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <StyledComponentThemeProvider theme={theme}>
        {children}
      </StyledComponentThemeProvider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
