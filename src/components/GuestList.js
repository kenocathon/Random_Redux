import React from "react";
import { connect } from "react-redux";
import GuestListItem from "./GuestListItem";
import { withRouter } from "react-router-dom";

const GuestList = (props) => (
  <div className="container">
    <h1>Your Guests Picked:</h1>
    {props.guests.length === 0 && (
      <div className="formboxcolumn">
        <p>To run the picker add some guests</p>
        <button onClick={() => props.history.push("/guests")}>
          Add Guests
        </button>
      </div>
    )}
    {props.guests.map((guest) => {
      return <GuestListItem key={guest.id} {...guest} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    guests: state.guests,
  };
};

const thisComponent = connect(mapStateToProps)(GuestList);

export default withRouter(thisComponent);
