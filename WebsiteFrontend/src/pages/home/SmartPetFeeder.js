import React, { useEffect } from "react";
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

const SmartPetFeeder = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <Header data={dataNav} />
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
      <Blogs />
      <Team />
      <FooterOne />
    </Loader>
  );
};

export default SmartPetFeeder;
