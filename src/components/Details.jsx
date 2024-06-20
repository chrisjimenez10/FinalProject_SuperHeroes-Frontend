import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { SuperHeroesContext } from "../App";
import { editSuperhero, deleteSuperhero } from "../services/superheroService";
import Form from "./Form";

const Details = () => {

    const {superheroes, fetchSuperheroesDatabase} = useContext(SuperHeroesContext);

    //State
    const [superheroToEdit, setSuperheroToEdit] = useState(null);

    //Route Parameter
    const {superheroId} = useParams();
    const singleSuperhero = superheroes.find((superhero)=>{
        return superhero.id === Number(superheroId);
    });

    //Functions
    const handleEditSuperhero = async (id, heroData) => {
        await editSuperhero(id, heroData);
        fetchSuperheroesDatabase();
    };
    
    const handleEdit = (heroData) => {
      setSuperheroToEdit(heroData);
    }

  return (

    <>

      <div>
        <h1>{singleSuperhero.superName}</h1>
        <h3>Civilian Name: {singleSuperhero.firstName} {singleSuperhero.lastName}</h3>
        <h3>Power: {singleSuperhero.superPower}</h3>
        <h3>Strength: {singleSuperhero.strength}</h3>
        <h3>Style: {singleSuperhero.isTeam ? "Team Player" : "Solo"}</h3>
        <button onClick={()=> handleEdit(singleSuperhero)}>edit</button>
        <button>delete</button>
      </div>

      <Form 
      superheroToEdit={superheroToEdit}
      handleEditSuperhero={handleEditSuperhero}
      />

    </>

  )
}

export default Details;