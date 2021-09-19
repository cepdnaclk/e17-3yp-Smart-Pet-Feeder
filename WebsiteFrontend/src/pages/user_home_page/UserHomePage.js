import React, { useEffect } from "react";

import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import FooterCopyright from "../../components/Footer/FooterCopyright";
import AOS from "aos";

import { Redirect, Route, Switch } from "react-router-dom";
import UserStatusPage from "./UserStatusPage";
import UserHistoryPage from "./UserHistoryPage";

import UserNotificationPage from "./UserNotificationPage";
import UserVideoPage from "./UserVideoPage";
import UserContactUs from "./UserContactUs";

const userHomePage = () => {
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
              path={`${process.env.PUBLIC_URL}/user/status`}
              component={UserStatusPage}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/user/history`}
              component={UserHistoryPage}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/user/video`}
              component={UserVideoPage}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/user/notifications`}
              component={UserNotificationPage}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/user/contactus`}
              component={UserContactUs}
            />

            <Route path="*">
              <Redirect to={`${process.env.PUBLIC_URL}/user/status`} />
            </Route>
          </Switch>
        </div>

        <FooterCopyright classname="userpage_footer" />
      </div>
    </Loader>
  );
};

export default userHomePage;
