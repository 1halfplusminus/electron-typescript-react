import { MCQState } from './types';
import { MCQActionTypes, TOGGLE_MCQ } from '../actions/types';
import produce from 'immer';

const initialState: MCQState = {
  mcqs: {
    '1': {
      id: '1',
      question: 'What is ReactJS?',
      choises: {
        '1': {
          checked: false,
          label: 'Server-side Framework',
          value: '1',
        },
        '2': {
          checked: false,
          label: 'User-interface framework',
          value: '2',
        },
        '3': {
          checked: false,
          label: 'Both',
          value: '3',
        },
      },
    },
    '2': {
      id: '1',
      question: 'What are the limitations of ReactJS?',
      choises: {
        '1': {
          checked: false,
          label:
            'React is only for view layer of the app so we still need the help of other technologies to get a complete tooling set for development',
          value: '1',
        },
        '2': {
          checked: false,
          label:
            'React is using inline templating and JSX. This can seem awkward to some developers',
          value: '2',
        },
        '3': {
          checked: false,
          label: 'The library of react is too large',
          value: '3',
        },
      },
    },
  },
};

export function mcqsReducer(
  state = initialState,
  action: MCQActionTypes,
): MCQState {
  switch (action.type) {
    case TOGGLE_MCQ:
      return produce(state, draft => {
        draft.mcqs[action.payload.mcq].choises[action.payload.answer].checked =
          action.payload.checked;
      });
    default:
      return state;
  }
}
