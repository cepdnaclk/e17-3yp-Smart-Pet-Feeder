import React, { useEffect } from "react";

import Header from "../../components/Header/AdminHeader";
import Loader from "../../components/Loader/Loader";
import FooterCopyright from "../../components/Footer/FooterCopyright";
import AOS from "aos";
import { Redirect, Route, Switch } from "react-router-dom";
import AdminUsersPage from "./AdminUsersPage";
import AdminBroadcastPage from "./AdminBroadcastPage";
import AdminFeedbackPage from "./AdminFeedbackPage";
import Home from "./SmartPetFeederAdmin";

const adminHomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <div className="flex-wrapper">
        <div className="content">
          <Header type={"white"} dropdown={false} />

          <Switch>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/admin/`}
              component={Home}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/admin/users`}
              component={AdminUsersPage}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/admin/feedback`}
              component={AdminFeedbackPage}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/admin/broadcast`}
              component={AdminBroadcastPage}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/admin/users`}
              component={AdminUsersPage}
            />

            <Route path="*">
              <Redirect to={`${process.env.PUBLIC_URL}/admin/users`} />
            </Route>

          </Switch>
        </div>

        <FooterCopyright classname="userpage_footer" />
      </div>
    </Loader>
  );
};

export default adminHomePage;
