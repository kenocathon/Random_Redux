import React from "react";
import { Link } from "react-router-dom";

const GuestListItem = ({ id, guestName, restaurantName }) => {
  return (
    <div className="options">
      <Link to={`/edit/${id}`}>
        <p className="option" style={{ marginLeft: "-1.2em" }}>
          {restaurantName} ({guestName})
        </p>
      </Link>
    </div>
  );
};

export default GuestListItem;
