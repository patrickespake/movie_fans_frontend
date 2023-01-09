import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Movies from "./Movies";

describe("Movies component", () => {
  it("should render the movies list", () => {
    render(<Movies />);

    // Assert that the movies are rendered in the component
    expect(screen.getByText("Captains of the Clouds")).toBeInTheDocument();
    expect(screen.getByText("Odessa File, The")).toBeInTheDocument();
    expect(screen.getByText("Other Woman, The")).toBeInTheDocument();
  });

  it("should render the genres for each movie", () => {
    render(<Movies />);

    // Assert that the genres are rendered for each movie
    expect(screen.getByText(/Documentary/)).toBeInTheDocument();
    expect(screen.getByText(/Sci-Fi/)).toBeInTheDocument();
  });

  it("should render the owner for each movie", () => {
    render(<Movies />);

    // Assert that the owner is rendered for each movie
    expect(screen.getByText(/Jhon Doe/)).toBeInTheDocument();
    expect(screen.getByText(/Luis Miguel/)).toBeInTheDocument();
  });

  it("should render the view button for each movie", () => {
    render(<Movies />);

    // Assert that the view button is rendered for each movie
    expect(screen.queryAllByText("View")).toHaveLength(10);
  });
});
