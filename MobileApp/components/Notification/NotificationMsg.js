import React, { useReducer, useState } from "react";
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Title } from "react-native-paper";
import * as NotificationActions from "../../store/actions/notifications";

const ScheduleForm = (props) => {
  const dispatch = useDispatch();

  const notifications = useSelector(
    (state) => state.notifications.notifications
  );

  const notification = notifications.find(
    (notification) => notification._id === props.id
  );

  const markAsRead = () => {
    dispatch(NotificationActions.markAsRead(props.id));
    props.hideModal();
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal
        isVisible={props.isModalVisible}
        backdropOpacity={0.8}
        onBackdropPress={props.hideModal}
        animationInTiming={1}
        animationOutTiming={1}
        // coverScreen={true}
        hasBackdrop={true}
        backdropTransitionInTiming={1}
        backdropTransitionOutTiming={1}
      >
        <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
          <View style={Styles.Container}>
            <ScrollView>
              <View style={Styles.Details}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    lineHeight: 22,
                    textAlign: "center",
                    color: "#194d33",
                  }}
                >
                  {notification.title.toUpperCase()}
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    lineHeight: 22,
                    textAlign: "justify",
                    paddingTop: 20,
                    fontFamily: "times",
                    color: "black",
                  }}
                >
                  {notification.message}
                </Text>
              </View>

              <View style={Styles.Button}>
                <TouchableOpacity
                  onPress={markAsRead}
                  disabled={notification.isRead === true}
                >
                  <Avatar.Icon
                    icon="check"
                    size={34}
                    backgroundColor={
                      notification.isRead === false ? "green" : "grey"
                    }
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const Styles = StyleSheet.create({
  Container: {
    marginLeft: Platform.OS === "ios" ? "2.5%" : "5%",
    width: Platform.OS === "ios" ? "95%" : "90%",
    height: "auto",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingTop: 30,
    // paddingBottom: 20,
    borderWidth: 3,
    borderColor: "#194d33",
    maxHeight: "70%",
  },

  Details: {
    marginHorizontal: 20,
  },
  Button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // flexWrap: "wrap",
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default ScheduleForm;
