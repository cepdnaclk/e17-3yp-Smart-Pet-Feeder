import React from "react";
import Icofont from "react-icofont";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Schedule = ({
  icon,
  title,
  remaining_time,
  details,
  featured,
  index,
}) => {
  const classes = useStyles();

  return (
    <div
      data-aos={"fade-up"}
      data-aos-delay={`${index}00`}
      data-aos-duration={700}
      className={
        "col-md-3 pricing-table" +
        (featured === "true" ? "=featured" : "") +
        " col-sm-6"
      }
    >
      <div className="pricing-box">
        <Icofont icon={icon} />
        <h4>{title}</h4>
        <h2>
          AFTER
          <br />
          <span>{remaining_time}h</span>
        </h2>
        <ul>
          {details.map((feature) => (
            <li style={{ "font-size": "20px" }} key={feature.id}>
              {feature.title}
            </li>
          ))}
        </ul>

        <div className="row">
          <div className="col-6">
            <Fab color="primary" aria-label="add">
              <EditIcon />
            </Fab>
          </div>

          <div className="col-6">
            <Fab color="primary" aria-label="add">
              <DeleteIcon />
            </Fab>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
