import React from "react";

const RestaurantListItem = (props) => {
  return (
    props.restaurant != null && (
      <div className="options container">
        <p className="option">{props.restaurant} </p>
      </div>
    )
  );
};

export default RestaurantListItem;
