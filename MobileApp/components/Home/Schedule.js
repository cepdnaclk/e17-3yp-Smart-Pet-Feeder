import * as React from "react";
import {
  Card,
  Title,
  Paragraph,
  Button,
  IconButton,
  Avatar,
  Subheading,
  Text,
} from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Styles from "../../config/Styles";

const msToTime = (duration) => {
  let minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes;
};

const Schedule = (props) => {
  return (
    <Card style={Styles.card6}>
      <View style={Styles.cardTitle}>
        <Title style={{ paddingLeft: 15, fontSize: 20, fontWeight: "bold" }}>
          {props.schedule.title}
        </Title>
      </View>

      <View style={Styles.cardContent}>
        <Text style={{ fontSize: 20, color: "red", fontWeight: "bold" }}>
          {msToTime(
            Date.parse(props.schedule.date + "T" + props.schedule.time) -
              Date.now()
          )}{" "}
          h
        </Text>
      </View>

      <View style={Styles.cardContent}>
        <View style={Styles.cardContent}>
          <Avatar.Icon size={26} icon="calendar" />
          <Text
            style={{ paddingLeft: 15, fontFamily: "bebas-neue", fontSize: 20 }}
          >
            {props.schedule.date}
          </Text>
        </View>

        <View style={Styles.cardContent}>
          <Avatar.Icon size={26} icon="clock-time-nine-outline" />
          <Text
            style={{ paddingLeft: 15, fontFamily: "bebas-neue", fontSize: 20 }}
          >
            {props.schedule.time}
          </Text>
        </View>
      </View>

      <View style={Styles.cardButtons}>
        <Button>EDIT</Button>
        <Button>DELETE</Button>
      </View>
    </Card>
  );
};

export default Schedule;
