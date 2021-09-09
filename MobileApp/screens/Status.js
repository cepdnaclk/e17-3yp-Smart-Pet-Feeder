import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Styles from "../config/Styles";
import { Card, Button, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import statusDate from "../data/status-data.json";
import { useSelector } from "react-redux";

export default function Home(props) {
  console.log("Status");

  const yOffset = useRef(new Animated.Value(0)).current;
  const status = useSelector((state) => state.status.status);

  return (
    <Animated.ScrollView
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                y: yOffset,
              },
            },
          },
        ],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={Styles.homeOverlay}
      />

      <ImageBackground
        source={require("../assets/images/header.jpg")}
        resizeMode={"cover"}
        style={Styles.headerBackground}
      />

      <SafeAreaView>
        <View style={styles.container}>
          <Card style={styles.Card}>
            <View style={styles.Inline}>
              <View style={{ paddingTop: 10 }}>
                <Icon
                  size={80}
                  name={status.Status === 1 ? "wifi" : "wifi-off"}
                  color={status.Status === 1 ? "green" : "red"}
                />
              </View>

              <View style={{ paddingLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 40,
                    color: status.Status === 1 ? "green" : "red",
                    fontWeight: "bold",
                    fontFamily: "bebas-neue",
                  }}
                >
                  {status.Status === 1 ? "ON" : "OFF"}
                </Text>
              </View>
            </View>
          </Card>

          <Card style={{ ...styles.Card, marginTop: 20 }}>
            <View style={styles.Inline}>
              <View>
                <Icon
                  size={100}
                  name={
                    status.Battery >= 70
                      ? "battery-high"
                      : status.Battery >= 30
                      ? "battery-medium"
                      : "battery-low"
                  }
                  color={status.Battery >= 30 ? "green" : "red"}
                />
              </View>

              <View style={{ paddingLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 40,
                    color: status.Battery >= 30 ? "green" : "red",
                    fontWeight: "bold",
                    fontFamily: "bebas-neue",
                  }}
                >
                  {status.Battery}%
                </Text>
              </View>
            </View>
          </Card>

          <Card style={{ ...styles.Card, marginTop: 20 }}>
            <View style={styles.Inline}>
              <View style={{ paddingTop: 10 }}>
                <Icon
                  size={80}
                  name={
                    status.Remaining_Rounds === 0
                      ? "numeric-0-circle"
                      : status.Remaining_Rounds === 1
                      ? "numeric-1-circle"
                      : status.Remaining_Rounds === 2
                      ? "numeric-2-circle"
                      : status.Remaining_Rounds === 3
                      ? "numeric-3-circle"
                      : "numeric-4-circle"
                  }
                  color={status.Remaining_Rounds !== 0 ? "green" : "red"}
                />
              </View>

              <View style={{ paddingLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 40,
                    color: status.Remaining_Rounds !== 0 ? "green" : "red",
                    fontWeight: "bold",
                    fontFamily: "bebas-neue",
                  }}
                >
                  {status.Remaining_Rounds !== 1 ? " Rounds" : " Round"}
                </Text>
              </View>
            </View>
          </Card>
        </View>
      </SafeAreaView>
    </Animated.ScrollView>
  );
}

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  Card: {
    width: screenWidth * 0.7,
    height: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  Inline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
});
