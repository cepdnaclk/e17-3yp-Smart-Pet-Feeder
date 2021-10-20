import React from "react";
import { API_URL } from "../../config/Configs";
import {userFetchTemplate} from "./fetchTemplate";

export const SET_HISTORY = "SET_HISTORY";

export const fetchHistory = () => {
  return async (dispatch, getState) => {
    const resData = await userFetchTemplate(
        // fetchStatusFunction.bind(null, dispatch, getState),
        async () => {
          const token = getState().auth.token;

          return await fetch(API_URL + "/auth/user/get_history", {
            method: "GET",
            headers: {
              Authorization: "Bearer " + token,
            },
          });
        },
        dispatch,
        getState
    );

    dispatch({ type: SET_HISTORY, history: resData });
  };
};

