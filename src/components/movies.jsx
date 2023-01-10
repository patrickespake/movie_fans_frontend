import React, { Component } from "react";
import Like from "./common/like";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getMovies } from "../services/movieService";
import { getGenres } from "../services/genreService";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 3,
    showPagination: true,
    selectedGenre: null,
  };

  componentDidMount() {
    const { currentPage, pageSize } = this.state;
    const genres = [{ name: "All Genres", id: 0 }, ...getGenres()];

    // TODO: Replace paginate to use a server side pagination
    this.setState({
      movies: paginate(getMovies(), currentPage, pageSize),
      genres,
    });
  }

  handleView = (movie) => {
    // TODO: Redirect to movie details page
    console.log(`/movies/${movie.id}`);
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    const currentPage = page + 1;
    const { movies, pageSize, selectedGenre } = this.state;

    // TODO: Replace paginate to use a server side pagination
    const filteredMovies = paginate(
      this.filterMoviesByGenre(selectedGenre),
      currentPage,
      pageSize
    );
    const allMovies = [...movies, ...filteredMovies];

    this.setState({ currentPage: page + 1, movies: allMovies });

    if (filteredMovies.length < pageSize)
      this.setState({ showPagination: false });
  };

  handleGenreSelect = (genre) => {
    const { pageSize } = this.state;
    const currentPage = 1;
    const filteredMovies = this.filterMoviesByGenre(genre);

    // TODO: Replace paginate to use a server side pagination
    this.setState({
      selectedGenre: genre,
      movies: paginate(filteredMovies, currentPage, pageSize),
      currentPage: 1,
      showPagination: true,
    });
  };

  filterMoviesByGenre = (genre) => {
    const filteredMovies =
      genre && genre.id
        ? getMovies().filter((m) => {
            return m.genres.some((g) => g.id === genre.id);
          })
        : getMovies();

    return filteredMovies;
  };

  render() {
    const { length: count } = this.state.movies;
    const { currentPage, movies, showPagination, genres, selectedGenre } =
      this.state;

    return (
      <>
        <div className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <ListGroup
                  items={genres}
                  selectedItem={selectedGenre}
                  onItemSelect={this.handleGenreSelect}
                />
              </div>
              <div className="col">
                <p className="g-4">{`Showing ${count} movies in the database.`}</p>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                  {movies.map((movie) => (
                    <div className="col" key={movie.id}>
                      <div className="card shadow-sm h-100">
                        <img
                          src={movie.image.replace("400x", "400x100")}
                          className="card-img-top"
                          alt="Movie"
                        />
                        <div className="card-header">{movie.name}</div>
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="card-text">$ {movie.market_price}</p>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => this.handleView(movie)}
                            >
                              View
                            </button>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <Like
                              liked={movie.liked || false}
                              onClick={() => this.handleLike(movie)}
                            />
                          </div>
                        </div>
                        <ul className="list-group list-group-flush">
                          {movie.genres.map((genre) => (
                            <li className="list-group-item" key={genre.id}>
                              {genre.name}
                            </li>
                          ))}
                        </ul>
                        <div className="card-footer text-muted">
                          Owner: {movie.owner.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {showPagination && count > 0 && (
                  <Pagination
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
