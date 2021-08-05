import React from "react";
import Schedule from "./Schedule";
import scheduleData from "../../data/Schedule/schedule-data.json";

const ActiveSchedules = () => (
  <section className="">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading">
          <h2
            className="text-uppercase"
            data-aos={"fade-up"}
            data-aos-delay={100}
            data-aos-duration={700}
          >
            Active Schedules
          </h2>
          <h4
            className="text-uppercase"
            data-aos={"fade-up"}
            data-aos-delay={200}
            data-aos-duration={700}
          >
            - Edit Feeding Schedules -
          </h4>
        </div>
      </div>
      <div className="row mt-50">
        {scheduleData.map((table, i) => (
          <Schedule
            key={table.id}
            icon={table.icon}
            title={table.title}
            remaining_time={table.remaining_time}
            details={table.details}
            featured={table.featured}
            index={i}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ActiveSchedules;
