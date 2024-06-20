import { Link } from "react-router-dom";
import { useContext } from "react";
import { SuperHeroesContext } from "../App";

const Navbar = () => {

    const {superheroTeam} = useContext(SuperHeroesContext);

  return (

    <div>
        <Link to="/">Home</Link>
        <Link to="/superherobarracks">Barracks</Link>
        <Link to="/team">Team ({superheroTeam.length})</Link>
    </div>

  )
}

export default Navbar;