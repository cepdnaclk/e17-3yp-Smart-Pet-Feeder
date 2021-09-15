import React, { useEffect, useState } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { IconButton } from "react-native-paper";
import StackNavigation from "./StackNavigation";
import AuthNavigation from "./AuthNavigation";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();
export default function ModalNavigation(props) {
  const isSignedIn = useSelector((state) => {
    return !!state.auth.token;
  });
  // const isSignedIn = true;

  useEffect(() => {}, [isSignedIn]);

  const { navigation } = props;

  const navigatorOptions = {
    headerStyle: {
      backgroundColor: "#fff",
      shadowColor: "transparent",
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: "#000",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 18,
    },
    headerTitleAlign: "center",
    gestureEnabled: true,
    cardOverlayEnabled: true,
    ...TransitionPresets.ModalPresentationIOS,
  };

  const buttonBack = () => {
    return (
      <IconButton icon="close" size={24} onPress={() => navigation.goBack()} />
    );
  };

  const buttonBackDark = () => {
    return (
      <IconButton
        icon="close"
        color={"white"}
        size={24}
        onPress={() => navigation.goBack()}
      />
    );
  };

  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={(route) => {
        return navigatorOptions;
      }}
    >
      {isSignedIn ? (
        <>
          <Stack.Screen
            name="Main"
            component={StackNavigation}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Auth"
            component={AuthNavigation}
            options={{
              // title: "Register",
              headerShown: false,
              // headerLeft: () => buttonBack(),
            }}
          />

          {/*<Stack.Screen*/}
          {/*  name="Login"*/}
          {/*  component={Login}*/}
          {/*  options={{*/}
          {/*    title: "Login",*/}
          {/*    headerTransparent: true,*/}
          {/*    // headerLeft: () => buttonBack(),*/}
          {/*  }}*/}
          {/*/>*/}
        </>
      )}

      {/*<Stack.Screen*/}
      {/*  name="History"*/}
      {/*  component={History}*/}
      {/*  options={{*/}
      {/*    title: "History",*/}
      {/*    headerTransparent: true,*/}
      {/*    headerLeft: () => buttonBack(),*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Stack.Screen*/}
      {/*  name="History"*/}
      {/*  component={History}*/}
      {/*  options={{*/}
      {/*    title: "History",*/}
      {/*    headerTransparent: true,*/}
      {/*    headerLeft: () => buttonBack(),*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Stack.Screen*/}
      {/*  name="comments"*/}
      {/*  component={Comments}*/}
      {/*  options={{ title: Strings.ST88, headerLeft: () => buttonBack() }}*/}
      {/*/>*/}
      {/*<Stack.Screen*/}
      {/*  name="comment"*/}
      {/*  component={Comment}*/}
      {/*  options={{ title: Strings.ST91, headerLeft: () => buttonBack() }}*/}
      {/*/>*/}
      {/*<Stack.Screen*/}
      {/*  name="aboutus"*/}
      {/*  component={About}*/}
      {/*  options={{ title: Strings.ST110, headerLeft: () => buttonBack() }}*/}
      {/*/>*/}
      {/*<Stack.Screen*/}
      {/*  name="terms"*/}
      {/*  component={Terms}*/}
      {/*  options={{ title: Strings.ST8, headerLeft: () => buttonBack() }}*/}
      {/*/>*/}
    </Stack.Navigator>
  );
}
