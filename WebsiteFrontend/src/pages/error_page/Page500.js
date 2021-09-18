import React from "react";
import { Link } from "react-router-dom";
import Icofont from "react-icofont";
import Countdown from "react-countdown";
import Loader from "../../components/Loader/Loader";
import {API_URL} from "../../configs/Configs";

const Page500 = (props) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <ul className="countdown">
        <li>
          <span className="hours">{days}</span>
          <p>days </p>
        </li>
        <li>
          <span className="hours">{hours}</span>
          <p>hours </p>
        </li>
        <li>
          <span className="minutes">{minutes}</span>
          <p>minutes</p>
        </li>
        <li>
          <span className="seconds">{seconds}</span>
          <p>seconds</p>
        </li>
      </ul>
    );
  };

  return (
    <Loader>
      <section
        className="title-error-bg coming-cover-bg"
        data-stellar-background-ratio="0.2"
      >
        <div className="container">
          <div className="page-title text-center">
            <h1>We are down now</h1>
            <div className="countdown-container">
              {/*<Countdown*/}
              {/*      date={Date.now() + (6500000 * 60 * 48 + 5000)}*/}
              {/*      renderer={renderer}*/}
              {/*    ></Countdown>*/}
            </div>
            <p className="mt-30">
              <Link
                to={API_URL + props.path}
                className="btn btn-color btn-square"
              >
                <Icofont icon="chevron-left" /> Try Again
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Loader>
  );
};

export default Page500;
