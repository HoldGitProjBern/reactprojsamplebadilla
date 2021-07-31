import React, { useState, createContext } from "react"

export const ReservationContext = createContext()

export const ReservationProvider = props => {
    let [reservations,setReservationDetail] = useState([]) 

    return (
        <ReservationContext.Provider value ={[reservations,setReservationDetail]}>
            {props.children}
        </ReservationContext.Provider>
    )
}