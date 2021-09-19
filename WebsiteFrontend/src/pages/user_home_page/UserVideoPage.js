import React from "react";

const UserHistoryPage = () => {
  return (
    <section style={{ height: "87vh" }}>
      <div className="container h-100">
        <div className="row align-items-center" style={{ height: "70vh" }}>
          <div className="col-sm-8 section-heading">
            <h2
              className="text-uppercase"
              data-aos={"fade-up"}
              data-aos-delay={100}
              data-aos-duration={700}
            >
              Live Stream
            </h2>
            <h4
              className="text-uppercase"
              data-aos={"fade-up"}
              data-aos-delay={200}
              data-aos-duration={700}
            >
              Not Connected Yet
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserHistoryPage;
