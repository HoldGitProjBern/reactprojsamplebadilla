import React from "react";
import RoomBox from "./RoomBox";
import "./ReservationBox.css";
export default class ReservationBox extends React.Component {
  state = { ammountPaid: 0 };
  render() {
    let { name, reservation, total } = this.props.room;
    let displayRooms = reservation.map((room) => (
      <div className="roomDetails">
        RoomID: {room.id} <br />
        Qty : {room.qty} <br />
        Price : {room.price} <br />
        <br />
      </div>
    ));

    const setNumber = (e) => {
      this.setState({
        ammountPaid: e,
      });
    };

    return (
      <div className="reservationBox">
        Name : {name} <br />
        Reservations : {displayRooms} <br />
        Total: {total} <br />
        Amount Paid :{""}
        <input
          type="number"
          name="number"
          value={this.state.ammountPaid}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button
          onClick={() =>
            this.props.handlePayment(this.props.room, this.state.ammountPaid)
          }
        >
          Pay Amount
        </button>
      </div>
    );
  }
}
