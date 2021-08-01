import React from "react";
import HeadingSection from "../HeadingSection/HeadingSection";
import ui_design from "../../assets/images/design/ui_design.png";
import Pet_feeder from "../../assets/images/design/Pet_feeder.jpg";
import pet_feeder_2 from "../../assets/images/design/pet_feeder_2.jpg";
import Food_container from "../../assets/images/design/Food_container.jpg";
import Core from "../../assets/images/design/Core.jpg";
import other from "../../assets/images/design/other.jpg";
import power from "../../assets/images/design/power.jpg";

const Design = () => (
  <section id="design">
    <div className="container">
      <div className="row">
        <div>
          <HeadingSection title="3D Design Of The Pet Feeder" tagline="">
            The Pet Feeder
            <div className="pb-5">
              <img src={Pet_feeder} />
            </div>
            This is the 3D Design of the pet feeder. Mainly it includes a food
            container and a camera.
            <div className="pb-5">
              <img src={pet_feeder_2} />
            </div>
            <div>The Food Container.</div>
            <div className="pb-5">
              <img src={Food_container} />
            </div>
            This is a cylindrical shaped food container, which has diveded in to
            four partitions and it is rotatable through its axis. Every
            partition has a opening at the bottom, and there is a path to the
            food plate from the bottom of the cylinder. To serve foods the
            relevent partition should be coincided its opening with the path.
          </HeadingSection>
        </div>
      </div>

      <div className="row">
        <HeadingSection title="UI Design" tagline="">
          <div className="pb-5">
            <img src={ui_design} />
          </div>
          Users can log into the system using the mobile application or web
          application by entering their email and password. After logging into
          the system, they can see the current status of the pet feeder. Status
          information includes remaining feeding times, scheduling plan and the
          battery capacity. They will be able to feed their pets by selecting
          the feeding option in the UI. And also they can get a real time
          visualization of their pets through the UI. To get a clear view, the
          UI provides another feature to rotate the inbuilt camera. There is a
          special feature called scheduling which allows users to schedule a
          feeding plan through the UI to feed their pets at a given time.
        </HeadingSection>
      </div>

      <div className="row">
      <div>
        <HeadingSection title="Hardware components" tagline="">
            <div className="pb-5">
              <img src={Core} />
            </div>
            An ESP8266 Node Mcu module, which includes an ESP-12E microcontroller has used
             as the core hardware component in the Pet feeder. It has many advantages such 
             as; Integrated support for WIFI network, low energy consumption, and low cost, 
             etc.Also, its high processing power with in-built WIFI features make it ideal 
             for IoT projects such as this feeding machine.

            <div className="pb-5">
              <img src={other} />
            </div>
            As the other hardware components, Is has included an OV7670 Camera module, 0.91 
            Inch LCD Display, L298N Dual Bridge DC Motor Controllers and 12v Stepper motor. 
            There are some main reasons to use the OV7670 camera module such as its automatic 
            UV adjustment, High sensitivity for low-light, low operating voltage, and ability 
            to get the output as 8-bit RAW RGB data. 

            <div className="pb-5">
              <img src={power} />
            </div>
            As the power supply component, It has used a 12V Lithium battery of 3000mAh. Its Good capacity, 
            lightweight, and rechargeability are very helpful to reduce the total weight and keep the machine 
            active for a long time using battery current.

          </HeadingSection>
        </div>
      </div>
    </div>
  </section>
);

export default Design;
