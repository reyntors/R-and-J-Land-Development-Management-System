import axios from "axios";
import store from '@/store/store.js'
const BASE_URL = process.env.VUE_APP_KEY;


export const requestList = async () => {
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`${BASE_URL}users/client/legit-clients`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }) 
        console.log(response)
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }

}
