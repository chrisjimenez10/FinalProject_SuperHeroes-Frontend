import { useContext } from "react";
import { SuperHeroesContext } from "../App";

const FightTeam = () => {

    const {superheroTeam, removeHeroFromTeam} = useContext(SuperHeroesContext);

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
            <button>ready</button>
        )}
    </>

  )
}

export default FightTeam;