import { paginate } from "./paginate";

describe("paginate function", () => {
  it("returns the correct number of items", () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pageNumber = 2;
    const pageSize = 3;
    const result = paginate(items, pageNumber, pageSize);
    expect(result).toHaveLength(pageSize);
  });

  it("returns the correct items for the specified page", () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pageNumber = 2;
    const pageSize = 3;
    const result = paginate(items, pageNumber, pageSize);
    expect(result).toEqual([4, 5, 6]);
  });

  it("returns an empty array if pageNumber is out of range", () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pageNumber = 4;
    const pageSize = 4;
    const result = paginate(items, pageNumber, pageSize);
    expect(result).toEqual([]);
  });
});
