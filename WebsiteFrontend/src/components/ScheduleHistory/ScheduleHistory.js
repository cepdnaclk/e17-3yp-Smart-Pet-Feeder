import React, { useCallback, useEffect, useState } from "react";
import ScheduleBar from "./ScheduleBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistory } from "../../store/actions/history";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import Switch from "react-switch";
import { dateCompare } from "../../helpers/functions";

export default function ScheduleHistory() {
  const history = useHistory();
  const historyData = useSelector((state) => state.history.history).sort(
    (date1, date2) => dateCompare(date1, date2)
  );

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isChecked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };
  const loadHistory = useCallback(() => {
    setError(null);
    setIsLoading(true);

    return dispatch(fetchHistory())
      .then((response) => {
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    loadHistory();
  }, [dispatch, loadHistory]);

  if (error) {
    history.replace(`${process.env.PUBLIC_URL}/500error`);
    return <React.Fragment />;
  }

  if (isLoading) {
    return (
      <div align="center">
        <Loader type="ThreeDots" color="green" height={100} width={100} />
      </div>
    );
  }

  return (
    <div className="container">
      {/*<div className="form-group">*/}
      {/*  <div className="">*/}
      {/*    <h4 className="">Show Latest</h4>*/}
      {/*  </div>*/}
      {/*  <div className="">*/}
      {/*    <Switch onChange={handleChange} checked={isChecked} height={25} />*/}
      {/*  </div>*/}
      {/*</div>*/}

      {historyData.map((data) => (
        <ScheduleBar
          title={data.title}
          date_time={data.date_time}
          status={data.status}
          key={data._id}
        />
      ))}
    </div>
  );
}
