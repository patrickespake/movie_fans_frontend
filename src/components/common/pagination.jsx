import React, { Component } from "react";
import PropTypes from "prop-types";

class Pagination extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
  };

  render() {
    const { currentPage, onPageChange } = this.props;

    return (
      <div className="d-grid gap-2 mt-5">
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={() => onPageChange(currentPage)}
        >
          Load more movies
        </button>
      </div>
    );
  }
}

export default Pagination;
