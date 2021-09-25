import { SET_USERS } from "../actions/admin_users";

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        users: action.users,
      };
  }
  return state;
};

export default usersReducer;
