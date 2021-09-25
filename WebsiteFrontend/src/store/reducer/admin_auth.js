import { AUTHENTICATE_ADMIN, LOGOUT_ADMIN } from "../actions/admin_auth";

const initialState = {
  token: null,
  userId: null,
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

    default:
      return state;
  }
};
