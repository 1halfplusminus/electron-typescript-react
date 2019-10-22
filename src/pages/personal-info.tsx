import { RouteComponentProps } from '@reach/router';
import React, { useMemo, Dispatch } from 'react';
import { Page } from '../components/page';
import { NavBar } from '../containers/nav-bar';
import { Box } from '../components/core/box';
import PersoInfoForm from '../components/form/personal-info';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../reducers';
import { StepperActions } from '../actions/types';
import { persistForm, activeStep } from '../actions';
import { Body } from '../components/body';

export interface PersonalInfoPageProps {}

export const PersonalInfoPage = ({
  navigate,
}: RouteComponentProps<PersonalInfoPageProps>) => {
  const { contact } = useSelector((state: AppState) => ({
    contact: state.step.contactInformation,
  }));
  const memo = useMemo(() => contact, []);
  const dispatch = useDispatch<Dispatch<StepperActions>>();
  return (
    <Page flexDirection="row">
      <Body>
        <Box flexBasis="30%">
          <NavBar navigate={navigate} />
        </Box>
        <Box flexDirection="row" padding={2}>
          <PersoInfoForm
            persist={values => {
              dispatch(persistForm(values));
            }}
            initialValues={contact}
            back={async () => {
              if (navigate) {
                await navigate('/');
                dispatch(activeStep(0));
              }
            }}
          />
        </Box>
      </Body>
    </Page>
  );
};
