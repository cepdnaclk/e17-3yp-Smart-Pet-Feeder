import React from "react";
import ScheduleBar from "./ScheduleBar";
import schedule_data from "../../data/Schedule/schedule-data.json";
import ScheduleWrapper from "../Card/ScheduleWrapper";

export default function ScheduleHistory() {
  return (
    <section>
      {/*<ScheduleWrapper>*/}
      <div className="container">
        {schedule_data.map((data) => (
          <ScheduleBar
            title={data.title}
            description={data.description}
            status={data.status}
            key={data.id}
          />
        ))}
      </div>
      {/*</ScheduleWrapper>*/}
    </section>
  );
}
