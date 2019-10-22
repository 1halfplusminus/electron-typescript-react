import { RouteComponentProps } from '@reach/router';
import React, { Dispatch, useMemo, useEffect } from 'react';
import { Page } from '../components/page';
import { MCQ } from '../mcq/components/mcq';
import { NavBar } from '../containers/nav-bar';
import { Box } from '../components/core/box';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../reducers';
import { MCQActionTypes } from '../mcq/actions/types';
import { toggleCQM } from '../mcq/actions';
import { PrimaryButton } from '../components/primary-button';
import { activeStep, enableStep, disableStep } from '../actions';
import { StepperActions } from '../actions/types';
import { Body } from '../components/body';
import { useFormik, FormikTouched } from 'formik';
import { array, string, lazy, object, Schema, ArraySchema } from 'yup';
import produce from 'immer';

export interface MCQPageProps {}

export interface FormValues {
  [key: string]: string[];
}

const schema = lazy<FormValues>(values => {
  return object().shape(
    Object.entries(values).reduce(
      (acc, [key, value]) => {
        acc[key] = array()
          .of(string().required())
          .min(1)
          .max(1);

        return acc;
      },
      {} as { [key: string]: ArraySchema<string> },
    ),
  );
});

export const MCQPage = ({ navigate }: RouteComponentProps<MCQPageProps>) => {
  const { mcqs, steps } = useSelector((state: AppState) => ({
    mcqs: state.mcqs.mcqs,
    steps: state.step.steps,
  }));

  const dispatch = useDispatch<Dispatch<MCQActionTypes | StepperActions>>();
  const initValues = Object.entries(mcqs).reduce(
    (acc, [key, mcq]) => {
      acc[key] = Object.entries(mcq.choises)
        .filter(([key, value]) => value.checked)
        .map(([key, value]) => value.value);

      return acc;
    },
    {} as FormValues,
  );
  const {
    touched,
    dirty,
    isValid,
    setFieldValue,
    values,
    setValues,
    setFieldTouched,
  } = useFormik<FormValues>({
    initialValues: initValues,
    validationSchema: schema,
    onSubmit: () => {},
    validateOnBlur: true,
  });
  const nextActived = useMemo(() => () => steps['2'].enabled === true, [
    steps,
    isValid,
  ]);
  useEffect(() => {
    if (isValid && Object.entries(touched).some(([key, touched]) => touched)) {
      dispatch(enableStep('2'));
    } else {
      dispatch(disableStep('2'));
    }
  }, [dirty, touched, isValid, values]);
  useEffect(() => {
    setValues(initValues);
    Object.entries(initValues).forEach(([key, value]) => {
      const touched = value.length > 0;
      setFieldTouched(key, touched);
    });
  }, []);
  return (
    <Page flexDirection="row">
      <Body>
        <Box flexBasis="30%">
          <NavBar navigate={navigate} />
        </Box>
        <Box flexDirection="column" flexBasis="70%" padding={3}>
          {Object.entries(mcqs).map(([key, { question, choises }], index) => (
            <MCQ
              key={key}
              number={index + 1}
              question={question}
              choices={Object.entries(choises).map(([key, choise]) => choise)}
              onClick={({ value, checked }) => {
                setFieldTouched(key, true);
                if (!checked) {
                  setFieldValue(key, [...new Set([...values[key], value])]);
                } else {
                  setFieldValue(key, values[key].filter(v => v !== value));
                }
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
              onClick={async () => {
                if (navigate) {
                  await navigate('/info');
                  dispatch(activeStep(1));
                }
              }}
            >
              Valider
            </PrimaryButton>
          </Box>
        </Box>
      </Body>
    </Page>
  );
};
