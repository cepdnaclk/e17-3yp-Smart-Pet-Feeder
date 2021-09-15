import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-paper";
import Styles from "../config/Styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import * as authActions from "../store/actions/auth";

export default function Profile(props) {
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(authActions.logout());
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Icon
        name="account-lock"
        color="black"
        size={100}
        style={{ marginBottom: 20 }}
      />
      <Button
        mode="contained"
        style={{ borderRadius: 100 }}
        contentStyle={Styles.SignButtonContent}
        labelStyle={Styles.SignButtonLabel}
        onPress={Logout}
      >
        Logout
      </Button>

      <TouchableOpacity
        activeOpacity={0.9}
        // onPress={() => onChangeScreen("register")}
      >
        {/*<Text style={Styles.SignButtonTextContent}>*/}
        {/*  {Strings.ST12}{" "}*/}
        {/*  <Text style={{ fontWeight: "bold" }}>{Strings.ST35}</Text>*/}
        {/*</Text>*/}
      </TouchableOpacity>
    </View>
  );
}
