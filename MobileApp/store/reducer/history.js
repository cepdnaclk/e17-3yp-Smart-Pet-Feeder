import { SET_HISTORY } from "../actions/history";

const initialState = {
  history: [],
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HISTORY:
      return {
        history: action.history,
      };
  }
  return state;
};

export default historyReducer;
