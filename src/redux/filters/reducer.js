import { FILTERCOLORSELECTED, STATUSSELECTED } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSSELECTED:
      return {
        ...state,
        status: action.payload,
      };
    case FILTERCOLORSELECTED:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        default:
          return state;
      }
    default:
      return state;
  }
};
export default reducer;
