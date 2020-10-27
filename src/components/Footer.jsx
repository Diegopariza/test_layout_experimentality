import React from "react";
import "../assets/scss/Footer.scss";
import logo_footer from "../assets/images/logo_footer.png";

class Nav extends React.Component {
  render() {
    return (
      <footer className="footer">
        <h5 className="footer_text" htmlFor="footer">
          all right reserved
        </h5>
        <img
          className="footer_logo-image"
          src={logo_footer}
          alt="logo_footer"
        ></img>
      </footer>
    );
  }
}

export default Nav;
