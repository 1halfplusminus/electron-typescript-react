import { MCQActionTypes, CheckMCQActionPayload, TOGGLE_MCQ } from './types';

export function toggleCQM(newMessage: CheckMCQActionPayload): MCQActionTypes {
  return {
    type: TOGGLE_MCQ,
    payload: newMessage,
  };
}
