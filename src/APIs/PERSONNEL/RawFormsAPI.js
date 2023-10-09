import axios from "axios";
import store from '@/store/store.js'
const BASE_URL = process.env.VUE_APP_KEY;

export const requestRawFormsList= async () => {
    // console.log('API requestRawFormsList executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`${BASE_URL}forms/list-raw-forms`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }) 
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}
export const generateDonwloadableRawForms= async (filename) => {
    // console.log('API generateDonwloadableRawForms executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`${BASE_URL}users/retrieve-raw-forms/${filename}`,{
            headers:{
                'Authorization': `Bearer ${token}`
            },
            responseType: 'blob'
        }) 
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}