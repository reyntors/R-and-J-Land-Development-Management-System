import axios from 'axios'

const BASE_URL = process.env.VUE_APP_KEY;

export const sendCode = async (email) => {
    console.log('API sendCode API executed')
    // console.log(token)
    try {
        const response = await axios.post(`${BASE_URL}users/forgot-password`,{
            email: email
        });
        console.log(response.data)
        return response.data

    } catch (error) {
        console.log(error)
        throw (error.response.data);
        
    }
}
export const submitCode = async (payload) => {
    console.log('API submitCodeAPI executed')
    // console.log(token)
    try {
        const response = await axios.put(`${BASE_URL}users/reset-password`,payload);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        throw (error.response.data);
        
    }
}
