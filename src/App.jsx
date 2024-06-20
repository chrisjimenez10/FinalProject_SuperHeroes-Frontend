import { createContext, useState } from "react";
import {Routes, Route} from "react-router-dom";
import { fetchSuperheroes } from "./services/superheroService";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SuperheroDB from "./components/SuperheroDB";
import FightTeam from "./components/FightTeam";
import Details from "./components/Details";

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
    setSuperheroTeam([...superheroTeam, hero]);
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
        <Route path="/superherodb" element={<SuperheroDB />} />
        <Route path="/team" element={<FightTeam />} />
        <Route path="/superherodb/:superheroId" element={<Details />} />
        <Route path="*" element={<h1>400 Bad Request - Whoops, there is nothing here...</h1>} />
      </Routes>
      </SuperHeroesContext.Provider>
    </main>

  )
}

export default App;
