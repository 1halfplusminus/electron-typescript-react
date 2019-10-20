import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Routes } from '../routes';
import { App } from './app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../core/theme';

export interface RootProps {
  store: Store;
}

export const Root = ({ store }: RootProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App>
          <Routes />
        </App>
      </ThemeProvider>
    </Provider>
  );
};

export default hot(Root);
