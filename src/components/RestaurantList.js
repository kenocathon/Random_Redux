import React from "react";
import RestaurantListItem from "./RestaurantListItem";
import { connect } from "react-redux";


const RestaurantList = (props) => {
  return (
    <div>
    
        
        <RestaurantListItem  restaurant={props.restaurant.restaurantName ? props.restaurant.restaurantName : props.profile.favoriteRestaurant} />
      
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
