export const ACTIVE_STEP = 'ACTIVE_STEP';
export const ENABLE_STEP = 'ENABLE_STEP';
export const DISABLE_STEP = 'DISABLE_STEP';

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

export type StepperActions =
  | ActiveStepAction
  | DisableStepAction
  | EnableStepAction;
