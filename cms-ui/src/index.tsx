import App from 'App';
import 'index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthUserContextProvider } from 'shared/context/AuthUserContext';
import PageTitleContextProvider from 'shared/context/PageTitleContext';
import MyThemeContextProvider from 'shared/context/ThemeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PageTitleContextProvider>
        <MyThemeContextProvider>
          <AuthUserContextProvider>
            <App />
          </AuthUserContextProvider>
        </MyThemeContextProvider>
      </PageTitleContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
