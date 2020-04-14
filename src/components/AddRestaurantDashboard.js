import React from "react";
import RestaurantList from "./RestaurantList";
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
  const viewRestaurants = () => {
    let addedRestaurants = props.restaurant.map(
      (restaurant) => restaurant.restaurantName
    );
    let guestRestaurants = props.guests.map(
      (restaurant) => `${restaurant.restaurantName} (${restaurant.guestName})`
    );
    const favRestaurant = props.profile.favoriteRestaurant
      ? `${props.profile.favoriteRestaurant} (Favorite)`
      : null;

    let allRestaurants = [
      ...addedRestaurants,
      ...guestRestaurants,
      favRestaurant,
    ];
    return allRestaurants;
  };

  return (
    <main className="container">
      <div className="formboxcolumn">
        <h1>Random Picker</h1>
        <h2>You can add {restaurantsAllowed()} restaurants</h2>
      </div>

      <form onSubmit={handleSubmit}>
        {restaurantsAllowed() > 0 && (
          <div className="formboxcolumn">
            <label>Enter a restaurant to add</label>
            <input type="text" name="restaurant" />
            <button>Add</button>
          </div>
        )}
      </form>
      <div>{<RestaurantList restaurantList={viewRestaurants()} />}</div>
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
