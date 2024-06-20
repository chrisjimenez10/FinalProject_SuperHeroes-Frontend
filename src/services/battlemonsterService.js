//SuperHero API Base URL
const SUPERHERO_API_URL = import.meta.env.VITE_SUPERHERO_API_URL;

//Variables
let randomId = Math.floor(Math.random() * 731) + 1;
let civilianName;
let villainName;
let durability;
let strength;
let image;

class Villain {
    constructor(civilianName, villainName, durability, strength, image){
        this.civilianName = civilianName,
        this.villainName = villainName,
        this.durability = durability,
        this.strength = strength,
        this.image = image
    }
    strengthDecrease(){
        do{
        console.log(`Damage taken, strength is now at ${this.strength}`);
        this.strength--;
        }while(this.strength > -1)
    }
}

//TODO - Randomly generate a villain when player clicks "ready" button --> They will be redirected to the battle page and villain will appear there with stats and image

//TODO - Connect object instances generated to data from SuperHero API --> url: https://www.superheroapi.com/#api-references

const fetchVillain = async (id) => {
    try{
        const response = await fetch(`${SUPERHERO_API_URL}/${id}`);
        const data = await response.json();
        // console.log(data);
        return data;
    }catch(error){
        console.error(error.message);
    }
};


export {fetchVillain}





