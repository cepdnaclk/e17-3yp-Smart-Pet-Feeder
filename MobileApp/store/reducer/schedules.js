import scheduleData from "../../data/schedule-data.json";
import {
  DELETE_SCHEDULE,
  CREATE_SCHEDULE,
  UPDATE_SCHEDULE,
} from "../actions/schedules";

import Schedule from "../../models/Schedule";

const initialState = {
  schedules: scheduleData,
};

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SCHEDULE:
      const newSchedule = new Schedule(
        1,
        new Date().toString(),
        action.scheduleData.title,
        action.scheduleData.date_time
      );
      return {
        schedules: state.schedules.concat(newSchedule),
      };

    case UPDATE_SCHEDULE:
      const index = state.schedules.findIndex(
        (schedule) => schedule.id === action.id
      );
      const updatedSchedule = new Schedule(
        1,
        action.id,
        action.scheduleData.title,
        action.scheduleData.date_time
      );
      const updatedSchedules = [...state.schedules];
      updatedSchedules[index] = updatedSchedule;

      return {
        schedules: updatedSchedules,
      };

    case DELETE_SCHEDULE:
      return {
        schedules: state.schedules.filter(
          (schedule) => schedule.id !== schedule.id
        ),
      };
  }
  return state;
};

export default scheduleReducer;
