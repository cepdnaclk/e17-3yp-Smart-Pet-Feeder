import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Icofont from "react-icofont";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";

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
  console.log("Schedule Form beg = " + props.id);

  const [title, setTitle] = useState(props.title);
  const [date, setDate] = useState(props.date);
  const [time, setTime] = useState(props.time);

  useEffect(() => {
    setTitle(props.title);
    setDate(props.date);
    setTime(props.time);
  }, [props.title, props.date, props.time]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const submitHandler = (event) => {
    const scheduleData = {
      id: props.id,
      title: title,
      date: date,
      time: time,
    };
    console.log("Schedule Form scheduleData = " + scheduleData.id);

    props.submitSchedule(scheduleData);
  };
  return (
    <Container component="main" maxWidth="xs">
      {/*<Button variant="contained" color="secondary" onClick={handleOpen}>*/}
      {/*  Open Animated Modal*/}
      {/*</Button>*/}

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
                // data-error="Title cannot be empty"
                value={title}
                onChange={handleTitleChange}
              />
              <label htmlFor="name">Title</label>
              {/*<div className="help-block with-errors mt-20" />*/}
            </div>

            <div className="form-floating">
              <input
                type="date"
                name="date"
                className="form-control"
                id="date"
                required="required"
                placeholder="Date"
                // data-error="Title cannot be empty"
                value={date}
                onChange={handleDateChange}
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
                // data-error="Title cannot be empty"
                value={time}
                onChange={handleTimeChange}
              />
              <label htmlFor="time">Time</label>
              {/*<div className="help-block with-errors mt-20" />*/}
            </div>

            <div className="row">
              <div className="col-6" onClick={props.handleClose}>
                <Fab color="secondary" aria-label="add">
                  <CloseIcon />
                </Fab>
              </div>

              <div className="col-6" onClick={submitHandler}>
                <Fab color="primary" aria-label="add">
                  <DoneIcon />
                </Fab>
              </div>
            </div>
          </div>

          {/*<div className={classes.paper}>*/}
          {/*  <Avatar className={classes.avatar}>*/}
          {/*    <LockOutlinedIcon />*/}
          {/*  </Avatar>*/}
          {/*  <Typography component="h1" variant="h5">*/}
          {/*    Sign in*/}
          {/*  </Typography>*/}
          {/*  <form className={classes.form} noValidate>*/}
          {/*    <TextField*/}
          {/*      variant="outlined"*/}
          {/*      margin="normal"*/}
          {/*      required*/}
          {/*      fullWidth*/}
          {/*      id="email"*/}
          {/*      label="Email Address"*/}
          {/*      name="email"*/}
          {/*      autoComplete="email"*/}
          {/*      autoFocus*/}
          {/*    />*/}
          {/*    <TextField*/}
          {/*      variant="outlined"*/}
          {/*      margin="normal"*/}
          {/*      required*/}
          {/*      fullWidth*/}
          {/*      name="password"*/}
          {/*      label="Password"*/}
          {/*      type="password"*/}
          {/*      id="password"*/}
          {/*      autoComplete="current-password"*/}
          {/*    />*/}
          {/*    <FormControlLabel*/}
          {/*      control={<Checkbox value="remember" color="primary" />}*/}
          {/*      label="Remember me"*/}
          {/*    />*/}
          {/*    <Button*/}
          {/*      type="submit"*/}
          {/*      fullWidth*/}
          {/*      variant="contained"*/}
          {/*      color="primary"*/}
          {/*      className={classes.submit}*/}
          {/*    >*/}
          {/*      Sign In*/}
          {/*    </Button>*/}
          {/*    <Grid container>*/}
          {/*      <Grid item xs>*/}
          {/*        <Link href="#" variant="body2">*/}
          {/*          Forgot password?*/}
          {/*        </Link>*/}
          {/*      </Grid>*/}
          {/*      <Grid item>*/}
          {/*        <Link href="" variant="body2">*/}
          {/*          {"Don't have an account? Sign Up"}*/}
          {/*        </Link>*/}
          {/*      </Grid>*/}
          {/*    </Grid>*/}
          {/*  </form>*/}
          {/*</div>*/}
        </Fade>
      </Modal>
    </Container>
  );
}
