import React, { useEffect } from "react";

import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import FooterCopyright from "../../components/Footer/FooterCopyright";
// import Status from "../../components/Status/Status";
import AOS from "aos";
// import ActiveSchedules from "../../components/ActiveSchedules/ActiveSchedules";
// import ScheduleForm from "../../components/ScheduleForm/ScheduleForm";
// import ConfirmationBox from "../../components/ConfirmationBox/ConfirmationBox";
import { Redirect, Route, Switch } from "react-router-dom";
// import SmartPetFeeder from "../home/SmartPetFeeder";
import UserStatusPage from "./UserStatusPage";
import UserHistoryPage from "./UserHistoryPage";

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
