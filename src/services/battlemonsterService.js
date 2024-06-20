class Villain {
    constructor(firstName, lastName, villainName, superPower, strength, image){
        this.firstName = firstName,
        this.lastName = lastName,
        this.villainName = villainName,
        this.superPower = superPower,
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

const villain_one = new Villain("Mimi", "Jimenez", "La Valentona", "Licking", 4);
// console.log(villain_one);

const villain_two = new Villain("Wendy", "Jimenez", "Kirby", "Beam of Jello", 100);
// console.log(villain_two);

villain_one.strengthDecrease();
(villain_one.strength);

//TODO - Randomly generate a villain when player clicks "ready" button --> They will be redirected to the battle page and villain will appear there with stats and image

//TODO - Connect object instances generated to data from SuperHero API --> url: https://www.superheroapi.com/#api-references