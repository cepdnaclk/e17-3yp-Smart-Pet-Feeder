import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import App from "./App";
import {AuthContextProvider} from "./stores/auth-context";

ReactDOM.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>,

    document.getElementById("main"));
