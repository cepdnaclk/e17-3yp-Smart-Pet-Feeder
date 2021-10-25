import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import dataTabs from "../../data/TabsIconSection/tabs-icon-section.json";
import HeadingSection from "../HeadingSection/HeadingSection";
import Icofont from "react-icofont";

const Services = ({ title, tagline, classes }) => {
  return (
    <section id="services" className={classes || ""}>
      <div className="container">
        <div className="row">
          <HeadingSection title={title} tagline={tagline} />
        </div>
        <div className="row mt-40 tabs-section">
          <div className="col-md-8">
            <Tabs className="icon-tabs">
              <TabList className="nav nav-tabs text-center">
                {dataTabs.map((tab) => (
                  <Tab key={tab.id} role="presentation">
                    <span>
                      <Icofont icon={tab.icon} />
                      {tab.title}
                    </span>
                  </Tab>
                ))}
              </TabList>
              <div className="tab-content text-center">
                {dataTabs.map((tab) => (
                  <TabPanel key={tab.id} className="tab-pane fade in active">
                    <p>{tab.text}</p>
                  </TabPanel>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
