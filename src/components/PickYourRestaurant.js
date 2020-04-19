import React from "react";
import { connect } from "react-redux";
import { showFavorite } from "../actions/filters";
import { addRestaurant } from "../actions/restaurant";

class PickYourRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantName: "",
      checked: props.filter.showFavorite ? props.filter.showFavorite : false,
      error: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.checked && !this.state.restaurantName) {
      const error = "Please add a restaurant or use your favorite restaurant";
      this.setState(() => ({ error }));
    } else {
      if (this.state.checked) {
        this.props.dispatch(
          addRestaurant(this.props.profile.favoriteRestaurant)
        );
      } else if (!this.state.checked) {
        this.props.dispatch(addRestaurant(this.state.restaurantName));
      }
      this.props.dispatch(showFavorite(this.state.checked));
      this.props.history.push("/dashboard");
    }
  };

  handleCheckbox = () => {
    this.setState(() => ({
      checked: !this.state.checked,
      error: "",
    }));
  };

  changeTextInput = (e) => {
    const restaurantName = e.target.value;
    this.setState(() => ({
      restaurantName,
      error: "",
    }));
  };

  render() {
    return (
      <form className="container" onSubmit={this.onSubmit}>
        <fieldset>
          <legend>Pick A Restaurant</legend>
          {this.state.error && <p className="error">{this.state.error}</p>}
          <div className="container">
            <input
              type="checkbox"
              checked={this.state.checked}
              onChange={this.handleCheckbox}
            />
            <label htmlFor="favorite">
              Use Your Favorite Restaurant{" "}
              {`(${this.props.profile.favoriteRestaurant})`}
            </label>
          </div>
          {!this.state.checked && (
            <div className="form-column">
              <label htmlFor="restaurant">Choose A Restaurant</label>
              <input
                type="text"
                onChange={this.changeTextInput}
                value={this.state.restaurantName}
                autoFocus
              />
            </div>
          )}
          <div className="form-column">
            <button className="button">Submit</button>
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
