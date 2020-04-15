import React from "react";
import RestaurantList from "./RestaurantList";
import GuestList from "./GuestList";
import { addRestaurant } from "../actions/restaurant";
import { connect } from "react-redux";

const AddRestaurant = (props) => {
  function handleSubmit(e) {
    e.preventDefault();
    const restaurant = e.target.elements.restaurant.value;
    props.dispatch(addRestaurant(restaurant));
    e.target.elements.restaurant.value = "";
  }

  function restaurantsAllowed() {
    let restaurantsAllowed = 4;

    const restaurantsAdded = props.restaurant.length;
    return restaurantsAllowed - restaurantsAdded;
  }
  

  return (
    <main className="container">
      <h1>Random Restaurant Picker</h1>
      <h2>Your putting your life in the hands of a machine</h2>
      <h3>Your Pick Was</h3>
      <RestaurantList />
      <h3>Your Guests Picked</h3>
      <GuestList />
      <button className="important-btn">Pick Random Restaurant</button>
    </main>
  );
};

const mapStateToProps = (state) => ({
  restaurant: state.restaurants,
  guests: state.guests,
  profile: state.profile,
  filter: state.filter,
});

export default connect(mapStateToProps)(AddRestaurant);
