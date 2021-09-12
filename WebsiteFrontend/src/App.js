import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import SmartPetFeeder from "./pages/home/SmartPetFeeder";
import UserHomePage from "./pages/user_home_page/UserHomePage";
import AdminHomePage from "./pages/admin_home_page/AdminHomePage";
import ScrollToTop from "./helpers/ScrollToTop";
import AuthContext from "./stores/auth-context";
import adminHomePage from "./pages/admin_home_page/SmartPetFeederAdmin";

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
              path={`${process.env.PUBLIC_URL}/admin/`}
              component={AdminHomePage}
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
