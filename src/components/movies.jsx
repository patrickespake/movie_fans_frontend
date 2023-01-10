import React, { Component } from "react";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { getMovies } from "../services/movieService";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: paginate(getMovies(), 1, 3),
    currentPage: 1,
    pageSize: 3,
    showPagination: true,
  };

  handleView = (movie) => {
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
    const { movies, pageSize } = this.state;

    const currentPage = page + 1;
    const newMovies = paginate(getMovies(), currentPage, pageSize);
    const allMovies = [...movies, ...newMovies];

    this.setState({ currentPage: page + 1 });
    this.setState({ movies: allMovies });

    if (newMovies.length < pageSize) this.setState({ showPagination: false });
  };

  render() {
    const { length: count } = this.state.movies;
    const { currentPage, movies, showPagination } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    return (
      <>
        <div className="py-5 bg-light">
          <div className="container">
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
            {showPagination && (
              <Pagination
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
