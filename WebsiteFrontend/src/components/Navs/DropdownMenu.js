import React, { useContext } from "react";
import { Link } from "react-scroll";
import { Link as DomLink, useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HistoryIcon from "@material-ui/icons/History";
import InfoIcon from "@material-ui/icons/Info";
import VideoIcon from "@material-ui/icons/OndemandVideo";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MessageIcon from "@material-ui/icons/Message";
import LogoutIcon from "@material-ui/icons/ExitToApp";

import useWindowResizeListener from "../../helpers/useWindowResizeListener";
import AuthContext from "../../stores/auth-context";
import { useDispatch, useSelector } from "react-redux";

import * as authActions from "../../store/actions/auth";

const DropdownMenu = (props) => {
  const isLoggedIn = useSelector((state) => {
    return !!state.auth.token;
  });

  useWindowResizeListener();
  const dispatch = useDispatch();

  const logoutClickHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  };
  const history = useHistory();

  return (
    <div className="collapse navbar-collapse" id="navbar-menu">
      <ul className="nav navbar-nav" data-in="fadeIn" data-out="fadeOut">
        {props.data &&
          props.data.map((dropdown, i) => (
            <Link
              className={
                props.fixed || props.type === "white" ? "white_bg" : "black_bg"
              }
              activeclassname={"active"}
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
            to="Login"
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
            onClick={props.isClickedLog}
          >
            Login
            <i className="icofont icofont-login" />
          </DomLink>
        )}
        {!isLoggedIn && (
          <DomLink
            to={"Signup"}
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
            onClick={props.signClickedHandler}
          >
            SignUp
            <i className="icofont icofont-login" />
          </DomLink>
        )}
        {isLoggedIn && (
          <DomLink
            to={"/Status"}
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
            onClick={(e) => {
              e.preventDefault();

              history.push(`${process.env.PUBLIC_URL}/user/status`);
            }}
          >
            Status
            <InfoIcon className="pb-1" />
          </DomLink>
        )}
        {isLoggedIn && (
          <DomLink
            to={"/History"}
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
            onClick={(e) => {
              e.preventDefault();
              history.push(`${process.env.PUBLIC_URL}/user/history`);
            }}
          >
            History
            <HistoryIcon className="pb-1" />
          </DomLink>
        )}
        {isLoggedIn && (
          <DomLink
            to={"/Video"}
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
            onClick={(e) => {
              e.preventDefault();
              history.push(`${process.env.PUBLIC_URL}/user/video`);
            }}
          >
            Video
            <VideoIcon className="pb-1" />
          </DomLink>
        )}
        {isLoggedIn && (
          <DomLink
            to={"/Notifications"}
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
            onClick={(e) => {
              e.preventDefault();
              history.push(`${process.env.PUBLIC_URL}/user/notifications`);
            }}
          >
            Notifications
            <NotificationsIcon className="pb-1" />
          </DomLink>
        )}

        {isLoggedIn && (
          <DomLink
            to={"/Contact Us"}
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
            onClick={(e) => {
              e.preventDefault();
              history.push(`${process.env.PUBLIC_URL}/user/contactus`);
            }}
          >
            Contact Us
            <MessageIcon className="pb-1" />
          </DomLink>
        )}
        {isLoggedIn && (
          <DomLink
            to={"/Logout"}
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
            onClick={logoutClickHandler}
          >
            Logout
            <LogoutIcon className="pb-1" />
          </DomLink>
        )}
      </ul>
    </div>
  );
};

export default DropdownMenu;
