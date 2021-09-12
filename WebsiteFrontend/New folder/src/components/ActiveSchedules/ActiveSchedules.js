import React, { useState } from "react";
import Schedule from "./Schedule";
import scheduleData from "../../data/Schedule/schedule-data.json";
import ScheduleForm from "../ScheduleForm/ScheduleForm";
import ConfirmationBox from "../ConfirmationBox/ConfirmationBox";

const ActiveSchedules = () => {
  const [schedules, setSchedules] = useState(scheduleData);

  const [scheduleEditData, setScheduleEditData] = React.useState({
    open: false,
    data: {},
  });

  const [scheduleDeleteData, setScheduleDeleteData] = React.useState({
    open: false,
    data: {},
  });

  const editSchedulePop = (scheduleData) => {
    setScheduleEditData({
      open: true,
      data: {
        id: scheduleData.id,
        title: scheduleData.title,
        date: scheduleData.date,
        time: scheduleData.time,
      },
    });
  };

  const deleteSchedulePop = (scheduleData) => {
    setScheduleDeleteData({
      open: true,
      data: {
        id: scheduleData.id,
        title: scheduleData.title,
      },
    });
  };

  const submitSchedule = (scheduleData) => {
    let currentSchedules = [...schedules];
    console.log("submit Schedule = " + scheduleData.id);
    const index = currentSchedules.findIndex(
      (schedule) => schedule.id === scheduleData.id
    );
    currentSchedules[index].title = scheduleData.title;
    currentSchedules[index].date = scheduleData.date;
    currentSchedules[index].time = scheduleData.time;
    currentSchedules[index].status = true;

    setSchedules(currentSchedules);

    editHandleClose();
  };

  const deleteSchedule = (id) => {
    console.log(id);
    let currentSchedules = [...schedules];

    let index = currentSchedules.findIndex((schedule) => {
      return schedule.id === id;
    });
    console.log(index);

    currentSchedules[index].title = "";
    currentSchedules[index].date = "";
    currentSchedules[index].time = "";
    currentSchedules[index].status = false;

    setSchedules(currentSchedules);

    deleteHandleClose();
  };

  const editHandleClose = () => {
    setScheduleEditData({ open: false, data: {} });
  };

  const deleteHandleClose = () => {
    setScheduleDeleteData({ open: false, data: {} });
  };

  return (
    <React.Fragment>
      <ScheduleForm
        id={scheduleEditData.data.id}
        open={scheduleEditData.open}
        title={scheduleEditData.data.title}
        date={scheduleEditData.data.date}
        time={scheduleEditData.data.time}
        handleClose={editHandleClose}
        submitSchedule={submitSchedule}
      />

      <ConfirmationBox
        id={scheduleDeleteData.data.id}
        open={scheduleDeleteData.open}
        title={scheduleDeleteData.data.title}
        handleClose={deleteHandleClose}
        deleteSchedule={deleteSchedule}
      />

      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 section-heading">
              <h2
                className="text-uppercase"
                data-aos={"fade-up"}
                data-aos-delay={100}
                data-aos-duration={700}
              >
                Active Schedules
              </h2>
              <h4
                className="text-uppercase"
                data-aos={"fade-up"}
                data-aos-delay={200}
                data-aos-duration={700}
              >
                - Edit Feeding Schedules -
              </h4>
            </div>
          </div>
          <div className="row mt-50">
            {schedules.map((schedule, i) => (
              <Schedule
                schedule={schedule}
                index={i}
                editHandler={editSchedulePop}
                deleteHandler={deleteSchedulePop}
                key={i}
              />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ActiveSchedules;
