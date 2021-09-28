import React from "react";

import Users from "../../components/Users/Users";
import AdminStatus from "../../components/Status/AdminStatus";

const UserStatusPage = () => {
  return (
    <React.Fragment>
      <AdminStatus />
      <Users />
    </React.Fragment>
  );
};

export default UserStatusPage;
