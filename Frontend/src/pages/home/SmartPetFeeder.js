import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import HomeDate from "../../data/Home/home.json";
import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Architecture from "../../components/Architecture/Architecture";
import Design from "../../components/Design/Design";
import Team from "../../components/Team/Team";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blogs from "../../components/Blog/Blogs";
import FooterOne from "../../components/Footer/FooterOne";
import Portfolio from "../../components/Portfolio/Portfolio";
import DataFlow from "../../components/DataFlow/DataFlow";
import Budget from "../../components/Budget/Budget";
import SecurityAscpects from "../../components/SecurityAspects/SecurityAscpects";

const SmartPetFeeder = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <Header />
      <Home data={HomeDate} />
      <About />
      <Architecture />
      <Design />
      <DataFlow />
      <SecurityAscpects />
      <Budget/>
      {/*<Portfolio*/}
      {/*  filter="true"*/}
      {/*  layout="wide"*/}
      {/*  columns="2"*/}
      {/*  items="6"*/}
      {/*  classAppend="pt-0"*/}
      {/*/>*/}

      <Team />
      {/*<Services title="What We Offer" tagline="We Turn Heads" />*/}
      {/*<Testimonials title="TESTIMONIALS" tagline="Happy clients" />*/}
      {/*<Blogs />*/}
      <FooterOne />
    </Loader>
  );
};

export default SmartPetFeeder;
