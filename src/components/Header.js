import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => (
  <section>
    <header className="header">
      <div className="container">
        <h1 className="header__title"> {props.title}</h1>
        <h2 className="header__subtitle">{props.subtitle}</h2>
      </div>
    </header>
    <nav>
      {props.profile.isSubmitted ? (
        <ul>
          <Link className="link" to="/">
            <li className="nav-link">Profile</li>
          </Link>

          <Link className="link" to="/dashboard">
            <li className="nav-link"> Random Picker</li>
          </Link>
        </ul>
      ) : (
        <ul>
          <Link className="link" to="/">
            <li className="nav-link">Profile</li>
          </Link>
        </ul>
      )}
    </nav>
  </section>
);

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(Header);
