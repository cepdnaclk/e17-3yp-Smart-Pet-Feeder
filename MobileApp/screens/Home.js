import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Animated,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  AsyncStorage,
  RefreshControl,
} from "react-native";
import AppLoading from "../components/AppLoading";
import { LinearGradient } from "expo-linear-gradient";
import Styles from "../config/Styles";
import Strings from "../config/Strings";
import ColorsApp from "../config/ColorsApp";
import { Title, Text, Divider, FAB } from "react-native-paper";
import SchedulePart from "../components/Home/SchedulePart";
import { DotIndicator } from "react-native-indicators";
import * as authActions from "../store/actions/auth";
import { useDispatch } from "react-redux";
import { fetchSchedules } from "../store/actions/schedules";
import Maintainance from "../components/Error/Maintainance";
import { fetchNotification } from "../store/actions/notifications";

const Home = (props) => {
  const yOffset = useRef(new Animated.Value(0)).current;
  const headerOpacity = yOffset.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  // const [isPageLoading, setIsPageLoaded] = useState(false);

  // useEffect(() => {
  //   setIsPageLoaded(true);
  // }, []);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // const loadSchedules = useCallback(() => {
  //   setError(null);
  //   setIsRefreshing(true);
  //
  //   return dispatch(fetchSchedules())
  //     .then((response) => {
  //       setIsRefreshing(false);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //     });
  // }, [dispatch, setIsRefreshing, setError]);

  const loadData = useCallback(() => {
    setError(null);
    setIsRefreshing(true);

    return dispatch(fetchSchedules())
      .then((response) => {
        dispatch(fetchNotification()).then(() => setIsRefreshing(false));
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [dispatch, setIsRefreshing, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadData();
    setIsLoading(false);
  }, [dispatch, loadData]);

  const onChangeScreen = (screen) => {
    props.navigation.navigate(screen);
  };

  useEffect(() => {
    props.navigation.setOptions({
      title: Strings.ST1,
      headerTransparent: true,
      headerTintColor: "#ffffff",
      headerTitleStyle: { opacity: headerOpacity },
      headerBackground: () => (
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            opacity: headerOpacity,
            backgroundColor: ColorsApp.PRIMARY,
          }}
        />
      ),
    });
  }, [headerOpacity]);

  if (error) {
    return <Maintainance loadStatus={loadData} />;
  }

  return (
    <Animated.ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={loadData} />
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
        // source={{uri: "https://drive.google.com/uc?export=view&id=1wpmwXZEmz2RZECdpF_JWOlDIBATCSj3J"}}
        resizeMode={"cover"}
        style={Styles.headerBackground}
      >
        <View style={Styles.headerOverlay}>
          <Title style={Styles.headerTitle}>SMART PET FEEDER</Title>
          <TouchableOpacity
            onPress={() => onChangeScreen("Video")}
            activeOpacity={0.9}
          >
            <View style={Styles.headerButton}>
              <Text style={Styles.headerButtonText}>Watch Pet</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <SafeAreaView>
        <View style={Styles.HomeScreen}>
          <SchedulePart isLoading={isLoading} />
        </View>
      </SafeAreaView>
    </Animated.ScrollView>
  );
};

export default Home;
