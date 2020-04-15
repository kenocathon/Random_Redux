import React from "react";
import { connect } from "react-redux";
import { showFavorite } from "../actions/filters";
import { addRestaurant } from "../actions/restaurant";

class PickYourRestaurant extends React.Component {
  state = {
    restaurantName: "",
    error: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (
      this.props.filter.showFavorite ||
      this.props.restaurant.restaurantName
    ) {
      this.props.onSubmit({
        restaurantName: this.state.restaurantName,
      });
    } else {
      const error = "Either use favorite restaurant or add a restaurant";
      this.setState(() => ({ error }));
    }
  };
  changeCheckbox = (e) => {
    if (this.props.filter.showFavorite) {
      this.setState(() => ({
        restaurantName: this.props.filter.favoriteRestaurant,
      }));
    }
    this.props.dispatch(showFavorite(!this.props.filter.showFavorite));
  };

  changeTextInput = (e) => {
    const restaurantName = e.target.value;
    this.props.dispatch(addRestaurant(restaurantName));
    this.setState(() => ({ restaurantName, error: "" }));
  };

  render() {
    var filter = this.props.filter;
    var restaurant = this.props.restaurant;

    return (
      <form className="container" onSubmit={this.onSubmit}>
        <fieldset>
          <legend>Pick A Restaurant</legend>
          {this.state.error && <p className="error">{this.state.error}</p>}
          <div className="formboxrow">
            <input
              id="favorite"
              type="checkbox"
              value={filter.showFavorite}
              checked={filter.showFavorite}
              onChange={this.changeCheckbox}
            />
            <label htmlFor="favorite">
              Use Your Favorite Restaurant{" "}
              {`(${this.props.profile.favoriteRestaurant})`}
            </label>
          </div>
          {!filter.showFavorite && (
            <div className="formboxcolumn">
              <label htmlFor="restaurant">Restaurant</label>
              <input
                id="restaurant"
                type="text"
                onChange={this.changeTextInput}
                value={restaurant.restaurantName}
              />
            </div>
          )}
          <div className="formboxcolumn">
            <button>Invite Guests</button>
          </div>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.filter,
  restaurant: state.restaurants,
  profile: state.profile,
});

export default connect(mapStateToProps)(PickYourRestaurant);
