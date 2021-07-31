import React, { useState, useEffect, useContext } from "react";
import RoomBox from "./RoomBox";
import PossibleReservationsBox from "./PossibleReservationsBox";
import { RoomContext } from "../contexts/RoomContext";
import { ReservationContext } from "../contexts/ReservationContext";

import "./CustomerMenu.css";
const CustomerMenu = () => {
  //context data states
  const [rooms, setRoomDetail] = useContext(RoomContext);
  const [reservations, setReservationDetail] = useContext(ReservationContext);

  //local states
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [possibleReservations, setPossibleReservation] = useState([]);

  const addReservation = (reservation) => {
    let possibleReservationsCopy = [...possibleReservations];
    let index = possibleReservationsCopy.findIndex(
      (reservationTest) => reservationTest.id === reservation.id
    );
    if (index === -1) {
      reservation.qty = 1;
      reservation.name = name;
      possibleReservationsCopy.push(reservation);
    } else {
      possibleReservationsCopy[index].qty++;
    }
    setPossibleReservation(possibleReservationsCopy);
    setTotal(total + reservation.price);
  };

  const subtractReservation = (reservation) => {
    let possibleReservationsCopy = [...possibleReservations];
    console.log(possibleReservations);
    let index = possibleReservationsCopy.findIndex(
      (reservationTest) => reservationTest.id === reservation.id
    );

    try {
      if (possibleReservationsCopy[index].qty - 1 === 0) {
        possibleReservationsCopy = possibleReservationsCopy.filter(
          (reservationItem) => reservationItem.id !== reservation.id
        );
      } else {
        possibleReservationsCopy[index].qty--;
      }
      setPossibleReservation(possibleReservationsCopy);
      setTotal(total - reservation.price);
    } catch (TypeError) {}
  };

  let roomsDisplay = rooms.map((room) => (
    <RoomBox
      key={room.id}
      room={room}
      addReservation={addReservation}
      subtractReservation={subtractReservation}
    />
  ));

  let reservationsDisplay = possibleReservations.map((reservation) => (
    <PossibleReservationsBox
      key={reservation.id}
      name={reservation.name}
      id={reservation.id}
      qty={reservation.qty}
    />
  ));

  useEffect(() => {
    console.log(reservations);
  }, [reservations]);

  const handleCheckout = () => {
    let reservationsCopy = [...reservations];
    let reservation = {
      name: name,
      reservation: [...possibleReservations],
      total: total,
    };
    reservationsCopy.push(reservation);
    setReservationDetail(reservationsCopy);
    setPossibleReservation([]);
    setName("");
    setTotal(0);
  };

  return (
    <>
      <div className="roomsContainer">{roomsDisplay}</div>
      <div className="reservationsContainer">{reservationsDisplay}</div>
      <div className="summary-and-checkout">
        Name (Must be unique) :{" "}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        Total is : {total} <br />
        <button onClick={handleCheckout}>Order</button>
      </div>
    </>
  );
};

export default CustomerMenu;
