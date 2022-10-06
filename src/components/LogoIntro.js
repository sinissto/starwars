import classes from "./LogoIntro.module.css";
import logo from "../images/Star_Wars_Logo_2560x1095px.png";

const LogoIntro = (props) => {
  return (
    <section className={classes["section-logo"]}>
      <img src={logo} alt="Star wars Logo" />
    </section>
  );
};

export default LogoIntro;
