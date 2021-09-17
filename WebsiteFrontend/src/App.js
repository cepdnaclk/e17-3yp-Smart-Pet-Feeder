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
import AuthContext from "./stores/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={SmartPetFeeder}
          />

          {authCtx.isLoggedIn && (
            <Route
              path={`${process.env.PUBLIC_URL}/user/`}
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
