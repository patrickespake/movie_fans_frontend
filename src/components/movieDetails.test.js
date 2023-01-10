import React from "react";
import { render } from "enzyme";
import MovieDetails from "./MovieDetails";

describe("MovieDetails", () => {
  it("should render a header and a message indicating the component is not yet implemented", () => {
    const view = render(<MovieDetails />);
    expect(view.find("h1").text()).toEqual("Movie Details");
    expect(view.find("p").text()).toEqual("Need to be implemented.");
  });
});
