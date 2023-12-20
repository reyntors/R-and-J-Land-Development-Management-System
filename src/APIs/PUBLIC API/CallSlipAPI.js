import axios from 'axios'
const BASE_URL = process.env.VUE_APP_KEY;

export const submitcallSlip = async (credentials) => {
    console.log(credentials)
    console.log('API submitcallSlip executed')
    try {
        const response = await axios.post(`${BASE_URL}users/add-call-slip`,credentials);
        console.log(response)
        return response.data
    } catch (error){
        console.log(error)
        throw (error.response.data);
    }
}
