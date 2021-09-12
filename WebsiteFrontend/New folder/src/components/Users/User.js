import React from "react";
import SwitchLabels from "../Switch/Switch";

const styleObj = {
  fontFamily: "sans-serif",
  fontSize: 14,
  color: "#4a54f1",
  textAlign: "left",

}


const User = ({ index, schedule}) => {
  return (
    <div
      data-aos={"fade-up"}
      data-aos-delay={`${index}00`}
      data-aos-duration={700}
      className={
        "col-md-3 pricing-table" +
        (schedule.featured === "true" ? "=featured" : "") +
        " col-sm-6"
      }
    >
      <div
        className="pricing-box"
        style={
          schedule.connect
            ? { "background-color": "#cce0ff",
           "fontFamily":"sans-serif"}
            : { "background-color": "brown" }
        }
      >

        <div style={styleObj}>
        {schedule.connect && (
          <React.Fragment>
            <h4 >{schedule.name}</h4>
            <h4>{schedule.email}</h4>
          </React.Fragment>
        )}
        </div>

        {!schedule.connect && (
          <React.Fragment>
            <h4>None</h4>
            <h4>None</h4>
          </React.Fragment>
        )}
               <SwitchLabels/>
      </div>
    </div>
  );
};

export default User;