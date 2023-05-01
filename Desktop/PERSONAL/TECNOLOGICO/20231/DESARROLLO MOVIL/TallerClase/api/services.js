import axios from 'axios';

const API_URL = 'https://api-colombia.com/api/v1'

//Get info Colombia
export const getColombiaInfo = async () => {
    const response = await axios.get(`${API_URL}/Country/Colombia`)
    return response.data;
}

//Get info Regiones Colombia

export const getRegionesColombia = async () => {
    const response = await axios.get(`${API_URL}/Region`);
    return response.data;
}

export const getRegionesTuristicasColombia = async () => {
    const response = await axios.get(`${API_URL}/TouristicAttraction`);
    return response.data;
}

export const getRegionesNaturalesColombia = async () => {
    const response = await axios.get(`${API_URL}/CategoryNaturalArea`);
    return response.data;
}

/* Buscar una region por id */
export const getRegionColombia = async id => {
    const response = await axios.get(`${API_URL}/Region/${id}`);
    return response.data;
}

