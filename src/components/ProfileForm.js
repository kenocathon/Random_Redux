import React from "react";
import { connect } from "react-redux";
import {
  addFirstName,
  addLastName,
  addEmail,
  addFavoriteRestaurant,
  formSubmitted,
} from "../actions/profile";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.profile.firstName ? props.profile.firstName : "",
      lastName: props.profile.lastName ? props.profile.lastName : "",
      eMail: props.profile.eMail ? props.profile.eMail : "",
      favoriteRestaurant: props.profile.favoriteRestaurant
        ? props.profile.favoriteRestaurant
        : "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addFirstName(this.state.firstName));
    this.props.dispatch(addLastName(this.state.lastName));
    this.props.dispatch(addEmail(this.state.eMail));
    this.props.dispatch(addFavoriteRestaurant(this.state.favoriteRestaurant));
    this.props.dispatch(formSubmitted(true));
    this.props.history.push("/pickrestaurant");
  };

  handleFirstName = (e) => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  };

  handleLastName = (e) => {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  };

  handleEmail = (e) => {
    const eMail = e.target.value;
    this.setState(() => ({ eMail }));
  };

  handleFavoriteRestaurant = (e) => {
    const favoriteRestaurant = e.target.value;
    this.setState(() => ({ favoriteRestaurant }));
  };

  render() {
    return (
      <form className="container" onSubmit={this.onSubmit}>
        <fieldset>
          <legend>Profile</legend>
          <h4>Please fill out the form to get access</h4>
          <div className="form-column">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              value={this.state.firstName}
              required
              onChange={this.handleFirstName}
              autoFocus
            />
          </div>
          <div className="form-column">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              value={this.state.lastName}
              required
              onChange={this.handleLastName}
            />
          </div>
          <div className="form-column">
            <label htmlFor="eMail">Email Address</label>
            <input
              type="text"
              value={this.state.eMail}
              required
              onChange={this.handleEmail}
            />
          </div>
          <div className="form-column">
            <label htmlFor="favoriteRestaurant">Favorite Restaurant</label>
            <input
              type="text"
              value={this.state.favoriteRestaurant}
              required
              onChange={this.handleFavoriteRestaurant}
            />
          </div>
          <div className="form-column">
            <button className="button">Save</button>
          </div>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(ProfileForm);
