import React from "react";
import RestaurantListItem from "./RestaurantListItem";
import { v4 } from "uuid";

const RestaurantList = (props) => {
  return (
    <div>
      {props.restaurantList.map((restaurant) => {
        return <RestaurantListItem key={v4()} restaurant={restaurant} />;
      })}
    </div>
  );
};

export default RestaurantList;
