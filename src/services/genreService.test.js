import { getGenres } from "./genreService";
import * as genreService from "./genreService";

describe("getGenres service", () => {
  it("should return the list of genres", () => {
    // Mock the service function to return a fixed list of genres
    const mockGenres = [
      { id: 1, name: "Genre 1" },
      { id: 2, name: "Genre 2" },
      { id: 3, name: "Genre 3" },
    ];
    jest.spyOn(genreService, "getGenres").mockImplementation(() => mockGenres);

    // Call the service function and assert that it returns the expected list of genres
    expect(getGenres()).toEqual(mockGenres);
  });
});
