import { object, string } from 'yup';
import { MCQ } from './reducers';

export const AddFormValidation = object().shape({
  email: string()
    .email()
    .required(),
  nom: string().required(),
  prenom: string().required(),
});

export const isAnwsered = (mcq: MCQ) => {
  return Object.entries(mcq.choises).some(([key, choice]) => choice.checked);
};
