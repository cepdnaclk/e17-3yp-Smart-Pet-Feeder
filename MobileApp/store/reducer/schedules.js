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
      const filteredSchedules0 = action.schedules.sort(
        (schedule1, schedule2) => {
          return (
            Date.parse(schedule1.date_time) > Date.parse(schedule2.date_time)
          );
        }
      );
      return {
        schedules: filteredSchedules0,
      };

    case CREATE_SCHEDULE:
      const newSchedule = new Schedule(
        action._id,
        action.title,
        action.date_time,
        action.status
      );
      const temp1 = [...state.schedules];
      const addedSchedules = temp1.concat(newSchedule);
      const filteredSchedules1 = addedSchedules.sort((schedule1, schedule2) => {
        return (
          Date.parse(schedule1.date_time) > Date.parse(schedule2.date_time)
        );
      });

      return {
        schedules: filteredSchedules1,
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

      const filteredSchedules2 = updatedSchedules.sort(
        (schedule1, schedule2) => {
          return (
            Date.parse(schedule1.date_time) > Date.parse(schedule2.date_time)
          );
        }
      );

      return {
        schedules: filteredSchedules2,
      };

    case DELETE_SCHEDULE:
      return {
        schedules: state.schedules.filter(
          (schedule) => schedule._id !== action._id
        ),
      };
  }
  return state;
};

export default scheduleReducer;
