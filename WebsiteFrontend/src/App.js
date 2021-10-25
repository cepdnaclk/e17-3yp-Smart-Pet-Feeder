import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SmartPetFeeder from "./pages/home/SmartPetFeeder";
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
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
