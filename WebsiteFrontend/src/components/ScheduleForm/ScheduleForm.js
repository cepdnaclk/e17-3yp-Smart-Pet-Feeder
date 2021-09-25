import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Icofont from "react-icofont";
import Fab from "@material-ui/core/Fab";
// import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import { useDispatch, useSelector } from "react-redux";
import * as Functions from "../../helpers/functions";
import * as Validators from "../../helpers/validators";
import useInput from "../../hooks/use-input";
import * as ScheduleActions from "../../store/actions/schedules";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
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
  // paper: {
  //   backgroundColor: theme.palette.background.paper,
  //   border: '2px solid #000',
  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing(2, 4, 3),
  // },
}));

export default function ScheduleForm(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  let schedule = null;
  if (props.status === true) {
    schedule = useSelector((state) => {
      return state.schedules.schedules.find((prod) => prod._id === props._id);
    });
  }

  const [date, setDate] = useState(
    Functions.extractDate(
      new Date(
        schedule ? new Date(schedule.date_time) : new Date().setHours(23)
      )
    )
  );
  const [time, setTime] = useState(
    Functions.extractTime(
      new Date(
        schedule ? new Date(schedule.date_time) : new Date().setHours(23)
      )
    )
  );

  const date_time = Functions.combineDateTime(date, time);

  const isValidDateTime = Validators.isValidDateTime(
    Functions.combineDateTime(date, time)
  );

  const {
    value: title,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput(schedule ? schedule.title : "", Validators.isNotEmpty);

  const isFormValid = titleIsValid && isValidDateTime;

  const submitHandler = () => {
    if (!isFormValid) {
      return;
    }

    if (schedule) {
      dispatch(ScheduleActions.updateSchedule(schedule._id, title, date_time));
    } else {
      dispatch(ScheduleActions.createSchedule(title, date_time));
    }

    props.handleClose();
  };

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  const onChangeTime = (event) => {
    setTime(event.target.value);
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
            <Icofont />
            <div className="form-floating">
              <input
                type="text"
                name="title"
                className="form-control"
                id="title"
                required="required"
                placeholder="Title"
                data-error="Title cannot be empty"
                value={title}
                onChange={titleChangeHandler}
                onBlur={titleBlurHandler}
              />
              <label htmlFor="name">Title</label>
              {titleHasError && (
                <p className="error-message">* Title should not be empty</p>
              )}
            </div>

            <div className="form-floating">
              <input
                type="date"
                name="date"
                className="form-control"
                id="date"
                required="required"
                placeholder="Date"
                value={date}
                onChange={onChangeDate}
              />
              <label htmlFor="date">Date</label>
              {/*<div className="help-block with-errors mt-20" />*/}
            </div>
            <div className="form-floating">
              <input
                type="time"
                name="time"
                className="form-control"
                id="time"
                required="required"
                placeholder="Time"
                value={time}
                onChange={onChangeTime}
              />
              <label htmlFor="time">Time</label>
              {/*<div className="help-block with-errors mt-20" />*/}
            </div>

            {!isValidDateTime && (
              <p className="error-message">* Invalid date</p>
            )}
            <div className="row">
              <div className="col-6" onClick={props.handleClose}>
                <Fab color="secondary" aria-label="add">
                  <CloseIcon />
                </Fab>
              </div>

              <div className="col-6" onClick={submitHandler}>
                <Fab color="primary" aria-label="add" disabled={!isFormValid}>
                  <DoneIcon />
                </Fab>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </Container>
  );
}
