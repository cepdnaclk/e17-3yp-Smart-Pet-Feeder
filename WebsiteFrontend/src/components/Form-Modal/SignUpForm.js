import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import useInput from "../../hooks/use-input";
import { API_URL } from "../../configs/Configs";

import Button from "@material-ui/core/Button";

import * as Validators from "../../helpers/validators";

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
  // paper: {
  //   backgroundColor: theme.palette.background.paper,
  //   border: '2px solid #000',
  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing(2, 4, 3),
  // },
}));
// const isPassword = (value) => value.trim() !== "";
// const isEmail = (value) => value.includes("@");

export default function LoginForm(props) {
  const classes = useStyles();

  const history = useHistory();

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(Validators.isValidString);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(Validators.isEmail);

  const {
    value: mobileNumber,
    isValid: mobileNumberIsValid,
    hasError: mobileNumberHasError,
    valueChangeHandler: mobileNumberChangeHandler,
    inputBlurHandler: mobileNumberBlurHandler,
    reset: resetMobileNumber,
  } = useInput(Validators.isMobileNumber);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(Validators.isPassword);

  const {
    value: confirmPassword,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPassword,
  } = useInput(Validators.isConfirmPassword.bind(null, password));

  let formIsValid = false;
  if (
    nameIsValid &&
    emailIsValid &&
    mobileNumberIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid
  ) {
    formIsValid = true;
  }

  const validateData = (event) => {
    let url;

    url = API_URL + "/auth/signup";

    event.preventDefault();
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        name: name,
        phoneNumber: mobileNumber,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = data.message;

            console.log(data.data);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        resetEmail();
        resetPassword();
        props.handleClose();
        history.replace("/*");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const closeFormHandler = () => {
    resetEmail();
    resetPassword();
    resetMobileNumber();
    resetPassword();
    resetName();
    resetConfirmPassword();
    props.handleClose();
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
        onClose={closeFormHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className="pricing-box" style={{ width: 400 }}>
            <form>
              <div align="middle">
                <h2>Register</h2>
              </div>

              <div>
                <input
                  type="input"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={nameChangeHandler}
                  onBlur={nameBlurHandler}
                  className="form-control invalid"
                  required="required"
                />
                {nameHasError && (
                  <p className="error-message">
                    *Name should contain at least 5 characters.
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  className="form-control invalid"
                  required="required"
                />
                {emailHasError && (
                  <p className="error-message">*Incorrect Email</p>
                )}
              </div>

              <div>
                <input
                  type="input"
                  id="mobile"
                  placeholder="Mobile Number"
                  value={mobileNumber}
                  onChange={mobileNumberChangeHandler}
                  onBlur={mobileNumberBlurHandler}
                  className="form-control invalid"
                  required="required"
                />
                {mobileNumberHasError && (
                  <p className="error-message">*Invalid mobile number</p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                  className="form-control"
                  required="required"
                />
                {passwordHasError && (
                  <p className="error-message">
                    *6 minimum characters with uppercase & number
                  </p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={confirmPasswordChangeHandler}
                  onBlur={confirmPasswordBlurHandler}
                  className="form-control invalid"
                  required="required"
                />
                {confirmPasswordHasError && (
                  <p className="error-message">*Password does not match</p>
                )}
              </div>

              <div className="form-actions">
                <Button
                  classes={{
                    root: classes.button, // class name, e.g. `root-x`
                    disabled: classes.disabled, // class name, e.g. `disabled-x`
                  }}
                  disabled={!formIsValid}
                  onClick={validateData}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </Container>
  );
}
