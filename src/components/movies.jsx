import React, { Component } from "react";
import { getMovies } from "../services/movieService";
import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies(),
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

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the database.</p>;

    return (
      <>
        <div className="py-5 bg-light">
          <div className="container">
            <p className="g-4">{`Showing ${count} movies in the database.`}</p>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              {this.state.movies.map((movie) => (
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
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
