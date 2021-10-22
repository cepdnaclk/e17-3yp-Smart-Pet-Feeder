import * as React from "react";
import Schedule from "./Schedule";
import {ScrollView} from "react-native";

const ActiveSchedule = (props) => {
    return (
        <ScrollView>

            {props.schedules.map((schedule, i) => (
                <Schedule
                    schedule={schedule}
                    key={i}
                    onEditSchedule={props.onEditSchedule}
                    onDeleteSchedule={props.onDeleteSchedule}
                />
            ))}
        </ScrollView>
    );
};

export default ActiveSchedule;
