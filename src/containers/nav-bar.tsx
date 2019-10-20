import React, { Dispatch, useContext } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import styled from 'styled-components';
import { AppState } from '../reducers';
import { useSelector, useDispatch } from 'react-redux';
import { StepperActions } from '../actions/types';
import { navigate } from '@reach/router';
import { activeStep } from '../actions';

const StyledStepper = styled(Stepper)`
  flex: 1;
  .MuiStepConnector-lineVertical {
    height: 100%;
  }
`;

export const NavBar = () => {
  const { steps, activeStep: activedStep } = useSelector((state: AppState) => ({
    steps: state.step.steps,
    activeStep: state.step.activeStep,
  }));
  const dispatch = useDispatch<Dispatch<StepperActions>>();

  return (
    <StyledStepper orientation="vertical" activeStep={activedStep}>
      {Object.entries(steps).map(
        ([key, { title, enabled, completed, path }], index) => (
          <Step
            completed={completed}
            disabled={!enabled}
            key={new Number(key).valueOf()}
            onClick={() => {
              navigate(path);
              dispatch(activeStep(index));
            }}
          >
            <StepLabel> {title}</StepLabel>
          </Step>
        ),
      )}
    </StyledStepper>
  );
};
