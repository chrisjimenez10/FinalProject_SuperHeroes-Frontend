//Web API URL
const BASE_WEB_API_URL = import.meta.env.VITE_BACK_END_SERVER_URL_WEB;

//Functions
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

//Export
export {fetchSuperheroes};