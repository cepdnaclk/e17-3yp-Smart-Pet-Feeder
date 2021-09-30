import React, { useState, useContext, useEffect, useCallback } from "react";
import Icofont from "react-icofont";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import * as adminStatusActions from "../../store/actions/admin_status";

import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import Page500 from "../../pages/error_page/Page500";
import { useHistory } from "react-router-dom";
import { fetchAdminStatus } from "../../store/actions/admin_status";

const AdminStatus = ({ bg, type }) => {
  const [viewed, setViewed] = useState(true);

  const admin_status = useSelector((state) => state.admin_status.admin_status);
  const dispatch = useDispatch();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const loadStatus = useCallback(() => {
    setError(null);
    setIsLoading(true);

    return dispatch(adminStatusActions.fetchAdminStatus())
      .then((response) => {
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    loadStatus();
  }, [dispatch, loadStatus]);

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  if (error) {
    history.replace(`${process.env.PUBLIC_URL}/500error`);
    return <React.Fragment />;
  }

  return (
    <section className={"pt-120 pb-80 " + (bg ? bg : "dark-bg")}>
      {isLoading && (
        <div align="center" style={{ paddingTop: 30, paddingBottom: 15 }}>
          <Loader type="ThreeDots" color="green" height={100} width={100} />
        </div>
      )}

      {!isLoading && (
        <div className={"container" + (type === "wide" ? "-fluid" : "")}>
          <div className="row">
            <div
              className="col-md-4 counter text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.1s"
              data-aos-delay="0"
              data-aos={"fade-up"}
              data-aos-easing={"ease-in-sine"}
              style={{ paddingTop: 10 }}
            >
              <Icofont icon={"users"} className="light-icon font-30px" />

              <h2
                className={
                  "count font-700 " + (bg === "white-bg" ? "" : "white-color")
                }
              >
                <VisibilitySensor onChange={viewChangeHandler} delayedCall>
                  <CountUp end={viewed ? admin_status.all_users : 0} />
                </VisibilitySensor>
              </h2>
              <h3 className={bg === "white-bg" ? "dark-color" : ""}>
                All Users
              </h3>
            </div>

            <div
              className="col-md-4 counter text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.1s"
              data-aos-delay="0"
              data-aos={"fade-up"}
              data-aos-easing={"ease-in-sine"}
              style={{ paddingTop: 10 }}
            >
              <Icofont
                icon={"check-circled"}
                className="light-icon font-30px"
              />

              <h2
                className={
                  "count font-700 " + (bg === "white-bg" ? "" : "white-color")
                }
              >
                <VisibilitySensor onChange={viewChangeHandler} delayedCall>
                  <CountUp end={viewed ? admin_status.active_users : 0} />
                </VisibilitySensor>
              </h2>
              <h3 className={bg === "white-bg" ? "dark-color" : ""}>
                Active Users
              </h3>
            </div>

            <div
              className="col-md-4 counter text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.1s"
              data-aos-delay="0"
              data-aos={"fade-up"}
              data-aos-easing={"ease-in-sine"}
              style={{ paddingTop: 10 }}
            >
              <Icofont
                icon={"close-circled"}
                className="light-icon font-30px"
              />

              <h2
                className={
                  "count font-700 " + (bg === "white-bg" ? "" : "white-color")
                }
              >
                <VisibilitySensor onChange={viewChangeHandler} delayedCall>
                  <CountUp
                    end={
                      viewed
                        ? admin_status.all_users - admin_status.active_users
                        : 0
                    }
                  />
                </VisibilitySensor>
              </h2>
              <h3 className={bg === "white-bg" ? "dark-color" : ""}>
                Inactive Users
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminStatus;
