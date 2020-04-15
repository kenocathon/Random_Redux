import React from "react";
import { connect } from "react-redux";
import {
  addFirstName,
  addLastName,
  addEmail,
  addFavoriteRestaurant,
  formSubmitted,
} from "../actions/profile";

const ProfileForm = (props) => (
  <form
    className="container"
    onSubmit={(e) => {
      e.preventDefault()
      props.dispatch(formSubmitted(true));
      props.history.push("/pickrestaurant");
    }}
  >
    <fieldset>
      <legend>Profile</legend>
      <div className="formboxcolumn">
        <h4>Please fill out the form to get access</h4>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={props.profile.firstName}
          required
          onChange={(e) => {
            props.dispatch(addFirstName(e.target.value));
          }}
        />
      </div>
      <div className="formboxcolumn">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={props.profile.lastName}
          required
          onChange={(e) => {
            props.dispatch(addLastName(e.target.value));
          }}
        />
      </div>
      <div className="formboxcolumn">
        <label htmlFor="eMail">Email Address</label>
        <input
          id="eMail"
          type="text"
          value={props.profile.eMail}
          required
          onChange={(e) => {
            props.dispatch(addEmail(e.target.value));
          }}
        />
      </div>
      <div className="formboxcolumn">
        <label htmlFor="favoriteRestaurant">Favorite Restaurant</label>
        <input
          id="favoriteRestaurant"
          type="text"
          value={props.profile.favoriteRestaurant}
          required
          onChange={(e) => {
            console.log("dispatching")
            props.dispatch(addFavoriteRestaurant(e.target.value));
          }}
        />
      </div>
      <div className="formboxcolumn">
        <button>Save</button>
      </div>
    </fieldset>
  </form>
);

const mapStateToProps = (state) => (
  
  {
  profile: state.profile,
});

export default connect(mapStateToProps)(ProfileForm);
