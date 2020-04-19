import React from "react";
import { connect } from "react-redux";
import GuestListItem from "./GuestListItem";
import { withRouter } from "react-router-dom";
import { removeAllGuests } from "../actions/guests";

const GuestList = (props) => {
  const clearGuests = () => {
    props.dispatch(removeAllGuests());
  };
  return (
    <section className="widget">
      <div className="widget-header">
        <h3 className="widget-title">Guest Choices</h3>
        {props.guests.length > 0 && (
          <button className="button button--link" onClick={clearGuests}>
            Remove All
          </button>
        )}
      </div>

      {props.guests.length === 0 && (
        <div className="widget__message">
          <p>To run the picker add some guests</p>
        </div>
      )}

      {props.guests.map((guest) => {
        return <GuestListItem key={guest.id} {...guest} />;
      })}

      <button
        className="button widget-button"
        onClick={() => props.history.push("/guests")}
      >
        Add Guest
      </button>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    guests: state.guests,
  };
};

const thisComponent = connect(mapStateToProps)(GuestList);

export default withRouter(thisComponent);
