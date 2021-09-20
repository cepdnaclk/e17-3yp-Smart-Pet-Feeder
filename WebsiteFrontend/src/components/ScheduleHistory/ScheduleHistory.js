import React from "react";
import ScheduleBar from "./ScheduleBar";
import historyData from "../../data/history_data.json";

export default function ScheduleHistory() {
  return (
    // <section>
    <div className="container">
      {historyData.map((data) => (
        <ScheduleBar
          title={data.title}
          date_time={data.date_time}
          status={data.status}
          key={data.id}
        />
      ))}
    </div>
    // </section>
  );
}
