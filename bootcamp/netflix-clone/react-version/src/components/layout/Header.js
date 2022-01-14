import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div class="container">
        <h2 class="logo">NETFLIX</h2>
        <nav>
          <a href="#main">Início</a>
          <a href="https://www.netflix.com/browse/genre/83" target="_blank" rel="noreferrer" >
            Séries
          </a>
          <a href="https://www.netflix.com/browse/genre/34399" target="_blank" rel="noreferrer" >
            Filmes
          </a>
          <a href="https://www.netflix.com/browse/genre/6839" target="_blank" rel="noreferrer" >
            Documentários
          </a>
          <Link to = "/signin">Sair</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
