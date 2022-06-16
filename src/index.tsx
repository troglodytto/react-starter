import { ThemeProvider } from '@mui/material';
import App from 'App';
import 'index.scss';
import theme from 'materialUi';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MutationCache, QueryClient, QueryClientProvider } from 'react-query';
import { Provider as StateProvider } from 'react-redux';
import reportWebVitals from 'reportWebVitals';
import store from 'store';

const queryClient = new QueryClient({
  mutationCache: new MutationCache({}),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <StateProvider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>
);

reportWebVitals();
