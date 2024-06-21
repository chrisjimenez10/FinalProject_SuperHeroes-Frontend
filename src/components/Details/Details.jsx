import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { SuperHeroesContext } from "../../App";
import { editSuperhero, deleteSuperhero } from "../../services/superheroService";
import Form from "../Form/Form";
import styles from "./Details.module.css";

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

    <div className={styles.mainContainer}>

      <div>
        <h1 className={styles.title}><img src="../src/assets/images/list-icon.png" width="30px" style={{backgroundColor: "white"}}/> {singleSuperhero.superName}</h1>
        <h3>Civilian Name: <span style={{color: "rgb(224, 167, 94)"}}>{singleSuperhero.firstName} {singleSuperhero.lastName}</span></h3>
        <h3>Power: <span style={{color: "lightblue"}}>{singleSuperhero.superPower}</span></h3>
        <h3>Strength: <span style={{color: "lightgreen"}}>{singleSuperhero.strength}</span></h3>
        <h3>Style: <span style={{color: "blue"}}>{singleSuperhero.isTeam ? "Team Player" : "Solo"}</span></h3>
        <h3>Enemy: <span style={{color: "red"}}>{singleSuperhero.villainName}</span></h3>
        <button onClick={()=> handleEdit(singleSuperhero)} className={styles.button}>edit</button>
        <button onClick={()=> {handleDeleteSuperhero(singleSuperhero.id), navigate("/superherobarracks")}} className={styles.button}>delete</button>
      </div>

      <div>      
        {renderForm === "form" && (
            <Form 
            superheroToEdit={superheroToEdit}
            handleEditSuperhero={handleEditSuperhero}
            />
        )}
      </div>
 

    </div>

  )
}

export default Details;