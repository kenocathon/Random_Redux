import React from "react";
import { connect } from "react-redux";
import PickYourRestaurant from "./PickYourRestaurant";
import { addRestaurant } from "../actions/restaurant";

const AddRestaurantPage = (props) => {
  return (
    <PickYourRestaurant
      onSubmit={({ restaurantName }) => {
        props.dispatch(addRestaurant(restaurantName));
        props.history.push("/guests");
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    restaurant: state.restaurants,
  };
};

export default connect(mapStateToProps)(AddRestaurantPage);
