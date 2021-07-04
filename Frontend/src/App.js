// import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import {homepage_path} from "./util/homepage_path";

// import AuthContext from "./Store/auth-context";
function App() {
  // const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path={homepage_path + "/"} exact>
          <HomePage />
        </Route>

        <Route path={homepage_path + "/about"} exact>
          <AboutPage />
        </Route>

        <Route path={homepage_path + "/login"} exact>
          <LoginPage />
        </Route>

        <Route path={homepage_path + "/signup"} exact>
          <SignupPage />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
