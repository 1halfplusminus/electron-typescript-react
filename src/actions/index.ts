import { DUMMY_ACTION, DummyActions } from './types';

export function dummyAction(): DummyActions {
  return {
    type: DUMMY_ACTION,
  };
}
