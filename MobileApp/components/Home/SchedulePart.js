import { View } from "react-native";
import Styles from "../../config/Styles";
import { Divider, Text, Button, FAB } from "react-native-paper";
import ScheduleForm from "./ScheduleForm";
import ActiveSchedules from "./ActiveSchedules";
import React, { useCallback, useState } from "react";
import * as ScheduleActions from "../../store/actions/schedules";
import { useDispatch, useSelector } from "react-redux";
import DialogBox from "./DialogBox";
import ColorsApp from "../../config/ColorsApp";
import { DotIndicator } from "react-native-indicators";

const SchedulePart = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isUpdate, setIsUpdate] = useState();
  const [updateId, setUpdateId] = useState();

  const [isDialogShow, setIsDialogShow] = React.useState(false);
  const [deleteId, setDeleteId] = useState();

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

  const schedules = useSelector((state) => state.schedules.schedules);

  return (
    <React.Fragment>
      <View style={Styles.cardContent}>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>
          Active Schedules
        </Text>
      </View>

      {schedules.length < 4 && (
        <FAB
          style={Styles.fab}
          small
          icon="plus"
          onPress={onPressPlusButton}
          color="white"
        />
      )}

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

      {props.isLoading && (
        <View style={{ marginTop: 20 }}>
          <DotIndicator color={ColorsApp.PRIMARY} />
        </View>
      )}

      {!props.isLoading && (
        <ActiveSchedules
          onEditSchedule={onEditSchedule}
          onDeleteSchedule={onDeleteSchedule}
          schedules={schedules}
        />
      )}
    </React.Fragment>
  );
};

export default SchedulePart;
