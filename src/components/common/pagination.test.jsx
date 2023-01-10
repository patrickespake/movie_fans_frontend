import React from "react";
import { shallow } from "enzyme";
import Pagination from "./Pagination";

describe("Pagination component", () => {
  it("renders a button element", () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("calls the onPageChange prop when the button is clicked", () => {
    const onPageChange = jest.fn();
    const wrapper = shallow(<Pagination onPageChange={onPageChange} />);
    wrapper.find("button").simulate("click");
    expect(onPageChange).toHaveBeenCalled();
  });

  it("passes the currentPage prop to the onPageChange prop when the button is clicked", () => {
    const onPageChange = jest.fn();
    const currentPage = 2;
    const wrapper = shallow(
      <Pagination currentPage={currentPage} onPageChange={onPageChange} />
    );
    wrapper.find("button").simulate("click");
    expect(onPageChange).toHaveBeenCalledWith(currentPage);
  });
});
