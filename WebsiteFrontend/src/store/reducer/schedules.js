// import scheduleData from "../../data/schedule-data.json";
import {
  DELETE_SCHEDULE,
  CREATE_SCHEDULE,
  UPDATE_SCHEDULE,
  SET_SCHEDULES,
} from "../actions/schedules";

import Schedule from "../../models/Schedule";

const initialState = {
  schedules: [],
};

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCHEDULES:
      const schedules_ = [...action.schedules];
      for (let i = schedules_.length; i < 4; i++) {
        schedules_[i] = { status: false };
      }
      return {
        schedules: schedules_,
      };

    case CREATE_SCHEDULE:
      const newSchedule = new Schedule(
        action._id,
        action.title,
        action.date_time,
        action.status
      );

      const temp = [...state.schedules];
      const index_ = temp.findIndex((schedule) => schedule.status === false);
      temp[index_] = newSchedule;
      return {
        schedules: temp,
      };

    case UPDATE_SCHEDULE:
      const updatedSchedules = [...state.schedules];

      const index = updatedSchedules.findIndex(
        (schedule) => schedule._id === action._id
      );

      const updatedSchedule = new Schedule(
        action._id,
        action.title,
        action.date_time,
        action.status
      );
      updatedSchedules[index] = updatedSchedule;

      return {
        schedules: updatedSchedules,
      };

    case DELETE_SCHEDULE:
      const after_deleted = [...state.schedules];
      const delete_index = after_deleted.findIndex(
        (schedule) => schedule._id === action._id
      );
      after_deleted[delete_index] = { status: false };
      return {
        schedules: after_deleted,
      };
  }
  return state;
};

export default scheduleReducer;
