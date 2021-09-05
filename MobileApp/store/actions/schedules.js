export const DELETE_SCHEDULE = "DELETE_SCHEDULE";
export const CREATE_SCHEDULE = "CREATE_SCHEDULE";
export const UPDATE_SCHEDULE = "UPDATE_SCHEDULE";

export const deleteSchedule = (id) => {
  return { type: DELETE_SCHEDULE, id: id };
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
