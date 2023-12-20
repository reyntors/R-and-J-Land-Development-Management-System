import axios from 'axios'

const BASE_URL = process.env.VUE_APP_KEY;

export const submitContactUS = async (credentials) => {
    console.log('API submitContactUS executed')
    try {
        const response = await axios.post(`${BASE_URL}users/contact-us`,credentials);
        console.log(response)
        return response

    } catch (error){
        throw (error.response.data);
    }
}
