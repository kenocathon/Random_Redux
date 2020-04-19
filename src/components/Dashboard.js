import React from "react";
import RestaurantList from "./RestaurantList";
import GuestList from "./GuestList";
import OptionModal from "./OptionModal";
import { connect } from "react-redux";

class RestaurantDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomSelection: "",
    };
  }

  handleModal = () => {
    this.setState(() => ({
      randomSelection: "",
    }));
  };

  handleRandomPick = () => {
    const guestRestaurants = this.props.guests.map(
      (restaurant) => restaurant.restaurantName
    );
    const options = [...guestRestaurants, this.props.restaurant.restaurantName];

    const randomNum = Math.floor(Math.random() * options.length);
    const selection = options[randomNum];
    this.setState(() => ({ randomSelection: selection }));

    console.log(this.state.randomSelection);
  };

  handleOptions = () => {};

  render() {
    return (
      <main className="container">
        <button
          className="big-button"
          onClick={this.handleRandomPick}
          disabled={this.props.guests.length > 0 ? false : true}
        >
          Pick Random
        </button>
        <RestaurantList />
        <GuestList />
        <OptionModal
          handleModal={this.handleModal}
          selection={this.state.randomSelection}
        />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurant: state.restaurants,
  guests: state.guests,
});

export default connect(mapStateToProps)(RestaurantDashboard);
