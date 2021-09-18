import notificationData from "../../data/notification-data.json";

import { MARK_AS_READ } from "../actions/notifications";

const initialState = {
  notifications: notificationData,
  active: false,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case MARK_AS_READ:
      const index = state.notifications.findIndex(
        (notification) => notification.id === action.id
      );

      const updatedNotifications = [...state.notifications];
      updatedNotifications[index].status = 0;

      const unread_notification = state.notifications.find(
        (notification) => notification.status === 1
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
