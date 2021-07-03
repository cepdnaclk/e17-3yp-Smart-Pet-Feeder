import { Container } from "react-bootstrap";
import React from "react";
import SignupForm from "../Components/Signup/SignupForm";

const SignupPage = () => {
  return (
    <Container>
      <div className="row justify-content-center pt-4 pb-4">
        <div className="col-4">
          <h1>Signup Page</h1>
        </div>
      </div>

      <SignupForm />
    </Container>
  );
};

export default SignupPage;
