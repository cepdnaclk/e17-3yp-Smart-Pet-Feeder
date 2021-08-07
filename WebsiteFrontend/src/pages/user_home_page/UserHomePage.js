import React, { useEffect } from "react";

import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import FooterCopyright from "../../components/Footer/FooterCopyright";
import Status from "../../components/Status/Status";
import AOS from "aos";
import ActiveSchedules from "../../components/ActiveSchedules/ActiveSchedules";
import ScheduleForm from "../../components/ScheduleForm/ScheduleForm";
import ConfirmationBox from "../../components/ConfirmationBox/ConfirmationBox";

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

          <Status />

          <ActiveSchedules />
        </div>

        <FooterCopyright classname="userpage_footer" />
      </div>
    </Loader>
  );
};

export default userHomePage;
