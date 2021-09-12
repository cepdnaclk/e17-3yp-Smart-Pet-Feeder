import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import HomeDate from "../../data/Home/home.json";
import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Team from "../../components/Team/Team";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blogs from "../../components/Blog/Blogs";
import FooterOne from "../../components/Footer/FooterOne";
import Portfolio from "../../components/Portfolio/Portfolio";
import dataNav from "../../data/Navbar/homepage-navbar-data.json";
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
        <Header
          data={dataNav}
          handleLog={logClickedHandler}
          handleSignIn={signClickHandle}
        />
        <Home data={HomeDate} />
        <About />
        <Portfolio
          filter="true"
          layout="wide"
          columns="2"
          items="6"
          classAppend="pt-0"
        />

        <Services title="What We Offer" tagline="We Turn Heads" />
        <Testimonials title="TESTIMONIALS" tagline="Happy clients" />
    

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
