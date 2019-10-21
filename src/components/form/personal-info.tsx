import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { Input } from './input';
import { Box } from '../core/box';
import { Label } from './label';
import { Form } from './form';
import { PrimaryButton } from '../primary-button';

export const PersoInfoForm = () => {
  return (
    <Formik
      initialValues={{ email: '' }}
      validate={values => {
        let errors = {} as { email: string };
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log('here');
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form flex={1} flexGrow={1}>
          <Box marginBottom={2} marginTop={2} flexDirection="column">
            <Label htmlFor="email">Votre email</Label>
            <Input type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </Box>
          <Box marginTop={2} flexDirection="column">
            <Label htmlFor="name">Votre nom</Label>
            <Input type="text" name="myname" />
            <ErrorMessage name="myname" component="div" />
          </Box>
          <Box marginTop={2} flexDirection="column">
            <Label htmlFor="firstname">Votre prénom</Label>
            <Input type="text" name="firstname" />
            <ErrorMessage name="firstname" component="div" />
          </Box>
          <Box marginTop={2} flexDirection="column">
            <PrimaryButton type="submit" disabled={isSubmitting}>
              Submit
            </PrimaryButton>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default PersoInfoForm;
