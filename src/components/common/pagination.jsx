import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const { page, pageSize, onPageChange } = this.props;

    return (
      <div className="d-grid gap-2 mt-5">
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={() => onPageChange(page)}
        >
          Load more movies
        </button>
      </div>
    );
  }
}

export default Pagination;
