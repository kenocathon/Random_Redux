import React from "react";
import RestaurantListItem from "./RestaurantListItem";
import { connect } from "react-redux";

const RestaurantList = (props) => {
  return (
    <section className="widget">
      <div className="widget-header">
        <h3 className="widget-title">Your Choice</h3>
      </div>
      <RestaurantListItem restaurant={props.restaurant.restaurantName} />
    </section>
  );
};

const mapStateToProps = (state) => ({
  restaurant: state.restaurants,
  guests: state.guests,
  profile: state.profile,
  filter: state.filter,
});

export default connect(mapStateToProps)(RestaurantList);
