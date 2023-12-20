import axios from 'axios'
import store from '@/store/store.js'

const BASE_URL = process.env.VUE_APP_KEY;

export const getMyDetails = async (id) => {
    // console.log('API getMyDetails executed')
    const token =store.getters['auth/getTokenID']
    // console.log(token)
    try {
        const response = await axios.get(`${BASE_URL}users/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        },);
        // console.log(response.data.data.profileDetails)
        return response.data
    } catch (error) {
        // console.log(error)
        throw (error.response.data);
        
    }
}

export const uploadID = async (payload) => {
    // console.log('API uploadID executed')
    const token =store.getters['auth/getTokenID']
    try {
        const response = await axios.post(`${BASE_URL}users/add-valid-image/${payload.id}`,payload.image,{
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
export const requestSaveUpdate = async (payload) => {
    // console.log('API requestSaveUpdateexecuted')
    console.log(payload)
    const token =store.getters['auth/getTokenID']
    try {
        const response = await axios.post(`${BASE_URL}users/update-user`,payload,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        },);
        console.log(response.data)
        return response.data

    } catch (error) {
        console.log(error)
        throw (error.response.data);
        
    }
}

