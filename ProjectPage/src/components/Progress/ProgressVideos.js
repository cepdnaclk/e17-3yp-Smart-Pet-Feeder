import React from "react";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import login_signup from "../../assets/video/Login_SignUp.mp4";
import userFunctionalities from "../../assets/video/User Functionalities.mp4";
import adminFunctionalities from "../../assets/video/Admin Functionalities.mp4";
import mobileApp from "../../assets/video/Mobile App Functionalities.mp4";
import iotConnectivity from "../../assets/video/IOT connectivity.mp4";
import {Player} from "video-react";
import mobileAppPoster from "../../assets/images/mobile_app_poster.jpeg"
import userPoster from "../../assets/images/user_poster.png"
import adminPoster from "../../assets/images/admin_poster.png"
import "../../../node_modules/video-react/dist/video-react.css";

const ProgressVideos = () => (
    // <Timeline/>

    <section id="progress" className="pb-5">
        <div className="container">
            <HeadingSection title="Progress" tagline=""/>

            <div className="row">
                <h3 style={{fontWeight: "bold", paddingBottom: "10px"}} className="row justify-content-center">SIGNUP
                    AND LOGIN</h3>
                <Player playsInline poster="" src={login_signup}/>
            </div>

            <div className="row pt-5">
                <h3 style={{fontWeight: "bold", paddingBottom: "10px"}} className="row justify-content-center">USER
                    FUNCTIONALITIES</h3>
                <Player playsInline src={userFunctionalities} poster={userPoster}/>
            </div>

            <div className="row pt-5">
                <h3 style={{fontWeight: "bold", paddingBottom: "10px"}} className="row justify-content-center">ADMIN
                    FUNCTIONALITIES</h3>
                <Player playsInline src={adminFunctionalities} poster={adminPoster}/>
            </div>

            <div className="row pt-5 pt-3">
                <h3 style={{fontWeight: "bold", paddingBottom: "10px"}} className="row justify-content-center">MOBILE
                    APPLICATION</h3>
                <div className="row justify-content-center">
                    <Player fluid={false} width={324} height={700} playsInline src={mobileApp}
                            poster={mobileAppPoster}

                    />
                </div>


            </div>

            <div className="row pt-5 pt-3">
                <h3 style={{fontWeight: "bold", paddingBottom: "10px"}} className="row justify-content-center">IOT
                    CONNECTIVITY</h3>
                <div className="row justify-content-center">
                    <Player playsInline src={iotConnectivity}/>
                </div>


            </div>

        </div>
    </section>
);

export default ProgressVideos;
