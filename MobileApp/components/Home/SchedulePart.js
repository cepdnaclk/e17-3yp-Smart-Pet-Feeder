import { View } from "react-native";
import Styles from "../../config/Styles";
import { Divider, Text, Button } from "react-native-paper";
import ScheduleForm from "./ScheduleForm";
import ActiveSchedules from "./ActiveSchedules";
import React, { useCallback, useState } from "react";
import * as ScheduleActions from "../../store/actions/schedules";
import { useDispatch } from "react-redux";
import DialogBox from "./DialogBox";

const SchedulePart = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isUpdate, setIsUpdate] = useState();
  const [updateId, setUpdateId] = useState();

  const [isDialogShow, setIsDialogShow] = React.useState(false);
  const [deleteId, setDeleteId] = useState();

  const showDialog = () => setIsDialogShow(true);

  const hideDialog = () => setIsDialogShow(false);

  const onPressPlusButton = () => {
    setIsUpdate(false);
    setModalVisible(true);
  };

  const onEditSchedule = (id) => {
    setIsUpdate(true);
    setModalVisible(true);
    setUpdateId(id);
  };

  const onDeleteSchedule = (id) => {
    // dispatch(ScheduleActions.deleteSchedule(id));

    // props.hideModal();
    setIsDialogShow(true);
    setDeleteId(id);
  };
  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <React.Fragment>
      <View style={Styles.cardContent}>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>
          Active Schedules
        </Text>
      </View>

      <Divider style={{ marginTop: 20, paddingTop: 2 }} />
      {isModalVisible && (
        <ScheduleForm
          isModalVisible={isModalVisible}
          hideModal={hideModal}
          isUpdate={isUpdate}
          id={updateId}
        />
      )}

      {isDialogShow && (
        <DialogBox
          isDialogShow={isDialogShow}
          hideDialog={hideDialog}
          id={deleteId}
        />
      )}

      <ActiveSchedules
        onPressPlusButton={onPressPlusButton}
        onEditSchedule={onEditSchedule}
        onDeleteSchedule={onDeleteSchedule}
      />
    </React.Fragment>
  );
};

export default SchedulePart;
