import React from "react";
import { shallow } from "enzyme";
import Movies from "./Movies";
import Like from "./common/like";
import Pagination from "./common/pagination";

describe("Movies component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Movies />);
  });

  const mockMovies = [
    {
      id: 1,
      name: "Captains of the Clouds",
      parameterized_name: "captains-of-the-clouds",
      thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
      image: "http://dummyimage.com/400x.png/dddddd/000000",
      market_price: 25.19,
      owner_id: 1,
      created_at: "2023-01-08T19:09:37.873Z",
      updated_at: "2023-01-08T19:09:37.873Z",
      owner: {
        id: 1,
        name: "Martin Lopez",
        parameterized_name: "martin-lopez",
        created_at: "2023-01-08T19:09:37.803Z",
        updated_at: "2023-01-08T19:09:37.803Z",
      },
      genres: [
        {
          id: 1,
          name: "Action",
          parameterized_name: "action",
          created_at: "2023-01-08T19:09:37.845Z",
          updated_at: "2023-01-08T19:09:37.845Z",
        },
        {
          id: 2,
          name: "Drama",
          parameterized_name: "drama",
          created_at: "2023-01-08T19:09:37.849Z",
          updated_at: "2023-01-08T19:09:37.849Z",
        },
        {
          id: 3,
          name: "War",
          parameterized_name: "war",
          created_at: "2023-01-08T19:09:37.852Z",
          updated_at: "2023-01-08T19:09:37.852Z",
        },
      ],
    },
    {
      id: 2,
      name: "Odessa File, The",
      parameterized_name: "odessa-file-the",
      thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
      image: "http://dummyimage.com/400x.png/dddddd/000000",
      market_price: 16.41,
      owner_id: 2,
      created_at: "2023-01-08T19:09:37.930Z",
      updated_at: "2023-01-08T19:09:37.930Z",
      owner: {
        id: 2,
        name: "Luis Miguel",
        parameterized_name: "luis-miguel",
        created_at: "2023-01-08T19:09:37.921Z",
        updated_at: "2023-01-08T19:09:37.921Z",
      },
      genres: [
        {
          id: 4,
          name: "Thriller",
          parameterized_name: "thriller",
          created_at: "2023-01-08T19:09:37.925Z",
          updated_at: "2023-01-08T19:09:37.925Z",
        },
      ],
    },
    {
      id: 3,
      name: "Other Woman, The",
      parameterized_name: "other-woman-the",
      thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
      image: "http://dummyimage.com/400x.png/cc0000/ffffff",
      market_price: 43.24,
      owner_id: 3,
      created_at: "2023-01-08T19:09:37.949Z",
      updated_at: "2023-01-08T19:09:37.949Z",
      owner: {
        id: 3,
        name: "Morgan Reeves",
        parameterized_name: "morgan-reeves",
        created_at: "2023-01-08T19:09:37.935Z",
        updated_at: "2023-01-08T19:09:37.935Z",
      },
      genres: [
        {
          id: 5,
          name: "Comedy",
          parameterized_name: "comedy",
          created_at: "2023-01-08T19:09:37.939Z",
          updated_at: "2023-01-08T19:09:37.939Z",
        },
        {
          id: 6,
          name: "Romance",
          parameterized_name: "romance",
          created_at: "2023-01-08T19:09:37.942Z",
          updated_at: "2023-01-08T19:09:37.942Z",
        },
      ],
    },
  ];

  it("should render the movies list", () => {
    wrapper.setState({
      movies: mockMovies,
    });

    // Assert that the movies are rendered in the component
    expect(
      wrapper.containsMatchingElement(
        <div className="card-header">Captains of the Clouds</div>
      )
    ).toBe(true);
    expect(
      wrapper.containsMatchingElement(
        <div className="card-header">Odessa File, The</div>
      )
    ).toBe(true);
    expect(
      wrapper.containsMatchingElement(
        <div className="card-header">Other Woman, The</div>
      )
    ).toBe(true);
    expect(
      wrapper.containsMatchingElement(
        <p className="g-4">Showing 3 movies in the database.</p>
      )
    ).toBe(true);
    expect(
      wrapper.containsMatchingElement(
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Action</li>
          <li className="list-group-item">Drama</li>
          <li className="list-group-item">War</li>
        </ul>
      )
    ).toBe(true);
    expect(
      wrapper.containsMatchingElement(
        <div className="card-footer text-muted">Owner: Martin Lopez</div>
      )
    ).toBe(true);
  });

  it("should call the handlePageChange method when a page is clicked in the pagination component", () => {
    const spy = jest.spyOn(wrapper.instance(), "handlePageChange");
    wrapper.instance().forceUpdate();
    wrapper.find(Pagination).props().onPageChange();
    expect(spy).toHaveBeenCalled();
  });

  it("should toggle the liked prop of the movie when the like button is clicked", () => {
    wrapper.setState({ movies: [mockMovies[0]] });
    wrapper.find(Like).props().onClick();
    expect(wrapper.state().movies[0].liked).toBe(true);
  });

  it("should render the view button for each movie", () => {
    // Assert that the view button is rendered for each movie
    expect(
      wrapper.find("button").filterWhere((n) => n.text() === "View")
    ).toHaveLength(3);
  });
});
