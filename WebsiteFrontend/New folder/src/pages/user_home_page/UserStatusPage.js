import React from "react";

import Status from "../../components/Status/Status";
import ActiveSchedules from "../../components/ActiveSchedules/ActiveSchedules";

const UserStatusPage = () => {
  return (
    <React.Fragment>
      <Status />
      <ActiveSchedules />
    </React.Fragment>
  );
};

export default UserStatusPage;
