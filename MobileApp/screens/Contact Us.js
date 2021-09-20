import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet, Image, Alert } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import Styles from "../config/Styles";
import ColorsApp from "../config/ColorsApp";
import useInput from "../hooks/use-input";
import * as Validators from "../helpers/validators";
import { useDispatch } from "react-redux";
import { submitFeedback } from "../store/actions/feedback";
import { DotIndicator } from "react-native-indicators";

export default function ContactUs(props) {
  const {
    value: title,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput("", Validators.isValidString);

  const {
    value: message,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput("", Validators.isValidMessage);

  const isFormValid = titleIsValid && messageIsValid;

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  // if (error) {
  //   return <Maintainance loadStatus={loadStatus} />;
  // }

  const onsubmitFeedback = () => {
    if (!isFormValid) return;
    setIsLoading(true);
    return dispatch(submitFeedback(title, message))
      .then((response) => {
        resetTitle();
        resetMessage();
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  let msgCharCount = message.length;

  useEffect(() => {
    if (error) {
      Alert.alert("Submit schedule failed", "Try again later!", [
        { text: "Okay" },
      ]);
    }
  }, [error]);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode={"contain"}
        style={{ ...Styles.AuthLogo, marginBottom: 70 }}
      />
      <View style={{ marginHorizontal: 20 }}>
        <TextInput
          label="Title"
          mode="outlined"
          autoCapitalize="none"
          value={title}
          onChangeText={titleChangeHandler}
          onBlur={titleBlurHandler}
          theme={{
            colors: {
              primary: ColorsApp.PRIMARY,
              underlineColor: "transparent",
            },
          }}
          // style={Styles.Input}
        />
      </View>

      {titleHasError && (
        <View style={styles.Error}>
          <Text style={{ color: "red" }}>* Minimum 5 characters</Text>
        </View>
      )}

      <View style={{ marginHorizontal: 20, marginTop: 40 }}>
        <TextInput
          multiline
          numberOfLines={8}
          maxLength={200}
          label="Message (Minimum 20 characters)"
          // onChangeText={(text) => setEmail(text)}
          mode="outlined"
          autoCapitalize="none"
          height={180}
          theme={{
            colors: {
              primary: ColorsApp.PRIMARY,
              underlineColor: "transparent",
            },
          }}
          right={
            <TextInput.Affix
              textStyle={{ paddingTop: 270 }}
              text={msgCharCount + "/200"}
            />
          }
          value={message}
          onChangeText={messageChangeHandler}
          onBlur={messageBlurHandler}
        />
      </View>

      {messageHasError && (
        <View style={styles.Error}>
          <Text style={{ color: "red" }}>* Minimum 20 characters</Text>
        </View>
      )}

      <View
        style={{
          // width: 200,
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 50,
          marginBottom: 20,
        }}
      >
        {isLoading ? (
          <View style={{ height: 57 }}>
            <DotIndicator color={ColorsApp.PRIMARY} />
          </View>
        ) : (
          <Button
            disabled={!isFormValid}
            mode="contained"
            style={{ borderRadius: 100 }}
            contentStyle={{
              paddingVertical: 10,
              backgroundColor: !isFormValid ? "grey" : "green",
              width: 250,
            }}
            labelStyle={Styles.SignButtonLabel}
            onPress={onsubmitFeedback}
          >
            Submit
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Inline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  Container: {
    height: 50,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  Error: {
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 10,
    marginHorizontal: 20,
  },
});
