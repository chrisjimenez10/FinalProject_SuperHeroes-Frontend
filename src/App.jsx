import { createContext, useState } from "react";
import {Routes, Route} from "react-router-dom";
import { fetchSuperheroes } from "./services/superheroService";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SuperheroBarracks from "./components/SuperheroBarracks";
import FightTeam from "./components/FightTeam";
import Details from "./components/Details";
import BattleVillain from "./components/BattleVillain";

export const SuperHeroesContext = createContext(null);

const App = () => {

  //State
  const [superheroes, setSuperheroes] = useState([]);
  const [superheroTeam, setSuperheroTeam] = useState([]);

  //Functions
  const fetchSuperheroesDatabase = async () => {
    try{
      const listOfSuperheores = await fetchSuperheroes();
      setSuperheroes(listOfSuperheores);
    }catch(error){
      console.error(error.message);
    }
  };

  const addHeroToTeam = (hero) => {
    //Using some() array method to check if a selected hero was already chosen to be in FigthTeam and if it is, then we don't add it --> Purpose is to NOT have same hero in FightTeam
    const heroExists = superheroTeam.some((superhero)=>{
      return superhero.id === hero.id
    });
  
    if(heroExists){
      console.log("Hero already in team");
      return
    }else{
      setSuperheroTeam([...superheroTeam, hero]);
    }
  };

  const removeHeroFromTeam = (heroId) => {
    setSuperheroTeam(superheroTeam.filter((item, index)=>{return index != heroId}));
  };


  return (

    <main>
      <SuperHeroesContext.Provider value={{fetchSuperheroesDatabase, superheroes, addHeroToTeam, removeHeroFromTeam, superheroTeam}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/superherobarracks" element={<SuperheroBarracks />} />
        <Route path="/team" element={<FightTeam />} />
        <Route path="/superherobarracks/:superheroId" element={<Details />} />
        <Route path="/battle" element={<BattleVillain />} />
        <Route path="*" element={<h1>400 Bad Request - Whoops, there is nothing here...</h1>} />
      </Routes>
      </SuperHeroesContext.Provider>
    </main>

  )
}

export default App;
