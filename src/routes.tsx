import {
  Router,
  LocationProvider,
  createMemorySource,
  createHistory,
} from '@reach/router';
import React from 'react';
import { MCQPage } from './pages/mcq';
import { PersonalInfoPage } from './pages/personal-info';

let source = createMemorySource('/');
let history = createHistory(source);

export const Routes = () => (
  <LocationProvider history={history}>
    <Router>
      <MCQPage path="/" />
      <PersonalInfoPage path="/info" />
    </Router>
  </LocationProvider>
);
