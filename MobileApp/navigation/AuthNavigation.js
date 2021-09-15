import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import StartupScreen from "../screens/StartupScreen";
import ColorsApp from "../config/ColorsApp";

const Stack = createStackNavigator();

export default function AuthNavigation(props) {
  const { navigation } = props;

  const navigatorOptions = {
    headerStyle: {
      backgroundColor: ColorsApp.PRIMARY,
      shadowColor: "transparent",
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTitleStyle: {
      fontSize: 18,
      color: "#fff",
    },
    headerTitleAlign: "center",
  };

  return (
    <Stack.Navigator screenOptions={navigatorOptions}>
      <Stack.Screen
        name="StartUp"
        component={StartupScreen}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: "Register",
          headerTransparent: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
          headerTransparent: false,
        }}
      />
    </Stack.Navigator>
  );
}
