import React from "react";
import { Dimensions, I18nManager } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Strings from "../config/Strings";
import { IconButton } from "react-native-paper";
import Home from "../screens/Home";
import History from "../screens/History";
import Status from "../screens/Status";
import Video from "../screens/Video";
import Profile from "../screens/Profile";
import ColorsApp from "../config/ColorsApp";
import Notifications from "../screens/Notifications";
import ContactUs from "../screens/Contact Us";

const Stack = createStackNavigator();

export default function StackNavigation(props) {
  const { navigation } = props;

  const onSearch = () => {
    navigation.navigate("search", { string: "" });
  };

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

  // ******************************** Buttons

  const buttonLeft = () => {
    return (
      <IconButton
        icon="menu"
        color={"#fff"}
        size={24}
        onPress={() => navigation.openDrawer()}
      />
    );
  };

  const buttonBack = () => {
    return (
      <IconButton
        icon={I18nManager.isRTL ? "arrow-right" : "arrow-left"}
        color={"#fff"}
        size={24}
        onPress={() => navigation.goBack()}
      />
    );
  };

  const buttonBackDark = () => {
    return (
      <IconButton
        icon={I18nManager.isRTL ? "arrow-right" : "arrow-left"}
        color={"#000"}
        size={24}
        onPress={() => navigation.goBack()}
      />
    );
  };

  const buttonSearch = () => {
    return (
      <IconButton
        icon="magnify"
        color={"#fff"}
        size={24}
        onPress={() => navigation.goBack()}
      />
    );
  };

  const buttonMenu = () => {
    return (
      <IconButton
        icon="menu"
        color={"#fff"}
        size={24}
        onPress={() => navigation.openDrawer()}
      />
    );
  };

  return (
    <Stack.Navigator screenOptions={navigatorOptions}>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: null,
          headerTransparent: true,
          headerLeft: () => buttonMenu(),
        }}
      />

      <Stack.Screen
        name="Status"
        component={Status}
        options={({ navigation }) => ({
          title: "Status",
          headerTransparent: false,
          headerLeft: () => buttonBack(),
        })}
      />

      <Stack.Screen
        name="History"
        component={History}
        options={({ navigation }) => ({
          title: "History",
          headerTransparent: false,
          headerLeft: () => buttonBack(),
        })}
      />

      <Stack.Screen
        name="Video"
        component={Video}
        options={({ navigation }) => ({
          title: "Watch",
          headerTransparent: false,
          headerLeft: () => buttonBack(),
        })}
      />

      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={({ navigation }) => ({
          title: "Notifications",
          headerTransparent: false,
          headerLeft: () => buttonBack(),
        })}
      />

      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={({ navigation }) => ({
          title: "ContactUs",
          headerTransparent: false,
          headerLeft: () => buttonBack(),
        })}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          title: "Profile",
          headerTransparent: false,
          headerLeft: () => buttonBack(),
        })}
      />
      {/*<Stack.Screen name="singlemember" component={SingleMember} options={({ navigation }) => ({title: null, headerTransparent: true, headerLeft: () => buttonBackDark()})} />*/}
      {/*<Stack.Screen name="singlecategory" component={SingleCategory} options={({ navigation }) => ({title: null, headerLeft: () => buttonBack()})} />*/}
      {/*<Stack.Screen name="profile" component={Profile} options={{title: Strings.ST6, headerLeft: () => buttonBack()}} />*/}
      {/*<Stack.Screen name="members" component={Members} options={{title: Strings.ST5, headerLeft: () => buttonBack()}} />*/}
      {/*<Stack.Screen name="search" component={Search} options={{title: Strings.ST3, headerLeft: () => buttonBack()}} />*/}
      {/*<Stack.Screen name="submit" component={Submit} options={{title: Strings.ST113, headerLeft: () => buttonBack()}} />*/}
      {/*<Stack.Screen name="favorites" component={Favorites} options={{title: Strings.ST4, headerLeft: () => buttonBack()}} />*/}
      {/*<Stack.Screen name="feed" component={Feed} options={{title: Strings.ST29, headerLeft: () => buttonBack()}} />*/}
    </Stack.Navigator>
  );
}
