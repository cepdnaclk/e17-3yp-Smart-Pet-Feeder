import React, { useCallback, useEffect, useState } from "react";
import NotificationBar from "./NotificationBar";
import LoginForm from "../Form-Modal/LoginForm";
import MessageModal from "./MessageModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotification } from "../../store/actions/notifications";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import { dateCompare } from "../../helpers/functions";

export default function Notifications() {
  const history = useHistory();

  const notifications = useSelector(
    (state) => state.notifications.notifications
  ).sort((date1, date2) => dateCompare(date1, date2));

  //
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const loadNotifications = useCallback(() => {
    setError(null);
    setIsLoading(true);

    return dispatch(fetchNotification())
      .then((response) => {
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    loadNotifications();
  }, [dispatch, loadNotifications]);

  if (error) {
    history.replace(`${process.env.PUBLIC_URL}/500error`);
    return <React.Fragment />;
  }

  const [modalData, setModalData] = useState({ open: false });

  const showMessage = (id) => {
    setModalData({ open: true, id: id });
  };

  const hideMessage = () => {
    setModalData({ open: false });
  };

  return (
    <React.Fragment>
      {isLoading && (
        <div align="center">
          <Loader type="ThreeDots" color="green" height={100} width={100} />
        </div>
      )}

      {!isLoading && (
        <div className="container">
          {notifications.map((data) => (
            <NotificationBar
              title={data.title}
              message={data.message}
              date_time={data.date_time}
              isRead={data.isRead}
              id={data._id}
              key={data._id}
              showMessage={showMessage}
            />
          ))}
        </div>
      )}

      {modalData.open && (
        <MessageModal
          open={modalData.open}
          handleClose={hideMessage}
          id={modalData.id}
        />
      )}
    </React.Fragment>
  );
}
