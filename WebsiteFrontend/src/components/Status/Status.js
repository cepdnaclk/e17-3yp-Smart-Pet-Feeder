import React, { useState, useContext, useEffect, useCallback } from "react";
import Icofont from "react-icofont";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import * as statusActions from "../../store/actions/status";

import Loader from "react-loader-spinner";
import { API_URL } from "../../configs/Configs";
import { useDispatch, useSelector } from "react-redux";
import Page404 from "../../pages/error_page/Page404";
import Page500 from "../../pages/error_page/Page500";

const Status = ({ bg, type }) => {
  const [viewed, setViewed] = useState(true);

  // const [statusData, setStatusData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const status = useSelector((state) => state.status.status);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const loadStatus = useCallback(() => {
    setError(null);
    // setIsLoading(true);
    setIsRefreshing(true);

    return dispatch(statusActions.fetchStatus())
      .then((response) => {
        setIsRefreshing(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [dispatch, setIsRefreshing, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadStatus().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadStatus]);

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  // const fetchData = useCallback(() => {
  //   setIsLoading(true);
  //
  //
  //   fetch(API_URL + "/auth/user/get_status", {
  //     method: "GET",
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const fetchedData = [
  //         {
  //           id: 0,
  //           value: data.status,
  //           title: "Status",
  //           icon: "",
  //         },
  //         {
  //           id: 1,
  //           value: data.battery,
  //           title: "Battery",
  //           icon: "battery-full",
  //         },
  //         {
  //           id: 2,
  //           value: data.remainingRounds,
  //           title: "Remaining Rounds",
  //           icon: "spinner",
  //         },
  //         {
  //           id: 3,
  //           value: 0,
  //           title: "Last Feed Before",
  //           icon: "clock-time",
  //         },
  //       ];
  //       setStatusData(fetchedData);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  if (error) {
    return <Page500 path="/user/status" />;
  }

  return (
    <section className={"pt-120 pb-80 " + (bg ? bg : "dark-bg")}>
      {isLoading && (
        <div align="center">
          <Loader type="ThreeDots" color="#d42e22" height={100} width={100} />
        </div>
      )}

      {!isLoading && (
        <div className={"container" + (type === "wide" ? "-fluid" : "")}>
          <div className="row">
            <div
              className="col-md-3 counter text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.1s"
              data-aos-delay="0"
              data-aos={"fade-up"}
              data-aos-easing={"ease-in-sine"}
            >
              <Icofont
                icon={status.status === true ? "wifi" : "ban"}
                className="light-icon font-30px"
              />

              <h2
                className={
                  "count font-700 " + (bg === "white-bg" ? "" : "white-color")
                }
              >
                {/*<VisibilitySensor onChange={viewChangeHandler} delayedCall>*/}
                {/*  <CountUp end={viewed ? counter.value : 0} />*/}
                {/*</VisibilitySensor>*/}

                {status.status === true ? "ON" : "OFF"}
              </h2>
              <h3 className={bg === "white-bg" ? "dark-color" : ""}>Status</h3>
            </div>

            <div
              className="col-md-3 counter text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.1s"
              data-aos-delay="0"
              data-aos={"fade-up"}
              data-aos-easing={"ease-in-sine"}
            >
              <Icofont
                icon={
                  status.battery >= 70
                    ? "battery-full"
                    : status.battery >= 30
                    ? "battery-half"
                    : "battery-low"
                }
                className="light-icon font-30px"
              />

              <h2
                className={
                  "count font-700 " + (bg === "white-bg" ? "" : "white-color")
                }
              >
                <VisibilitySensor onChange={viewChangeHandler} delayedCall>
                  <CountUp end={viewed ? status.battery : 0} />
                </VisibilitySensor>
                %
              </h2>
              <h3 className={bg === "white-bg" ? "dark-color" : ""}>Battery</h3>
            </div>

            <div
              className="col-md-3 counter text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.1s"
              data-aos-delay="0"
              data-aos={"fade-up"}
              data-aos-easing={"ease-in-sine"}
            >
              <Icofont icon={"spinner"} className="light-icon font-30px" />

              <h2
                className={
                  "count font-700 " + (bg === "white-bg" ? "" : "white-color")
                }
              >
                <VisibilitySensor onChange={viewChangeHandler} delayedCall>
                  <CountUp end={viewed ? status.remainingRounds : 0} />
                </VisibilitySensor>
              </h2>
              <h3 className={bg === "white-bg" ? "dark-color" : ""}>
                Remaining Rounds
              </h3>
            </div>

            <div
              className="col-md-3 counter text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.1s"
              data-aos-delay="0"
              data-aos={"fade-up"}
              data-aos-easing={"ease-in-sine"}
            >
              <Icofont icon={"clock-time"} className="light-icon font-30px" />

              <h2
                className={
                  "count font-700 " + (bg === "white-bg" ? "" : "white-color")
                }
              >
                <VisibilitySensor onChange={viewChangeHandler} delayedCall>
                  <CountUp end={viewed ? 0 : 0} />
                </VisibilitySensor>
                {" h"}
              </h2>
              <h3 className={bg === "white-bg" ? "dark-color" : ""}>
                Last Feed Before
              </h3>
            </div>
          </div>
        </div>
      )}

      {/*{!isLoading && (*/}
      {/*  <div className={"container" + (type === "wide" ? "-fluid" : "")}>*/}
      {/*    <div className="row">*/}
      {/*      {statusData.map((counter, i) => (*/}
      {/*        <div*/}
      {/*          key={i}*/}
      {/*          className="col-md-3 counter text-center col-sm-6 wow fadeTop"*/}
      {/*          data-wow-delay="0.1s"*/}
      {/*          data-aos-delay={`${i}00`}*/}
      {/*          data-aos={"fade-up"}*/}
      {/*          data-aos-easing={"ease-in-sine"}*/}
      {/*        >*/}
      {/*          {i === 0 && (*/}
      {/*            <Icofont*/}
      {/*              icon={counter.value === 1 ? "wifi" : "ban"}*/}
      {/*              className="light-icon font-30px"*/}
      {/*            />*/}
      {/*          )}*/}

      {/*          {i !== 0 && (*/}
      {/*            <Icofont*/}
      {/*              icon={counter.icon}*/}
      {/*              className="light-icon font-30px"*/}
      {/*            />*/}
      {/*          )}*/}
      {/*          <h2*/}
      {/*            className={*/}
      {/*              "count font-700 " + (bg === "white-bg" ? "" : "white-color")*/}
      {/*            }*/}
      {/*          >*/}
      {/*            {i !== 0 && (*/}
      {/*              <VisibilitySensor onChange={viewChangeHandler} delayedCall>*/}
      {/*                <CountUp end={viewed ? counter.value : 0} />*/}
      {/*              </VisibilitySensor>*/}
      {/*            )}*/}

      {/*            {i === 0 && (counter.value === true ? "ON" : "OFF")}*/}
      {/*            {i === 1 && "%"}*/}

      {/*            {i === 3 && "h"}*/}
      {/*          </h2>*/}
      {/*          <h3 className={bg === "white-bg" ? "dark-color" : ""}>*/}
      {/*            {counter.title}*/}
      {/*          </h3>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </section>
  );
};

export default Status;
