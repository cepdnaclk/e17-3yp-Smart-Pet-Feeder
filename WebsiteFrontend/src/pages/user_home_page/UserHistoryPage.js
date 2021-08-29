import React from "react";

import Status from "../../components/Status/Status";
import ActiveSchedules from "../../components/ActiveSchedules/ActiveSchedules";
import Schedule from "../../components/ActiveSchedules/Schedule";

const UserStatusPage = () => {
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading pt-10">
            <h2
              className="text-uppercase"
              data-aos={"fade-up"}
              data-aos-delay={100}
              data-aos-duration={700}
            >
              Previous Schedules
            </h2>
            <h4
              className="text-uppercase"
              data-aos={"fade-up"}
              data-aos-delay={200}
              data-aos-duration={700}
            >
              No History
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserStatusPage;
