import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => (
  <nav>
    <header>
      <div className="branding">
        <h1> {props.title}</h1>
      </div>
    </header>
    {props.profile.isSubmitted ? (
      <ul>
        <Link to="/">
          <li className="header-link">Profile</li>
        </Link>
        <Link to="/guests">
          <li className="header-link">Add Guests</li>
        </Link>
        <Link to="dashboard">
          <li className="header-link"> Random Picker</li>
        </Link>
      </ul>
    ) : (
      <ul>
        <Link to="/">
          <li className="header-link">Profile</li>
        </Link>
      </ul>
    )}
  </nav>
);

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(Header);
