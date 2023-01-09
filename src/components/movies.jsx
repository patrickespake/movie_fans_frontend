import React, { Component } from "react";
import { getMovies } from "../services/movieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    return (
      <div className="py-5 bg-light">
        <div className="container">
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
                      >
                        View
                      </button>
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
    );
  }
}

export default Movies;
