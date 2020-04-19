import React from "react";
import { withRouter } from "react-router-dom";

const RestaurantListItem = (props) => {
  return (
    <div className="list">
      <p className="list__item">{props.restaurant}</p>
      <button
        className="button button--link"
        onClick={() => props.history.push("/pickrestaurant")}
      >
        Edit
      </button>
    </div>
  );
};

export default withRouter(RestaurantListItem);
