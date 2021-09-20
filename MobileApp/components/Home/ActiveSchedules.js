import * as React from "react";
import scheduleData from "../../data/schedule-data.json";
import { useCallback, useEffect, useState } from "react";
import Schedule from "./Schedule";
import Styles from "../../config/Styles";
import { Avatar, FAB, Text, Button } from "react-native-paper";
import { RefreshControl, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ColorsApp from "../../config/ColorsApp";
import { fetchSchedules } from "../../store/actions/schedules";
import * as scheduleActions from "../../store/actions/schedules";
import * as statusActions from "../../store/actions/status";
import Maintainance from "../Error/Maintainance";
import { DotIndicator } from "react-native-indicators";

const ActiveSchedule = (props) => {
  return (
    <ScrollView>
      {/*<Button onPress={loadSchedules}>Fetch Scheudles</Button>*/}

      {props.schedules.map((schedule, i) => (
        <Schedule
          schedule={schedule}
          key={i}
          onEditSchedule={props.onEditSchedule}
          onDeleteSchedule={props.onDeleteSchedule}
        />
      ))}
    </ScrollView>
  );
};

export default ActiveSchedule;
