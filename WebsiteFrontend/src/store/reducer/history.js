import historyData from "../../data/history_data.json";

const initialState = {
  history: historyData,
};

const historyReducer = (state = initialState, action) => {
  return state;
};

export default historyReducer;
