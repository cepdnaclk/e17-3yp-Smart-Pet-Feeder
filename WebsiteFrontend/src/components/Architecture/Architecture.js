import React from "react";
import HeadingSection from "../HeadingSection/HeadingSection";
import architecture from "../../assets/images/architecture/architecture.png";

const Architecture = () => (
  <section id="architecture" className="dark_bg">
    <div className="container">
      <div className="row">
        <div>
          <HeadingSection title="Solution Architecture" tagline="" classAppend="text-white">
            <div className="pb-5">
              <img src={architecture} />
            </div>
            The main device of our system is the pet feeder. It is connected to
            the Home Wifi and home Wifi is connected to the AWS server through
            the internet. In order to communicate with the AWS server there'll
            be a mobile application as well as a web application. <br />
            <br />
            Initially the user needs to log into the mobile application or web
            application by entering their email and the password. After logging
            into the system, they can control the pet feeder in order to feed
            their pets. Users can get real time visualization of their pets
            through the camera which is mounted on the pet feeder. To get a
            clear view of the pets, users can rotate the camera through the UI.
            If the users are unable to manually feed the pets, they can use the
            scheduling option. So they can create a scheduling plan in order to
            feed their pets at a given time. Users can see the status(Remaining
            feeding times, Battery capacity) of the pet feeder through the UI or
            inbuilt display.
          </HeadingSection>
        </div>
      </div>
    </div>
  </section>
);

export default Architecture;
