import React, { useState } from "react";
import Icofont from "react-icofont";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import statusData from "../../data/Status/status-data.json";

const Status = ({ bg, type }) => {
  const [viewed, setViewed] = useState(true);

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  return (
    <section className={"pt-120 pb-80 " + (bg ? bg : "dark-bg")}>
      <div className={"container" + (type === "wide" ? "-fluid" : "")}>
        <div className="row">
          {statusData.map((counter, i) => (
            <div
              key={counter.id}
              className="col-md-3 counter text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.1s"
              data-aos-delay={`${i}00`}
              data-aos={"fade-up"}
              data-aos-easing={"ease-in-sine"}
            >
              {i === 0 && (
                <Icofont
                  icon={counter.value === 1 ? "wifi" : "ban"}
                  className="light-icon font-30px"
                />
              )}

              {i !== 0 && (
                <Icofont icon={counter.icon} className="light-icon font-30px" />
              )}
              <h2
                className={
                  "count font-700 " + (bg === "white-bg" ? "" : "white-color")
                }
              >
                {i !== 0 && (
                  <VisibilitySensor onChange={viewChangeHandler} delayedCall>
                    <CountUp end={viewed ? counter.value : 0} />
                  </VisibilitySensor>
                )}

                {i === 0 && (counter.value === 1 ? "ON" : "OFF")}
                {i === 1 && "%"}
                {i === 3 && "h"}
              </h2>
              <h3 className={bg === "white-bg" ? "dark-color" : ""}>
                {counter.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Status;
