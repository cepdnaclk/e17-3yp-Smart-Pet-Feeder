import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Platform,
} from "react-native";

import { useSelector } from "react-redux";
import PastSchedule from "../components/History/PastSchedule";
import { Button, Switch, Text } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-dynamic-vector-icons/lib/Icon";

import * as Validators from "../helpers/functions";
import ColorsApp from "../config/ColorsApp";

const renderListItem = (itemData) => {
  return <PastSchedule pastSchedule={itemData} />;
};

export default function History(props) {
  const history = useSelector((state) => state.history.history);
  const [showLatest, setShowLatest] = React.useState(false);
  const [filteredDate, setFilteredDate] = useState(new Date());
  const [isFiltered, setIsFiltered] = useState(false);
  const [isShowFilter, setIsShowFilter] = useState(false);

  const onToggleSwitch = () => setShowLatest((prevState) => !prevState);

  const showDatePicker = () => {
    setIsShowFilter(true);
  };

  const onChangeDate = (event, selectedDate) => {
    setIsShowFilter(false);

    if (event.type === "dismissed") {
      return;
    }
    setIsFiltered(true);
    const currentDate = selectedDate || filteredDate;
    setIsShowFilter(Platform.OS === "ios");
    setFilteredDate(currentDate);
  };

  const clearFilters = () => {
    setIsFiltered(false);
    setShowLatest(false);
    setIsShowFilter(false);

    setFilteredDate(new Date());
  };

  let filteredHistory = [...history];
  if (isFiltered) {
    // console.log("filtering by date");

    filteredHistory = filteredHistory.filter((historyData) =>
      Validators.isSameDate(
        new Date(historyData.date_time),
        new Date(filteredDate)
      )
    );
  }

  if (showLatest) {
    filteredHistory = filteredHistory.sort(Validators.dateCompare);
  }

  // console.log(filteredHistory);

  const onChangeScreen = (screen) => {
    props.navigation.navigate(screen);
  };
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <View style={styles.Inline}>
          <Text
            style={{
              fontFamily: "bebas-neue",
              fontSize: 20,
              paddingRight: 20,
            }}
          >
            {"   "} Show Latest
          </Text>
          <Switch
            value={showLatest}
            onValueChange={onToggleSwitch}
            color={ColorsApp.PRIMARY}
          />
        </View>

        <View style={{ ...styles.Inline, paddingLeft: 30 }}>
          <Text
            style={{
              fontFamily: "bebas-neue",
              fontSize: 20,
            }}
          >
            Filter By Date
          </Text>

          <Button onPress={showDatePicker}>
            <Icon
              name="calendar"
              type="AntDesign"
              size={26}
              color={ColorsApp.PRIMARY}
            />
          </Button>
        </View>
      </View>

      <View style={{ ...styles.Inline, paddingBottom: 10, paddingTop: 10 }}>
        <Button
          icon="refresh"
          mode="contained"
          onPress={clearFilters}
          style={{ backgroundColor: ColorsApp.PRIMARY }}
        >
          Clear Filters
        </Button>
      </View>

      <View>
        {isShowFilter && (
          <DateTimePicker
            testID="dateTimePicker"
            value={filteredDate}
            mode="date"
            is24Hour={true}
            display={Platform.OS === "ios" ? "default" : "default"}
            onChange={onChangeDate}
            style={{
              marginTop: 10,
            }}
          />
        )}
      </View>

      <FlatList
        contentContainerStyle={{ paddingBottom: 150 }}
        keyExtractor={(item) => item.id}
        data={filteredHistory}
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
