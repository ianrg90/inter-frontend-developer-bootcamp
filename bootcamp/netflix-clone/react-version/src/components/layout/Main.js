import React, { useContext } from "react";
import MoviesContext from "../../store/movies-context";

function Main() {
  const { currentMovie } = useContext(MoviesContext);

  const backgroundStyle = {
    image: {
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%),
    url(${currentMovie.coverImage}) center/cover`,
    },
  };

  return (
    <main id = "main">
      <div class="main-movie" style={backgroundStyle.image}>
        <div class="container">
          <h3 class="title">{currentMovie.title}</h3>
          <p class="description">
            {currentMovie.description}
          </p>
          <nav class="navigation">
            <a
              class="link play"
              href={currentMovie.trailerURL}
              target="_blank"
              rel="noreferrer" 
            >
              <i class="fas fa-play"></i>ASSISTIR AGORA
            </a>
            <a
              class="link info"
              href= {currentMovie.info}
              target="_blank"
              rel="noreferrer" 
            >
              <i class="fas fa-info-circle"></i>MAIS INFORMAÇÕES
            </a>
          </nav>
        </div>
      </div>
    </main>
  );
}

export default Main;
