import React, { useState, createContext } from "react";

export const PaidReservationsContext = createContext();

export const PaidReservationsProvider = (props) => {
  let [paidReservations, setPaidReservations] = useState([]);

  return (
    <PaidReservationsContext.Provider
      value={[paidReservations, setPaidReservations]}
    >
      {props.children}
    </PaidReservationsContext.Provider>
  );
};
