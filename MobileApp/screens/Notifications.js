import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { Divider, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../components/Notification/Notification";
import NotificationMsg from "../components/Notification/NotificationMsg";
import * as statusActions from "../store/actions/status";
import Maintainance from "../components/Error/Maintainance";
import { DotIndicator } from "react-native-indicators";
import ColorsApp from "../config/ColorsApp";
import { fetchNotification } from "../store/actions/notifications";

export default function Notifications(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [notificationId, setNotificationId] = useState();

  const notifications = useSelector(
    (state) => state.notifications.notifications
  );

  const hideModal = () => {
    setModalVisible(false);
  };

  const showMessage = (id) => {
    setNotificationId(id);
    setModalVisible(true);
  };

  const renderListItem = (itemData) => {
    return (
      <Notification NotificationData={itemData} showMessage={showMessage} />
    );
  };

  const dispatch = useDispatch();

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const loadNotifications = useCallback(() => {
    setError(null);
    // setIsLoading(true);
    setIsRefreshing(true);

    return dispatch(fetchNotification())
      .then((response) => {
        setIsRefreshing(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [dispatch, setIsRefreshing, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadNotifications().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadNotifications]);

  if (error) {
    return <Maintainance loadStatus={loadNotifications} />;
  }

  if (isLoading) {
    return <DotIndicator color={ColorsApp.PRIMARY} />;
  }

  const filteredNotifications = notifications.sort(
    (notification1, notification2) => {
      return (
        Date.parse(notification1.date_time) <
        Date.parse(notification2.date_time)
      );
    }
  );

  return (
    <SafeAreaView>
      {isModalVisible && (
        <NotificationMsg
          isModalVisible={isModalVisible}
          hideModal={hideModal}
          id={notificationId}
        />
      )}

      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={loadNotifications}
          />
        }
        contentContainerStyle={{ paddingBottom: 150 }}
        keyExtractor={(item) => item._id}
        data={filteredNotifications}
        renderItem={renderListItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Inline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  Container: {
    height: 50,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
