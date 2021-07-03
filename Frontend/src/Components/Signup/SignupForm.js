import useInput from "../../hooks/use-input";
import {
  Container,
  Row,
  Button,
  FormGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import styles from "../../Styles.module.css";
import { useState } from "react";
import { Prompt } from "react-router-dom";
import {
  isNotEmpty,
  isEmail,
  isValidMobileNumber,
  isValidPassword,
  isValidConfirmPassword,
} from "../Validation/Validation";

const axios = require("axios");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty); // pass validation func

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty); // pass validation func

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail); // pass validation func

  const {
    value: mobileNumberValue,
    isValid: mobileNumberIsValid,
    hasError: mobileNumberHasError,
    valueChangeHandler: mobileNumberChangeHandler,
    inputBlurHandler: mobileNumberBlurHandler,
    reset: resetMobileNumber,
  } = useInput(isValidMobileNumber); // pass validation func

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isValidPassword); // pass validation func

  const {
    value: confirmPasswordValue,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPassword,
  } = useInput(isValidConfirmPassword.bind(null, passwordValue)); // pass validation func

  // Form validation logic (This will check for every key stroke)
  let formIsValid = false;

  const [isEntering, setIsEntering] = useState(false);

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    mobileNumberIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(formIsValid);
    if (!formIsValid) {
      return;
    }

    // console.log("Submitted!");
    // console.log(firstNameValue, lastNameValue, emailValue, mobileNumberValue);
    axios({
      method: "put",
      url: "http://localhost:8080/signup",
      data: {
        firstname: firstNameValue,
        lastname: lastNameValue,
        email: emailValue,
        mobile_number: mobileNumberValue,
        password: passwordValue,
      },
    })
      .then((result) => {
        resetFirstName();
        resetLastName();
        resetEmail();
        resetMobileNumber();
        resetPassword();
        resetConfirmPassword();
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Container>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave? All your entered data will be lost!"
        }
      />

      <Form
        onSubmit={submitHandler}
        className={styles["signup-form"]}
        onFocus={formFocusedHandler}
      >
        <FormGroup className="mb-4">
          <Row className="mb-5">
            <FormControl
              type="text"
              id="firstname"
              value={firstNameValue} // 2-way binding (from the hook)
              onChange={firstNameChangeHandler} // from hook
              onBlur={firstNameBlurHandler} // from hook
              placeholder="First Name"
            />
            <small className="text-danger d-flex justify-content-between d-flex justify-content-between">
              {firstNameHasError && (
                <p className="error-text">Please enter a first name.</p>
              )}
            </small>
          </Row>
        </FormGroup>

        <FormGroup className="mb-4">
          <Row className="mb-5">
            <FormControl
              type="text"
              id="lastname"
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
              placeholder="Last Name"
            />
            <small className="text-danger d-flex justify-content-between d-flex justify-content-between">
              {lastNameHasError && (
                <p className="error-text">Please enter a last name.</p>
              )}
            </small>
          </Row>
        </FormGroup>

        <FormGroup className="mb-4">
          <Row className="mb-5">
            <FormControl
              type="text"
              id="email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              placeholder="Email"
            />
            <small className="text-danger d-flex justify-content-between d-flex justify-content-between">
              {emailHasError && (
                <p className="error-text">
                  Please enter a valid email address.
                </p>
              )}
            </small>
          </Row>
        </FormGroup>

        <FormGroup className="mb-4">
          <Row className="mb-5">
            <FormControl
              type="text"
              id="mobile_number"
              value={mobileNumberValue}
              onChange={mobileNumberChangeHandler}
              onBlur={mobileNumberBlurHandler}
              placeholder="Mobile Number"
            />
            <small className="text-danger d-flex justify-content-between d-flex justify-content-between">
              {mobileNumberHasError && (
                <p className="error-text">
                  Please enter a valid mobile number.
                </p>
              )}
            </small>
          </Row>
        </FormGroup>

        <FormGroup className="mb-4">
          <Row className="mb-5">
            <FormControl
              type="password"
              id="password"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              placeholder="Password"
            />
            <small className="text-danger d-flex justify-content-between d-flex justify-content-between">
              {passwordHasError && (
                <p className="error-text">
                  Password should contain lowercase, uppercase, numerical
                  character. Minimum length is 8 characters.
                </p>
              )}
            </small>
          </Row>
        </FormGroup>

        <FormGroup className="mb-4">
          <Row className="mb-5">
            <FormControl
              type="password"
              id="confirmPassword"
              value={confirmPasswordValue}
              onChange={confirmPasswordChangeHandler}
              onBlur={confirmPasswordBlurHandler}
              placeholder="Confirm Password"
            />
            <small className="text-danger d-flex justify-content-between d-flex justify-content-between">
              {confirmPasswordHasError && (
                <p className="error-text">Passwords does not match</p>
              )}
            </small>
          </Row>
        </FormGroup>

        <Row>
          <Button
            disabled={!formIsValid}
            type="submit"
            onClick={finishEnteringHandler}
          >
            Submit
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default BasicForm;
