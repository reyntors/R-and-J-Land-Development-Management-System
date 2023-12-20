import axios from 'axios'
import store from '@/store/store.js'

const BASE_URL = process.env.VUE_APP_KEY;

export const listSubmittedForms = async (id) => {
    // console.log('API listSubmittedForms executed')
    const token =store.getters['auth/getTokenID']
    // console.log(token)
    try {
        const response = await axios.get(`${BASE_URL}users/forms/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        },);
        // console.log(response.data)
        return response.data

    } catch (error) {
        // console.log(error)
        throw (error.response.data);
        
    }
}