import axios from 'axios'
const BASE_URL = process.env.VUE_APP_KEY;

export const login = async (credentials) => {
    console.log('login executed')
    try {
        const response = await axios.post(`${BASE_URL}users/login`, credentials);
        console.log(response.data)
        return response.data;
    } catch (error) {
        throw (error.response.data.message);
        
    }
}
export const signUp = async (credentials) => {
    console.log('signUp API executed')
    try {
        const response = await axios.post(`${BASE_URL}users/register`, credentials);
        console.log(response.data)
        return response.data;
    } catch (error) {
        throw (error.response.data.message);    
    }
}

