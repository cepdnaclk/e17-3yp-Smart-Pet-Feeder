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
      console.log("Action id ", action.scheduleData.id);
      const index = state.schedules.findIndex(
        (schedule) => schedule.id === action.scheduleData.id
      );
      console.log("Index ", index);
      const updatedSchedule = new Schedule(
        1,
        action.scheduleData.id,
        action.scheduleData.title,
        action.scheduleData.date_time
      );
      // console.log("Updated :", updatedSchedule);
      const updatedSchedules = [...state.schedules];
      updatedSchedules[index] = updatedSchedule;
      console.log(updatedSchedules[0]);

      return {
        schedules: updatedSchedules,
      };

    case DELETE_SCHEDULE:
      return {
        schedules: state.schedules.filter(
          (schedule) => schedule.id !== action.id
        ),
      };
  }
  return state;
};

export default scheduleReducer;
