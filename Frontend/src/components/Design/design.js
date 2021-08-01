import React from "react";
import HeadingSection from "../HeadingSection/HeadingSection";
import ui_design from "../../assets/images/design/ui_design.png";
import Pet_feeder from "../../assets/images/design/Pet_feeder.jpg";
import pet_feeder_2 from "../../assets/images/design/pet_feeder_2.jpg";
import Food_container from "../../assets/images/design/Food_container.jpg";

const Design = () => (
  <section id="design">
    <div className="container">
      <div className="row">
        <HeadingSection title="3D Design Of The Pet Feeder" tagline="">
          The Pet Feeder
          <div className="pb-5">
            <img src={Pet_feeder} />
          </div>
          This is the 3D Design of the pet feeder. Mainly it includes a food container and a camera.
          <div className="pb-5">
            <img src={pet_feeder_2} />
          </div>

          <div>
          The Food Container.
          </div>
          <div className="pb-5">
            <img src={Food_container} />
          </div>
          This is a cylindrical shaped food container, which has diveded in to four 
          partitions and it is rotatable through its axis. 
          Every partition has a opening at the bottom, and there is a path to the 
          food plate from the bottom of the cylinder. To serve foods the relevent 
          partition should be coincided its opening with the path.  
        </HeadingSection>
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
    </div>
  </section>
);

export default Design;
