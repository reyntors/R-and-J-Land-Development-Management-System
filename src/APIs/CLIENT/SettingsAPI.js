import axios from 'axios'
import store from '@/store/store.js'

const BASE_URL = process.env.VUE_APP_KEY;

export const myAccountSettings = async () => {
    console.log('myAccountSettings API executed')
    const token =store.getters['auth/getTokenID']
    try {
        const response = await axios.get(`${BASE_URL}users/get-account-settings`,{
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

export const updateMyAccountSettings = async (payload) => {
    console.log('updateMyAccountSettings API executed')
    const token =store.getters['auth/getTokenID']
    try {
        const response = await axios.put(`${BASE_URL}users/update-user-account`,payload,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        },);
        console.log(response.data)
        return response.data

    } catch (error) {
        // console.log(error)
        throw (error.response.data);
        
    }
}
export const submitCodeUpdateSettings = async (payload) => {
    console.log('updateMyAccountSettings API executed')
    const token =store.getters['auth/getTokenID']
    try {
        const response = await axios.put(`${BASE_URL}users/update-user-account`,payload,{
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
