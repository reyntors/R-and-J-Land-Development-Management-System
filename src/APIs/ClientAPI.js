import axios from "axios";
import store from '@/store/store.js'
const BASE_URL = process.env.VUE_APP_KEY;

export const requestPendingList = async () => {
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`${BASE_URL}users`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }) 
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}
export const requestLegitList = async () => {
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`${BASE_URL}users/client/legit-clients`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }) 
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}
export const addToLegitClient = async (id) => {
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.put(`${BASE_URL}users/update-legitimacy/${id}`,id,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }) 
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }

}