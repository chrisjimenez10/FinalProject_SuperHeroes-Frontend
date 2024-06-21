import { useContext } from "react";
import { SuperHeroesContext } from "../../App";
import { useNavigate } from "react-router-dom";
import styles from "./FightTeam.module.css";

const FightTeam = () => {

    const {superheroTeam, removeHeroFromTeam} = useContext(SuperHeroesContext);
    const navigate = useNavigate();

  return (

    <div className={styles.mainContainer}>
        <h1 className={styles.title}>Fight Team</h1>
        {superheroTeam.length === 0 ? <h2>-- Empty, please select SuperHeroes --</h2> 
        :
            <ol>
        {superheroTeam.map((superhero, index)=>{
            return(
                <li key={index} className={styles.listItems}>
                    <dt>{superhero.superName}</dt>
                    <dd style={{color: "white"}}>Strength: <span style={{color: "lightgreen"}}>{superhero.strength}</span></dd>
                    <dd style={{color: "white"}}>Power: <span style={{color: "lightblue"}}>{superhero.superPower}</span></dd>
                    <button onClick={()=> removeHeroFromTeam(index)} className={styles.button}>-</button>
                </li>
            )
        })}
            </ol>
        }
        

        {superheroTeam.length === 4 && (
            <button onClick={()=> {navigate("/battle")}} className={styles.button}>ready</button>
        )}
    </div>

  )
}

export default FightTeam;