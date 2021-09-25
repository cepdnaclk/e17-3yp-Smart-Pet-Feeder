import React, { useState } from "react";
import usersData from "../../data/Users/User-data.json";
import User from "../../components/Users/User";
import SearchBar from "../../components/Search/Search";

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
                - Search users -
              </h4>
              <div>
                <SearchBar />
              </div>
            </div>
          </div>
          <div className="row mt-20">
            {users.map((user, i) => (
              <User user={user} index={i} key={i} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Users;
