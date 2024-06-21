import { Link } from "react-router-dom";
import { useContext } from "react";
import { SuperHeroesContext } from "../../App";
import styles from "./Navbar.module.css";

const Navbar = () => {

    const {superheroTeam} = useContext(SuperHeroesContext);

  return (

    <div>
        <Link to="/" className={styles.navLinks}>Home</Link>
        <Link to="/superherobarracks" className={styles.navLinks}>Barracks</Link>
        <Link to="/team" className={styles.navLinks}>Team ({superheroTeam.length})</Link>
    </div>

  )
}

export default Navbar;