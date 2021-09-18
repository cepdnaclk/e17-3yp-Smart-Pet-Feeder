import React from "react";
import Icofont from "react-icofont";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";

const msToTime = (duration) => {
  let minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes;
};

const Schedule = ({ index, schedule, editHandler, deleteHandler }) => {
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
          schedule.status
            ? { backgroundColor: "#cce0ff" }
            : { backgroundColor: "white" }
        }
      >
        <Icofont icon="dog" />

        {schedule.status && (
          <React.Fragment>
            <h4>{schedule.title}</h4>
            <h2>
              AFTER
              <br />
              <span>
                {msToTime(
                  Date.parse(schedule.date + "," + schedule.time) - Date.now()
                )}
                h
              </span>
            </h2>
            <ul>
              <li style={{ "font-size": "20px" }}>{schedule.date}</li>

              <li style={{ "font-size": "20px" }}>{schedule.time}</li>
            </ul>
          </React.Fragment>
        )}

        {!schedule.status && (
          <React.Fragment>
            <h4>Not Set Yet</h4>
            <h2>
              <span>Remaining Time</span>
            </h2>
            <ul>
              <li>Date</li>

              <li>Time</li>
            </ul>
          </React.Fragment>
        )}

        <div className="row">
          <div className="col-6" onClick={editHandler.bind(null, schedule)}>
            <Fab color="primary" aria-label="add">
              <EditIcon />
            </Fab>
          </div>

          <div className="col-6" onClick={deleteHandler.bind(null, schedule)}>
            <Fab color="secondary" aria-label="add">
              <DeleteIcon />
            </Fab>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
