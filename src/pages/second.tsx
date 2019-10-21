import { RouteComponentProps, Link } from '@reach/router';
import React from 'react';
import { Page } from '../components/page';
import { Box } from '../components/core/box';
import { Body } from '../components/body';

export interface SecondPageProps {}

export const SecondPage = ({
  navigate,
}: RouteComponentProps<SecondPageProps>) => {
  return (
    <Page flexDirection="row">
      <Body>
        <Box flexDirection="column">
          Second <Link to="/"> Go to first </Link>
        </Box>
      </Body>
    </Page>
  );
};
