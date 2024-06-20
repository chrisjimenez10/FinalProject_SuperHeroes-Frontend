
import { useContext, useState, useEffect } from "react";
import { SuperHeroesContext } from "../App";
import {fetchVillain} from "../services/battlemonsterService";

const BattleVillain = () => {
  
//State
const [civilianName, setCivilianName] = useState();
const [villainName, setVillainName] = useState();
const [durability, setDurability] = useState();
const [strength, setStrength] = useState();
const [image, setImage] = useState();


const villainData = async (id) => {
  const villain = await fetchVillain(id);

  const civilianName = villain.biography[`full-name`];
  setCivilianName(civilianName);

  const villainName = villain.name;
  setVillainName(villainName);

  const durability = villain.powerstats.durability;
  setDurability(durability);

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

  const handleNewVillain = () => {
    const randomId = Math.floor(Math.random() * 731) + 1;
    villainData(randomId);
  };


  return (
    <>
        <h1>Battle the Villain</h1>
        <h3>Team</h3>
        <ul>
          {superheroTeam.map((superhero)=>{
            return(
              <li key={superhero.id}>
                <dt>{superhero.superName}</dt>
                <dd>Power: {superhero.superPower}</dd>
                <dd>Strength: {superhero.strength}</dd>
              </li>
            )
          })}
        </ul>
        <button onClick={()=> handleNewVillain()}>villain</button>
        <button>fight</button>

        <h3>VS.</h3>

        <h3>{villainName}</h3>
        <ul>
          <li>
            <dt>Civilain Name: {civilianName}</dt>
            <dd>Durability: {durability}</dd>
            <dd>Strength: {strength}</dd>
            <img src={image} alt="villain-image" width="300px" height="300px"/>
          </li>
        </ul>

    </>

  )
}

export default BattleVillain;