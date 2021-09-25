import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import App from "./App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import scheduleReducer from "./store/reducer/schedules";
import statusReducer from "./store/reducer/status";
import historyReducer from "./store/reducer/history";
import ReduxThunk from "redux-thunk";
import authReducer from "./store/reducer/auth";
import adminAuthReducer from "./store/reducer/admin_auth";
import notificationReducer from "./store/reducer/notifications";

const rootReducer = combineReducers({
  schedules: scheduleReducer,
  status: statusReducer,
  history: historyReducer,
  auth: authReducer,
  admin_auth: adminAuthReducer,
  notifications: notificationReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("main")
);
