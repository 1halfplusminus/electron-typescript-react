import { RouteComponentProps, Link } from '@reach/router';
import React from 'react';
import { MainTitle } from '../components/main-title';
import { NavBar } from '../containers/nav-bar';
import { Page } from '../components/page';
import { Body } from '../components/body';

export interface DashboardPageProps {}

export const DashboardPage = (
  props: RouteComponentProps<DashboardPageProps>,
) => {
  return (
    <Page>
      <MainTitle></MainTitle>
      <NavBar />
      <Body>Dashboard</Body>
    </Page>
  );
};
