import React from "react";
// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormGroup from "@material-ui/core/FormGroup";
import Icofont from "react-icofont";
// import * as Functions from "../../helpers/functions";
import Fab from "@material-ui/core/Fab";
import ConnectIcon from "@material-ui/icons/Wifi";
import BlockIcon from "@material-ui/icons/Block";

const styleObj = {
  fontFamily: "sans-serif",
  fontSize: 14,
  color: "#4a54f1",
  textAlign: "left",
};

const User = ({ index, user }) => {
  return (
    <div
      data-aos={"fade-up"}
      data-aos-delay={`${index}00`}
      data-aos-duration={700}
      className={"col-md-3 pricing-table col-sm-6"}
    >
      <div
        className="pricing-box"
        // style={
        //   schedule.status
        //     ? { backgroundColor: "#cce0ff" }
        //     : { backgroundColor: "white" }
        // }
      >
        <Icofont icon="user" />

        <React.Fragment>
          <div className="email_">sachinthamadhushanka9@gmail.com</div>
          <div className="username_">
            <span>Sachintha Madhushanka</span>
          </div>
        </React.Fragment>

        <div className="row">
          <div
            className="col-12"
            // onClick={editHandler.bind(null, schedule._id, schedule.status)}
          >
            <Fab color="primary" aria-label="add">
              <ConnectIcon />
            </Fab>

            <Fab color="secondary" aria-label="add">
              <BlockIcon />
            </Fab>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
