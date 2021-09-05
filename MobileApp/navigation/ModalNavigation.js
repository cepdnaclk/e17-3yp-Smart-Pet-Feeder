import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Dimensions } from "react-native";
import { IconButton } from "react-native-paper";
// import Login from "../screens/Login";
// import Register from '../screens/Register';
// import ForgotPass from '../screens/ForgotPass';
// import Terms from '../screens/Terms';
// import About from '../screens/About';
// import Comments from '../screens/Comments';
// import Comment from '../screens/Comment';
import ColorsApp from "../config/ColorsApp";
import StackNavigation from "./StackNavigation";
import Strings from "../config/Strings";

const RootStack = createStackNavigator();

export default function ModalNavigation(props) {
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
    /*cardOverlayEnabled: true,
		...TransitionPresets.ModalPresentationIOS*/
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
    <RootStack.Navigator
      mode="modal"
      screenOptions={(route) => {
        return navigatorOptions;
      }}
    >
      <RootStack.Screen
        name="Main"
        component={StackNavigation}
        options={{ headerShown: false }}
      />
      {/*<RootStack.Screen*/}
      {/*  name="login"*/}
      {/*  component={Login}*/}
      {/*  options={{*/}
      {/*    title: Strings.ST10,*/}
      {/*    headerTransparent: true,*/}
      {/*    headerLeft: () => buttonBack(),*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<RootStack.Screen*/}
      {/*  name="register"*/}
      {/*  component={Register}*/}
      {/*  options={{*/}
      {/*    title: Strings.ST11,*/}
      {/*    headerTransparent: true,*/}
      {/*    headerLeft: () => buttonBack(),*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<RootStack.Screen*/}
      {/*  name="forgot"*/}
      {/*  component={ForgotPass}*/}
      {/*  options={{*/}
      {/*    title: Strings.ST43,*/}
      {/*    headerTransparent: true,*/}
      {/*    headerLeft: () => buttonBack(),*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<RootStack.Screen*/}
      {/*  name="comments"*/}
      {/*  component={Comments}*/}
      {/*  options={{ title: Strings.ST88, headerLeft: () => buttonBack() }}*/}
      {/*/>*/}
      {/*<RootStack.Screen*/}
      {/*  name="comment"*/}
      {/*  component={Comment}*/}
      {/*  options={{ title: Strings.ST91, headerLeft: () => buttonBack() }}*/}
      {/*/>*/}
      {/*<RootStack.Screen*/}
      {/*  name="aboutus"*/}
      {/*  component={About}*/}
      {/*  options={{ title: Strings.ST110, headerLeft: () => buttonBack() }}*/}
      {/*/>*/}
      {/*<RootStack.Screen*/}
      {/*  name="terms"*/}
      {/*  component={Terms}*/}
      {/*  options={{ title: Strings.ST8, headerLeft: () => buttonBack() }}*/}
      {/*/>*/}
    </RootStack.Navigator>
  );
}
