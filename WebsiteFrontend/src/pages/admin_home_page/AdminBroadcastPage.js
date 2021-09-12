import React from "react";
import BroadcastForm from "../../components/Broadcast/Broadcast";

import Status from "../../components/Status/Status";
import ActiveSchedules from "../../components/ActiveSchedules/ActiveSchedules";
import Schedule from "../../components/ActiveSchedules/Schedule";

const AdminHistoryPage = () => {
  return (
    <section className="" style={{
      background: `url(${require("../../assets/images/background/blue.png")}) center center / cover scroll no-repeat`,
    }}>
     
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading pt-10">
            <h2
              className="text-uppercase"
              data-aos={"fade-up"}
              data-aos-delay={100}
              data-aos-duration={700}
            >
              Broadcast
            </h2>
            <h4
              className="text-uppercase"
              data-aos={"fade-up"}
              data-aos-delay={200}
              data-aos-duration={700}
            >
              send broadcast to all
            </h4>
            <BroadcastForm/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHistoryPage;
