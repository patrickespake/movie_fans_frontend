import React from "react";
import { shallow } from "enzyme";
import NotFound from "./NotFound";

describe("NotFound", () => {
  it('should render text "Page not found."', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.text()).toEqual("Page not found.");
  });
});
