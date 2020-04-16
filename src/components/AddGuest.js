import React from "react";
import { connect } from "react-redux";
import AddGuestForm from "./AddGuestForm";
import { addGuest } from "../actions/guests";

const AddGuestPage = (props) => {
  return (
    <AddGuestForm
      onSubmit={(guest) => {
        props.dispatch(addGuest(guest.guestName, guest.restaurantName));
        props.history.push("/dashboard");
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    guests: state.guests,
  };
};

export default connect(mapStateToProps)(AddGuestPage);
