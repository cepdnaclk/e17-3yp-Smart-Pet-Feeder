import { Image, View } from "react-native";
import Styles from "../../config/Styles";
import { Button, Title } from "react-native-paper";
import React from "react";

const Maintainance = (props) => {
  return (
    <View
      style={{
        flex: 1,
        // flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../../assets/images/logo.png")}
        resizeMode={"contain"}
        style={{ ...Styles.AuthLogo, marginBottom: 100 }}
      />

      <Title
        style={{
          fontSize: 22,
          // fontWeight: "bold",
          // fontFamily: "loobster",
          // capitalize: true,
          marginHorizontal: 20,
          textAlign: "center",
          marginBottom: 100,
        }}
      >
        Smart Pet Feeder is currently down for maintenance
      </Title>

      <Button
        mode="contained"
        icon="refresh"
        style={{ borderRadius: 100 }}
        contentStyle={Styles.SignButtonContent}
        labelStyle={Styles.SignButtonLabel}
        onPress={props.loadStatus}
      >
        Try Again
      </Button>
    </View>
  );
};

export default Maintainance;
