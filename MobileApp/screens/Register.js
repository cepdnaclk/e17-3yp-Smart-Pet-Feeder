import React, { useState, useContext, useEffect } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  Alert,
  Dimensions,
} from "react-native";
import { Text, TextInput, Button, Checkbox } from "react-native-paper";
import Styles from "../config/Styles";
import ColorsApp from "../config/ColorsApp";
import useInput from "../hooks/use-input";
import * as Validators from "../helpers/validators";
import { useDispatch } from "react-redux";
import * as authActions from "../store/actions/auth";
import { DotIndicator } from "react-native-indicators";
import Verified from "../components/Register/Verified";

export default function Register(props) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const [isPageLoading, setIsPageLoaded] = useState(true);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    setIsPageLoaded(false);
  }, []);

  const onChangeScreen = (screen) => {
    props.navigation.navigate(screen);
  };

  useEffect(() => {
    if (error) {
      Alert.alert("Authentication Failed!", "hhihih", [
        { text: "Okay" },
      ]);
    }
  }, [error]);

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput("", Validators.isValidString);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput("", Validators.isEmail);

  const {
    value: mobileNumber,
    isValid: mobileNumberIsValid,
    hasError: mobileNumberHasError,
    valueChangeHandler: mobileNumberChangeHandler,
    inputBlurHandler: mobileNumberBlurHandler,
    reset: resetMobileNumber,
  } = useInput("", Validators.isMobileNumber);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput("", Validators.isPassword);

  const {
    value: confirmPassword,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPassword,
  } = useInput("", Validators.isConfirmPassword.bind(null, password));

  const {
    value: petFeederId,
    isValid: petFeederIdIsValid,
    hasError: petFeederIdHasError,
    valueChangeHandler: petFeederIdChangeHandler,
    inputBlurHandler: petFeederIdBlurHandler,
    reset: resetPetFeederId,
  } = useInput("", Validators.isValidPetFeederID);


  let formIsValid = false;
  if (
    nameIsValid &&
    emailIsValid &&
    mobileNumberIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid &&
    petFeederIdIsValid
  ) {
    formIsValid = true;
  }

  const submitForm = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(
        authActions.signup(name, email, mobileNumber, password, confirmPassword, petFeederId)
      );

      resetName();
      resetEmail();
      resetMobileNumber()
      resetPassword();
      resetConfirmPassword();
      resetPetFeederId();
      setIsLoading(false);
      setIsVerifying(true);

      // props.navigation.navigate("Shop");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const hideModal = () => {
    setIsVerifying(false);
  }

  // const submitForm = (event) => {
  //   let url;
  //
  //   url =
  //     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCpQbjXMSb_MTPw0_Y7h_A4jqwO-oyUqYg";
  //   event.preventDefault();
  //   fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //       confirmPassword: confirmPassword,
  //       name: name,
  //       phoneNumber: mobileNumber,
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
  //           let errorMessage = data.error.message;
  //
  //           if (errorMessage === "EMAIL_EXISTS") {
  //             errorMessage = "Email Already Exists.";
  //           }
  //           throw new Error(errorMessage);
  //         });
  //       }
  //     })
  //     .then((data) => {
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });
  // };

  if (isPageLoading) {
    return <DotIndicator color={ColorsApp.PRIMARY} />;
  }
  return (
    <SafeAreaView style={Styles.AuthPage}>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingBottom: 30,
          paddingTop: 30,
        }}
      >

        {isVerifying &&  <Verified isModalVisible={isVerifying} hideModal={hideModal}/>}



        <Image
          source={require("../assets/images/logo.png")}
          resizeMode={"contain"}
          style={{
            ...Styles.AuthLogo,
            marginBottom: 50,
          }}
        />

        <View style={Styles.AuthContent}>
          <TextInput
            label="Name"
            mode="flat"
            style={Styles.AuthInput}
            onChangeText={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={name}
            theme={{
              colors: {
                primary: ColorsApp.PRIMARY,
                underlineColor: "transparent",
              },
            }}
          />

          {nameHasError && (
            <View style={styles.Error}>
              <Text style={styles.ErrorMessage}>
                * Name should contain at least 5 characters.
              </Text>
            </View>
          )}
          <TextInput
            label="Email"
            mode="flat"
            autoCapitalize="none"
            style={Styles.AuthInput}
            onChangeText={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={email}
            keyboardType="email-address"
            theme={{
              colors: {
                primary: ColorsApp.PRIMARY,
                underlineColor: "transparent",
              },
            }}
          />

          {emailHasError && (
            <View style={styles.Error}>
              <Text style={styles.ErrorMessage}>* Incorrect Email </Text>
            </View>
          )}

          <TextInput
            label="Mobile Number"
            mode="flat"
            style={Styles.AuthInput}
            onChangeText={mobileNumberChangeHandler}
            onBlur={mobileNumberBlurHandler}
            value={mobileNumber}
            theme={{
              colors: {
                primary: ColorsApp.PRIMARY,
                underlineColor: "transparent",
              },
            }}
            keyboardType="phone-pad"
          />

          {mobileNumberHasError && (
            <View style={styles.Error}>
              <Text style={styles.ErrorMessage}>* Invalid mobile number </Text>
            </View>
          )}
          <TextInput
            label="Password"
            mode="flat"
            secureTextEntry={true}
            style={Styles.AuthInput}
            onChangeText={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={password}
            theme={{
              colors: {
                primary: ColorsApp.PRIMARY,
                underlineColor: "transparent",
              },
            }}
          />

          {passwordHasError && (
            <View style={styles.Error}>
              <Text style={styles.ErrorMessage}>
                * 6 minimum characters with uppercase & number
              </Text>
            </View>
          )}
          <TextInput
            label="Confirm Password"
            mode="flat"
            secureTextEntry={true}
            style={Styles.AuthInput}
            onChangeText={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
            value={confirmPassword}
            theme={{
              colors: {
                primary: ColorsApp.PRIMARY,
                underlineColor: "transparent",
              },
            }}
          />

          {confirmPasswordHasError && (
            <View style={styles.Error}>
              <Text style={styles.ErrorMessage}>
                * Password does not match{" "}
              </Text>
            </View>
          )}

          <TextInput
              label="Pet Feeder ID"
              mode="flat"
              style={Styles.AuthInput}
              onChangeText={petFeederIdChangeHandler}
              onBlur={petFeederIdBlurHandler}
              value={petFeederId}
              theme={{
                colors: {
                  primary: ColorsApp.PRIMARY,
                  underlineColor: "transparent",
                },
              }}
          />

          {petFeederIdHasError && (
              <View style={styles.Error}>
                <Text style={styles.ErrorMessage}>
                  * Pet feeder ID should be length of 10 characters
                </Text>
              </View>
          )}

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
              Register
            </Button>
          )}

          <View style={Styles.AuthBottomContent}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => onChangeScreen("Login")}
            >
              <Text style={Styles.AuthBottomText}>
                Already have an account?{"  "}
                <Text style={{ fontWeight: "bold", color: ColorsApp.PRIMARY }}>
                  Sign In
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Error: {
    paddingBottom: 10,
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
  },

  ErrorMessage: {
    color: "red",
    fontSize: 12,
    textAlign: "left",
  },
});
