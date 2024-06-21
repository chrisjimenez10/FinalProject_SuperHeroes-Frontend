import { useEffect, useState } from "react";
import { useContext } from "react";
import { SuperHeroesContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import styles from "./SuperheroBarracks.module.css";




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

    <div className={styles.mainContainer}>

        <div>
            <h1 className={styles.title}>SuperHero Barracks</h1>
            <h3 className={styles.subTitle}>Total SuperHeroes: <span style={{color: "black", backgroundColor: "white"}}>{superheroes.length}</span></h3>
        </div>

        <div>
            <button onClick={()=> handleRenderForm()} className={styles.button}>new superhero</button>
            {renderForm === "form" && (
                <Form />
            )}
        </div>

        <div >
            <ul className={styles.listContainer}>
            {superheroes.map((superhero)=>{
                return(
                    <li key={superhero.id} className={styles.listItems}>
                        <dt className={styles.text}>{superhero.superName}</dt>
                        <button onClick={()=> addHeroToTeam(superhero)} disabled={superheroTeam.length === 4} className={styles.button}>+</button>
                        <button onClick={()=> navigate(`/superherobarracks/${superhero.id}`)} className={styles.button}>details</button>
                    </li>
                )
            })}
            </ul>
        </div>

        <img src="src/assets/images/barracks.jpg" className={styles.image}/>

    </div>
    
  )
}

export default SuperheroBarracks;