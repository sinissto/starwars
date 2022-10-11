import classes from "./MoviesList.module.css";
import { useContext } from "react";
import MoviesContext from "../store/movies-context";

const MoviesList = (props) => {
  // const ctx = useContext(MoviesContext);

  return (
    <li
      className={classes.movieItem}
      onClick={props.onClick}
      value={props.value}
    >
      {props.movies.title}
    </li>
  );
};

export default MoviesList;
