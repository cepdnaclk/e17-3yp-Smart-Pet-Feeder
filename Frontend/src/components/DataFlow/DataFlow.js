import React from 'react';
import HeadingSection from '../../components/HeadingSection/HeadingSection';
import data_flow from "../../assets/images/dataFlow/data_flow.jpeg";


const DataFlow = ()=>(
    <section id="data_flow">
        <div className="container">

            <div className="row">
                <HeadingSection title="Data Flow" tagline="">
                    Data Flow of the Smart Pet Feeder
                    <div className="pb-5">
                        <img src={data_flow} />
                    </div>
                    The users of the pet feeder can schedule a plan or control it manually using the website or a mobile
                    app. Then From the UI, data will get into the Web server and the microcontroller in the Node Mcu
                    will receive the data from the server.
                    And also the users of the pet feeder can see their pet using the camera, which is in the feeding
                    machine. That camera can be rotated remotely, and the live stream data will be sent to the UI
                    through the AWS cloud. <br/>

                    Mainly there are two different control units in the feeding machine. <br/>
                    They are <br/>
                    i.	food serving unit <br/>
                    ii.	visualizing unit <br/>

                    Food serving unit <br/>
                    This unit is responsible for food serving. There is a stepper motor and a motor controller
                    In the machine there is a food container which has a cylindrical shape and it has divided in to four
                    partitions. To serve the foods, The food container in the pet feeder should be rotated to a certain
                    angle. That is done by using the stepper motor. The node Mcu will send the relevant control signals
                    to the motor controller and the motor controller will control the rotation of the motor according to
                    that signals.   <br/>

                    Visualizing unit  <br/>
                    Mainly this unit is responsible for live streaming. There is a OV7670 Camera Module in this unit.
                    When user wants to see the pet in live, he or she will be able to get the live stream data to the UI
                    through this camera.
                    Also a 0.91 Inch LCD Display has included to this unit, and it will be used to display the data such
                    as battery level or feeding times etc.<br/>


                </HeadingSection>
            </div>
        </div>
    </section>
)

export default DataFlow;