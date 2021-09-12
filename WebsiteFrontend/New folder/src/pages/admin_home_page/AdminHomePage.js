import React, { useEffect } from "react";

import Header from "../../components/Header/AdminHeader";
import Loader from "../../components/Loader/Loader";
import FooterCopyright from "../../components/Footer/FooterCopyright";
import Status from "../../components/Status/Status";
import AOS from "aos";
import ActiveSchedules from "../../components/ActiveSchedules/ActiveSchedules";
import ScheduleForm from "../../components/ScheduleForm/ScheduleForm";
import ConfirmationBox from "../../components/ConfirmationBox/ConfirmationBox";
import { Redirect, Route, Switch } from "react-router-dom";
import SmartPetFeeder from "../home/SmartPetFeeder";
import AdminUsersPage from "./AdminUsersPage";
import AdminHistoryPage from "./AdminHistoryPage";

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
              path={`${process.env.PUBLIC_URL}/admin/users`}
              component={AdminUsersPage}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/admin/users`}
              component={AdminUsersPage}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/admin/history`}
              component={AdminHistoryPage}
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
