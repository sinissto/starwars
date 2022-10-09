import "./App.css";

import { Fragment } from "react";
import LogoIntro from "./components/LogoIntro";
import MainContent from "./components/MainContent";
import MoviesContext, { MoviesContextProvider } from "./store/movies-context";

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
      <MoviesContextProvider>
        <MainContent movies={swMovies} />
        {/*<MainContent />*/}
      </MoviesContextProvider>
    </Fragment>
  );
}

export default App;
