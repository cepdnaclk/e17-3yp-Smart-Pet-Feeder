import React from "react";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import video from "../../assets/video/ProgressVideo.mp4";
import {Player} from "video-react";

import "../../../node_modules/video-react/dist/video-react.css";

const ProgressVideos = () => (
    // <Timeline/>

    <section id="progress" className="pb-5">
        <div className="container">
            <div className="row">
                <HeadingSection title="Progress Video" tagline=""/>

                <Player playsInline poster="" src={video}/>
            </div>
        </div>
    </section>
);

export default ProgressVideos;
