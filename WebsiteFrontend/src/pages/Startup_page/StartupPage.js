// The initial Screen (Which used to check the validity of the token and userId - For auto login)
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Loader from "./../../components/Loader/Loader";

import * as adminAuthActions from "../../store/actions/admin_auth";
import * as authActions from "../../store/actions/auth";
import { useHistory } from "react-router-dom";

const StartupPage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const tryAdminLogin = () => {
      const adminData = localStorage.getItem("adminData");
      if (!adminData) {
        return false;
      }

      const transformedData = JSON.parse(adminData);
      const { token, userId, expiryDate } = transformedData;
      const expirationDate = new Date(expiryDate);

      if (expirationDate <= new Date() || !token || !userId) {
        return false;
      }

      const expireTime = expirationDate.getTime() - new Date().getTime();
      dispatch(adminAuthActions.authenticate(userId, token, expireTime));
      return true;
    };

    const tryLogin = () => {
      const userData = localStorage.getItem("userData");

      // If userData is not available
      if (!userData) {
        // props.navigation.navigate("Auth"); // navigate to Auth screen
        history.replace(`${process.env.PUBLIC_URL}/home`);
        return;
      }

      // convert JSON string to JS Object
      const transformedData = JSON.parse(userData);
      // Extract token, id, expiration time
      const { token, userId, refreshToken } = transformedData;

      if (!token || !userId) {
        history.replace(`${process.env.PUBLIC_URL}/home`);

        // props.navigation.navigate("Auth"); // Navigate to Auth screen if token is not valid
        return;
      }

      // props.navigation.navigate("Shop");

      /*
        Dispatch authenticate action with id and the token.
        When app restarts, redux storage hasn't token and Id.
        By dispatching this, token and Id will be save in the redux store.
        If user manually set token and Id in the mobile storage. He will log into the system, but
        he cannot send requests to the server with invalid token.z
       */

      dispatch(authActions.authenticate(userId, token, refreshToken));
      history.replace(`${process.env.PUBLIC_URL}/user`);
    };

    // Call tryLogin func
    const isAdmin = tryAdminLogin();
    if (isAdmin) history.replace(`${process.env.PUBLIC_URL}/admin`);
    else tryLogin();
  }, [dispatch, history]);

  return (
    // Show Loading spinner, while stay in this screen
    <Loader />
  );
};

export default StartupPage;
