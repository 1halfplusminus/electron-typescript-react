import {
  ACTIVE_STEP,
  StepperActions,
  ENABLE_STEP,
  DISABLE_STEP,
} from './types';

export function activeStep(stepIndex: number): StepperActions {
  return {
    type: ACTIVE_STEP,
    payload: {
      stepIndex,
    },
  };
}
export function enableStep(step: string): StepperActions {
  return {
    type: ENABLE_STEP,
    payload: {
      step,
    },
  };
}
export function disableStep(step: string): StepperActions {
  return {
    type: DISABLE_STEP,
    payload: {
      step,
    },
  };
}
