import React, { useEffect } from "react";

import Header from "../../components/Header/Header";
import dataNav from "../../data/Navbar/userpage-navbar-data.json";
import Loader from "../../components/Loader/Loader";
import { width } from "dom-helpers";
import Home from "../../components/Home/Home";
import HomeDate from "../../data/Home/home.json";
import FooterCopyright from "../../components/Footer/FooterCopyright";
import ScheduleHistory from "../../components/ScheduleHistory/ScheduleHistory";
import Status from "../../components/Status/Status";
import AOS from "aos";
import About from "../../components/About/About";
import Portfolio from "../../components/Portfolio/Portfolio";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blogs from "../../components/Blog/Blogs";
import Team from "../../components/Team/Team";
import FooterOne from "../../components/Footer/FooterOne";
import ActiveSchedules from "../../components/ActiveSchedules/ActiveSchedules";

const userHomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <div className="flex-wrapper">
        <div className="content">
          <Header type={"white"} />

          <Status />

          <ActiveSchedules />
        </div>

        <FooterCopyright classname="userpage_footer" />
      </div>
    </Loader>
  );
};

export default userHomePage;
