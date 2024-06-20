import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { SuperHeroesContext } from "../App";
import { editSuperhero, deleteSuperhero } from "../services/superheroService";
import Form from "./Form";

const Details = () => {

    const {superheroes, fetchSuperheroesDatabase} = useContext(SuperHeroesContext);
    const navigate = useNavigate();

    //State
    const [superheroToEdit, setSuperheroToEdit] = useState(null);
    const [renderForm, setRenderForm] = useState("");

    //Route Parameter
    const {superheroId} = useParams();
    const singleSuperhero = superheroes.find((superhero)=>{
        return superhero.id === Number(superheroId);
    });

    //Functions
    //PUT
    const handleEditSuperhero = async (id, heroData) => {
        await editSuperhero(id, heroData);
        fetchSuperheroesDatabase();
    };
    
    const handleEdit = (heroData) => {
      if(renderForm === ""){
        setRenderForm("form");
        setSuperheroToEdit(heroData);
      }
      if(renderForm === "form"){
        setRenderForm("");
      }
    };

    //DELETE
    const handleDeleteSuperhero = async (id) => {
        await deleteSuperhero(id);
        fetchSuperheroesDatabase();
    };



  return (

    <>

      <div>
        <h1><img src="../src/assets/images/list-icon.png" width="30px"/> {singleSuperhero.superName}</h1>
        <h3>Civilian Name: {singleSuperhero.firstName} {singleSuperhero.lastName}</h3>
        <h3>Power: {singleSuperhero.superPower}</h3>
        <h3>Strength: {singleSuperhero.strength}</h3>
        <h3>Style: {singleSuperhero.isTeam ? "Team Player" : "Solo"}</h3>
        <h3>Enemy: {singleSuperhero.villainName}</h3>
        <button onClick={()=> handleEdit(singleSuperhero)}>edit</button>
        <button onClick={()=> {handleDeleteSuperhero(singleSuperhero.id), navigate("/superherobarracks")}}>delete</button>
      </div>

      {renderForm === "form" && (
          <Form 
          superheroToEdit={superheroToEdit}
          handleEditSuperhero={handleEditSuperhero}
          />
      )}
 

    </>

  )
}

export default Details;