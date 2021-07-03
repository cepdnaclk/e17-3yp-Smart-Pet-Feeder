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
import { isEmail, isNotEmpty } from "../Validation/Validation";

const BasicForm = (props) => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail); // pass validation func

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isNotEmpty); // pass validation func

  // Form validation logic (This will check for every key stroke)
  let formIsValid = false;

  const [isEntering, setIsEntering] = useState(false);

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(formIsValid);
    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(emailValue);

    // Reset input fields
    resetEmail();
    resetPassword();
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
              type="password"
              id="password"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              placeholder="Password"
            />
            <small className="text-danger d-flex justify-content-between d-flex justify-content-between">
              {passwordHasError && (
                <p className="error-text">Please enter a password</p>
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
