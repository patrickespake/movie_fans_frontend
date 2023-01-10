import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <header className="pb-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <span className="fs-4">Movie Fans Frontend</span>
        </Link>
      </header>
    );
  }
}

export default Navbar;
