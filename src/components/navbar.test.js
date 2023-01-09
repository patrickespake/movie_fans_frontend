import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  it("should render the header element with the correct class names", () => {
    render(<Navbar />);

    const header = screen.getByRole("banner");
    expect(header).toHaveClass("pb-3 mb-4 border-bottom");
  });

  it("should render a link element with the correct href and class names", () => {
    render(<Navbar />);

    const link = screen.getByRole("link");
    expect(link).toHaveClass(
      "d-flex align-items-center text-dark text-decoration-none"
    );
    expect(link).toHaveAttribute("href", "/");
  });

  it("should render the correct text inside the link element", () => {
    render(<Navbar />);

    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("Movie Fans Frontend");
  });
});
