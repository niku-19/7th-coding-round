import { data } from "../Data/continentsData";

const INITIAL_STATE = {
  trip: data,
};

const TripReducer = (state, { type, payload }) => {
  console.log("🚀 ~ file: TripReduer.js:6 ~ TripReducer ~ payload:", payload);
  switch (type) {
    default:
      return state;
  }
};

export { INITIAL_STATE, TripReducer };
