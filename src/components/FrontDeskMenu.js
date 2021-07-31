import React, { useState, useEffect, useContext } from "react";
import { ReservationContext } from "../contexts/ReservationContext";
import { PaidReservationsContext } from "../contexts/PaidReservationsContext";
import ReservationBox from "./ReservationBox";
import "./FrontDeskMenu.css";
const FrontDeskMenu = () => {
  let [reservations, setReservationDetail] = useContext(ReservationContext);
  let [paidReservations, setPaidReservations] = useContext(
    PaidReservationsContext
  );

  const handlePayment = (room, payment) => {
    let reservationsCopy = [...reservations];
    let paidReservationsCopy = [...paidReservations];
    let updatedReservations = reservationsCopy.filter(
      (r) => r.name !== room.name
    );
    let newReservation = {
      name: room.name,
      total: room.total,
      payment: payment,
      change: room.total - payment,
    };
    paidReservationsCopy.push(newReservation);
    console.log(updatedReservations);
    setReservationDetail(updatedReservations);
    setPaidReservations(paidReservationsCopy);
  };

  const displayReservations = reservations.map((r) => (
    <ReservationBox room={r} handlePayment={handlePayment} />
  ));

  const displayPaidReservations = paidReservations.map((r) => (
    <div className="paidReservation">
      Name : {r.name} <br />
      Total : {r.total}
      <br />
      Paid: {r.payment}
      <br />
      Change : {r.change}
    </div>
  ));

  return (
    <>
      <div className="frontDeskReservationView">{displayReservations}</div>
      <div className="paidReservationsView">{displayPaidReservations}</div>
    </>
  );
};

export default FrontDeskMenu;
