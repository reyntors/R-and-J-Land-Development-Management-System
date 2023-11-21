import axios from "axios";
import store from '@/store/store.js'
const BASE_URL = process.env.VUE_APP_KEY;

//start initializer when entering the CLIENT DIMENSION
export const requestLegitList = async () => {
    // console.log('API requestLegitList executed')
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
//end initializer when entering the CLIENT DIMENSION

//start header
export const requestPendingList = async () => {
    // console.log('API requestPendingList executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`${BASE_URL}users/client/pending-clients`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }) 
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}
export const addToLegitClient = async (payload) => {
    // console.log('API addToLegitClient executed')
    const token =store.getters['auth/getTokenID']
    try{
        if(!payload.isAdmin){
            const response = await axios.post(`${BASE_URL}users/update-legitimacy/${payload.userId}`,{legitimate: true},{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })      
            return response.data        
        }else{
            const response = await axios.put(`${BASE_URL}users/update-legitimate/${payload.userId}`,{legitimate: true},{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })  
            console.log(response)
            return response.data 
        }
             
    }catch(error){
        throw (error.response.data.message);
    }
}
export const removeToLegitClient = async (id) => {
    // console.log('API removeToLegitClient executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.put(`${BASE_URL}users/update-false-legitimacy/${id}`,id,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }) 
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}
//end header

//start article/payment
export const getListTransaction = async (id) => {
    // console.log('API addPaymentTransaction executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`${BASE_URL}users/alltransaction/${id}`,{
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
    // console.log('API addPaymentTransaction executed')
    const obj = new FormData()
    obj.append('date',payload.object.date)
    obj.append('amount',payload.object.amount)
    obj.append('purpose',payload.object.purpose)
    obj.append('file',payload.object.file)
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.post(`${BASE_URL}users/add-transaction/${payload.userId}`,obj,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }) 
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}
export const updatePaymentTransaction = async (payload) => {
    // console.log('API pdatePaymentTransaction executed')
    console.log(payload.object)
    const obj = new FormData()
    obj.append('date',payload.object.date)
    obj.append('amount',payload.object.amount)
    obj.append('purpose',payload.object.purpose)
    obj.append('file',payload.object.file)
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.put(`${BASE_URL}users/update-transaction/${payload.userId}/${payload.transactionId}`,obj,{
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
export const deletePaymentTransaction = async (payload) => {
    // console.log('API deletePaymentTransaction executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.delete(`${BASE_URL}users/delete-transaction/${payload.userId}/${payload.transactionId}`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }) 
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}
export const retrieveUploadedAttachment = async (id, filename) => {
    // console.log('API retrieveUploadedAttachment executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`${BASE_URL}users/retrieve-upload/${id}/${filename}`,{
            headers:{
                'Authorization': `Bearer ${token}`
            },
            responseType: 'blob'
        }) 
        // console.log('HAHAHAHAH')
        return response.data     
    }catch(error){
        // console.log('AGAY')
        throw (error.response.data.message);
    }
}
//end article/payment

//start article/form
export const retrieveUploadedForm = async (id, filename) => {
    // console.log('API retrieveUploadedForm executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`${BASE_URL}users/retrieveForm/${id}/${filename}`,{
            headers:{
                'Authorization': `Bearer ${token}`
            },
            responseType: 'blob'
        })
        // console.log(response.data)
        return response.data     
    }catch(error){
        throw (error.response.data.message);
    }
}
export const uploadScannedFile = async (id, file) => {
    // console.log('API uploadScannedFile executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.post(`${BASE_URL}users/add-scanfiles/${id}`,file,{
            headers:{
                'Authorization': `Bearer ${token}`,
            },
        })
        return response.data     
    }catch(error){
        throw (error.response.data.message);
    }
}
export const listScannedFile = async (id) => {
    // console.log('API listScannedFile executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`${BASE_URL}users/all-scanfiles/${id}`,{
            headers:{
                'Authorization': `Bearer ${token}`,
            },
        })
        console.log(response)
        return response.data.data
    }catch(error){
        throw (error.response.data.message);
    }
}
export const retrieveSpecificScannedFile = async (id,filename) => {
    // console.log('API retrieveSpecificScannedFile executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`${BASE_URL}users/retrieve-scanfiles/${id}/${filename}`,{
            headers:{
                'Authorization': `Bearer ${token}`,
            },
            responseType: 'blob'
        })
        return response.data
    }catch(error){
        // console.log(error)
        throw (error.response.data.message);
    }
}
//end article/form

//start profile
export const updateUserProfile = async (payload) => {
    // console.log('API updateUserProfile executed')
    console.log(payload.data)

    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.put(`${BASE_URL}users/update-user/${payload.id}`,payload.data,{
            headers:{
                'Authorization': `Bearer ${token}`,
            },
        })
        return response.data
    }catch(error){
        throw (error.response.data.message);
    }
}
//end profile
//start reservation form
export const submitReservationFormAPI = async (payload) => {
    // console.log('API submitReservationFormAPI executed')
    // console.log(payload)
    
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.post(`${BASE_URL}forms/create-reservation/${payload.userId}`,payload.body,{
            headers:{
                'Authorization': `Bearer ${token}`,
            },
        })
        console.log(response)
        return response.data
    }catch(error){
        throw (error.response.data.message);
    }
}
//end reservation form

