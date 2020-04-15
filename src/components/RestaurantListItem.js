import React from "react";

const RestaurantListItem = (props) => {
  return (
    props.restaurant != null && (
      <div className="options container">
        <p className="option">{props.restaurant} ()</p>
        <button>Edit</button>
      </div>
    )
  );
};

export default RestaurantListItem;
