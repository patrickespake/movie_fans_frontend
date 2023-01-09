import React from "react";
import { render, screen } from "@testing-library/react";
import Movies from "./Movies";

describe("Movies component", () => {
  it("should render the movies list", () => {
    render(<Movies />);

    // Assert that the movies are rendered in the component
    expect(screen.getByText("Captains of the Clouds")).toBeInTheDocument();
    expect(screen.getByText("Odessa File, The")).toBeInTheDocument();
    expect(screen.getByText("Other Woman, The")).toBeInTheDocument();

    // Assert that the count message is displayed correctly
    expect(
      screen.getByText(/Showing 10 movies in the database./)
    ).toBeInTheDocument();
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

  // it("should render a message if there are no movies in the database", () => {
  //   jest.spyOn(movieService, "getMovies").mockReturnValue([]);

  //   render(<Movies />);

  //   // Assert that the "There are no movies in the database" message is displayed
  //   expect(
  //     screen.getByText("There are no movies in the database")
  //   ).toBeInTheDocument();
  // });
});
