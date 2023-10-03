import axios from "axios";
import store from '@/store/store.js'

const BASE_URL = 'http://localhost:4000/'

export const requestPendingList = async () => {
    console.log('API requestPendingList executed')
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
    console.log('API requestLegitList executed')
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
    console.log('API addToLegitClient executed')
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

export const addPaymentTransaction = async (payload) => {
    console.log('API addPaymentTransaction executed')
    
   
    try{

        const token = store.getters['auth/getTokenID']



        const response = await axios.post(`${BASE_URL}users/add-transaction/${payload.id}`,
        payload.body,
        {
            headers:{
                'Authorization': `Bearer ${token}`,

            }
        }) 
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}