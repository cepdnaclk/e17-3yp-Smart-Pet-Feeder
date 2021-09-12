import React, { useContext } from "react";
import { Link } from "react-scroll";
import { Link as DomLink, useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";


import useWindowResizeListener from "../../helpers/useWindowResizeListener";
import AuthContext from "../../stores/auth-context";

let isLoggedIn = false;
const DropdownMenu = (props) => {
  useWindowResizeListener();
  const authCtx = useContext(AuthContext);
  isLoggedIn = authCtx.isLoggedIn;

  const logoutClickHandler = () => {
    authCtx.logout();
  };
  const history = useHistory();

  return (
    <div className="collapse navbar-collapse" id="navbar-menu">
      <ul className="nav navbar-nav" data-in="fadeIn" data-out="fadeOut">
        {props.data &&
          props.data.map((dropdown, i) => (
            <Link
              className={
                props.fixed || props.type === "white" ? "white_bg2" : "black_bg"
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
              props.fixed || props.type === "white" ? "white_bg2" : "black_bg"
            }
            onClick={props.isClickedLog}
          >
            Login
            <i className="icofont icofont-login" />
          </DomLink>
        )}

        {!isLoggedIn && (
          <DomLink
            className={
              props.fixed || props.type === "white" ? "white_bg2" : "black_bg"
            }
            onClick={props.signClickedHandler}
          >
            SignUp
            <i className="icofont icofont-login" />
          </DomLink>
        )}

        {isLoggedIn && (
          <DomLink
            className={
              props.fixed || props.type === "white" ? "white_bg2" : "black_bg"
            }
            onClick={() => {
              history.push(`${process.env.PUBLIC_URL}/admin/`);
            }}
          >
          HOME
          </DomLink>
        )}

        {isLoggedIn && (
          <DomLink
            className={
              props.fixed || props.type === "white" ? "white_bg2" : "black_bg"
            }
            onClick={() => {
              history.push(`${process.env.PUBLIC_URL}/admin/users`);
            }}
          >
          USERS
          </DomLink>
        )}
        
        {isLoggedIn && (
          <DomLink
            className={
              props.fixed || props.type === "white" ? "white_bg2" : "black_bg"
            }
            onClick={() => {
              history.push(`${process.env.PUBLIC_URL}/admin/broadcast`);
            }}
          >
          BROADCAST
          </DomLink>
        )}

        {isLoggedIn && (
          <DomLink
            className={
              props.fixed || props.type === "white" ? "white_bg2" : "black_bg"
            }
            onClick={() => {
              history.push(`${process.env.PUBLIC_URL}/admin/feedback`);
            }}
          >
           FEEDBACKS
          </DomLink>
        )}

        {isLoggedIn && (
          <DomLink
            className={
              props.fixed || props.type === "white" ? "white_bg2" : "black_bg"
            }
            onClick={logoutClickHandler}
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
