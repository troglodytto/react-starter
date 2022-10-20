import ReactApp from 'pages';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MutationCache, QueryClient, QueryClientProvider } from 'react-query';
import { Provider as StateProvider } from 'react-redux';
import reportWebVitals from 'reportWebVitals';
import store from 'store';
import GlobalModalContextProvider from 'components/layout/modal';
import ThemeProvider from 'theme';
import 'index.scss';

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
        <ThemeProvider>
          <GlobalModalContextProvider>
            <ReactApp />
          </GlobalModalContextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </StateProvider>
  </React.StrictMode>
);

reportWebVitals();
