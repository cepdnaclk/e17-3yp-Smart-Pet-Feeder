import { Container } from "react-bootstrap";
import React from "react";
import LoginForm from "../Components/Login/LoginForm";

const LoginPage = () => {
  return (
    <Container>
      <div className="row justify-content-center pt-4 pb-4">
        <div className="col-4">
          <h1>Login Page</h1>
        </div>
      </div>

      <LoginForm />
    </Container>
  );
};

export default LoginPage;
