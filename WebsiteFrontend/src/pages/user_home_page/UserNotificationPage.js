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
  );
};

export default UserNotificationPage;
