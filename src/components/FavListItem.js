import React from "react";

const FavListItem = (props) => {
  return (
    <div className="options container">
      <p className="option">{props.restaurant} (Favorite)</p>
    </div>
  );
};

export default FavListItem;
