import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet, FlatList } from "react-native";
import { Divider, Text } from "react-native-paper";
import { useSelector } from "react-redux";
import Notification from "../components/Notification/Notification";
import NotificationMsg from "../components/Notification/NotificationMsg";

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
        contentContainerStyle={{ paddingBottom: 150 }}
        keyExtractor={(item) => item.id}
        data={notifications}
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
