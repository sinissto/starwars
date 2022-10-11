import classes from "./MainContent.module.css";
import Header from "./Header";
import MoviesContent from "./MoviesContent";

const MainContent = (props) => {
  return (
    <section className={classes["section-main"]}>
      <Header />
      {/*<MoviesContent movies={props.movies} />*/}
      <MoviesContent />
    </section>
  );
};

export default MainContent;
