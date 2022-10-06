import classes from "./MainContent.module.css";
import headerLogo from "../images/Star_Wars_White_Logo_v2.png";
import MoviesList from "./MoviesList";

const MainContent = (props) => {
  return (
    <section className={classes["section-main"]}>
      <div className={classes["header"]}>
        <img src={headerLogo} alt="Star Wars White Logo in Header" />

        <form>
          <label htmlFor="search"></label>
          <input type={"text"} name="search" placeholder="Search movie" />
        </form>
      </div>

      <div className={classes["main-content"]}>
        <div className={classes["movies"]}>
          <header className={classes["movies-header"]}>
            <h2>Star Wars movies</h2>
            <div className={classes["movies-sort"]}>
              <label htmlFor={classes["sort"]}>Sort by:</label>
              <select name={classes["sort"]} id={"sort"}>
                <option value={classes["release_date"]}>Release Date</option>
                <option value={classes["chonologically"]}>
                  Chronologically
                </option>
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
