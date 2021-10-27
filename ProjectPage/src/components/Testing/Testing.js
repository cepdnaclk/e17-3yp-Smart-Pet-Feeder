import React from "react";
import software_test from "../../assets/video/SoftwareTesting.mp4";
import API_Results from "../../assets/video/API_Results.mp4";
import api_test from "../../assets/video/API_Testing.mp4";
import e2e_test from "../../assets/video/E2E Testing.mp4";

import HeadingSection from "../HeadingSection/HeadingSection";
import "../../../node_modules/video-react/dist/video-react.css";
import {Player} from "video-react";
import image from "../../assets/images/security-aspects/images.jpg";
import security1 from "../../assets/images/testing/security testing 1.png"
import security2 from "../../assets/images/testing/security testing 2.png"
import api_poster from "../../assets/images/testing/api_poster.jpeg"

import api_results_users from "../../assets/images/testing/api_results_users.png"
import api_results_admin from "../../assets/images/testing/api_results_admin.png"


const Testing = () => (
    <section id="testing">
        <div className="container">
            <HeadingSection title="Testing" tagline=""/>

            <div className="row pb-5">
                <h3 style={{fontWeight: "bold", paddingBottom: "10px"}} className="row justify-content-center">SOFTWARE
                    TESTING</h3>
                <Player playsInline poster="" src={software_test}/>
            </div>

            <div className="row pb-5">
                <h3 style={{fontWeight: "bold", paddingBottom: "10px"}}
                    className="row justify-content-center">SECURITY TESTING</h3>

                <div className="col-md-6 order-md-last d-flex align-items-center">
                    <img src={security1} width="100%" height="80%"/>
                </div>

                <div className="col-md-6 order-md-last d-flex align-items-center">
                    <img src={security2} width="100%" height="80%"/>
                </div>
            </div>

            <div className="row pb-5">
                <h3 style={{fontWeight: "bold", paddingBottom: "10px"}}
                    className="row justify-content-center">API TESTING</h3>
                <Player playsInline poster={api_poster} src={api_test}/>

                <h3 style={{fontWeight: "bold", paddingBottom: "10px", paddingTop:"50px"}}
                    className="row justify-content-center">E2E TESTING</h3>
                <Player playsInline  src={e2e_test}/>

                <h3 style={{fontWeight: "bold", paddingBottom: "10px", paddingTop:"50px"}}
                    className="row justify-content-center">Testing Results</h3>

                <Player playsInline src={API_Results}/>
            </div>

            <div className="row pb-5">
                <div className="col-md-6 order-md-last d-flex align-items-center">
                    <img src={api_results_users} width="100%" height="80%"/>
                </div>

                <div className="col-md-6 order-md-last d-flex align-items-center">
                    <img src={api_results_admin} width="100%" height="80%"/>
                </div>
            </div>
        </div>
    </section>
);

export default Testing;
