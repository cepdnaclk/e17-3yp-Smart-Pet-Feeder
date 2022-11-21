import React from "react";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import data_flow from "../../assets/images/dataFlow/data_flow.png";

const DataFlow = () => (
  <section id="data_flow" className="dark_bg">
    <div className="container">
      <div className="row">
        <HeadingSection title="Data Flow" classAppend="text-white">
          <div className="pb-5 pt-3">
            <img src={data_flow} />
          </div>
          The users of the pet feeder can schedule a plan or control it manually
          using the website or a mobile app. Then From the UI, data will get
          into the Web server and the microprocessor in the Raspberry pi 3 will
          receive the data from the server. And also the users of the pet feeder
          can see their pet using the camera, which is in the feeding machine.
          That camera can be rotated remotely, and the live stream data will be
          sent to the UI through the AWS cloud. <br />
          <br />
          Mainly there are two different control units in the feeding machine.
          <br />
          <div className="col offset-1">
            <ul>
              <li>Food serving unit</li>
              <li>Visualizing unit</li>
            </ul>
          </div>
          <b>Food serving unit</b> is responsible for food serving. This unit
          contains a stepper motor and a motor controller. In the machine there
          is a food container which has a cylindrical shape and it has divided
          in to four partitions. To serve the foods, the food container in the
          pet feeder should be rotated to a certain angle. That is done by using
          the stepper motor. The raspberry pi will send the relevant control signals
          to the motor controller and the motor controller will control the
          rotation of the motor according to that signals.
          <br />
          <br />
          <b>Visualizing unit</b> is responsible for live streaming. There is a
          5MP Omnivision 5647 Camera Module in this unit. When user wants to get a real time
          visualization of his/her pet, he/she will be able to get the live
          stream data to the UI through this camera. Also a 0.91 Inch LCD
          Display has included to this unit, and it will be used to display the
          data such as battery level or feeding times etc.
          <br />
        </HeadingSection>
      </div>
    </div>
  </section>
);

export default DataFlow;
