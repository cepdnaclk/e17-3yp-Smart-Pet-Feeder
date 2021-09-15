import React from "react";
import { StatusBar, Image, SafeAreaView, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { Block, GalioProvider } from "galio-framework";
import * as Font from "expo-font";

import { materialTheme } from "./constants/";

import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation/Navigation";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import scheduleReducer from "./store/reducer/schedules";
import statusReducer from "./store/reducer/status";
import historyReducer from "./store/reducer/history";
import ReduxThunk from "redux-thunk";
import authReducer from "./store/reducer/auth";
import notificationReducer from "./store/reducer/notifications";

// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
import { useFonts } from "expo-font";
import { AppearanceProvider } from "react-native-appearance";

enableScreens();

const rootReducer = combineReducers({
  schedules: scheduleReducer,
  status: statusReducer,
  history: historyReducer,
  auth: authReducer,
  notifications: notificationReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

// cache app images
// const assetImages = [
//   Images.Pro,
//   Images.Profile,
//   Images.Avatar,
//   Images.Onboarding,
// ];

// cache product images
// products.map((product) => assetImages.push(product.image));

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const fetchFonts = () => {
  // Asynchronous func
  return Font.loadAsync({
    // fonts
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "bebas-neue": require("./assets/fonts/BebasNeue-Regular.ttf"),
    galio: require("./assets/fonts/galioExtra.ttf"),
    loobster: require("./assets/fonts/Lobster-Regular.ttf"),
    times: require("./assets/fonts/times.ttf"),
  });
};

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppearanceProvider>
          <AppLoading
            startAsync={fetchFonts}
            onError={this._handleLoadingError}
            onFinish={this._handleFinishLoading}
          />
        </AppearanceProvider>
      );
    } else {
      return (
        <AppearanceProvider>
          <Provider store={store}>
            <NavigationContainer>
              <GalioProvider theme={materialTheme}>
                {/*<Block flex>*/}
                {/*  {Platform.OS === "ios" && <StatusBar barStyle="default" />}*/}
                {/*</Block>*/}
                <StatusBar
                  translucent
                  backgroundColor="transparent"
                  barStyle={"light-content"}
                />

                <Navigation />
              </GalioProvider>
            </NavigationContainer>
          </Provider>
        </AppearanceProvider>
      );
    }
  }

  // _loadResourcesAsync = async () => {
  //   return Promise.all([...cacheImages(assetImages)]);
  // };

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
