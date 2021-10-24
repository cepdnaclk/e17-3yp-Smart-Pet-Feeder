import React, { useState } from "react";
import AdminFeedbacks from "../../components/AdminFeedback/AdminFeedbacks";
import usersData from "../../data/Feedback/Feedback-data.json";
import { useSelector } from "react-redux";
import { dateCompare } from "../../helpers/functions";

const Feedbacks = () => {
  const [search_email, setSearchEmail] = useState("");
  const onChangeEmail = (e) => {
    setSearchEmail(e.target.value);
  };

  const admin_feedbacks = useSelector(
    (state) => state.admin_feedbacks.admin_feedbacks
  )
    .sort((date1, date2) => dateCompare(date1, date2))
    .filter((user) => user.email.includes(search_email));

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
                - Search feedback by email -
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
