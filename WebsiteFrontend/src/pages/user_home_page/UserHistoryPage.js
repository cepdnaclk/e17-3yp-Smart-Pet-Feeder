import React from "react";
import { width } from "dom-helpers";
import ScheduleHistory from "../../components/ScheduleHistory/ScheduleHistory";

// import Status from "../../components/Status/Status";
// import ActiveSchedules from "../../components/ActiveSchedules/ActiveSchedules";
// import Schedule from "../../components/ActiveSchedules/Schedule";

const UserHistoryPage = () => {
  return (
    <section>
      {/*<div className="container h-100">*/}
      <div className="section-heading pt-20">
        <h2
          className="text-uppercase pb-0 mb-0"
          data-aos={"fade-up"}
          data-aos-delay={100}
          data-aos-duration={700}
        >
          Schedules History
        </h2>
      </div>

      <ScheduleHistory />
    </section>

    // <section style={{ height: "87vh" }}>
    //   <div className="container h-100">
    //     {/*<div className="row align-items-center" style={{ height: "70vh" }}>*/}
    //     {/*  <div className="col-sm-8 section-heading">*/}
    //     {/*    <h2*/}
    //     {/*      className="text-uppercase"*/}
    //     {/*      data-aos={"fade-up"}*/}
    //     {/*      data-aos-delay={100}*/}
    //     {/*      data-aos-duration={700}*/}
    //     {/*    >*/}
    //     {/*      Schedules History*/}
    //     {/*    </h2>*/}
    //     {/*    <h4*/}
    //     {/*      className="text-uppercase"*/}
    //     {/*      data-aos={"fade-up"}*/}
    //     {/*      data-aos-delay={200}*/}
    //     {/*      data-aos-duration={700}*/}
    //     {/*    >*/}
    //     {/*      No History*/}
    //     {/*    </h4>*/}
    //     {/*  </div>*/}
    //     {/*</div>*/}
    //   </div>
    // </section>
  );
};

export default UserHistoryPage;
