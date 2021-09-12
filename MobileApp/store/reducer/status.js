import statusData from "../../data/status-data.json";

const initialState = {
  status: statusData,
};

const stateReducer = (state = initialState, action) => {
  return state;
};

export default stateReducer;
