import { combineReducers } from 'redux';
import { AppState } from './types';
import { AppActions } from '../actions/types';

export function createRootReducer() {
  const reducer = combineReducers<AppState, AppActions>({});
  return reducer;
}

export default createRootReducer;
