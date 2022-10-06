import classes from "./MoviesContent.module.css";
import MoviesList from "./MoviesList";

const MoviesContent = (props) => {
  return (
    <div className={classes["movies-content"]}>
      <div className={classes.movies}>
        <header className={classes["movies-header"]}>
          <h2>Star Wars movies</h2>
          <div className={classes["movies-sort"]}>
            <label htmlFor={classes["sort"]}>Sort by:</label>
            <select name={classes["sort"]} id={"sort"}>
              <option value={"release_date"}>Release Date</option>
              <option value={"chronologically"}>Chronologically</option>
            </select>
          </div>
        </header>
        <ul className={classes["movies-list"]}>
          {props.movies.map((movie) => {
            return <MoviesList key={movie.id} movies={movie} />;
          })}
        </ul>
      </div>
      <div className={classes["movie-description"]}></div>
    </div>
  );
};

export default MoviesContent;
