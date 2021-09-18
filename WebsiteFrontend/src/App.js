import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import SmartPetFeeder from "./pages/home/SmartPetFeeder";
import UserHomePage from "./pages/user_home_page/UserHomePage";
import ScrollToTop from "./helpers/ScrollToTop";
import StartupPage from "./pages/Startup_page/StartupPage";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => {
    return !!state.auth.token;
  });

  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={StartupPage}
          />

          {!isLoggedIn && (
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home`}
              component={SmartPetFeeder}
            />
          )}

          {isLoggedIn && (
            <Route
              path={`${process.env.PUBLIC_URL}/user`}
              component={UserHomePage}
            />
          )}

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
