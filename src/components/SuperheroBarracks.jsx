import { useEffect, useState } from "react";
import { useContext } from "react";
import { SuperHeroesContext } from "../App";
import { useNavigate } from "react-router-dom";

import Form from "./Form";




const SuperheroBarracks = () => {

    //State
    const [renderForm, setRenderForm] = useState("");

    //Using useNavigate instance to send superhero data through route parameter
    const navigate = useNavigate();

    //Using Provider values
    const {fetchSuperheroesDatabase, superheroes, addHeroToTeam, superheroTeam} = useContext(SuperHeroesContext);

    //List of SuperHeroes in Database upon page load
    useEffect(()=>{
        fetchSuperheroesDatabase();
    }, []);

    const handleRenderForm = () => {
        if(renderForm === ""){
            setRenderForm("form");
        }
        if(renderForm === "form"){
            setRenderForm("");
        }
    };


  return (

    <>
        <h1>SuperHero Barracks</h1>
        <h3>Total SuperHeroes: {superheroes.length}</h3>
        <ul>
        {superheroes.map((superhero)=>{
            return(
                <li key={superhero.id}>
                    <dt>{superhero.superName}</dt>
                    <button onClick={()=> addHeroToTeam(superhero)} disabled={superheroTeam.length === 4}>+</button>
                    <button onClick={()=> navigate(`/superherobarracks/${superhero.id}`)}>details</button>
                </li>
            )
        })}
        </ul>
        <button onClick={()=> handleRenderForm()}>new superhero</button>
        {renderForm === "form" && (
            <Form />
        )}
    </>
    
  )
}

export default SuperheroBarracks;