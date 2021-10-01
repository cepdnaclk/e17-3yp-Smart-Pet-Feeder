import { SET_USERS, POST_ACTIVE_STATUS } from "../actions/admin_users";

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        users: action.users,
      };

    case POST_ACTIVE_STATUS:
      const current_users = [...state.users];
      const index = current_users.findIndex(
        (user) => user.userId === action.id
      );

      current_users[index].isActive = !current_users[index].isActive;
      return {
        users: current_users,
      };
  }
  return state;
};

export default usersReducer;
