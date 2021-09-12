import React, { useState } from "react";
import User from "./User";
import usersData from "../../data/Users/User-data.json";
import SearchBar from "../Search/Search";

const Users = () => {

  const [users, disconnectUser] = useState(usersData); //

  return (
    <React.Fragment>

      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 section-heading">
              <h2
                className="text-uppercase"
                data-aos={"fade-up"}
                data-aos-delay={100}
                data-aos-duration={700}
              >
                Users
              </h2>
              <h4
                className="text-uppercase"
                data-aos={"fade-up"}
                data-aos-delay={200}
                data-aos-duration={700}
              >
                - Edit users -
              </h4>
              <SearchBar/>
       
            </div>
          </div>
          <div className="row mt-50">
            {users.map((schedule, i) => (
              <User
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

export default Users;

