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

export default function ScheduleBar({ title, description, status }) {
  return (
    <div className="mt-30 mb-30">
      <div
        className="row pricing-box pt-4 pb-4 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2"
        style={{ "box-shadow": "0 10px 30px 5px rgba(17, 21, 23, 0.1)" }}
      >
        <div className="col-2">
          <div className="mt-2">
            <Icofont icon="dog" size="10" style={{ "font-size": "80px" }} />
          </div>
        </div>

        <div className="col-8">
          <h4>Feeding Time 1</h4>
          {/*<h2>*/}
          {/*  <span>Remaining Time</span>*/}
          {/*</h2>*/}

          <div className="row pt-3 pb-2">
            <div className="col-6">
              <Icofont
                icon="calendar"
                size="10"
                style={{ "font-size": "20px" }}
              />
              <l1 style={{ "font-size": "18px" }}>
                <b>&nbsp; &nbsp;2021/09/23</b>
              </l1>
            </div>
            <div className="col-6">
              <Icofont
                icon="clock-time"
                size="10"
                style={{ "font-size": "20px" }}
              />
              <l1 style={{ "font-size": "18px" }}>
                <b>&nbsp; &nbsp;08:25</b>
              </l1>
            </div>
          </div>
        </div>

        <div className="col-2">
          <div className="mt-3">
            <Icofont
              icon="check-circled"
              size="10"
              style={{ color: "green" }}
            />
            {/*<Icofont icon="close-circled" size="10" style={{ color: "red" }} />*/}
          </div>

          <div className="mt-2" style={{ "font-size": "16px", color: "green" }}>
            <b>Completed</b>

            {/*<b>In Completed</b>*/}
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
