import classes from "./MovieOpeningCrawl.module.css";
import { useContext } from "react";
import MoviesContext from "../store/movies-context";

const MovieOpeningCrawl = () => {
  const ctx = useContext(MoviesContext);
  return (
    <div className={classes["movie-opening_crawl"]}>
      <div className={classes.screen_crawl}>
        <h1 className={classes.title}>
          {ctx.swMovies.length !== 0 && ctx.selectedMovie?.title}
        </h1>
        <p> {ctx.swMovies.length !== 0 && ctx.selectedMovie?.openingText}</p>
      </div>
    </div>
  );
};

export default MovieOpeningCrawl;
