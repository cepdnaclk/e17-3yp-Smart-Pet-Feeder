import React from "react";
import { Link } from "react-scroll";
import { Link as DomLink } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ScheduleIcon from "@material-ui/icons/Schedule";
import InfoIcon from "@material-ui/icons/Info";

import useWindowResizeListener from "../../helpers/useWindowResizeListener";

let isLoggedIn = true;
const DropdownMenu = (props) => {
  useWindowResizeListener();

  return (
    <div className="collapse navbar-collapse" id="navbar-menu">
      <ul className="nav navbar-nav" data-in="fadeIn" data-out="fadeOut">
        {props.data &&
          props.data.map((dropdown, i) => (
            <Link
              className={
                props.fixed || props.type === "white" ? "white_bg" : "black_bg"
              }
              activeClassName={"active"}
              to={dropdown.to}
              spy={true}
              duration={200}
              delay={0}
              key={i}
              smooth={"easeInOutQuart"}
            >
              {dropdown.title}
            </Link>
          ))}
      </ul>

      <ul className="nav navbar-nav" data-in="fadeIn" data-out="fadeOut">
        {!isLoggedIn && (
          <DomLink
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
          >
            Login
            <i className="icofont icofont-login" />
          </DomLink>
        )}

        {!isLoggedIn && (
          <DomLink
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
          >
            SignUp
            <i className="icofont icofont-login" />
          </DomLink>
        )}

        {isLoggedIn && (
          <DomLink
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
          >
            Status
            <InfoIcon className="pb-1" />
          </DomLink>
        )}

        {isLoggedIn && (
          <DomLink
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
          >
            Schedule
            <ScheduleIcon className="pb-1" />
          </DomLink>
        )}

        {isLoggedIn && (
          <DomLink
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
          >
            Logout
            <ExitToAppIcon className="pb-1" />
          </DomLink>
        )}
      </ul>
    </div>
  );
};

export default DropdownMenu;
