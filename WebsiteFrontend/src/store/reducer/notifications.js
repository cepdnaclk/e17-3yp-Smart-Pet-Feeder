import { MARK_AS_READ } from "../actions/notifications";
import { SET_NOTIFICATIONS } from "../actions/notifications";

const initialState = {
  notifications: [],
  active: false,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATIONS:
      if (action.notifications) {
        const unread__notification = action.notifications.find(
          (notification) => notification.isRead === false
        );

        let active_ = true;
        if (!unread__notification) {
          active_ = false;
        }

        return {
          notifications: action.notifications,
          active: active_,
        };
      }

    case MARK_AS_READ:
      const index = state.notifications.findIndex(
        (notification) => notification._id === action.id
      );

      const updatedNotifications = [...state.notifications];
      updatedNotifications[index].isRead = true;

      const unread_notification = state.notifications.find(
        (notification) => notification.isRead === false
      );

      let active = true;
      if (!unread_notification) {
        active = false;
      }
      return {
        notifications: updatedNotifications,
        active: active,
      };
  }
  return state;
};

export default notificationReducer;
