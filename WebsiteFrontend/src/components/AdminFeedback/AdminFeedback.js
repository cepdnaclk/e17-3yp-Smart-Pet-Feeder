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
import { extractDate } from "../../helpers/functions";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  schedule_bar: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  },
}));

export default function AdminFeedback({
  id,
  title,
  date_time,
  isRead,
  showMessage,
}) {
  const email = useSelector((state) => state.admin_feedbacks.admin_feedbacks);
  return (
    <div className="mt-30 mb-30" onClick={showMessage.bind(null, id)}>
      <div
        className="row pricing-box notification pt-4 pb-4 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2"
        style={{ backgroundColor: isRead === false ? "#CBFBFD" : "orange" }}
      >
        <div className="col-md-2">
          <div style={{ marginTop: 32 }}>
            <Icofont icon="email" size="10" style={{ fontSize: "80px" }} />
          </div>
        </div>

        <div className="col-md-8">
          <h4 style={{ fontSize: 16 }}>{title}</h4>
          <div className="username_"></div>

          <div className="row pt-1 pb-1">
            <div className="col-6">
              <Icofont icon="calendar" size="10" style={{ fontSize: "20px" }} />
              <span style={{ fontSize: "18px" }}>
                <b>&nbsp; &nbsp;{Functions.extractDate(new Date(date_time))}</b>
              </span>
            </div>
            <div className="col-6">
              <Icofont
                icon="clock-time"
                size="10"
                style={{ fontSize: "20px" }}
              />
              <span style={{ fontSize: "18px" }}>
                <b>
                  &nbsp; &nbsp; {Functions.extractTime(new Date(date_time))}
                </b>
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-2" style={{ marginTop: 32 }}>
          <div>
            <Icofont
              icon={isRead === false ? "arrow-up" : "check-circled"}
              size="10"
              style={{ color: isRead === false ? "green" : "orange" }}
            />
          </div>

          <div
            className="mt-2"
            style={{
              fontSize: "16px",
              color: isRead === false ? "green" : "orange",
            }}
          >
            <b>{isRead === false ? "Not Resolved" : "Resolved"}</b>
          </div>
        </div>
      </div>
    </div>
  );
}
