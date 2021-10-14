import React from "react";
import { Link } from "react-router-dom";
import Icofont from "react-icofont";
import Countdown from "react-countdown";
import Loader from "../../components/Loader/Loader";
import { API_URL } from "../../configs/Configs";

const Page500 = () => {
  return (
    <Loader>
      <section
        className="title-error-bg coming-cover-bg"
        data-stellar-background-ratio="0.2"
        // style={{ width: "100%", height: "100%" }}
      >
        <div className="container">
          <div className="page-title text-center">
            <h1>We are down now</h1>
            <p className="mt-30">
              <Link to={API_URL + "/user"} className="btn btn-color btn-square">
                <Icofont icon="chevron-left" /> Go To Homepage
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Loader>
  );
};

export default Page500;
