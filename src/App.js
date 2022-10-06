import "./App.css";

import headerLogo from "./images/Star_Wars_White_Logo_v2.png";
import { Fragment } from "react";
import MoviesList from "./components/MoviesList";
import LogoIntro from "./components/LogoIntro";
import MainContent from "./components/MainContent";

const swMovies = [
  { title: "A New Hope", id: 4 },
  { title: "The Empire Strikes Back", id: 5 },
  { title: "Return of the Jedi", id: 6 },
  { title: "The Phantom Menace", id: 1 },
  { title: "Attack of the Clones", id: 2 },
  { title: "Revenge of the Sith", id: 3 },
];

function App() {
  return (
    <Fragment>
      <LogoIntro />
      <MainContent movies={swMovies} />
    </Fragment>
  );
}

export default App;
