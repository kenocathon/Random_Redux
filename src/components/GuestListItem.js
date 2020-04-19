import React from "react";
import { Link } from "react-router-dom";

const GuestListItem = ({ id, guestName, restaurantName }, props) => {
  function handleRemove(id) {
    props.dispatch(removeGuest({ id }));
  }
  return (
    <div className="list">
      <p className="list__item">
        {restaurantName} ({guestName})
      </p>
      <div>
        <Link to={`/edit/${id}`}>
          <button className="button button--link">Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default GuestListItem;
