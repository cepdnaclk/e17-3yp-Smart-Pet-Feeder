import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import HeadingSection from "../HeadingSection/HeadingSection";
import React from "react";

const Timeline = () => (
    <section id="timeline" className="dark_bg">
        <HeadingSection title="Timeline" tagline="" classAppend="text-white"/>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
                date={"19th July, 2021"}
                iconStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title text-white">
                    Project Proposal
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-white">
                    (Milestone 1)
                </h4>
                <p className="text-white">
                    Presenting our project proposal was the first milestone.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
                date={"25th July, 2021"}
                iconStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title text-white">
                    Design 3D Models
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-white"></h4>
                <p className="text-white">Design 3D models of the pet feeder.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
                date={"10th August, 2021"}
                iconStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title text-white">
                    Circuit & Software Design
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-white"></h4>
                <p className="text-white">
                    Design block diagrams, circuit diagrams, database schema, UI. Draw
                    flow charts and design the algorithms.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
                date="30th August, 2021"
                iconStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title text-white">
                    Progress Review
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-white"> (Milestone 2)
                </h4>
                <p className="text-white">
                    Tentative evaluation criteria
                    <br/>
                    <div className="offset-1">
                        <ul>
                            <li>Block diagrams</li>
                            <li>Circuit diagrams</li>
                            <li>Database schemata</li>
                            <li>Algorithms / Flow Charts</li>
                            <li>UI Designs</li>
                            <li>Performance, Power, Security requirements.</li>
                            <li>Failiure handling</li>
                            <li>Sensors and actuatos.</li>
                            <li>
                                Controller platforms (programming, memory, available interfaces,
                                connectivity, speeds, data-rates, built-in units, power,
                                security, cost, etc.).
                            </li>
                            <li>
                                Network technologies and protocols (interfacing, medium,
                                bandwidth, security, availability, reliability).
                            </li>
                            <li>
                                Back-end technologies (programming, storage, accessing, backups,
                                security, cost, 3rd party services)
                            </li>
                            <li>
                                Front-end technologies (programming, data visualization,
                                security).
                            </li>
                        </ul>
                    </div>
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
                date="15th September, 2021"
                iconStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title text-white">
                    Front-End Of The Web Application
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-white"></h4>
                <p className="text-white">
                    Design and implement front end of the web application using React JS
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
                date="25th September, 2021"
                iconStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title text-white">
                    Front-End Of The Mobile Application
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-white"></h4>
                <p className="text-white">
                    Design and implement front end of the mobile application using React
                    Native
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
                date="05th October, 2021"
                iconStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
            >
                <h3 className="vertical-timeline-element-title text-white">
                    Develop Back-End
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-white"></h4>
                <p className="text-white">
                    Implement the database and the back-end of the smart pet feeder using
                    Node.js And MongoDB
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
                date="20th October, 2021"
                iconStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
            >
                <h3 className="vertical-timeline-element-title text-white">
                    Deployment And Software Testing
                </h3>
                <h4 className="vertical-timeline-element-subtitle"></h4>
                <p className="text-white">
                    Deploy the application in AWS servers and test the software</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date="27th October, 2021"
                className="vertical-timeline-element--work"
                contentStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
                iconStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
            >
                <h3 className="vertical-timeline-element-title text-white">
                    Progress Review</h3>
                <h4 className="vertical-timeline-element-subtitle text-white">
                    (Milestone 3)</h4>
                <p className="text-white">
                    Tentative evaluation criteria
                    <br/>
                    <div className="offset-1">
                        <ul>
                            <li>Completeness of back-end software</li>
                            <li>Completeness of front-end software</li>
                            <li>Cloud deployment</li>
                            <li>Clear overview of the system</li>
                            <li>
                                Enhance the user experience of software/hardware components and
                                of the overall product
                            </li>
                            <li>
                                Clearly explain features and functionalities (including
                                reliability, scalability and security aspects)
                            </li>
                            <li>Clearly explain implementation details</li>
                        </ul>
                    </div>
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
                iconStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}

                date="10th January, 2022"
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title text-white">
                    Implement Hardware Part
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-white"></h4>
                <p className="text-white">Design and implement the pet feeder unit</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
                iconStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}

                date="16th April, 2022"
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title text-white">
                    Connect Software and Hardware
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-white"></h4>
                <p className="text-white">Established the connection between pet feeder, cloud and the UI</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
                iconStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}

                date="25th July, 2022"
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title text-white">Progress Review</h3>
                <h4 className="vertical-timeline-element-subtitle text-white">(Milestone 4)</h4>
                <p className="text-white">
                    Tentative evaluation criteria
                    <br/>
                    <div className="offset-1">
                        <ul>
                            <li>Working Prototype</li>
                            <li>Progress video clip</li>
                            <li>Progress presentation</li>
                            <li>Viva voce</li>
                        </ul>
                    </div>
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
                iconStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}

                date="10th October, 2022"
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title text-white">Testing</h3>
                <h4 className="vertical-timeline-element-subtitle text-white"></h4>
                <p className="text-white">Test the smart pet feeder and do relevant updates </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}
                contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
                iconStyle={{background: "rgb(0, 204, 0)", color: "#fff"}}

                date="21th November, 2022"
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title text-white">Complete product</h3>
                <h4 className="vertical-timeline-element-subtitle text-white">(Milestone 5)</h4>
                <p className="text-white">
                    Tentative evaluation criteria
                    <br/>
                    <div className="offset-1">
                        <ul>
                            <li>Presentation</li>
                            <li>Demonstration of working product</li>
                            <li>
                                Design Manual, User Manual, GitHub Repository, GitHub Page
                            </li>
                        </ul>
                    </div>
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                iconStyle={{background: "rgb(16, 204, 82)", color: "#fff"}}
                // icon={<StarIcon />}
            />
        </VerticalTimeline>
    </section>
);

export default Timeline;
