/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import { INITIAL_STATE, TripReducer } from "../Reducer/TripReduer";

const TripContext = createContext();

const TripProvider = ({ children }) => {
  const [trip, dispatch] = useReducer(TripReducer, INITIAL_STATE);
  console.log("🚀 ~ file: TripContext.jsx:10 ~ TripProvider ~ trip:", trip);
  return (
    <TripContext.Provider value={{ trip, dispatch }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTrip = () => useContext(TripContext);

export default TripProvider;
