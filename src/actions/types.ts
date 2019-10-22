import { ContactInformation } from '../reducers/stepper';

export const ACTIVE_STEP = 'ACTIVE_STEP';
export const ENABLE_STEP = 'ENABLE_STEP';
export const DISABLE_STEP = 'DISABLE_STEP';
export const PERSIST_FORM = 'PERSIST_FORM';

interface ActiveStepAction {
  type: typeof ACTIVE_STEP;
  payload: { stepIndex: number };
}
interface DisableStepAction {
  type: typeof DISABLE_STEP;
  payload: { step: string };
}
interface EnableStepAction {
  type: typeof ENABLE_STEP;
  payload: { step: string };
}
interface PersistFormAction {
  type: typeof PERSIST_FORM;
  payload: ContactInformation;
}

export type StepperActions =
  | ActiveStepAction
  | DisableStepAction
  | EnableStepAction
  | PersistFormAction;
