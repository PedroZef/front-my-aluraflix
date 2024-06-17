import React from "react";
import "./Footer.styles.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <img src="img/LogoFooter.png" alt="Aluraflix Logo" />
          <p>&copy; 2024 - Pedro Zeferino da Silva. </p>
        </div>
      </footer>
    );
  }
}
