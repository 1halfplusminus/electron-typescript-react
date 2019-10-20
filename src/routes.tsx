import { Router } from '@reach/router';
import React from 'react';
import { MCQPage } from './pages/mcq';
import { PersonalInfoPage } from './pages/personal-info';

export const Routes = () => (
  <Router>
    <MCQPage path="/" />
    <PersonalInfoPage path="/info" />
  </Router>
);
