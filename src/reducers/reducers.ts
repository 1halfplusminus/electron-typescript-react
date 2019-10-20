import { combineReducers } from 'redux';
import { mcqsReducer } from '../mcq/reducers';
import { stepperReducer } from './stepper';

export function createRootReducer() {
  const reducer = combineReducers({
    mcqs: mcqsReducer,
    step: stepperReducer,
  });
  return reducer;
}

export default createRootReducer;

export type AppState = ReturnType<ReturnType<typeof createRootReducer>>;
