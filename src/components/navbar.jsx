import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header className="pb-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <span className="fs-4">Movie Fans Frontend</span>
        </a>
      </header>
    );
  }
}

export default Navbar;
