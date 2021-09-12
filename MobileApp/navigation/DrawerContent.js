import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  I18nManager,
} from "react-native";
import { List, Text, Button, Avatar } from "react-native-paper";
import Styles from "../config/Styles";
import ColorsApp from "../config/ColorsApp";
import Strings from "../config/Strings";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function DrawerContent(props) {
  const { navigation } = props;
  const [string, setString] = useState("");
  const rightIcon = I18nManager.isRTL ? "chevron-left" : "chevron-right";

  const onChangeScreen = (screen) => {
    navigation.navigate(screen);
  };

  const onSearch = (string) => {
    setString(string);
    navigation.navigate("search", { string: string });
  };

  return (
    <View style={Styles.Drawer}>
      <ScrollView>
        <View style={Styles.DrawerHeader}>
          <Image
            source={require("../assets/images/logo.png")}
            resizeMode={"contain"}
            style={Styles.DrawerImage}
          />
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => onChangeScreen("home")}
            activeOpacity={0.8}
          >
            <List.Item
              titleStyle={Styles.DrawerTitleMenu}
              style={Styles.DrawerMenuItem}
              title="Home"
              left={(props) => (
                // <Icon
                //   {...props}
                //   style={Styles.DrawerIconMenu}
                //   name="home-outline"
                // />
                <Avatar.Icon
                  size={34}
                  icon="home"
                  backgroundColor="grey"
                  style={{ marginRight: 15 }}
                />
              )}
              right={(props) => (
                <Icon
                  {...props}
                  style={Styles.DrawerIconRightMenu}
                  name={rightIcon}
                />
              )}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onChangeScreen("Status")}
            activeOpacity={0.8}
          >
            <List.Item
              titleStyle={Styles.DrawerTitleMenu}
              style={Styles.DrawerMenuItem}
              title="Status"
              left={(props) => (
                // <Icon
                //   {...props}
                //   style={Styles.DrawerIconMenu}
                //   name="card-text-outline"
                // />
                <Avatar.Icon
                  size={34}
                  icon="shield-star"
                  backgroundColor="grey"
                  style={{ marginRight: 15 }}
                />
              )}
              right={(props) => (
                <Icon
                  {...props}
                  style={Styles.DrawerIconRightMenu}
                  name={rightIcon}
                />
              )}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onChangeScreen("History")}
            activeOpacity={0.8}
          >
            <List.Item
              titleStyle={Styles.DrawerTitleMenu}
              style={Styles.DrawerMenuItem}
              title="History"
              left={(props) => (
                // <Icon {...props} style={Styles.DrawerIconMenu} name="magnify" />
                <Avatar.Icon
                  size={34}
                  icon="history"
                  backgroundColor="grey"
                  style={{ marginRight: 15 }}
                />
              )}
              right={(props) => (
                <Icon
                  {...props}
                  style={Styles.DrawerIconRightMenu}
                  name={rightIcon}
                />
              )}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onChangeScreen("Video")}
            activeOpacity={0.8}
          >
            <List.Item
              titleStyle={Styles.DrawerTitleMenu}
              style={Styles.DrawerMenuItem}
              title="Video"
              left={(props) => (
                // <Icon
                //   {...props}
                //   style={Styles.DrawerIconMenu}
                //   name="heart-outline"
                // />
                <Avatar.Icon
                  size={34}
                  icon="video"
                  backgroundColor="grey"
                  style={{ marginRight: 15 }}
                />
              )}
              right={(props) => (
                <Icon
                  {...props}
                  style={Styles.DrawerIconRightMenu}
                  name={rightIcon}
                />
              )}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onChangeScreen("Profile")}
            activeOpacity={0.8}
          >
            <List.Item
              titleStyle={Styles.DrawerTitleMenu}
              style={Styles.DrawerMenuItem}
              title={Strings.ST6}
              left={(props) => (
                // <Icon
                //   {...props}
                //   style={Styles.DrawerIconMenu}
                //   name="account-outline"
                // />
                <Avatar.Icon
                  size={34}
                  icon="account"
                  backgroundColor="grey"
                  style={{ marginRight: 15 }}
                />
              )}
              right={(props) => (
                <Icon
                  {...props}
                  style={Styles.DrawerIconRightMenu}
                  name={rightIcon}
                />
              )}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/*<TouchableOpacity*/}
      {/*  onPress={() => onChangeScreen("home")}*/}
      {/*  activeOpacity={1}*/}
      {/*>*/}
      {/*  <View style={Styles.DrawerFooter}>*/}
      {/*    <Button mode="text" onPress={() => console.log("Pressed")}>*/}
      {/*      Sign Out*/}
      {/*    </Button>*/}
      {/*  </View>*/}
      {/*</TouchableOpacity>*/}
    </View>
  );
}
