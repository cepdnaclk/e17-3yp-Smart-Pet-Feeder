import React from "react";
import ScheduleHistory from "../../components/ScheduleHistory/ScheduleHistory";

const UserHistoryPage = () => {
  return (
    <section className="pb-2">
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
  );
};

export default UserHistoryPage;
