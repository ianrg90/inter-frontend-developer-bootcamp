import React from "react";

const MoviesContext = React.createContext({
    data: [],
    currentMovie: {},
    changeMainMovieDisplay: (movie) => {}
})

export default MoviesContext