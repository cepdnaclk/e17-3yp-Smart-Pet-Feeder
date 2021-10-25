import React from "react";
import video from "../../assets/video/SoftwareTesting_UnitTest.mp4";
import HeadingSection from "../HeadingSection/HeadingSection";
import "../../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";

const Testing = () => (
  <section id="testing">
    <div className="container">
      <div className="row pb-5">
        <HeadingSection title="Testing" tagline=""></HeadingSection>
        <h3>Unit Testing</h3>
        <Player playsInline poster="" src={video} />
      </div>
    </div>
  </section>
);

export default Testing;
