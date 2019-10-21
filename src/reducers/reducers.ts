import { combineReducers } from 'redux';

export function createRootReducer() {
  const reducer = combineReducers({
    dummy: (state = {}) => state,
  });
  return reducer;
}

export default createRootReducer;

export type AppState = ReturnType<ReturnType<typeof createRootReducer>>;
