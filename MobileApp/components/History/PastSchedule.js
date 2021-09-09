import Styles from "../../config/Styles";
import { View } from "react-native";
import { Avatar, Card, Text, Title } from "react-native-paper";
import * as Functions from "../../helpers/functions";
import React from "react";

const PastSchedule = (props) => {
  return (
    <Card style={Styles.card6}>
      <View style={Styles.cardTitle}>
        <Title
          style={{
            fontSize: 22,
            fontWeight: "bold",
            // fontFamily: "loobster",
            // capitalize: true,
          }}
        >
          {props.pastSchedule.item.title.toUpperCase()}
        </Title>
      </View>

      <View style={Styles.cardContent}>
        <View style={Styles.cardContent}>
          <Avatar.Icon size={26} icon="calendar" />
          <Text
            style={{
              paddingLeft: 15,
              fontFamily: "bebas-neue",
              fontSize: 20,
            }}
          >
            {Functions.extractDate(new Date(props.pastSchedule.item.date_time))}
          </Text>
        </View>

        <View style={{ ...Styles.cardContent, paddingBottom: 20 }}>
          <Avatar.Icon size={26} icon="clock-time-nine-outline" />
          <Text
            style={{
              paddingLeft: 15,
              fontFamily: "bebas-neue",
              fontSize: 20,
            }}
          >
            {Functions.extractTime(new Date(props.pastSchedule.item.date_time))}
          </Text>
        </View>
      </View>
    </Card>
  );
};
export default PastSchedule;
