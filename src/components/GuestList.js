import React from "react";
import { connect } from "react-redux";
import GuestListItem from "./GuestListItem";

const GuestList = (props) => {
  return (
    <div>
      <h2>Guest List</h2>
      {props.guests.map((guest) => {
        return <GuestListItem key={guest.id} {...guest} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    guests: state.guests,
  };
};

export default connect(mapStateToProps)(GuestList);
