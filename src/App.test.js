import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "enzyme";
import App from "./App";

describe("App", () => {
  it('should render Movies component when path is "/"', () => {
    const view = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(view.text()).toContain("Showing 0 movies in the database.");
  });

  it('should render MovieDetails component when path is "/movies/:id"', () => {
    const view = render(
      <MemoryRouter initialEntries={["/movies/1"]}>
        <App />
      </MemoryRouter>
    );

    expect(view.text()).toContain("Movie Details");
  });

  it("should render NotFound component when path is not matched", () => {
    const view = render(
      <MemoryRouter initialEntries={["/unknown-path"]}>
        <App />
      </MemoryRouter>
    );
    expect(view.text()).toContain("Page not found.");
  });
});
