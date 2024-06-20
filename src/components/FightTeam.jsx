import { useContext } from "react";
import { SuperHeroesContext } from "../App";
import { useNavigate } from "react-router-dom";

const FightTeam = () => {

    const {superheroTeam, removeHeroFromTeam} = useContext(SuperHeroesContext);
    const navigate = useNavigate();

  return (
    <>
        <h1>Fight Team</h1>
        <ol>
            {superheroTeam.map((superhero, index)=>{
                return(
                    <li key={index}>
                        <dt>{superhero.superName}</dt>
                        <button onClick={()=> removeHeroFromTeam(index)}>-</button>
                    </li>
                )
            })}
        </ol>
        {superheroTeam.length === 4 && (
            <button onClick={()=> {navigate("/battle")}}>ready</button>
        )}
    </>

  )
}

export default FightTeam;