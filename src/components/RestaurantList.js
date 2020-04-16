import React from "react";
import RestaurantListItem from "./RestaurantListItem";
import { connect } from "react-redux";

const RestaurantList = (props) => {
  return (
    <div className="container">
      <h1>Your Pick Was:</h1>
      <RestaurantListItem
        restaurant={
          props.restaurant.restaurantName
            ? props.restaurant.restaurantName
            : props.profile.favoriteRestaurant
        }
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  restaurant: state.restaurants,
  guests: state.guests,
  profile: state.profile,
  filter: state.filter,
});

export default connect(mapStateToProps)(RestaurantList);
