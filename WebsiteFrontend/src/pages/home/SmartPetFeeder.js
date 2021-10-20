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
import FooterOne from "../../components/Footer/FooterOne";
import dataNav from "../../data/Navbar/homepage-navbar-data.json";
import LoginForm from "../../components/Form-Modal/LoginForm";
import SignUpForm from "../../components/Form-Modal/SignUpForm";
import AdminLoginForm from "../../components/Form-Modal/AdminLoginForm";

const SmartPetFeeder = () => {
  const [isLogClicked, setLogClick] = useState(false);
  const [isSignClicked, setSignClick] = useState(false);
  const [isAdminClicked, setAdminClicked] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const logClickedHandler = (e) => {
    e.preventDefault();

    setLogClick(true);
  };

  const signClickHandle = (e) => {
    e.preventDefault();

    setSignClick(true);
  };

  const AdminClickHandle = (e) => {
    e.preventDefault();

    setAdminClicked(true);
  };

  const exitFromLog = () => {
    setSignClick(false);
    setLogClick(false);
    setAdminClicked(false);
  };
  return (
    <>
      <Loader>
        <Header
          data={dataNav}
          handleLog={logClickedHandler}
          handleSignIn={signClickHandle}
          handleAdminLogin={AdminClickHandle}
        />
        <Home />
        <About />
        <Services title="Our Services" tagline="" />
        {/*<Testimonials title="TESTIMONIALS" tagline="Happy clients" />*/}
        <Team />
        <FooterOne />
      </Loader>
      <div>
        <LoginForm open={isLogClicked} handleClose={exitFromLog} />
        <SignUpForm open={isSignClicked} handleClose={exitFromLog} />
        <AdminLoginForm open={isAdminClicked} handleClose={exitFromLog} />
      </div>
    </>
  );
};

export default SmartPetFeeder;
