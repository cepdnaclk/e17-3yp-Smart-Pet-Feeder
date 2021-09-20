import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Animated,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  RefreshControl,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Styles from "../config/Styles";
import { Card, Button, Text, Title } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { DotIndicator } from "react-native-indicators";
import ColorsApp from "../config/ColorsApp";
import * as statusActions from "../store/actions/status";
import Maintainance from "../components/Error/Maintainance";

export default function Home(props) {
  const yOffset = useRef(new Animated.Value(0)).current;

  const status = useSelector((state) => state.status.status);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const loadStatus = useCallback(() => {
    setError(null);
    // setIsLoading(true);
    setIsRefreshing(true);

    return dispatch(statusActions.fetchStatus())
      .then((response) => {
        setIsRefreshing(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [dispatch, setIsRefreshing, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadStatus().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadStatus]);

  if (error) {
    return <Maintainance loadStatus={loadStatus} />;
  }

  if (isLoading) {
    return <DotIndicator color={ColorsApp.PRIMARY} />;
  }

  return (
    <Animated.ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={loadStatus} />
      }
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

      {/*<Button*/}
      {/*  onPress={() => {*/}
      {/*    dispatch(statusActions.fetchStatus());*/}
      {/*  }}*/}
      {/*>*/}
      {/*  fetch status*/}
      {/*</Button>*/}

      <SafeAreaView>
        <View style={styles.container}>
          <Card style={styles.Card}>
            <View style={styles.Inline}>
              <View style={{ paddingTop: 10 }}>
                <Icon
                  size={80}
                  name={status.status ? "wifi" : "wifi-off"}
                  color={status.status ? "green" : "red"}
                />
              </View>

              <View style={{ paddingLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 40,
                    color: status.status ? "green" : "red",
                    fontWeight: "bold",
                    fontFamily: "bebas-neue",
                  }}
                >
                  {status.status ? "ON" : "OFF"}
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
                    status.battery >= 70
                      ? "battery-high"
                      : status.battery >= 30
                      ? "battery-medium"
                      : "battery-low"
                  }
                  color={status.battery >= 30 ? "green" : "red"}
                />
              </View>

              <View style={{ paddingLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 40,
                    color: status.battery >= 30 ? "green" : "red",
                    fontWeight: "bold",
                    fontFamily: "bebas-neue",
                  }}
                >
                  {status.battery}%
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
                    status.remainingRounds === 0
                      ? "numeric-0-circle"
                      : status.remainingRounds === 1
                      ? "numeric-1-circle"
                      : status.remainingRounds === 2
                      ? "numeric-2-circle"
                      : status.remainingRounds === 3
                      ? "numeric-3-circle"
                      : "numeric-4-circle"
                  }
                  color={status.remainingRounds !== 0 ? "green" : "red"}
                />
              </View>

              <View style={{ paddingLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 40,
                    color: status.remainingRounds !== 0 ? "green" : "red",
                    fontWeight: "bold",
                    fontFamily: "bebas-neue",
                  }}
                >
                  {status.remainingRounds !== 1 ? " Rounds" : " Round"}
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
