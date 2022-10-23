import classes from "./MovieOpeningCrawl.module.css";
import { useContext, useRef } from "react";
import MoviesContext from "../store/movies-context";
import { Transition } from "react-transition-group";

const MovieOpeningCrawl = () => {
  const ctx = useContext(MoviesContext);

  const crawlRef = useRef(null);

  // console.log(ctx)
  return (
    <div className={classes["movie-opening_crawl"]}>
      <Transition
        nodeRef={crawlRef}
        in={ctx.playOpeningCrawl}
        timeout={10000}
        mountOnEnter
        unmountOnExit
        onEntered={() => {
          ctx.stopPlayingCrawl();
        }}
      >
        {(state) => {
          console.log(state);

          if (state === "entering" || state === "entered") {
            return (
              <div className={classes.screen_crawl} ref={crawlRef}>
                <h1 className={classes.title}>
                  {ctx.swMovies.length !== 0 && ctx.selectedMovie?.title}
                </h1>
                <p>
                  {ctx.swMovies.length !== 0 && ctx.selectedMovie?.openingText}
                </p>
              </div>
            );
          } else {
            state = "exited";
            ctx.playOpeningCrawl = false;
          }
        }}
      </Transition>
    </div>
  );
};

export default MovieOpeningCrawl;
