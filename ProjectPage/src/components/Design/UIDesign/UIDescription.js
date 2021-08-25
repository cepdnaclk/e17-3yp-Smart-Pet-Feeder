import React from "react";
import HeadingSection from "../../HeadingSection/HeadingSection";
import ui_design from "../../../assets/images/design/ui_design.png";

const UIDescription = () => (
  <section>
    <div className="container">
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

export default UIDescription;
