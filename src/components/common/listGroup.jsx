import React, { Component } from "react";

class ListGroup extends Component {
  static defaultProps = {
    textProperty: "name",
    valueProperty: "id",
  };

  render() {
    const { items, textProperty, valueProperty, selectedItem, onItemSelect } =
      this.props;

    return (
      <ul className="list-group">
        {items.map((item) => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
