import { Link, Router, LinkProps } from '@reach/router';
import React from 'react';
import { HomePage } from './pages/home';
import { DashboardPage } from './pages/dashboard';

export const Routes = () => (
  <Router>
    <HomePage path="/" />
    <DashboardPage path="/dashboard" />
  </Router>
);
