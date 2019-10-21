import {
  Router,
  LocationProvider,
  createMemorySource,
  createHistory,
} from '@reach/router';
import React from 'react';
import { HomePage } from './pages/home';
import { SecondPage } from './pages/second';

let source = createMemorySource('');
let history = createHistory(source);

export const Routes = () => (
  <LocationProvider history={history}>
    <Router>
      <HomePage path="/" />
      <SecondPage path="/second" />
    </Router>
  </LocationProvider>
);
