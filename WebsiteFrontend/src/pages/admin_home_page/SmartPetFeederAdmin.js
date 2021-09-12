import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../components/Loader/Loader";
import HomeDate from "../../data/Home/home.json";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Team from "../../components/Team/Team";
import FooterOne from "../../components/Footer/FooterOne";
import LoginForm from "../../components/Form-Modal/LoginForm";
import SignUpForm from "../../components/Form-Modal/SignUpForm";

const SmartPetFeeder = () => {
  const [isLogClicked, setLogClick] = useState(false);
  const [isSignClicked, setSignClick] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const logClickedHandler = () => {
    setLogClick(true);
  };

  const signClickHandle = () => {
    setSignClick(true);
  };

  const exitFromLog = () => {
    setSignClick(false);
    setLogClick(false);
  };
  return (
    <>
      <Loader>
        
        <Home data={HomeDate} />
        <About />
        <Team />
        <FooterOne />
      </Loader>
      <div>
        <LoginForm open={isLogClicked} handleClose={exitFromLog} />
        <SignUpForm open={isSignClicked} handleClose={exitFromLog} />
      </div>
    </>
  );
};

export default SmartPetFeeder;
