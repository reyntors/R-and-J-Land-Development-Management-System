import axios from 'axios';

const BASE_URL = 'http://localhost:4000/';

export const login = async (credentials) => {
    const response = await axios.post(`${BASE_URL}users/login`, credentials);


    return response.data;
    
};

export const register = async (userData) => {
    const response = await axios.post(`${BASE_URL}users/register`, userData);
    return response.data;

};

