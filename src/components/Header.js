import classes from "./Header.module.css";
import headerLogo from "../images/Star_Wars_White_Logo_v2.png";

const Header = (props) => {
  return (
    <div className={classes["header"]}>
      <img src={headerLogo} alt="Star Wars White Logo in Header" />

      <form>
        <label htmlFor="search"></label>
        <input type={"text"} name="search" placeholder="Search movie" />
      </form>
    </div>
  );
};

export default Header;
