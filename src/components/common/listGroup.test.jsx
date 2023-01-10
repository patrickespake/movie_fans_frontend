import React from "react";
import { shallow } from "enzyme";
import ListGroup from "./ListGroup";

describe("ListGroup component", () => {
  let wrapper;
  let mockOnItemSelect;
  beforeEach(() => {
    mockOnItemSelect = jest.fn();
    wrapper = shallow(
      <ListGroup
        items={[
          { id: 1, name: "item1" },
          { id: 2, name: "item2" },
        ]}
        selectedItem={null}
        onItemSelect={mockOnItemSelect}
      />
    );
  });

  it("should render without errors", () => {
    expect(wrapper.find(".list-group").exists()).toBeTruthy();
  });

  it("should render correct number of list items", () => {
    expect(wrapper.find("li").length).toEqual(2);
  });

  it("should call onItemSelect when an item is clicked", () => {
    wrapper.find("li").first().simulate("click");
    expect(mockOnItemSelect.mock.calls.length).toBe(1);
  });

  it("should use the correct textProperty and valueProperty when rendering items", () => {
    wrapper.setProps({ textProperty: "name", valueProperty: "id" });
    expect(wrapper.find("li").first().text()).toEqual("item1");
    expect(wrapper.find("li").first().key()).toEqual("1");
  });

  it("should use the default textProperty and valueProperty when not provided", () => {
    wrapper.setProps({ textProperty: undefined, valueProperty: undefined });
    expect(wrapper.find("li").first().text()).toEqual("item1");
    expect(wrapper.find("li").first().key()).toEqual("1");
  });
});
