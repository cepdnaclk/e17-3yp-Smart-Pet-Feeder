import React from "react";
import HeadingSection from "../HeadingSection/HeadingSection";
import Core from "../../assets/images/design/Core.JPG";
import other from "../../assets/images/design/other.jpg";
import power from "../../assets/images/design/power.jpg";
import circuit from "../../assets/images/design/Circuit_Diagram.jpg";

const Hardware = () => (
  <section id="hardware">
    <div className="container">
      <div className="row">
        <div>
          <HeadingSection title="Hardware components" tagline="">
            
            <h3>Controller Platform</h3>
            <div className="pb-5">
              <img src={Core} />
            </div>
            <p>CPU: 4 x ARM Cortex-A53 , 1.2GHz</p>
            <p>OS comes pre-loaded with python programming language</p>
            <p>End nodes  are connected to  hardware interfaces.</p>
            <p>4GB SD card is used as memory</p>
            <p>5V main power supply</p>

            <div className="pb-5">
              <img src={other} />
            </div>
            As the other hardware components, Is has included a Camera Module v1.3 (MD0263),
            0.91 Inch LCD Display, L298N Dual Bridge DC Motor
            Controllers and 12v Stepper motor. There are some main reasons to
            use the MD0263 camera module such as its high resolution, frame rate and ability 
            to connect directly to microprocessor through camera serial interface.
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
          <HeadingSection title="Circuit Diagram" tagline="">
            <div className="pb-5">
              <img src={circuit} />
            </div>
          </HeadingSection>
        </div>
      </div>
    </div>
  </section>
);

export default Hardware;