import classes from "./MoviesContent.module.css";
import MoviesList from "./MoviesList";
import { useContext } from "react";
import MoviesContext from "../store/movies-context";

const MoviesContent = (props) => {
  const ctx = useContext(MoviesContext);

  console.log(ctx.swMovies);

  return (
    <div className={classes["movies-content"]}>
      <div className={classes.movies}>
        <header className={classes["movies-header"]}>
          <h2 className={classes.movies_list_header}>Star Wars movies</h2>
          <div className={classes["movies-sort"]}>
            <label htmlFor={"sort"} className={classes.sort_label}>
              Sort by:
            </label>
            <select
              name={classes["sort"]}
              id={"sort"}
              className={classes.sort_select}
            >
              <option value={"release_date"}>Release Date</option>
              <option value={"chronologically"}>Chronologically</option>
            </select>
          </div>
        </header>
        <ul className={classes["movies-list"]}>
          {ctx.swMovies.map((movie) => {
            return <MoviesList key={movie.id} movies={movie} />;
          })}
        </ul>
      </div>
      <div className={classes["movie-description"]}>
        {ctx.swMovies.length !== 0 && ctx.swMovies[0].openingText}
      </div>
    </div>
  );
};

export default MoviesContent;
