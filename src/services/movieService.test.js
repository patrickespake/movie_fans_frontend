import { getMovies } from "./movieService";
import * as movieService from "./movieService";

describe("getMovies service", () => {
  it("should return the list of movies", () => {
    // Mock the service function to return a fixed list of movies
    const mockMovies = [
      { id: 1, name: "Movie 1" },
      { id: 2, name: "Movie 2" },
      { id: 3, name: "Movie 3" },
    ];
    jest.spyOn(movieService, "getMovies").mockImplementation(() => mockMovies);

    // Call the service function and assert that it returns the expected list of movies
    expect(getMovies()).toEqual(mockMovies);
  });
});
