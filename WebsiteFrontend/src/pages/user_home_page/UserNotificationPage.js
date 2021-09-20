import React from "react";
import ScheduleHistory from "../../components/ScheduleHistory/ScheduleHistory";
import Notifications from "../../components/Notifications/Notifications";

const UserNotificationPage = () => {
  return (
    <section className="pb-2">
      {/*<div className="container h-100">*/}
      <div className="section-heading pt-20">
        <h2
          className="text-uppercase pb-0 mb-0"
          data-aos={"fade-up"}
          data-aos-delay={100}
          data-aos-duration={700}
        >
          Received Notifications
        </h2>
      </div>

      <Notifications />
    </section>

    // <section style={{ height: "87vh" }}>
    //   <div className="container h-100">
    //     <div className="row align-items-center" style={{ height: "70vh" }}>
    //       <div className="col-sm-8 section-heading">
    //         <h2
    //           className="text-uppercase"
    //           data-aos={"fade-up"}
    //           data-aos-delay={100}
    //           data-aos-duration={700}
    //         >
    //           Notifications
    //         </h2>
    //         <h4
    //           className="text-uppercase"
    //           data-aos={"fade-up"}
    //           data-aos-delay={200}
    //           data-aos-duration={700}
    //         >
    //           No Notifications
    //         </h4>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default UserNotificationPage;
