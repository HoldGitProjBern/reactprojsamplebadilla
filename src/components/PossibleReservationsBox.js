import React from 'react'


export default class PossibleReservationsBox extends React.Component{
    render(){
        return(
            <div className = 'reservations-display'>
                RoomId : {this.props.id}
                 Qty : {this.props.qty}
            </div>
        )
    }
}
