import { Cycle } from "./reducer";

export enum actionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_AS_FINISHED = "MARK_CURRENT_AS_FINISHED",
}

export function createNewCycleAction(newCycle: Cycle) {
  return {
    type: actionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function interruptCurrentCycleAction() {
  return {
    type: actionTypes.INTERRUPT_CURRENT_CYCLE,
  };
}

export function markCurrentAsFinishedAction() {
  return {
    type: actionTypes.MARK_CURRENT_AS_FINISHED,
  };
}
