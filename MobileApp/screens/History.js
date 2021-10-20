import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Platform,
  ScrollView,
  RefreshControl,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import PastSchedule from "../components/History/PastSchedule";
import { Button, Switch, Text } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-dynamic-vector-icons/lib/Icon";
import { fetchHistory } from "../store/actions/history";

import * as Validators from "../helpers/functions";
import ColorsApp from "../config/ColorsApp";
import Maintainance from "../components/Error/Maintainance";
import { DotIndicator } from "react-native-indicators";
import * as statusActions from "../store/actions/status";

const renderListItem = (itemData) => {
  return <PastSchedule pastSchedule={itemData} />;
};

export default function History(props) {
  const historyData = useSelector((state) => state.history.history);
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

  let filteredHistory = [...historyData];
  if (isFiltered) {

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

  const [isRefreshing, setIsRefreshing] = useState(false);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const loadHistory = useCallback(() => {
    setError(null);
    // setIsLoading(true);
    setIsRefreshing(true);

    return dispatch(fetchHistory())
      .then((response) => {
        setIsRefreshing(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [dispatch, setIsRefreshing, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadHistory().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadHistory]);

  // if (error) {
  //   return <Maintainance loadStatus={loadHistory} />;
  // }

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

      <View
        style={{
          ...styles.Inline,
          paddingBottom: 10,
          paddingTop: 10,
        }}
      >
        <Button
          icon="refresh"
          mode="contained"
          onPress={clearFilters}
          style={{ backgroundColor: ColorsApp.PRIMARY }}
          labelStyle={{}}
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

      {isLoading && (
        <View style={{ marginTop: 80 }}>
          <DotIndicator color={ColorsApp.PRIMARY} />
        </View>
      )}

      {!isLoading && (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={loadHistory} />
          }
          contentContainerStyle={{ paddingBottom: 150 }}
          keyExtractor={(item) => item._id}
          data={filteredHistory}
          renderItem={renderListItem}
        />
      )}
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
