import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import * as Validators from "../../helpers/validators";
import * as authActions from "../../store/actions/auth";
import Button from "@material-ui/core/Button";
import { sendFeedback } from "../../store/actions/feedback";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import Page500 from "../../pages/error_page/Page500";

const ContactUsForm = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

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
  if (titleIsValid && messageIsValid) {
    formIsValid = true;
  }

  const submitForm = async (e) => {
    if (!formIsValid) return;
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(sendFeedback(title, message));
      history.replace(`${process.env.PUBLIC_URL}/user/contactus`);
    } catch (err) {
      setError(err.message);
    }
    resetTitle();
    resetMessage();
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
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="Name"
          value={title}
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
        />
        <label htmlFor="title">Name</label>

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
          <Loader type="ThreeDots" color="#d42e22" height={100} width={100} />
        </div>
      ) : (
        <Button
          onClick={submitForm}
          disabled={!formIsValid}
          type="submit"
          name="submit"
          className="btn btn-circle mt-5 mb-5 w-25"
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: 18,
          }}
        >
          SUBMIT
        </Button>
      )}

      {/*</form>*/}
    </div>
  );
};

export default ContactUsForm;
