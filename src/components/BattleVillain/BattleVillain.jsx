import styles from "./BattleVillain.module.css";
import { useContext, useState, useEffect } from "react";
import { SuperHeroesContext } from "../../App";
import {fetchVillain} from "../../services/battlemonsterService";
import { arrayOfStrength, sumOfStrength } from "../../services/calculationServices";

const BattleVillain = () => {
  
//State
const [civilianName, setCivilianName] = useState();
const [villainName, setVillainName] = useState();
const [durability, setDurability] = useState();
const [strength, setStrength] = useState();
const [image, setImage] = useState();

const [villainExists, setVillainExists] = useState(false);


const villainData = async (id) => {
  const villain = await fetchVillain(id);

  setVillainExists(true);

  const civilianName = villain.biography[`full-name`];
  setCivilianName(civilianName);

  const villainName = villain.name;
  setVillainName(villainName);

  const durability = villain.powerstats.durability;
  //There are still SuperHeroes that return durability as null --> why?
  if(!durability){
    setDurability(50);
  }else{
    setDurability(durability);
  }

  const strength = villain.powerstats.strength;
  setStrength(strength);

  const image = villain.image.url;
  setImage(image);

  console.log(civilianName, villainName, durability, strength, image);
};

  // useEffect(()=>{
  //   villainData(randomId);
  // }, []);

  const {superheroTeam} = useContext(SuperHeroesContext);

  const strengthArray = arrayOfStrength(superheroTeam);
  const totalStrength = sumOfStrength(strengthArray);
  const [teamStrengthAverage, setTeamStrengthAverage] = useState(totalStrength);
  

  const handleNewVillain = () => {
    const randomId = Math.floor(Math.random() * 731) + 1;
    villainData(randomId);
  };


  return (
    <div className={styles.mainContainer}>

        <div>
          <h1 className={styles.title}>Battle the Villain</h1>
          <h3 className={styles.subTitle}>Team - Total Strength: <span style={{color: "black", backgroundColor: "white"}}>{superheroTeam.length === 0 ? 0 : parseInt(teamStrengthAverage / superheroTeam.length)}</span></h3>
        </div>

        <div>
          <ul className={styles.listContainer}>
            {superheroTeam.map((superhero)=>{
              return(
                <li key={superhero.id} className={styles.listItems}>
                  <dt>{superhero.superName}</dt>
                  <dd style={{color: "white"}}>Power: <span style={{color: "lightblue"}}>{superhero.superPower}</span></dd>
                  <dd style={{color: "white"}}>Strength: <span style={{color: "lightgreen"}}>{superhero.strength}</span></dd>
                </li>
              )
            })}
          </ul>
          
        </div>

        <div className={styles.middle}>
          <button onClick={()=> handleNewVillain()} className={styles.button}>villain</button>
          <button className={styles.button} disabled={true}>fight</button>
          <h3>VS.</h3>
        </div>

        <div className={styles.villainContainer}>
          {villainExists ?  
            <div>
              <h3 className={styles.villainName}>{villainName}</h3>
              <ul className={styles.villainIcon}>
                <li>
                  <dt><span style={{color: "white"}}>Civilain Name: </span>{civilianName}</dt>
                  <dd style={{color: "white"}}>Durability: <span style={{color: "red"}}>{durability * 4}</span></dd>
                  <dd style={{color: "white"}}>Strength: <span style={{color: "lightgreen"}}>{strength * 4}</span></dd>
                  <img src={image} alt="villain-image" className={styles.image}/>
                </li>
              </ul>
            </div>
          :
          <img src={"src/assets/images/question-mark.jpg"} alt="big-questionmark" className={styles.image}/>
          }
        </div>

    </div>

  )
}

export default BattleVillain;