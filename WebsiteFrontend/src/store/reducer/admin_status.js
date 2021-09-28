import { SET_ADMIN_STATUS } from "../actions/admin_status";

const initialState = {
  admin_status: {
    active_users: 0,
    all_users: 0,
  },
};

const adminStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_STATUS:
      return {
        admin_status: {
          active_users: action.status.activeUsers,
          all_users: action.status.userCount,
        },
      };
  }
  return state;
};

export default adminStatusReducer;
