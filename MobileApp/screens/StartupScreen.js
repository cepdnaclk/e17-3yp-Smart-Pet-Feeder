// The initial Screen (Which used to check the validity of the token and userId - For auto login)
import React, {useEffect} from "react";
import {View, StyleSheet, AsyncStorage} from "react-native";

import {useDispatch} from "react-redux";

import Colors from "../config/ColorsApp";
import * as authActions from "../store/actions/auth";
import {DotIndicator} from "react-native-indicators";
import ColorsApp from "../config/ColorsApp";

const StartupScreen = (props) => {
    const dispatch = useDispatch();
    const {navigation} = props;

    const onChangeScreen = (screen) => {
        navigation.replace(screen);
    };

    useEffect(() => {
        /*
          Try login function. If this is not clear, create this function outside of useEffect
          with .then and .catch
         */

        // Async function
        const tryLogin = async () => {
            // get item from the mobile storage for userData key (This is a async process)
            const userData = await AsyncStorage.getItem("userData");

            // If userData is not available
            if (!userData) {
                // props.navigation.navigate("Auth"); // navigate to Auth screen
                onChangeScreen("Register");
                return;
            }

            // convert JSON string to JS Object
            const transformedData = JSON.parse(userData);
            // Extract token, id, expiration time
            const {token, userId, refreshToken} = transformedData;

            if (!token || !userId) {
                onChangeScreen("Register");
                return;
            }


            // const expirationDate = new Date(expiryDate); // Convert expiryDate to Date Object
            //
            // // Check validity of the token
            // if (expirationDate <= new Date() || !token || !userId) {
            //   onChangeScreen("Register");
            //
            //   // props.navigation.navigate("Auth"); // Navigate to Auth screen if token is not valid
            //   return;
            // }

            // props.navigation.navigate("Shop");

            /*
              Dispatch authenticate action with id and the token.
              When app restarts, redux storage hasn't token and Id.
              By dispatching this, token and Id will be save in the redux store.
              If user manually set token and Id in the mobile storage. He will log into the system, but
              he cannot send requests to the server with invalid token.
             */
            dispatch(authActions.authenticate(userId, token, refreshToken));
        };

        // Call tryLogin func
        tryLogin();
    }, [dispatch]);

    return (
        // Show Loading spinner, while stay in this screen
        <View style={styles.screen}>
            <DotIndicator color={ColorsApp.PRIMARY}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default StartupScreen;
