import axios from "axios";
import store from '@/store/store.js'
const BASE_URL = process.env.VUE_APP_KEY;

//get list of added client waiting for approval
export const getNewClientsList = async () => {
    // console.log('API getNewClientsList executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`${BASE_URL}inquiries/all-requests`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }) 
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}

export const approvalAddingClient = async (payload) => {
    // console.log('API approvalAddingClient executed')
    console.log(payload.isApproved)
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.put(`${BASE_URL}users/approve-legit-client/${payload.userId}/${payload.requestId}/${payload.requestLegitId}`,{isApproved:payload.isApproved},{
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

