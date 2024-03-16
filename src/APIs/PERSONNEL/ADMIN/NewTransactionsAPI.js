import axios from "axios";
import store from '@/store/store.js'
const BASE_URL = process.env.VUE_APP_KEY;

export const getNewTransactions = async () => {
    console.log('API getNewTransactions executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`${BASE_URL}users/transaction/pending-transactions`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }) 
        return response.data 
    }catch(error){
        throw (error.response.data.message);
    }
}

export const approvalTransaction = async (payload) => {
    console.log(payload);
    // console.log('API approvalTransaction executed')
    const token =store.getters['auth/getTokenID']
    console.log(payload);
    try{
        const response = await axios.post(`${BASE_URL}users/approve-transaction/${payload.userId}/${payload.transactionId}`,{isApproved:payload.approval},{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}