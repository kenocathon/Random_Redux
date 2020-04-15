import React from "react";
import AddGuestForm from "./AddGuestForm";
import { editGuest } from "../actions/guests";
import { connect } from "react-redux";

const EditGuestPage = (props) => {
  return (
    <div>
      <AddGuestForm
        guests={props.guests}
        onSubmit={(guest) => {
          props.dispatch(editGuest(props.guests.id, guest));
          props.history.push("/dashboard");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    guests: state.guests.find((guest) => guest.id === props.match.params.id),
  };
};
export default connect(mapStateToProps)(EditGuestPage);
