import React, { useState } from "react";
import NotificationBar from "./NotificationBar";
import notificationData from "../../data/notification-data.json";
import LoginForm from "../Form-Modal/LoginForm";
import MessageModal from "./MessageModal";

export default function Notifications() {
  const [modalData, setModalData] = useState({ open: false });

  const showMessage = (id, title, message) => {
    setModalData({ open: true, id: id, title: title, message: message });
  };

  const hideMessage = () => {
    setModalData({ open: false });
  };

  return (
    <React.Fragment>
      <div className="container">
        {notificationData.map((data) => (
          <NotificationBar
            title={data.title}
            message={data.message}
            date_time={data.date_time}
            status={data.status}
            id={data.id}
            key={data.id}
            showMessage={showMessage}
          />
        ))}
      </div>

      {modalData.open && (
        <MessageModal
          open={modalData.open}
          handleClose={hideMessage}
          id={modalData.id}
          title={modalData.title}
          message={modalData.message}
        />
      )}
    </React.Fragment>
  );
}
