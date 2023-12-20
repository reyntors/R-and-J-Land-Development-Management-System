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
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}
export const markInquiry = async (id) => {
    // console.log('API requestInquiriesList executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.put(`${BASE_URL}inquiries/update-mark/${id}`, id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data      
    }catch(error){
        throw (error.message);
    }
}
export const approveUpdateRequest = async (payload) => {
    console.log(payload)
    console.log('API approveUpdateRequest executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.put(`${BASE_URL}users/approve-pending-update/${payload.userId}/${payload.requestId}/${payload.inquiryId}`, 
            {'isApproved':payload.status}, 
            {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data      
    }catch(error){
        throw (error.message);
    }
}
