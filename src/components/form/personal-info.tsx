import React, { useEffect } from 'react';
import {
  Formik,
  ErrorMessage,
  connect,
  FormikContext,
  FormikProps,
} from 'formik';
import { Input } from './input';
import { Box } from '../core/box';
import { Label } from './label';
import { Form } from './form';
import { PrimaryButton } from '../primary-button';
import * as Yup from 'yup';

export interface FormValues {
  email: string;
  nom: string;
  prenom: string;
}

export function Persistor({
  formik,
  persist,
}: {
  formik?: FormikContext<FormValues>;
  persist: (values: FormValues) => void;
}) {
  const values = formik ? formik.values : [];
  useEffect(() => {
    if (formik) {
      persist(formik.values);
    }
  }, [values]);
  return <></>;
}

const ConnectedPersistor = connect(Persistor);

export const PersoInfoForm = ({
  persist,
  initialValues,
  back,
}: {
  persist: (values: FormValues) => void;
  back: () => void;
} & Pick<FormikProps<FormValues>, 'initialValues'>) => {
  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required(),
        nom: Yup.string().required(),
        prenom: Yup.string().required(),
      })}
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
          <ConnectedPersistor persist={persist} />
          <Box marginBottom={2} marginTop={2} flexDirection="column">
            <Label htmlFor="email">Votre email</Label>
            <Input type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </Box>
          <Box marginTop={2} flexDirection="column">
            <Label htmlFor="nom">Votre nom</Label>
            <Input type="text" name="nom" />
            <ErrorMessage name="nom" component="div" />
          </Box>
          <Box marginTop={2} flexDirection="column">
            <Label htmlFor="prenom">Votre prénom</Label>
            <Input type="text" name="prenom" />
            <ErrorMessage name="prenom" component="div" />
          </Box>
          <Box gridTemplateColumns="10% 80% 10%" display="grid" marginTop={3}>
            <PrimaryButton
              flex={1}
              disabled={isSubmitting}
              gridColumn={1}
              onClick={back}
            >
              Retour
            </PrimaryButton>
            <PrimaryButton
              flex={1}
              type="submit"
              disabled={isSubmitting}
              gridColumn={3}
            >
              Envoyer
            </PrimaryButton>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default PersoInfoForm;
