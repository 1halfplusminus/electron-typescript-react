export const TOGGLE_MCQ = 'TOGGLE_CQM';

export interface CheckMCQActionPayload {
  mcq: string;
  answer: string;
  checked: boolean;
}

interface CheckMCQAction {
  type: typeof TOGGLE_MCQ;
  payload: CheckMCQActionPayload;
}

export type MCQActionTypes = CheckMCQAction;
