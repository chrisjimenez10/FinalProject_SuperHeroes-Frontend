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
        <input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleInputChange} required></input>

        <label htmlFor="lastName">Last Name: </label>
        <input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleInputChange} required></input>

        <label htmlFor="superName">Super Name: </label>
        <input id="superName" name="superName" type="text" value={formData.superName} onChange={handleInputChange} required></input>

        <label htmlFor="superPower">Super Power: </label>
        <input id="superPower" name="superPower" value={formData.superPower} onChange={handleInputChange} required type="text"></input>

        <label htmlFor="strength">Strength: </label>
        <input id="strength" name="strength" type="number" value={formData.strength} onChange={handleInputChange} min="50" max="100" required placeholder="50 - 100"></input>

        <label htmlFor="isTeam">Team Player: </label>
        <select id="isTeam" value={formData.isTeam} name="isTeam" onChange={handleInputChange} required>
            <option value="">------ Select ------</option>
            <option value="true">True</option>
            <option value="false">False</option>
        </select>

        <label htmlFor="villainName">Villain: </label>
        <input id="villainName" name="villainName" value={formData.villainName} onChange={handleInputChange} required></input>
        
        <button type="submit" disabled={formData.firstName === "" || formData.lastName === "" || formData.superName === "" || formData.superPower === "" || formData.strength === "" || formData.isTeam === "" || formData.villainName === ""}>{superheroToEdit ? "edit" : "create"}</button>
    </form>

  )
}

export default Form;