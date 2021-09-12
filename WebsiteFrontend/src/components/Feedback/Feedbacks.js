import React, { useState } from "react";
import Feedback from "./Feedback";
import usersData from "../../data/Feedback/Feedback-data.json";
import SearchBar from "../Search/Search";

const Feedbacks = () => {

  const [users, disconnectUser] = useState(usersData); //

  return (
    <React.Fragment>

      <section className="" style={{
                background: `url(${require("../../assets/images/background/blue.png")}) center center / cover scroll no-repeat`,
              }}>
      
        <div className="container">
          <div className="row">
            <div className="col-sm-8 section-heading">
              <h2
                className="text-uppercase"
                data-aos={"fade-up"}
                data-aos-delay={100}
                data-aos-duration={700}
              >
                Feedbacks
              </h2>
              <h4
                className="text-uppercase"
                data-aos={"fade-up"}
                data-aos-delay={200}
                data-aos-duration={700}
              >
                - Search users -
              </h4>
              <SearchBar/>
       
            </div>
          </div>
          <div className="row mt-50">
            {users.map((schedule, i) => (
  
              <Feedback
                schedule={schedule}
                index={i}
                key={i}
                
              />
            ))}

          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Feedbacks;

