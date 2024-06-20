import { useEffect, useState } from "react";
import { createSuperhero } from "../services/superheroService.js";
import { useContext } from "react";
import { SuperHeroesContext } from "../App.jsx";

const Form = ({superheroToEdit, handleEditSuperhero}) => {
    const {fetchSuperheroesDatabase} = useContext(SuperHeroesContext);

    //State
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        superName: "",
        superPower: "",
        strength: "",
        isTeam: "",
        villainName: "",
    });

    //Edit Feature
    useEffect(()=>{
        if(superheroToEdit){
            setFormData({
                firstName: superheroToEdit.firstName,
                lastName: superheroToEdit.lastName,
                superName: superheroToEdit.superName,
                superPower: superheroToEdit.superPower,
                strength: superheroToEdit.strength,
                isTeam: superheroToEdit.isTeam,
                villainName: superheroToEdit.villainName,
            });
        }
    }, [superheroToEdit]);

    //Functions
    const handleInputChange = (e) => {
        const{name, value} = e.target;

        //NOTE: We need to send a boolean value to our backend because the Datatype for isTeam is a bool --> I was trying to send the strings "true"/"false", but it responded with 400 Bad Request (could not convert to bool)
        if(name === "isTeam"){
            setFormData({...formData, [name]: value === "true" ? true : false})
        }else{
        setFormData({...formData, [name]: value});
        }
    };

    const handleFormSubmission = (e) => {
        e.preventDefault();

        if(superheroToEdit){
            handleEditSuperhero(superheroToEdit.id, formData);
        }else{
            handleCreateSuperhero(formData);
        }
    };

    //POST
    const handleCreateSuperhero = async (heroData) => {
        await createSuperhero(heroData);
        fetchSuperheroesDatabase();
    };


  return (

    <form onSubmit={handleFormSubmission}>

        <label htmlFor="firstName">First Name: </label>
        <input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange}></input>

        <label htmlFor="lastName">Last Name: </label>
        <input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange}></input>

        <label htmlFor="superName">Super Name: </label>
        <input id="superName" name="superName" value={formData.superName} onChange={handleInputChange}></input>

        <label htmlFor="superPower">Super Power: </label>
        <input id="superPower" name="superPower" value={formData.superPower} onChange={handleInputChange}></input>

        <label htmlFor="strength">Strength: </label>
        <input id="strength" name="strength" value={formData.strength} onChange={handleInputChange}></input>

        <label htmlFor="isTeam">Team Player: </label>
        <select id="isTeam" value={formData.isTeam} name="isTeam" onChange={handleInputChange}>
            <option value="">------ Select ------</option>
            <option value="true">True</option>
            <option value="false">False</option>
        </select>

        <label htmlFor="villainName">Villain: </label>
        <input id="villainName" name="villainName" value={formData.villainName} onChange={handleInputChange}></input>
        
        <button type="submit">create</button>
    </form>

  )
}

export default Form;