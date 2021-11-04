import React from "react";
import RideItem from "./RideItem";
import classes from "./RideList.module.css";

function RideList(props) {
  return (
    <ul className={classes.list}>
      {props.rides.map((ride) => (
        <RideItem
          key={ride.id}
          id={classes.id}
          title={ride.title}
          date={ride.date}
          pickup={ride.pickup}
          dropoff={ride.dropoff}
          capacity={ride.capacity}
          price={ride.price}
          preferences={ride.preferences}
        />
      ))}
    </ul>
  );
}

export default RideList;