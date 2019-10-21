import { RouteComponentProps, Link } from '@reach/router';
import React from 'react';
import { Page } from '../components/page';
import { Box } from '../components/core/box';
import { Body } from '../components/body';

export interface HomePageProps {}

export const HomePage = ({ navigate }: RouteComponentProps<HomePageProps>) => {
  return (
    <Page flexDirection="row">
      <Body>
        <Box flexDirection="column">
          First <Link to="/second"> Go to second </Link>
        </Box>
      </Body>
    </Page>
  );
};
