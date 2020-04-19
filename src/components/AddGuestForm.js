import React from "react";

class AddGuestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestName: props.guests ? props.guests.guestName : "",
      guestRestaurant: props.guests ? props.guests.restaurantName : "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      guestName: this.state.guestName,
      restaurantName: this.state.guestRestaurant,
    });
  };

  handleGuestName = (e) => {
    const guestName = e.target.value;
    this.setState(() => ({ guestName }));
  };

  handleGuestRestaurant = (e) => {
    const guestRestaurant = e.target.value;
    this.setState((e) => ({ guestRestaurant }));
  };

  render() {
    return (
      <div>
        <form className="container" onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Add A Guest</legend>

            <div className="form-column">
              <label htmlFor="guestName">Guest's Name</label>
              <input
                name="guestName"
                type="text"
                required
                value={this.state.guestName}
                onChange={this.handleGuestName}
                autoFocus
              />
            </div>

            <div className="form-column">
              <label htmlFor="guestsRestaurant">
                Guest's Restaurant Choice
              </label>
              <input
                name="restaurant"
                type="text"
                required
                value={this.state.guestRestaurant}
                onChange={this.handleGuestRestaurant}
              />
            </div>
            <div className="form-column">
              <button className="button">Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddGuestForm;
