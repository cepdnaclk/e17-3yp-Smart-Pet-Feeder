import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import useInput from "../../hooks/use-input";
import Button from "@material-ui/core/Button";

import * as Validators from "../../helpers/validators";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../../store/actions/auth";
import Loader from "react-loader-spinner";
import Icofont from "react-icofont";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import * as NotificationActions from "../../store/actions/notifications";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,

    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    // $disabled is a reference to the local disabled
    // rule within the same style sheet.
    // By using &, we increase the specificity.
    "&$disabled": {
      background: "rgba(0, 0, 0, 0.12)",
      color: "white",
      boxShadow: "none",
    },
  },
  disabled: {},
}));

export default function MessageModal(props) {
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  const notification = notifications.find(
    (notification) => notification._id === props.id
  );

  const dispatch = useDispatch();
  const classes = useStyles();

  const markAsRead = () => {
    dispatch(NotificationActions.markAsRead(props.id));
    props.handleClose();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className="pricing-box" style={{ width: 400 }}>
            <div align="middle" className="pb-3">
              <h4 style={{ fontSize: 16 }}>{notification.title}</h4>
            </div>

            <div align="middle">
              <p className="">{notification.message}</p>
            </div>
            <div
              align="middle"
              className="pt-3"
              onClick={!notification.isRead ? markAsRead : () => {}}
            >
              <Fab
                color="primary"
                aria-label="add"
                size="medium"
                disabled={notification.isRead}
              >
                <DoneIcon />
              </Fab>
            </div>
          </div>
        </Fade>
      </Modal>
    </Container>
  );
}
