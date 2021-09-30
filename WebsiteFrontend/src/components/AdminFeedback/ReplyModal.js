import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useDispatch, useSelector } from "react-redux";
import Fab from "@material-ui/core/Fab";
import DoneIcon from "@material-ui/icons/Done";
import * as NotificationActions from "../../store/actions/notifications";
import ContactUsForm from "../ContactUs/ContactUsForm";
import ReplyForm from "./ReplyForm";

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

export default function ReplyModal(props) {
  const admin_feedback = useSelector(
    (state) => state.admin_feedbacks.admin_feedbacks
  ).find((feedback) => feedback._id === props.id);

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
          <div
            className="pricing-box"
            style={{ width: 800, overflow: "auto", maxHeight: "95%" }}
          >
            {admin_feedback.isHandle && (
              <React.Fragment>
                <div align="middle">
                  <div className={"username_"}>User Feedback</div>
                </div>
              </React.Fragment>
            )}

            <div align="middle" className="pb-3">
              <h4 style={{ fontSize: 16 }}>{admin_feedback.title}</h4>
            </div>

            <div align="middle">
              <p className="">{admin_feedback.message}</p>
            </div>

            <hr
              style={{
                width: "100%",
                color: "black",
                height: "3px",
                marginBottom: 30,
              }}
            />

            <div align="middle">
              <div className={"username_"}>Admin Reply</div>
            </div>

            {!admin_feedback.isHandle && (
              <ReplyForm
                id={admin_feedback._id}
                userId={admin_feedback.userId}
              />
            )}

            {admin_feedback.isHandle && (
              <div align="middle">
                <p className="">{admin_feedback.reply}</p>
              </div>
            )}
          </div>
        </Fade>
      </Modal>
    </Container>
  );
}
