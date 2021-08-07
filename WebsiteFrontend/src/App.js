import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SmartPetFeeder from "./pages/home/SmartPetFeeder";
import UserHomePage from "./pages/user_home_page/UserHomePage";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={SmartPetFeeder}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/user`}
            component={UserHomePage}
          />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
