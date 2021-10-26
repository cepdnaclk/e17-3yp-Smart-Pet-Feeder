import React from "react";
import dataFeatures from "../../data/About/about-corporate-business.json";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import FeatureBoxTwo from "../../elements/FeatureBox/FeatureBoxTwo";
import video from "../../assets/video/PetFeeder.mp4";
import "../../../node_modules/video-react/dist/video-react.css";
import {Player} from "video-react";

const About = () => (
    <section id="about">
        <div className="container">
            <div className="row pb-5">
                <Player playsInline poster="" src={video}/>
            </div>

            <div className="row">
                <HeadingSection title="Smart Pet Feeder" tagline="Overview">
                    Smart Pet Feeder is a product that helps you to take care of your pets. It will help you to build
                    the relationship with your pet better and better even you are not in the home.

                    When you are getting busy, you forget to take care of your pets even though you love your
                    pets. A smart pet feeder is one of the best solutions for that. It is capable of feeding a pet, in
                    absence of its master. So, though you are not at home, your pet will not miss his food.

                    <br/><br/>
                    Smart pet feeders can be controlled by using a mobile app or a website. A small camera, which is mounted on
                    the pet feeder, allows you to see the machine's surroundings and observe the pet's behavior.
                    A container that is placed on the machine can be used to store the foods and when the pet is being
                    fed, the right amount can be passed to the plate
                </HeadingSection>
            </div>

        </div>
    </section>
);

export default About;
