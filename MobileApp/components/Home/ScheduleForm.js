import React, { useReducer, useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  SafeAreaView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { TextInput, Button, Avatar, IconButton } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import useInput from "../../hooks/use-input";
import * as Validators from "../../helpers/validators";
import * as ScheduleActions from "../../store/actions/schedules";
import Icon from "react-native-dynamic-vector-icons/lib/Icon";
import { useSelector, useDispatch } from "react-redux";

import * as Functions from "../../helpers/functions";
import ColorsApp from "../../config/ColorsApp";

const ScheduleForm = (props) => {
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  let schedule = null;
  if (props.isUpdate) {
    schedule = useSelector((state) => {
      return state.schedules.schedules.find((prod) => prod._id === props.id);
    });
  }

  const currentDate = new Date();
  const [dateOrTime, setDateOrTime] = useState(
    new Date(schedule ? new Date(schedule.date_time) : currentDate.setHours(23))
  );
  const [isValidDateTime, setIsValidDateTime] = useState(
    Validators.isValidDateTime(dateOrTime)
  );
  const {
    value: title,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput(schedule ? schedule.title : "", Validators.isNotEmpty);

  const isFormValid = titleIsValid && isValidDateTime;
  const submitHandler = () => {
    if (!isFormValid) {
      return;
    }

    if (schedule) {
      dispatch(ScheduleActions.updateSchedule(schedule._id, title, dateOrTime));
    } else {
      dispatch(ScheduleActions.createSchedule(title, dateOrTime, false));
    }

    props.hideModal();
  };

  const onChangeDateOrTime = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setShow(false);
      return;
    }
    const currentDate = selectedDate || dateOrTime;
    setShow(Platform.OS === "ios");
    setDateOrTime(currentDate);
    if (Validators.isValidDateTime(currentDate)) {
      setIsValidDateTime(true);
    } else {
      setIsValidDateTime(false);
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
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
            <View style={Styles.Details}>
              <View style={Styles.Inline}>
                <View style={{ flex: 10 }}>
                  <TextInput
                    label="Title"
                    // onChangeText={(text) => setEmail(text)}
                    mode="flat"
                    autoCapitalize="none"
                    value={title}
                    onChangeText={titleChangeHandler}
                    onBlur={titleBlurHandler}
                    style={Styles.Input}
                  />
                </View>

                <View style={{ flex: 1 }} />
              </View>

              {titleHasError && (
                <View style={Styles.Error}>
                  <Text style={{ color: "red" }}>Title cannot be empty</Text>
                </View>
              )}

              <View style={Styles.Inline}>
                <View style={{ flex: 10 }}>
                  <TextInput
                    label="Date"
                    // onChangeText={(text) => setEmail(text)}
                    mode="flat"
                    autoCapitalize="none"
                    style={Styles.Input}
                    value={Functions.extractDate(dateOrTime)}
                    editable={false}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <Button
                    style={Styles.Button}
                    size={30}
                    onPress={showDatepicker}
                  >
                    <Icon
                      name="calendar"
                      type="AntDesign"
                      size={26}
                      color={ColorsApp.PRIMARY}
                      onPress={showDatepicker}
                    />
                  </Button>
                </View>
              </View>

              <View style={Styles.Inline}>
                <View style={{ flex: 10 }}>
                  <TextInput
                    label="Time"
                    mode="flat"
                    autoCapitalize="none"
                    style={Styles.Input}
                    value={Functions.extractTime(dateOrTime)}
                    editable={false}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <Button
                    style={Styles.Button}
                    size={30}
                    onPress={showTimepicker}
                  >
                    <Icon
                      name="clockcircleo"
                      type="AntDesign"
                      size={26}
                      color={ColorsApp.PRIMARY}
                      onPress={showTimepicker}
                    />
                  </Button>
                </View>
              </View>

              {!isValidDateTime && (
                <View style={Styles.Error}>
                  <Text style={{ color: "red" }}>
                    Time should be 10 minutes ahead
                  </Text>
                </View>
              )}

              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={dateOrTime}
                  mode={mode}
                  is24Hour={true}
                  // display="default"
                  display={Platform.OS === "ios" ? "spinner" : "default"}
                  style={{
                    width: 250,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onChange={onChangeDateOrTime}
                />
              )}

              <View style={Styles.ActionButton}>
                <TouchableOpacity onPress={props.hideModal}>
                  <Avatar.Icon icon="close" size={40} backgroundColor={"red"} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={submitHandler}
                  disabled={!isFormValid}
                >
                  <Avatar.Icon
                    icon="check"
                    size={40}
                    backgroundColor={!isFormValid ? "grey" : "green"}
                  />
                </TouchableOpacity>
              </View>
            </View>
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
    paddingBottom: 50,
  },

  Details: {
    marginHorizontal: 50,
  },

  Input: {
    marginBottom: 10,
    backgroundColor: "#fff",
  },

  Inline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  ActionButton: {
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingTop: 20,
  },

  Button: {
    height: 50,
    width: 30,
  },

  Error: {
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "center",
  },
});

export default ScheduleForm;
