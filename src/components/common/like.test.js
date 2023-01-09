import React from "react";
import { shallow } from "enzyme";
import Like from "./Like";

describe("Like component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Like />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders an i element", () => {
    expect(wrapper.find("i").length).toBe(1);
  });

  it("has the correct class when liked prop is true", () => {
    wrapper.setProps({ liked: true });
    expect(wrapper.find("i").hasClass("fa-heart")).toBe(true);
  });

  it("has the correct class when liked prop is false", () => {
    wrapper.setProps({ liked: false });
    expect(wrapper.find("i").hasClass("fa-heart-o")).toBe(true);
  });

  it("calls the onClick prop when clicked", () => {
    const onClick = jest.fn();
    wrapper.setProps({ onClick });
    wrapper.find("i").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
