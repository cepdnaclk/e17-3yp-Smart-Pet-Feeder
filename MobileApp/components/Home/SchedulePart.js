import {View} from "react-native";
import Styles from "../../config/Styles";
import {Divider, Text, Button, FAB} from "react-native-paper";
import ScheduleForm from "./ScheduleForm";
import ActiveSchedules from "./ActiveSchedules";
import React, {useCallback, useState} from "react";
import * as ScheduleActions from "../../store/actions/schedules";
import {useDispatch, useSelector} from "react-redux";
import DialogBox from "./DialogBox";
import ColorsApp from "../../config/ColorsApp";
import {DotIndicator} from "react-native-indicators";
import FeedNowDialogBox from "./FeedNowDIalogBox";

const SchedulePart = (props) => {
    const remainingRounds = useSelector((state) => state.status.status.remainingRounds);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isUpdate, setIsUpdate] = useState();
    const [updateId, setUpdateId] = useState();
    const dispatch = useDispatch();


    const [isDialogShow, setIsDialogShow] = React.useState(false);
    const [deleteId, setDeleteId] = useState();

    const hideDialog = () => setIsDialogShow(false);

    const [isFeedNowDialogShow, setIsFeedNowDialogShow] = React.useState(false);
    const showFeedNowDialog = () => {
        setIsFeedNowDialogShow(true);
    }

    const hideFeedNowDialog = () => {
        setIsFeedNowDialogShow(false);
    }


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

    const feedNowHandler = () => {
        if (schedules.length >= remainingRounds)
            return;
        dispatch(ScheduleActions.createSchedule("Feed Now", new Date(new Date().getTime()), true));
        setIsFeedNowDialogShow(false);


    }

    return (
        <React.Fragment>


            <View style={Styles.cardContent}>
                <Text style={{fontSize: 28, fontWeight: "bold"}}>
                    Active Schedules
                </Text>
            </View>


            <FAB
                style={{
                    ...Styles.fab, backgroundColor: schedules.length >= remainingRounds ? "grey" : ColorsApp.PRIMARY,
                }}
                small
                icon="plus"
                onPress={onPressPlusButton}
                color="white"
                disabled={schedules.length >= remainingRounds}

            />

            <Divider style={{marginTop: 20, paddingTop: 2}}/>

            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    marginTop: 15,
                    marginBottom:7
                }}
            >
                <Button
                    mode="contained"
                    contentStyle={Styles.AuthButtonContent}
                    labelStyle={Styles.AuthButtonLabel}
                    onPress={showFeedNowDialog}
                    disabled={schedules.length >= remainingRounds}
                    style={{
                        ...Styles.AuthButton,
                        backgroundColor: schedules.length >= remainingRounds ? "grey" : ColorsApp.PRIMARY,
                        borderRadius: 100,
                        paddingLeft: 20,
                        paddingRight: 20
                    }}
                >
                    FEED YOUR PET NOW
                </Button>

            </View>

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

            {isFeedNowDialogShow && (
                <FeedNowDialogBox
                    isDialogShow={isFeedNowDialogShow}
                    hideDialog={hideFeedNowDialog}
                    feedNowHandler={feedNowHandler}
                />
            )}

            {props.isLoading && (
                <View style={{marginTop: 20}}>
                    <DotIndicator color={ColorsApp.PRIMARY}/>
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
