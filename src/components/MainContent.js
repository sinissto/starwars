import classes from "./MainContent.module.css";
import headerLogo from "../images/Star_Wars_White_Logo_v2.png";
import MoviesList from "./MoviesList";
import Header from "./Header";

const MainContent = (props) => {
  return (
    <section className={classes["section-main"]}>
      <Header />

      <div className={classes["main-content"]}>
        <div className={classes["movies"]}>
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
    </section>
  );
};

export default MainContent;
