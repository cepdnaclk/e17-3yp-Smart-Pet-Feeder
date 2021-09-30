import React, { useState, useCallback, useEffect, useContext } from "react";
import Schedule from "./Schedule";

import ScheduleForm from "../ScheduleForm/ScheduleForm";
import ConfirmationBox from "../ConfirmationBox/ConfirmationBox";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import * as schedulesActions from "../../store/actions/schedules";
import Page500 from "../../pages/error_page/Page500";
import { useHistory } from "react-router-dom";

const ActiveSchedules = (props) => {
  const schedules = useSelector((state) => state.schedules.schedules);
  const dispatch = useDispatch();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const loadSchedules = useCallback(() => {
    setError(null);
    setIsLoading(true);

    return dispatch(schedulesActions.fetchSchedules())
      .then((response) => {
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    loadSchedules();
  }, [dispatch, loadSchedules]);

  const [scheduleEditData, setScheduleEditData] = React.useState({
    open: false,
  });

  const [scheduleDeleteData, setScheduleDeleteData] = React.useState({
    open: false,
    data: {},
  });

  const editSchedulePop = (id, status) => {
    setScheduleEditData({
      open: true,
      _id: id,
      status: status,
    });
  };

  const deleteSchedulePop = (id, title) => {
    setScheduleDeleteData({
      open: true,

      _id: id,
      title: title,
    });
  };

  const deleteSchedule = (id) => {
    setIsLoading(true);
    dispatch(schedulesActions.deleteSchedule(id));
    setIsLoading(false);
    deleteHandleClose();
  };

  const editHandleClose = () => {
    setScheduleEditData({ open: false, data: {} });
  };

  const deleteHandleClose = () => {
    setScheduleDeleteData({ open: false, data: {} });
  };

  if (error) {
    history.replace(`${process.env.PUBLIC_URL}/500error`);
    return <React.Fragment />;
  }

  return (
    <React.Fragment>
      {scheduleEditData.open && (
        <ScheduleForm
          open={scheduleEditData.open}
          _id={scheduleEditData._id}
          status={scheduleEditData.status}
          handleClose={editHandleClose}
        />
      )}

      <ConfirmationBox
        id={scheduleDeleteData._id}
        open={scheduleDeleteData.open}
        title={scheduleDeleteData.title}
        handleClose={deleteHandleClose}
        deleteSchedule={deleteSchedule}
      />

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
                Active Schedules
              </h2>
              <h4
                className="text-uppercase"
                data-aos={"fade-up"}
                data-aos-delay={200}
                data-aos-duration={700}
              >
                - Edit Feeding Schedules -
              </h4>
            </div>
          </div>
          {isLoading && (
            <div align="center">
              <Loader type="ThreeDots" color="green" height={100} width={100} />
            </div>
          )}
          {!isLoading && (
            <div className="row mt-50">
              {schedules.map((schedule, i) => (
                <Schedule
                  schedule={schedule}
                  editHandler={editSchedulePop}
                  deleteHandler={deleteSchedulePop}
                  key={i}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default ActiveSchedules;
