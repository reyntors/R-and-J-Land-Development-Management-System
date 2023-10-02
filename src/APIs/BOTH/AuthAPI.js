import axios from 'axios'
const BASE_URL = process.env.VUE_APP_KEY;

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${BASE_URL}users/login`, credentials);

        return response.data;
    } catch (error) {
        throw (error.response.data.message);
        
    }
}

