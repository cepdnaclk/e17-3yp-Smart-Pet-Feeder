export const SET_SCHEDULES = "SET_SCHEDULES";
export const DELETE_SCHEDULE = "DELETE_SCHEDULE";
export const CREATE_SCHEDULE = "CREATE_SCHEDULE";
export const UPDATE_SCHEDULE = "UPDATE_SCHEDULE";
import { API_URL } from "../../config/Configs";

export const fetchSchedules = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;

    const response = await fetch(API_URL + "/auth/user/get_schedules", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const resData = await response.json();
    console.log(resData);
    // dispatch({ type: SET_SCHEDULES, status: resData });
  };
};

export const createSchedule = (title, date_time) => {
  return {
    type: CREATE_SCHEDULE,
    scheduleData: {
      title,
      date_time,
    },
  };
};

export const updateSchedule = (id, title, date_time) => {
  return {
    type: UPDATE_SCHEDULE,
    scheduleData: {
      id,
      title,
      date_time,
    },
  };
};

export const deleteSchedule = (id) => {
  return { type: DELETE_SCHEDULE, id: id };
};
