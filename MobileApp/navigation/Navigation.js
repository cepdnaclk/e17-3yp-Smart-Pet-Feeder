import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ModalNavigation from "./ModalNavigation";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="app"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Main" component={ModalNavigation} />
    </Drawer.Navigator>
  );
};

export default Navigation;
