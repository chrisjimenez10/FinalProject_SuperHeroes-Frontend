//Team Stats
const arrayOfStrength = (array) => {
    let arrayWithStrengthOnly;
    arrayWithStrengthOnly = array.map((item)=>{
        return parseInt(item.strength);
    });
    return arrayWithStrengthOnly
};

const sumOfStrength = (array) => {
    let singleSumValue;
    singleSumValue = array.reduce((accumulator, currentValue)=>{
        return (accumulator + currentValue);
    }, 0);
    return singleSumValue;
};


export {arrayOfStrength, sumOfStrength};