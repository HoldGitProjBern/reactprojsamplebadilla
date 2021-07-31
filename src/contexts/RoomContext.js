import React, { useState, createContext } from "react"

export const RoomContext = createContext()

export const RoomProvider = props => {
    let [rooms,setRoomDetail] = useState(
        [//id,category,cooling,beds,bathroom,kitchen,price,available
          {
            id:1,
            category:'low',
            cooling:'fan',
            beds:1,
            bathroom:1,
            kitchen:0,
            price:150
          },
          {
            id:2,
            category:'low',
            cooling:'ac',
            beds:1,
            bathroom:1,
            kitchen:0,
            price:350
          },
          {
            id:3,
            category:'medium',
            cooling:'fan',
            beds:2,
            bathroom:2,
            kitchen:1,
            price:400
          },
          {
            id:4,
            category:'medium',
            cooling:'ac',
            beds:2,
            bathroom:2,
            kitchen:1,
            price:475
          },
          {
            id:5,
            category:'high',
            cooling:'ac',
            beds:2,
            bathroom:2,
            kitchen:2,
            price:550
          },
          {
            id:6,
            category:'high',
            cooling:'ac',
            beds:4,
            bathroom:2,
            kitchen:2,
            price:700
          }
      ]) 

    return (
        <RoomContext.Provider value = {[rooms,setRoomDetail]}>
            {props.children}
        </RoomContext.Provider>
    )
}