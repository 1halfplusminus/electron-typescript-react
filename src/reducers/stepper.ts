import {
  StepperActions,
  ACTIVE_STEP,
  ENABLE_STEP,
  DISABLE_STEP,
} from '../actions/types';
import produce from 'immer';

export interface Step {
  id: string;
  title: string;
  enabled: boolean;
  completed: boolean;
  path: string;
}
export interface StepperState {
  steps: { [key: string]: Step };
  activeStep: number;
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
      enabled: true,
      completed: false,
      path: '/info',
    },
  },
  activeStep: 0,
};

export function stepperReducer(
  state = initialState,
  action: StepperActions,
): StepperState {
  switch (action.type) {
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
