import "./App.css";

import headerLogo from "./images/Star_Wars_White_Logo_v2.png";
import { Fragment } from "react";
import MoviesList from "./components/MoviesList";
import LogoIntro from "./components/LogoIntro";

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
      <section className={"section-main"}>
        <div className={"header"}>
          <img src={headerLogo} alt="Star Wars White Logo in Header" />

          <form>
            <label htmlFor="search"></label>
            <input type={"text"} name="search" placeholder="Search movie" />
          </form>
        </div>

        <div className={"main-content"}>
          <div className={"movies"}>
            <header className={"movies-header"}>
              <h2>Star Wars movies</h2>
              <div className={"movies-sort"}>
                <label htmlFor={"sort"}>Sort by:</label>
                <select name={"sort"} id={"sort"}>
                  <option value={"release_date"}>Release Date</option>
                  <option value={"chonologically"}>Chronologically</option>
                </select>
              </div>
            </header>
            <ul className={"movies-list"}>
              {swMovies.map((movie) => {
                return <MoviesList key={movie.id} movies={movie} />;
              })}
            </ul>
          </div>
          <div className={"movie-description"}></div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
