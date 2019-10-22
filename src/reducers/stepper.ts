import {
  StepperActions,
  ACTIVE_STEP,
  ENABLE_STEP,
  DISABLE_STEP,
  PERSIST_FORM,
} from '../actions/types';
import produce from 'immer';

export interface Step {
  id: string;
  title: string;
  enabled: boolean;
  completed: boolean;
  path: string;
}

export interface ContactInformation {
  email: string;
  nom: string;
  prenom: string;
}

export interface StepperState {
  steps: { [key: string]: Step };
  activeStep: number;
  contactInformation: ContactInformation;
}

const initialState: StepperState = {
  steps: {
    '1': {
      id: '1',
      title: 'Completé le formulaire',
      enabled: true,
      completed: false,
      path: '/',
    },
    '2': {
      id: '2',
      title: 'Entrez vos informations personelles',
      enabled: false,
      completed: false,
      path: '/info',
    },
    '3': {
      id: '3',
      title: 'Félicitations',
      enabled: false,
      completed: false,
      path: '/end',
    },
  },
  activeStep: 0,
  contactInformation: {
    email: '',
    nom: '',
    prenom: '',
  },
};

export function stepperReducer(
  state = initialState,
  action: StepperActions,
): StepperState {
  switch (action.type) {
    case PERSIST_FORM:
      return produce(state, draft => {
        draft.contactInformation = action.payload;
      });
    case ACTIVE_STEP:
      return produce(state, draft => {
        draft.activeStep = action.payload.stepIndex;
      });
    case ENABLE_STEP:
      return produce(state, draft => {
        draft.steps[action.payload.step].enabled = true;
      });
    case DISABLE_STEP:
      return produce(state, draft => {
        draft.steps[action.payload.step].enabled = false;
      });
    default:
      return state;
  }
}
