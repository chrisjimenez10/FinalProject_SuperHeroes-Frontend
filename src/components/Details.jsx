import { useParams } from "react-router-dom";
import { useContext } from "react";
import { SuperHeroesContext } from "../App";


const Details = () => {

    const {superheroes} = useContext(SuperHeroesContext);

    const {superheroId} = useParams();
    // console.log(superheroId);
    const singleSuperhero = superheroes.find((superhero)=>{
        return superhero.id === Number(superheroId);
    });
    // console.log(singleSuperhero);

  return (

    <>
        <h1>{singleSuperhero.superName}</h1>
        <h3>Civilian Name: {singleSuperhero.firstName} {singleSuperhero.lastName}</h3>
        <h3>Power: {singleSuperhero.superPower}</h3>
        <h3>Strength: {singleSuperhero.strength}</h3>
        <h3>Style: {singleSuperhero.isTeam ? "Team Player" : "Solo"}</h3>
    </>

  )
}

export default Details;