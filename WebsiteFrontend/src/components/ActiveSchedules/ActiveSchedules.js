import React, { useState, useCallback, useEffect, useContext } from "react";
import Schedule from "./Schedule";
import scheduleData from "../../data/Schedule/schedule-data.json";
import ScheduleForm from "../ScheduleForm/ScheduleForm";
import ConfirmationBox from "../ConfirmationBox/ConfirmationBox";
import AuthContext from "../../stores/auth-context";
import Loader from "react-loader-spinner";
import { API_URL } from "../../configs/Configs";
import { useSelector } from "react-redux";

const ActiveSchedules = (props) => {
  // const [scheduleData,setScheduleData] = useState({});
  const [schedules, setSchedules] = useState(scheduleData);
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector((state) => {
    return state.auth.token;
  });

  const [scheduleEditData, setScheduleEditData] = React.useState({
    open: false,
    data: {},
  });

  const [scheduleDeleteData, setScheduleDeleteData] = React.useState({
    open: false,
    data: {},
  });

  const editSchedulePop = (scheduleData) => {
    setScheduleEditData({
      open: true,
      data: {
        id: scheduleData.id,
        title: scheduleData.title,
        date: scheduleData.date,
        time: scheduleData.time,
      },
    });
  };

  const deleteSchedulePop = (scheduleData) => {
    setScheduleDeleteData({
      open: true,
      data: {
        id: scheduleData.id,
        title: scheduleData.title,
      },
    });
  };

  const fetchSchedules = useCallback(() => {
    setIsLoading(true);
    fetch(API_URL + "/auth/user/get_schedules", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const fetchedSchedules = [
          {
            id: 1,
            title: data[0].title,
            date: data[0].date,
            time: data[0].time,
            featured: data[0].featured,
            status: data[0].status,
          },
          {
            id: 2,
            title: data[1].title,
            date: data[1].date,
            time: data[1].time,
            featured: data[1].featured,
            status: data[1].status,
          },

          {
            id: 3,
            title: data[2].title,
            date: data[2].date,
            time: data[2].time,
            featured: data[2].featured,
            status: data[2].status,
          },
          {
            id: 4,
            title: data[3].title,
            date: data[3].date,
            time: data[3].time,
            featured: data[3].featured,
            status: data[3].status,
          },
        ];

        setSchedules(fetchedSchedules);
        setIsLoading(false);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    fetchSchedules();
  }, [fetchSchedules]);

  const submitSchedule = (scheduleData) => {
    let currentSchedules = [...schedules];
    const index = currentSchedules.findIndex(
      (schedule) => schedule.id === scheduleData.id
    );

    fetch("http://localhost:8080/auth/user/post_schedules", {
      method: "POST",
      body: JSON.stringify({
        position_id: scheduleData.id,
        title: scheduleData.title,
        date: scheduleData.date,
        time: scheduleData.time,
        featured: scheduleData.featured,
        status: scheduleData.status,
      }),
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          currentSchedules[index].title = scheduleData.title;
          currentSchedules[index].date = scheduleData.date;
          currentSchedules[index].time = scheduleData.time;
          currentSchedules[index].status = true;

          setSchedules(currentSchedules);

          editHandleClose();
        }
      })
      .catch((err) => {});
  };

  const deleteSchedule = (id) => {
    let currentSchedules = [...schedules];

    let index = currentSchedules.findIndex((schedule) => {
      return schedule.id === id;
    });

    fetch("http://localhost:8080/auth/user/delete_schedule", {
      method: "PUT",
      body: JSON.stringify({
        position_id: id,
      }),
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          currentSchedules[index].title = "";
          currentSchedules[index].date = "";
          currentSchedules[index].time = "";
          currentSchedules[index].status = false;

          setSchedules(currentSchedules);

          deleteHandleClose();
        }
      })
      .catch((err) => {});
  };

  const editHandleClose = () => {
    setScheduleEditData({ open: false, data: {} });
  };

  const deleteHandleClose = () => {
    setScheduleDeleteData({ open: false, data: {} });
  };

  return (
    <React.Fragment>
      <ScheduleForm
        id={scheduleEditData.data.id}
        open={scheduleEditData.open}
        title={scheduleEditData.data.title}
        date={scheduleEditData.data.date}
        time={scheduleEditData.data.time}
        handleClose={editHandleClose}
        submitSchedule={submitSchedule}
      />

      <ConfirmationBox
        id={scheduleDeleteData.data.id}
        open={scheduleDeleteData.open}
        title={scheduleDeleteData.data.title}
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
              <Loader
                type="ThreeDots"
                color="#d42e22"
                height={100}
                width={100}
              />
            </div>
          )}
          {!isLoading && (
            <div className="row mt-50">
              {schedules.map((schedule, i) => (
                <Schedule
                  schedule={schedule}
                  index={i}
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
