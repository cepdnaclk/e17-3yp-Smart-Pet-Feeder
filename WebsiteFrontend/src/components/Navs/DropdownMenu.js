import React, { useContext } from "react";
import { Link } from "react-scroll";
import { Link as DomLink, useHistory } from "react-router-dom";
import HistoryIcon from "@material-ui/icons/History";
import InfoIcon from "@material-ui/icons/Info";
import VideoIcon from "@material-ui/icons/OndemandVideo";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationAddIcon from "@material-ui/icons/AddAlert";
import MessageIcon from "@material-ui/icons/Email";
import FeedbackIcon from "@material-ui/icons/ClearAll";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import GroupIcon from "@material-ui/icons/Group";
import TelegramIcon from "@material-ui/icons/Telegram";

import useWindowResizeListener from "../../helpers/useWindowResizeListener";
import { useDispatch, useSelector } from "react-redux";

import * as authActions from "../../store/actions/auth";
import * as adminAuthActions from "../../store/actions/admin_auth";

const DropdownMenu = (props) => {
  const isLoggedIn = useSelector((state) => {
    return !!state.auth.token;
  });

  const isAdminLoggedIn = useSelector((state) => {
    return !!state.admin_auth.token;
  });

  const isHomePage = !isLoggedIn && !isAdminLoggedIn;

  const isActiveNotifications = useSelector(
    (state) => state.notifications.active
  );

  useWindowResizeListener();
  const dispatch = useDispatch();

  const logoutClickHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  };

  const adminLogoutClickHandler = (e) => {
    e.preventDefault();
    dispatch(adminAuthActions.logout());
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
        {isHomePage && (
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
        {isHomePage && (
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
        {isHomePage && (
          <DomLink
            to={"AdminLogin"}
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
            onClick={props.handleAdminLogin}
          >
            Admin
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
            {isActiveNotifications ? (
              <NotificationAddIcon className="pb-1" color="secondary" />
            ) : (
              <NotificationsIcon className="pb-1" />
            )}
            {/*<NotificationsIcon className="pb-1" />*/}
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

        {isAdminLoggedIn && (
          <DomLink
            to={"/Admin Users Page"}
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
            onClick={(e) => {
              e.preventDefault();
              history.push(`${process.env.PUBLIC_URL}/admin/users`);
            }}
          >
            Users
            <GroupIcon className="pb-1" />
          </DomLink>
        )}

        {isAdminLoggedIn && (
          <DomLink
            to={"/Admin Feedback Page"}
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
            onClick={(e) => {
              e.preventDefault();
              history.push(`${process.env.PUBLIC_URL}/admin/feedback`);
            }}
          >
            Feedbacks
            <FeedbackIcon className="pb-1" />
          </DomLink>
        )}

        {isAdminLoggedIn && (
          <DomLink
            to={"/Admin Message Page"}
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
            onClick={(e) => {
              e.preventDefault();
              history.push(`${process.env.PUBLIC_URL}/admin/message`);
            }}
          >
            Message
            <MessageIcon className="pb-1" />
          </DomLink>
        )}

        {isAdminLoggedIn && (
          <DomLink
            to={"/Admin Broadcast Page"}
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
            onClick={(e) => {
              e.preventDefault();
              history.push(`${process.env.PUBLIC_URL}/admin/broadcast`);
            }}
          >
            Broadcast
            <TelegramIcon className="pb-1" />
          </DomLink>
        )}

        {isAdminLoggedIn && (
          <DomLink
            to={"/Logout Admin"}
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
            onClick={adminLogoutClickHandler}
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
