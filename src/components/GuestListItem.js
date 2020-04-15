import React from "react";
import { Link } from "react-router-dom";

const GuestListItem = ({ id, guestName, restaurantName }) => {
  return (
    <div className="options container">
      <Link to={`/edit/${id}`}>
        <p className="option">
          {restaurantName} ({guestName})
        </p>
      </Link>
    </div>
  );
};

export default GuestListItem;
