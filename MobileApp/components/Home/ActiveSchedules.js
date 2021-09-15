import * as React from "react";
import scheduleData from "../../data/schedule-data.json";
import { useState } from "react";
import Schedule from "./Schedule";
import Styles from "../../config/Styles";
import { Avatar, FAB, Text } from "react-native-paper";
import { View } from "react-native";
import { useSelector } from "react-redux";
import ColorsApp from "../../config/ColorsApp";

const ActiveSchedule = (props) => {
  const schedules = useSelector((state) => state.schedules.schedules);

  const filteredSchedules = schedules.sort((schedule1, schedule2) => {
    return schedule1.date_time > schedule2.date_time;
  });
  return (
    <React.Fragment>
      {filteredSchedules.map((schedule, i) => (
        <Schedule
          schedule={schedule}
          key={i}
          onEditSchedule={props.onEditSchedule}
          onDeleteSchedule={props.onDeleteSchedule}
        />
      ))}
      {filteredSchedules.length < 4 && (
        <FAB
          style={Styles.fab}
          small
          icon="plus"
          onPress={props.onPressPlusButton}
          color="white"
        />
      )}
    </React.Fragment>
  );
};

export default ActiveSchedule;
