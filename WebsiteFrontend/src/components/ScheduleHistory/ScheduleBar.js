import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { Alert, AlertTitle } from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";
import { Alert, AlertTitle } from "@material-ui/lab";
import Icofont from "react-icofont";
import * as Functions from "../../helpers/functions";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  schedule_bar: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  },
}));

export default function ScheduleBar({ title, date_time, status }) {
  return (
    <div className="mt-30 mb-30">
      <div
        className="row pricing-box pt-4 pb-4 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2"
        style={{ boxShadow: "0 10px 30px 5px rgba(17, 21, 23, 0.1)" }}
      >
        <div className="col-md-2">
          <div className="mt-2">
            <Icofont icon="dog" size="10" style={{ fontSize: "80px" }} />
          </div>
        </div>

        <div className="col-md-8">
          <h4>{title}</h4>
          {/*<h2>*/}
          {/*  <span>Remaining Time</span>*/}
          {/*</h2>*/}

          <div className="row pt-3 pb-2">
            <div className="col-6">
              <Icofont icon="calendar" size="10" style={{ fontSize: "20px" }} />
              <span style={{ fontSize: "18px" }}>
                <b>&nbsp; &nbsp;{Functions.extractDate(date_time)}</b>
              </span>
            </div>
            <div className="col-6">
              <Icofont
                icon="clock-time"
                size="10"
                style={{ fontSize: "20px" }}
              />
              <span style={{ fontSize: "18px" }}>
                <b>&nbsp; &nbsp;{Functions.extractTime(date_time)}</b>
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <div className="mt-3">
            <Icofont
              icon={status === 1 ? "check-circled" : "close-circled"}
              size="10"
              style={{ color: status === true ? "green" : "red" }}
            />
          </div>

          <div
            className="mt-2"
            style={{ fontSize: "16px", color: status === true ? "green" : "red" }}
          >
            <b>{status === true ? "Completed" : "Incomplete"}</b>
          </div>
        </div>

        {/*<div className="row">*/}
        {/*  <div*/}
        {/*    className="col-6"*/}
        {/*    onClick={editHandler.bind(null, schedule._id, schedule.status)}*/}
        {/*  >*/}
        {/*    <Fab color="primary" aria-label="add">*/}
        {/*      <EditIcon />*/}
        {/*    </Fab>*/}
        {/*  </div>*/}

        {/*  <div*/}
        {/*    className="col-6"*/}
        {/*    onClick={*/}
        {/*      schedule.status &&*/}
        {/*      deleteHandler.bind(null, schedule._id, schedule.title)*/}
        {/*    }*/}
        {/*  >*/}
        {/*    <Fab color="secondary" aria-label="add" disabled={!schedule.status}>*/}
        {/*      <DeleteIcon />*/}
        {/*    </Fab>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
