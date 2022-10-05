import classes from "./MoviesList.module.css";

const MoviesList = (props) => {
  return <li className={classes.movieItem}>{props.movies.title}</li>;
};

export default MoviesList;
