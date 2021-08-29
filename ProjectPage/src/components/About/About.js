import React from "react";
import dataFeatures from "../../data/About/about-corporate-business.json";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import FeatureBoxTwo from "../../elements/FeatureBox/FeatureBoxTwo";
import video from "../../assets/video/PetFeeder.mp4";
import "../../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";

const About = () => (
  <section id="about">
    <div className="container">
      <div className="row pb-5">
        <Player playsInline poster="" src={video} />
      </div>

      <div className="row">
        <HeadingSection title="The Problem" tagline="">
          Smart Pet Feeder is a product that helps you to take care of your
          pets. It will help you to build the relationship with your pet better
          and better even you are not in the home. Have you ever been worried
          about your pet's meals when you are away from your pet? We provide the
          platform to come up with this problem
        </HeadingSection>
      </div>

      <div className="row">
        <HeadingSection title="The Solution" tagline="">
          When people are getting busy, they forget to take care of their pets
          even though they love their pets. Taking care of a pet's diet can be
          hard if they want to take good care of their pet's health. A smart pet
          feeder is one of the best solutions for that. It is capable of feeding
          a pet, in absence of its master. So, though the master is not at home,
          his pet will not miss his food. Smart pet feeders can be controlled by
          using a mobile app or a website. A small camera, which is mounted on
          the pet feeder, allows the master to see the machine's surroundings
          and observe the pet's behavior. Master can move the machine remotely
          while watching through the camera, to find the pet and deliver his
          food on time. If the master is too busy, even to operate it remotely
          through the mobile app or the website, he can switch on the automatic
          mode and schedule when to give food. A container that is placed on the
          machine can be used to store the foods and when the pet is being fed,
          the right amount can be passed to the plate
        </HeadingSection>
      </div>

      <div className="row mt-50">
        {dataFeatures.map((feature, i) => (
          <FeatureBoxTwo
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            index={i}
          >
            {feature.text}
          </FeatureBoxTwo>
        ))}
      </div>
    </div>
  </section>
);

export default About;
