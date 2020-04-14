import React from "react";

const GuestListItem = ({ guestName, restaurantName }) => {
  return (
    <div className="options container">
      <p className="option">
        {restaurantName}{" "}
        <span className="restaurant-caption">({guestName})</span>
      </p>
    </div>
  );
};

export default GuestListItem;
