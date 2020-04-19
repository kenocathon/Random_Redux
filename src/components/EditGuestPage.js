import React from "react";
import AddGuestForm from "./AddGuestForm";
import { editGuest, removeGuest } from "../actions/guests";
import { connect } from "react-redux";

const EditGuestPage = (props) => {
  return (
    <div className="container">
      <AddGuestForm
        guests={props.guests}
        onSubmit={(guest) => {
          props.dispatch(editGuest(props.guests.id, guest));
          props.history.push("/dashboard");
        }}
      />
      <button
        className="button button--remove"
        onClick={() => {
          props.dispatch(removeGuest({ id: props.guests.id }));
          props.history.push("/dashboard");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    guests: state.guests.find((guest) => guest.id === props.match.params.id),
  };
};
export default connect(mapStateToProps)(EditGuestPage);
