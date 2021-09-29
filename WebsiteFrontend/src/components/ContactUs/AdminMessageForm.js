import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import * as Validators from "../../helpers/validators";
import { submitAdminMessage } from "../../store/actions/feedback";
import Button from "@material-ui/core/Button";
import { submitFeedback } from "../../store/actions/feedback";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import Page500 from "../../pages/error_page/Page500";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#1d9a6c",
    fontSize: 14,
    fontFamily: "Jost",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    // $disabled is a reference to the local disabled
    // rule within the same style sheet.
    // By using &, we increase the specificity.
    "&:hover": {
      backgroundColor: "#1d9a6c",
    },
    "&$disabled": {
      background: "rgba(0, 0, 0, 0.12)",
      color: "white",
      boxShadow: "none",
    },
  },
  disabled: {},
}));

const AdminMessageForm = () => {
  const classes = useStyles();

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput("", Validators.isEmail);

  const {
    value: title,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput("", Validators.isValidString);

  const {
    value: message,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput("", Validators.isValidMessage);

  let formIsValid = false;
  if (titleIsValid && messageIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitForm = async (e) => {
    if (!formIsValid) return;
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(submitAdminMessage(email, title, message));
      // history.replace(`${process.env.PUBLIC_URL}/admin/message`);
    } catch (err) {
      setError(err.message);
    }
    resetTitle();
    resetMessage();
    resetEmail();
    setIsLoading(false);
  };

  if (error) {
    history.replace(`${process.env.PUBLIC_URL}/500error`);
    return <React.Fragment />;
  }

  return (
    <div>
      {/*<form>*/}
      <div className="form-floating pb-3">
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          placeholder="Email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        <label htmlFor="email">Email</label>

        {emailHasError && (
          <p className="error-message" style={{ fontSize: 16 }}>
            * Invalid Email
          </p>
        )}
      </div>

      <div className="form-floating pb-3">
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="Title"
          value={title}
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
        />
        <label htmlFor="title">Title</label>

        {titleHasError && (
          <p className="error-message" style={{ fontSize: 16 }}>
            * Title should contain at least 5 characters
          </p>
        )}
      </div>

      <div className="form-floating">
        <textarea
          name="message"
          className="form-control"
          rows="7"
          placeholder="Message"
          value={message}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
        />
        <label htmlFor="message">Message</label>

        {messageHasError && (
          <p className="error-message" style={{ fontSize: 16 }}>
            * Message should contain at least 20 characters
          </p>
        )}
      </div>

      {isLoading ? (
        <div align="center" className="pt-3 pb-4">
          <Loader type="ThreeDots" color="green" height={100} width={100} />
        </div>
      ) : (
        <Button
          classes={{
            root: classes.button, // class name, e.g. `root-x`
            disabled: classes.disabled, // class name, e.g. `disabled-x`
          }}
          onClick={submitForm}
          disabled={!formIsValid}
          type="submit"
          name="submit"
          // style={{
          //   backgroundColor: "black",
          //   color: "white",
          //   fontSize: 18,
          // }}
          className="mt-4 mb-2"
        >
          Send Message
        </Button>
      )}

      {/*</form>*/}
    </div>
  );
};

export default AdminMessageForm;
