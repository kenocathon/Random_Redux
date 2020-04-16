import React from "react";

const RestaurantListItem = (props) => {
  return (
    props.restaurant != null && (
      <div className="options">
        <p className="option" style={{ marginLeft: "-1.2em" }}>
          {props.restaurant}{" "}
        </p>
      </div>
    )
  );
};

export default RestaurantListItem;
