import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import HomeDate from "../../data/Home/home.json";
import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Architecture from "../../components/Architecture/Architecture";
import ThreeDDesign from "../../components/Design/ThreeDDesign";
import Team from "../../components/Team/Team";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blogs from "../../components/Blog/Blogs";
import FooterOne from "../../components/Footer/FooterOne";
import DataFlow from "../../components/DataFlow/DataFlow";
import Budget from "../../components/Budget/Budget";
import SecurityAscpects from "../../components/SecurityAspects/SecurityAscpects";
import Timeline from "../../components/Timeline/Timeline";
import Hardware from "../../components/Hardware/Hardware";
import UIDescription from "../../components/Design/UIDesign/UIDescription";
import UIDesign from "../../components/Design/UIDesign/UIDesign";
import AwsArchitecture from "../../components/AWSdesign/AwsArchitecture";

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
      <DataFlow />
      <AwsArchitecture/>
      <ThreeDDesign />
      <UIDescription />
      <UIDesign
        filter="true"
        layout="wide"
        columns="2"
        items="10"
        classAppend="pt-0"
      />

      <Hardware />
      <SecurityAscpects />
      <Budget />
      <Timeline />
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
