import React, { useContext } from "react";
import MoviesContext from "../../store/movies-context";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";

function MoviesList() {
  const { data, changeMainMovieDisplay } = useContext(MoviesContext);

  const options = {
    items: 4,
    nav: false,
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  function selectMovie(e) {
    changeMainMovieDisplay(e.target.alt);
  }

  const moviesList = data.map((movie) => {
    return (
      <img
        key={movie.title}
        src={movie.poster}
        alt={movie.title}
        onClick={selectMovie}
      />
    );
  });

  return (
    <div class="carousel-movies">
      <OwlCarousel options={options}>{moviesList}</OwlCarousel>
    </div>
  );
}

export default MoviesList;
