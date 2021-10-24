import React from "react";
// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormGroup from "@material-ui/core/FormGroup";
import Icofont from "react-icofont";
// import * as Functions from "../../helpers/functions";
import Fab from "@material-ui/core/Fab";
import ConnectIcon from "@material-ui/icons/Wifi";
import BlockIcon from "@material-ui/icons/Block";
import { width } from "dom-helpers";

const styleObj = {
  fontFamily: "sans-serif",
  fontSize: 14,
  color: "#4a54f1",
  textAlign: "left",
};

const User = ({ index, user, onClickHandler }) => {
  return (
    <div
      data-aos={"fade-up"}
      data-aos-delay={`${index}00`}
      data-aos-duration={700}
      className={"col-md-3 pricing-table col-sm-6"}
    >
      <div
        className="pricing-box"
        style={
          // schedule.status
          //   ? { backgroundColor: "#cce0ff" }
          //   : { backgroundColor: "white" }
          { minHeight: 320 }
        }
      >
        <Icofont icon="user" />

        <React.Fragment>
          <div className="email_">{user.email}</div>
          <div className="username_">
            <span>{user.name}</span>
          </div>
        </React.Fragment>

        <div className="row">
          <div
            className="col-12"
            onClick={onClickHandler.bind(null, user.userId, user.isActive)}
            id={index}
          >
            {user.isActive && (
              <Fab color="primary" aria-label="add">
                <ConnectIcon />
              </Fab>
            )}

            {!user.isActive && (
              <Fab color="secondary" aria-label="add">
                <BlockIcon />
              </Fab>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
