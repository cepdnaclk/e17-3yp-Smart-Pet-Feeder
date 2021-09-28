import React, { useState } from "react";
import AdminFeedbacks from "../../components/AdminFeedback/AdminFeedbacks";
import usersData from "../../data/Feedback/Feedback-data.json";
import { useSelector } from "react-redux";

const Feedbacks = () => {
  const admin_feedbacks = useSelector(
    (state) => state.admin_feedbacks.admin_feedbacks
  );

  const [search_email, setSearchEmail] = useState("");
  const onChangeEmail = (e) => {
    setSearchEmail(e.target.value);
  };

  // const filteredFeedbacks = admin_feedbacks.filter((user) =>
  //   user.email.includes(userEmail)
  // );
  return (
    <React.Fragment>
      <section>
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
              <div>
                <form action="/" method="get">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    id="title"
                    placeholder="User Email"
                    value={search_email}
                    onChange={onChangeEmail}
                  />
                </form>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 70 }}>
            <AdminFeedbacks admin_feedbacks={admin_feedbacks} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Feedbacks;
