//Web API URL
const BASE_WEB_API_URL = import.meta.env.VITE_BACK_END_SERVER_URL_WEB;

//Functions
//GET
const fetchSuperheroes = async () => {
    try{
        const response = await fetch(BASE_WEB_API_URL);
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error.message);
    }
};

//POST
const createSuperhero = async (heroData) => {
    try{
        const response = await fetch(BASE_WEB_API_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(heroData)
        });
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error.message);
    }
};

//PUT
const editSuperhero = async (id, heroData) => {
    try{
        const respone = await fetch(`${BASE_WEB_API_URL}/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(heroData)
        });
        const data = await respone.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error.message);
    }
};

//DELETE
const deleteSuperhero = async (id) => {
    try{
        const response = await fetch(`${BASE_WEB_API_URL}/${id}`, {
            method: "DELETE",           
        });
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error.message);
    }
};

const fetchSingleSuperhero = async (id) => {
    try{
        const response = await fetch(`${BASE_WEB_API_URL}/${id}`);
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error.message);
    }
};


//Export
export {fetchSuperheroes, createSuperhero, editSuperhero, deleteSuperhero, fetchSingleSuperhero};