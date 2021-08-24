import React from "react";
import HeadingSection from "../HeadingSection/HeadingSection";
import Core from "../../assets/images/design/Core.jpg";
import other from "../../assets/images/design/other.jpg";
import power from "../../assets/images/design/power.jpg";
import circuit from "../../assets/images/design/Circuit_Diagram.jpg";

const Hardware = () => (
  <section id="hardware">
    <div className="container">
      <div className="row">
        <div>
          <HeadingSection title="Hardware components" tagline="">
            <div className="pb-5">
              <img src={Core} />
            </div>
            An ESP8266 Node Mcu module, which includes an ESP-12E
            microcontroller has used as the core hardware component in the Pet
            feeder. It has many advantages such as; Integrated support for WIFI
            network, low energy consumption, and low cost, etc.Also, its high
            processing power with in-built WIFI features make it ideal for IoT
            projects such as this feeding machine.
            <div className="pb-5">
              <img src={other} />
            </div>
            As the other hardware components, Is has included an OV7670 Camera
            module, 0.91 Inch LCD Display, L298N Dual Bridge DC Motor
            Controllers and 12v Stepper motor. There are some main reasons to
            use the OV7670 camera module such as its automatic UV adjustment,
            High sensitivity for low-light, low operating voltage, and ability
            to get the output as 8-bit RAW RGB data.
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
