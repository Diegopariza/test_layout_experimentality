import React from "react";
import "../assets/scss/Nav.scss";
import logo_experimentality from "../assets/images/logo_experimentality.png";
import arrow_mobile from "../assets/images/arrow_mobile.png";

class Nav extends React.Component {
  render() {
    return (
      <section className="nav">
        <div className="nav_links">
          <img
            className="nav_logo-image"
            src={logo_experimentality}
            alt="logo_experimentality"
          ></img>
          <div className="nav_info">
            <label className="nav_subtitle" htmlFor="history">
              <b>History</b>
            </label>
            <label className="nav_subtitle" htmlFor="form">
              <b>Form</b>
            </label>
          </div>
        </div>
        <div className="nav_title">
          <b>
            <h1>Welcome to the family</h1>
          </b>
        </div>
        <img
          className="nav_arrow-image"
          src={arrow_mobile}
          alt="arrow_mobile"
        ></img>
      </section>
    );
  }
}

export default Nav;
