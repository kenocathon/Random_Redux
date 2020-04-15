import React from "react";
import { connect } from "react-redux";
import GuestListItem from "./GuestListItem";

const GuestList = (props) => (
  <div>
    <h1>Your Guests Picked:</h1>
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

export default connect(mapStateToProps)(GuestList);
