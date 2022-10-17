import classes from "./MovieOpeningCrawl.module.css";
import { useContext } from "react";
import MoviesContext from "../store/movies-context";

const MovieOpeningCrawl = () => {
  const ctx = useContext(MoviesContext);
  return (
    <div className={classes["movie-description"]}>
      <div className={classes.screen_crawl}>
        <p> {ctx.swMovies.length !== 0 && ctx.selectedMovie?.openingText}</p>
      </div>
    </div>
  );
};

export default MovieOpeningCrawl;
