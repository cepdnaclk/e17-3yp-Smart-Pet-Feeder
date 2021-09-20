import React, { useState, useContext, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Alert,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

import { DotIndicator } from "react-native-indicators";
import { Text, TextInput, Button } from "react-native-paper";
import Styles from "../config/Styles";
import ColorsApp from "../config/ColorsApp";
import useInput from "../hooks/use-input";
import * as Validators from "../helpers/validators";
import * as authActions from "../store/actions/auth";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/auth";

export default function Login(props) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput("", Validators.isEmail);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput("", Validators.isNotEmpty);

  let formIsValid = false;
  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  useEffect(() => {
    if (error) {
      Alert.alert("Authentication Failed!", "Invalid email or password", [
        { text: "Okay" },
      ]);
    }
  }, [error]);

  const submitForm = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(authActions.login(email, password));
      // props.navigation.navigate("Shop");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  // const submitForm = (event) => {
  //   let url;
  //   url =
  //     "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCpQbjXMSb_MTPw0_Y7h_A4jqwO-oyUqYg";
  //
  //   event.preventDefault();
  //
  //   fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //       returnSecureToken: true,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         return res.json().then((data) => {
  //           let errorMessage = "Invalid Email or Password!";
  //           // if (data && data.error && data.error.message) {
  //           //   errorMessage = data.error.message;
  //           // }
  //
  //           throw new Error(errorMessage);
  //         });
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       const expirationTime = new Date(
  //         new Date().getTime() + +data.expiresIn * 1000
  //       );
  //       console.log(data.expiresIn);
  //       // authCtx.login(data.idToken, expirationTime.toISOString());
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });
  // };

  const onChangeScreen = (screen) => {
    props.navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={Styles.AuthPage}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode={"contain"}
          style={{ ...Styles.AuthLogo, marginBottom: 50 }}
        />

        <View style={Styles.AuthContent}>
          <TextInput
            // outlineColor={ColorsApp.PRIMARY}
            // underlineColor={ColorsApp.PRIMARY}
            // selectionColor={ColorsApp.PRIMARY}

            theme={{
              colors: {
                primary: ColorsApp.PRIMARY,
                underlineColor: "transparent",
              },
            }}
            label="Email"
            mode="flat"
            autoCapitalize="none"
            style={Styles.AuthInput}
            onChangeText={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={email}
          />

          {emailHasError && (
            <View style={styles.Error}>
              <Text style={styles.ErrorMessage}>* Invalid Email </Text>
            </View>
          )}

          <TextInput
            theme={{
              colors: {
                primary: ColorsApp.PRIMARY,
                underlineColor: "transparent",
              },
            }}
            label="Password"
            mode="flat"
            secureTextEntry={true}
            style={Styles.AuthInput}
            onChangeText={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={password}
          />

          <TouchableOpacity activeOpacity={0.9}>
            <Text style={Styles.ForgotPass}>Forgot Password?</Text>
          </TouchableOpacity>

          {isLoading ? (
            <View style={{ height: 72 }}>
              <DotIndicator color={ColorsApp.PRIMARY} />
            </View>
          ) : (
            <Button
              mode="contained"
              onPress={submitForm}
              style={{
                ...Styles.AuthButton,
                backgroundColor: formIsValid ? ColorsApp.PRIMARY : "grey",
              }}
              contentStyle={Styles.AuthButtonContent}
              labelStyle={Styles.AuthButtonLabel}
              disabled={!formIsValid}
            >
              Login
            </Button>
          )}

          <View style={Styles.AuthBottomContent}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => onChangeScreen("Register")}
            >
              <Text style={Styles.AuthBottomText}>
                Don't have an account?{"  "}
                <Text style={{ fontWeight: "bold", color: ColorsApp.PRIMARY }}>
                  Register
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Error: {
    flexDirection: "row",
    paddingBottom: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },

  ErrorMessage: {
    color: "red",
    fontSize: 12,
    textAlign: "left",
  },
});
