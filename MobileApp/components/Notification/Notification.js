import * as React from "react";
import { Card, Title, Avatar, Text } from "react-native-paper";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import Styles from "../../config/Styles";

import * as Functions from "../../helpers/functions";
import ColorsApp from "../../config/ColorsApp";
const screenWidth = Math.round(Dimensions.get("window").width);
const Notification = (props) => {
  return (
    <React.Fragment>
      <Card
        style={{
          ...Styles.card6,
          backgroundColor:
            props.NotificationData.item.isRead === false ? "#85F1BA" : "white",
        }}
      >
        <TouchableOpacity
          onPress={props.showMessage.bind(
            null,
            props.NotificationData.item._id
          )}
        >
          <View style={styles.cardTitle}>
            <Title
              style={{
                fontSize: 16,
                fontWeight: "bold",

                lineHeight: 22,
              }}
            >
              {props.NotificationData.item.title.toUpperCase()}
            </Title>
          </View>

          <View style={styles.date_time}>
            <Text style={{ fontFamily: "bebas-neue", fontSize: 14 }}>
              {Functions.extractDate(
                new Date(props.NotificationData.item.date_time)
              )}
            </Text>

            <Text
              style={{
                paddingLeft: 15,
                fontFamily: "bebas-neue",
                fontSize: 14,
              }}
            >
              {Functions.extractTime(
                new Date(props.NotificationData.item.date_time)
              )}
            </Text>
          </View>
        </TouchableOpacity>
      </Card>
    </React.Fragment>
  );
};

export default Notification;

const styles = StyleSheet.create({
  cardTitle: {
    paddingTop: 20,
    paddingLeft: 20,

    flexDirection: "row",
  },
  date_time: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 20,
    paddingBottom: 10,

    flexDirection: "row",
  },

  ActiveCard: {
    marginBottom: 25,
    marginTop: 25,
    position: "relative",
    marginLeft: screenWidth * 0.05,
    width: screenWidth * 0.9,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
