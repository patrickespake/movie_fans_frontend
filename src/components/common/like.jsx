import React, { Component } from "react";
import PropTypes from "prop-types";

class Like extends Component {
  static propTypes = {
    liked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { liked, onClick } = this.props;

    let classes = "fa fa-heart";
    if (!liked) classes += "-o";

    return (
      <i
        onClick={onClick}
        className={classes}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
      ></i>
    );
  }
}

export default Like;
