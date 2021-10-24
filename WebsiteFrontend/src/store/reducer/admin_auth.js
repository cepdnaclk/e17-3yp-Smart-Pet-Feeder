import {
  AUTHENTICATE_ADMIN,
  LOGOUT_ADMIN,
  SAVE_ONETIME_TOKEN,
} from "../actions/admin_auth";

const initialState = {
  token: null,
  userId: null,
  oneTimeToken: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_ADMIN:

      return {
        token: action.token,
        userId: action.userId,
      };
    // Log out
    case LOGOUT_ADMIN:
      return initialState; // return initial state

    case SAVE_ONETIME_TOKEN:
      return { token: null, userId: null, oneTimeToken: action.oneTimeToken };

    default:
      return state;
  }
};
