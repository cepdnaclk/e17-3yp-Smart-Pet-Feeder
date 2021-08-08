import React from "react";
import dataFeatures from "../../data/About/about-corporate-business.json";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import FeatureBoxTwo from "../../elements/FeatureBox/FeatureBoxTwo";
import video from "../../assets/video/PetFeeder.mp4"; 

const About = () => (
  <section id="about">
    <div className="container">
    
      <div className="row">
        <video width="750" height="500" controls >
          <source src = {video} type="video/mp4"/>
        </video>
        <HeadingSection title="Smart Pet Feeder" tagline="Overview">
          Smart Pet Feeder is a product that helps you to take care of your
          pets. It will help you to build the relationship with your pet better
          and better even you are not in the home. Have you ever been worried
          about your pet's meals when you are away from your pet? We provide the
          platform to come up with this problem
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
