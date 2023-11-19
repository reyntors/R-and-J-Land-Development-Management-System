import axios from "axios";
import store from '@/store/store.js'
const BASE_URL = process.env.VUE_APP_KEY;

export const updateMyAccountSettings = async (payload) => {
    console.log(payload)
    console.log('updateMyAccountSettings personnel API executed')
    const token =store.getters['auth/getTokenID']
    try {
        const response = await axios.put(`${BASE_URL}update-user-account-personnel`,payload,{
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