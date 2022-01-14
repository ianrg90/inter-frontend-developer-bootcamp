import React, { useState } from "react";
import MoviesContext from "./movies-context";

const data = [
  {
    title: "Dexter: Sangue Novo",
    description:
      "Longe de sua vida antiga, Dexter se refugiou em uma pequena cidade e adotou uma identidade falsa. Ele leva uma vida tranquila até que um serial killer aparece no local, forçando-o a reviver seu antigo eu.",
    coverImage:
      "https://www.themoviedb.org/t/p/original/3STIpPmCd0qCl2DfeKxdM3NDK8e.jpg",
    info: "https://www.themoviedb.org/tv/131927-dexter-new-blood",
    trailerURL: "https://www.youtube.com/watch?v=zfBrl-ywAqw",
    poster:
      "https://www.themoviedb.org/t/p/original/wZKneYneCBw85VheXSXUS7Sp5EN.jpg",
  },
  {
    title: "O Espetacular Homem-Aranha 2: A Ameaça de Electro",
    description:
      "O jovem Peter Parker está fascinado com as habilidades que adquiriu como Homem-Aranha. Agora, ele precisa lidar com dois problemas: o retorno de um velho amigo, Harry Osborn, e a chegada de um vilão mais forte e poderoso, Electro.",
    coverImage:
      "https://www.themoviedb.org/t/p/original/iWrDibFusV4JEz5Qw79RuWSGfX4.jpg",
    info: "https://www.themoviedb.org/movie/102382-the-amazing-spider-man-2",
    trailerURL: "https://www.youtube.com/watch?v=tbYCOlR_Wsc",
    poster:
      "https://www.themoviedb.org/t/p/original/lDbcaBs1IdBZccCM1R417XmPxKF.jpg",
  },
  {
    title: "O Livro de Boba Fett",
    description:
      "Uma emocionante aventura Star Wars que encontra o lendário caçador de recompensas Boba Fett e o mercenário Fennec Shand explorando o submundo da Galáxia quando retornam às areias de Tatooine para reivindicar o território antes governado por Jabba, o Hutt e seu sindicato do crime.",
    coverImage:
      "https://www.themoviedb.org/t/p/original/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg",
    info: "https://www.themoviedb.org/tv/115036-the-book-of-boba-fett",
    trailerURL: "https://www.youtube.com/watch?v=Vf6X4Uamjas&feature=emb_title",
    poster:
      "https://www.themoviedb.org/t/p/original/kVelEAAPWMMXCNwsX7YVE8iOlYs.jpg",
  },
  {
    title: "The Walking Dead",
    description:
      "Nos Estados Unidos pós-apocalíptico, um pequeno grupo de sobreviventes segue viajando à procura de uma nova casa longe dos mortos-vivos. O desespero por segurança e suprimentos os coloca constantemente à beira da sanidade.",
    coverImage:
      "https://www.themoviedb.org/t/p/original/uro2Khv7JxlzXtLb8tCIbRhkb9E.jpg",
    info: "https://www.themoviedb.org/tv/1402-the-walking-dead",
    trailerURL: "https://www.youtube.com/watch?v=qAS8f9L-vWc&feature=emb_title",
    poster:
      "https://www.themoviedb.org/t/p/original/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg",
  },
  {
    title: "Suits: Homens de Terno",
    description:
      "Mesmo sem se formar e sem licença para advogar, um jovem brilhante impressiona um importante advogado e consegue uma cobiçada posição em sua firma.",
    coverImage:
      "https://www.themoviedb.org/t/p/original/eVV2A3PYJLmHdXpiveiU6Lk7jbV.jpg",
    info: "https://www.themoviedb.org/tv/37680-suits",
    trailerURL: "https://www.youtube.com/watch?v=B1OL4ZQf70c",
    poster:
      "https://www.themoviedb.org/t/p/original/ycKV6hUPAouFtvSLr1pMZgcDHFn.jpg",
  },
  {
    title: "Gavião Arqueiro",
    description:
      "O ex-vingador Clint Barton tem uma missão aparentemente simples: voltar para sua família no Natal. Será possível? Talvez com a ajuda de Kate Bishop, uma arqueira de 22 anos que sonha em se tornar uma super-heroína. Os dois são forçados a trabalhar juntos quando uma presença do passado de Barton ameaça descarrilar muito mais do que o espírito festivo.",
    coverImage:
      "https://www.themoviedb.org/t/p/original/aEnbS0C5pXvIcy6jq2CKxM1RFWX.jpg",
    info: "https://www.themoviedb.org/tv/88329-hawkeye",
    trailerURL: "https://www.youtube.com/watch?v=6tdxk503c7U&feature=emb_title",
    poster:
      "https://www.themoviedb.org/t/p/original/62qfVDg4VK3kqZFxrRztPqSbal4.jpg",
  },
  {
    title: "Venom: Tempo de Carnificina",
    description:
      "Em busca de seu próximo furo de reportagem, o jornalista Eddie Brock consegue uma entrevista exclusiva com Cletus Kasady, um assassino no corredor da morte, que descobre o segredo de Eddie e se torna o hospedeiro de Carnificina, um simbionte aterrorizante e ameaçador. Eddie e Venom precisam superar sua relação atribulada e trabalhar em conjunto para derrotar Carnificina.",
    coverImage:
      "https://www.themoviedb.org/t/p/original/70nxSw3mFBsGmtkvcs91PbjerwD.jpg",
    info: "https://www.themoviedb.org/movie/580489-venom-let-there-be-carnage",
    trailerURL: "https://www.youtube.com/watch?v=-BI6OOYqrxE&feature=emb_title",
    poster:
      "https://www.themoviedb.org/t/p/original/h5UzYZquMwO9FVn15R2eK2itmHu.jpg",
  },
  {
    title: "Riverdale",
    description:
      "Enquanto tentam lidar com problemas típicos da adolescência como amor, sexo, escola e família, Archie e sua turma se envolvem em um grande mistério.",
    coverImage:
      "https://www.themoviedb.org/t/p/original/2AyySFf6MSoR7bavBvoBLck2gpo.jpg",
    info: "https://www.themoviedb.org/tv/69050-riverdale",
    trailerURL: "https://www.youtube.com/watch?v=pU5qvhOrPig",
    poster:
      "https://www.themoviedb.org/t/p/original/6zBWSuYW3Ps1nTfeMS8siS4KUaA.jpg",
  },
  {
    title: "Shang-Chi e a Lenda dos Dez Anéis",
    description:
      "Shang-Chi precisa confrontar o passado que pensou ter deixado para trás. Ao mesmo tempo, ele é envolvido em uma teia de mistérios da organização conhecida como Dez Anéis.",
    coverImage:
      "https://www.themoviedb.org/t/p/original/cinER0ESG0eJ49kXlExM0MEWGxW.jpg",
    info: "https://www.themoviedb.org/movie/566525-shang-chi-and-the-legend-of-the-ten-rings",
    trailerURL: "https://www.youtube.com/watch?v=wAmkU6FEKUw",
    poster:
      "https://www.themoviedb.org/t/p/original/ArrOBeio968bUuUOtEpKa1teIh4.jpg",
  },
];

function MoviesProvider(props) {
  const [currentMovie, setCurrentMovie] = useState(data[0]);

  function changeMainMovieDisplay(selectedMovie) {
    
    const clickedMovieData = data.findIndex((movie) => movie.title === selectedMovie);

    setCurrentMovie(data[clickedMovieData])
    window.scrollTo(0,0)
  }

  const moviesContext = {
    data,
    currentMovie,
    changeMainMovieDisplay
  };

  return (
    <MoviesContext.Provider value={moviesContext}>
      {props.children}
    </MoviesContext.Provider>
  );
}

export default MoviesProvider;
