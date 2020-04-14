import React from "react";
import { connect } from "react-redux";
import { addGuest } from "../actions/guests";
import GuestList from "./GuestList";

const AddGuests = (props) => {
  function handleGuests(e) {
    e.preventDefault();
    let guestName = e.target.elements.guestName.value;
    let restaurant = e.target.elements.restaurant.value;
    props.dispatch(addGuest(guestName, restaurant));
    e.target.elements.guestName.value = "";
    e.target.elements.restaurant.value = "";
  }
  function guestsAllowed() {
    const guestCount = props.guests.length;
    const guestsAllowed = 4;
    return guestsAllowed - guestCount;
  }

  return (
    <div>
      {guestsAllowed() > 0 && (
        <form className="container" onSubmit={handleGuests}>
          <fieldset>
            <legend>Add A Guest</legend>
            <h3>Guest Invites Remaining: {guestsAllowed()}</h3>

            <div className="formboxcolumn">
              <label htmlFor="guestName">Guest's Name</label>
              <input id="guestName" name="guestName" type="text" required />
            </div>

            <div className="formboxcolumn">
              <label htmlFor="guestsRestaurant">
                Guest's Restaurant Choice
              </label>
              <input
                id="guestsRestaurant"
                name="restaurant"
                type="text"
                required
              />
            </div>

            <div className="formboxcolumn">
              <button className="add-btn">Submit</button>
            </div>
          </fieldset>
        </form>
      )}
      {guestsAllowed() < 4 && (
        <div className="container formboxcolumn">
          <GuestList />
          <button
            className="add-btn"
            onClick={() => props.history.push("/dashboard")}
          >
            Go to Picker
          </button>
        </div>
      )}
    </div>
  );
};

const mapToState = (state) => ({ guests: state.guests });

export default connect(mapToState)(AddGuests);
