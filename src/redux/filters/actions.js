import { FILTERCOLORSELECTED, STATUSSELECTED } from "./actionTypes";

export const addFilterStatus = (status) => {
  return {
    type: STATUSSELECTED,
    payload: status,
  };
};
export const addFilterColor = (color, changeType) => {
  return {
    type: FILTERCOLORSELECTED,
    payload: { color, changeType },
  };
};
