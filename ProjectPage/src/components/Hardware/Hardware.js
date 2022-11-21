import React from "react";
import HeadingSection from "../HeadingSection/HeadingSection";

import Core from "../../assets/images/design/rasberry_pi.jpg";
import other from "../../assets/images/design/other.jpg";
import other2 from "../../assets/images/design/Hardware2.jpg";
import power from "../../assets/images/design/power.jpg";
import circuit from "../../assets/images/design/Circuit_Diagram.jpg";

const Hardware = () => (
  <section id="hardware">
    <div className="container">
      <div className="row">
        <div>
          <HeadingSection title="Hardware components" tagline="">
            {/*<h3>Controller Platform</h3>*/}
            {/*<div className="pb-5">*/}
            {/*  <img src={Core} />*/}
            {/*</div>*/}
            {/*<p>CPU: 4 x ARM Cortex-A53 , 1.2GHz</p>*/}
            {/*<p>OS comes pre-loaded with python programming language</p>*/}
            {/*<p>End nodes are connected to hardware interfaces.</p>*/}
            {/*<p>4GB SD card is used as memory</p>*/}
            {/*<p>5V main power supply</p>*/}
            {/*As the main Controller Platform Raspberry Pi 3 Model B is used. It*/}
            {/*comes with pre loaded python programming language. It has 4 x ARM*/}
            {/*Cortex-A53 CPU which have 1.2GHz processing speed. Has a seperate*/}
            {/*Camera Serial Interface. Also 40 GPIO pins. Raspberry Pi 3 Model B*/}
            {/*comes with onboard Wi-Fi network interface which has about 38Mbps*/}
            {/*bandwith.*/}
            <div className="pb-5">
              <img src={other} />
              <img src={other2} />
            </div>
            As the other hardware components, Is has included a Camera Module
            v1.3 (MD0263), 0.91 Inch LCD Display, L298N Dual Bridge DC Motor
            Controllers and 12v Stepper motor. There are some main reasons to
            use the MD0263 camera module such as its high resolution, frame rate
            and ability to connect directly to microprocessor through camera
            serial interface. As the other hardware components,It has included
            an 5MP Omnivision Camera Module, 0.91 Inch LCD Display, L298N Dual
            Bridge DC Motor Controllers, 12v Stepper motor, Infrared IR Sensor
            and 5V Realy Module.
            <h3>SENSORS</h3>
            The IR Sensor will be used to set the food container to its initial
            position and that Sensor shoul be given a input voltage between
            3-5V.
            <h3>ACTUATORS</h3>
            When considering the actuators the 12v bipolar junction stepper
            motor has 200 step per revelution and it is capable of giving a
            high-torque up to 40 N.cm. Then the raspberry pi camera mocdule will
            give a Full HD video quality of 1080p with 30fps and if it reduced
            the quality to 720p the frame rate can be increased to 60fps. And
            the LCD display will be used for display the data such as signal
            strength, battery level and next feeding time.
            <p></p>
            Also a motor controller has used to control the speed, direction and
            rotating angle of the stepper motor. A 5V relay module has used to
            supply the 5V input to the Raspberry PI from the 12V battery.
            <div className="pb-5">
              <img src={power} />
            </div>
            As the power supply component, It has used a 12V Lithium battery of
            3000mAh. Its Good capacity, lightweight, and rechargeability are
            very helpful to reduce the total weight and keep the machine active
            for a long time using battery current.
          </HeadingSection>
        </div>
        <div>
          {/*<HeadingSection title="Circuit Diagram" tagline="">*/}
          {/*  <div className="pb-5">*/}
          {/*    <img src={circuit} />*/}
          {/*  </div>*/}
          {/*</HeadingSection>*/}
        </div>
      </div>
    </div>
  </section>
);

export default Hardware;
