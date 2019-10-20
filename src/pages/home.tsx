import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { MainTitle } from '../components/main-title';
import { NavBar } from '../containers/nav-bar';
import { Page } from '../components/page';
import { Body } from '../components/body';

export interface HomePageProps {}
export const HomePage = ({  }: RouteComponentProps<HomePageProps>) => {
  return (
    <Page>
      <MainTitle />
      <NavBar />
      <Body>Home</Body>
    </Page>
  );
};
