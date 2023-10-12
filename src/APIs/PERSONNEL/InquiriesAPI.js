import axios from "axios";
import store from '@/store/store.js'
const BASE_URL = process.env.VUE_APP_KEY;

export const requestInquiriesList = async () => {
    // console.log('API requestInquiriesList executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`${BASE_URL}inquiries/all-inquiries`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }) 
        // console.log(response.data.data[0].inquiries)
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}