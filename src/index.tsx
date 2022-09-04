import { ThemeProvider } from '@mui/material';
import ReactApp from 'pages';
import 'index.scss';
import theme from 'material-ui';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MutationCache, QueryClient, QueryClientProvider } from 'react-query';
import { Provider as StateProvider } from 'react-redux';
import reportWebVitals from 'reportWebVitals';
import store from 'store';
import GlobalModalContextProvider from 'components/layout/modal';

const queryClient = new QueryClient({
  mutationCache: new MutationCache({}),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <StateProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalModalContextProvider>
            <ReactApp />
          </GlobalModalContextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </StateProvider>
  </React.StrictMode>
);

reportWebVitals();
