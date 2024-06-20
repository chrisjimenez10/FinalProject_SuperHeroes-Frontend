import { useEffect } from "react";
import { useContext } from "react";
import { SuperHeroesContext } from "../App";
import { useNavigate } from "react-router-dom";




const SuperheroDB = () => {

    //Using useNavigate instance to send superhero data through route parameter
    const navigate = useNavigate();

    //Using Provider values
    const {fetchSuperheroesDatabase, superheroes, addHeroToTeam, superheroTeam} = useContext(SuperHeroesContext);

    //List of SuperHeroes in Database upon page load
    useEffect(()=>{
        fetchSuperheroesDatabase();
    }, []);


  return (

    <>
        <h1>SuperHero Database</h1>
        <h3>Total SuperHeroes: {superheroes.length}</h3>
        <ul>
        {superheroes.map((superhero)=>{
            return(
                <li key={superhero.id}>
                    <dt>{superhero.superName}</dt>
                    <dd>Civilian Name: {superhero.firstName} {superhero.lastName}</dd>
                    <button onClick={()=> navigate(`/superherodb/${superhero.id}`)}>details</button>

                    <dd>Power: {superhero.superPower}</dd>
                    <dd>Strength: {superhero.strength}</dd>
                    <dd>Team: {superhero.isTeam ? "Team Player" : "Solo"}</dd>
                    <dd>Villain: {superhero.villainName}</dd>
                    <button onClick={()=> addHeroToTeam(superhero)} disabled={superheroTeam.length === 4}>+</button>
                </li>
            )
        })}
        </ul>
    </>
    
  )
}

export default SuperheroDB;