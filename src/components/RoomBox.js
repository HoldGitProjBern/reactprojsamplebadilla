import React from 'react'


export default class RoomBox extends React.Component{
    render(){
        let{category,cooling,beds,bathroom,kitchen,price} = this.props.room
        return(
            <div className = 'room-display'>
                <h2>Category : {category}</h2>
                <h4>Cooling : {cooling}</h4>
                <h4>Beds : {beds}</h4>
                <h4>bathroom : {bathroom}</h4>
                <h4>Kitchen : {kitchen}</h4>
                <h4>Price : {price}</h4>
                <button onClick={() => this.props.addReservation(this.props.room)}>Reserve</button>
                <button onClick={() => this.props.subtractReservation(this.props.room)}>Reduce</button>
            </div>
        )
    }
}


