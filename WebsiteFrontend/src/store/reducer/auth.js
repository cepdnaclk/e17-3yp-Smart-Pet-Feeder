import { AUTHENTICATE, LOGOUT, USER_SAVE_ONETIME_TOKEN } from "../actions/auth";
import { SAVE_ONETIME_TOKEN } from "../actions/admin_auth";

const initialState = {
  token: null,
  userId: null,
  oneTimeToken: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
      };
    // Log out
    case LOGOUT:
      return initialState; // return initial state

    case USER_SAVE_ONETIME_TOKEN:
      return { token: null, userId: null, oneTimeToken: action.oneTimeToken };

    default:
      return state;
  }
};
