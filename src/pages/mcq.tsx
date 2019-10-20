import { RouteComponentProps } from '@reach/router';
import React, { Dispatch, useMemo } from 'react';

import { Page } from '../components/page';
import { MCQ } from '../mcq/components/mcq';
import { NavBar } from '../containers/nav-bar';
import { Box } from '../components/core/box';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../reducers';
import { MCQActionTypes } from '../mcq/actions/types';
import { toggleCQM } from '../mcq/actions';
import { PrimaryButton } from '../components/primary-button';
import { activeStep } from '../actions';
import { StepperActions } from '../actions/types';
import styled from 'styled-components';

export interface MCQPageProps {}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-auto-flow: row;
  grid-template-rows: 50% auto;
  width: 100%;
`;
export const MCQPage = ({ navigate }: RouteComponentProps<MCQPageProps>) => {
  const { mcqs, steps } = useSelector((state: AppState) => ({
    mcqs: state.mcqs.mcqs,
    steps: state.step.steps,
  }));
  const nextActived = useMemo(() => () => steps['2'].enabled === true, [steps]);
  const dispatch = useDispatch<Dispatch<MCQActionTypes | StepperActions>>();
  return (
    <Page flexDirection="row">
      <Grid>
        <Box flexBasis="30%">
          <NavBar />
        </Box>
        <Box flexDirection="column" flexBasis="70%" padding={3}>
          {Object.entries(mcqs).map(([key, { question, choises }], index) => (
            <MCQ
              key={key}
              number={index + 1}
              question={question}
              choices={Object.entries(choises).map(([key, choise]) => choise)}
              onClick={({ value, checked }) => {
                dispatch(
                  toggleCQM({ answer: value, mcq: key, checked: !checked }),
                );
              }}
            />
          ))}
          <Box flexDirection="column" marginTop={10}>
            <PrimaryButton
              disabled={!nextActived()}
              alignSelf="flex-end"
              onClick={() => {
                if (navigate) {
                  navigate('/info');
                  dispatch(activeStep(1));
                }
              }}
            >
              Valider
            </PrimaryButton>
          </Box>
        </Box>
      </Grid>
    </Page>
  );
};
