import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { Page } from '../components/page';
import { NavBar } from '../containers/nav-bar';
import { Box } from '../components/core/box';
import styled from 'styled-components';

export interface PersonalInfoPageProps {}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-auto-flow: row;
  grid-template-rows: 50% auto;
  width: 100%;
`;
export const PersonalInfoPage = ({
  navigate,
}: RouteComponentProps<PersonalInfoPageProps>) => {
  return (
    <Page flexDirection="row">
      <Grid>
        <Box flexBasis="30%">
          <NavBar />
        </Box>
        <Box flexDirection="row" flexBasis="70%"></Box>
      </Grid>
    </Page>
  );
};
