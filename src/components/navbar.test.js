import React from "react";
import { Link } from "react-router-dom";
import { render } from "enzyme";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {
  it("should render a link to the home page", () => {
    const view = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const link = view.find("a");
    expect(link).toHaveLength(1);
  });

  it("should have the text 'Movie Fans Frontend'", () => {
    const view = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(view.find("span").text()).toEqual("Movie Fans Frontend");
  });
});
