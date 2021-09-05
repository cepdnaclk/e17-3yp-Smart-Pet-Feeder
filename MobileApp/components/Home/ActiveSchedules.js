import * as React from "react";
import scheduleData from "../../data/schedule-data.json";
import { useState } from "react";
import Schedule from "./Schedule";
import Styles from "../../config/Styles";
import { Avatar, FAB, Text } from "react-native-paper";
import { View } from "react-native";
import { useSelector } from "react-redux";

const ActiveSchedule = (props) => {
  const schedules = useSelector((state) => state.schedules.schedules);

  // const [scheduleEditData, setScheduleEditData] = React.useState({
  //   open: false,
  //   data: {},
  // });
  //
  // const [scheduleDeleteData, setScheduleDeleteData] = React.useState({
  //   open: false,
  //   data: {},
  // });
  //
  // const editSchedulePop = (scheduleData) => {
  //   setScheduleEditData({
  //     open: true,
  //     data: {
  //       id: scheduleData.id,
  //       title: scheduleData.title,
  //       date: scheduleData.date,
  //       time: scheduleData.time,
  //     },
  //   });
  // };
  //
  // const deleteSchedulePop = (scheduleData) => {
  //   setScheduleDeleteData({
  //     open: true,
  //     data: {
  //       id: scheduleData.id,
  //       title: scheduleData.title,
  //     },
  //   });
  // };
  //
  // const submitSchedule = (scheduleData) => {
  //   let currentSchedules = [...schedules];
  //   console.log("submit Schedule = " + scheduleData.id);
  //   const index = currentSchedules.findIndex(
  //     (schedule) => schedule.id === scheduleData.id
  //   );
  //   console.log("index");
  //   currentSchedules[index].title = scheduleData.title;
  //   currentSchedules[index].date = scheduleData.date;
  //   currentSchedules[index].time = scheduleData.time;
  //   currentSchedules[index].status = true;
  //
  //   setSchedules(currentSchedules);
  //
  //   editHandleClose();
  // };
  //
  // const deleteSchedule = (id) => {
  //   console.log(id);
  //   let currentSchedules = [...schedules];
  //
  //   let index = currentSchedules.findIndex((schedule) => {
  //     return schedule.id === id;
  //   });
  //   console.log(index);
  //
  //   currentSchedules[index].title = "";
  //   currentSchedules[index].date = "";
  //   currentSchedules[index].time = "";
  //   currentSchedules[index].status = false;
  //
  //   setSchedules(currentSchedules);
  //
  //   deleteHandleClose();
  // };

  // const editHandleClose = () => {
  //   setScheduleEditData({ open: false, data: {} });
  // };
  //
  // const deleteHandleClose = () => {
  //   setScheduleDeleteData({ open: false, data: {} });
  // };

  const filteredSchedules = schedules.filter((schedule) => {
    return schedule.status === true;
  });
  return (
    <React.Fragment>
      {schedules.map(
        (schedule, i) =>
          schedule.status === true && <Schedule schedule={schedule} key={i} />
      )}
      {filteredSchedules.length < 4 && (
        <FAB style={Styles.fab} small icon="plus" onPress={props.showModal} />
      )}
    </React.Fragment>
  );
};

export default ActiveSchedule;
