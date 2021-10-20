import React from "react";

export const SET_STATUS = "SET_STATUS";
import { API_URL } from "../../config/Configs";
import {userFetchTemplate} from "./fetchTemplate";

// export const fetchStatus = () => {
//   return async (dispatch, getState) => {
//     const token = getState().auth.token;
//
//     const response = await fetch(API_URL + "/auth/user/get_status", {
//       method: "GET",
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });
//
//     const resData = await response.json();
//     dispatch({ type: SET_STATUS, status: resData });
//   };
// };


export const fetchStatus = () => {
    console.log("fetching");
    return async (dispatch, getState) => {
        const resData = await userFetchTemplate(
            // fetchStatusFunction.bind(null, dispatch, getState),
            async () => {
                const token = getState().auth.token;
                console.log("Fetsch status function ", getState().auth);

                return await fetch(API_URL + "/auth/user/get_status", {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
            },
            dispatch,
            getState
        );

        console.log("Last res data", resData);
        dispatch({ type: SET_STATUS, status: resData });
    };
};