import axios from 'axios'
import store from '@/store/store.js'

const BASE_URL = process.env.VUE_APP_KEY;

export const getListSubdivision = async () => {
    console.log('API getListSubdivision executed')
    // const token =store.getters['auth/getTokenID']
    try {
        const response = await axios.get(`${BASE_URL}lot/allLot`,{
        },);   
        // console.log(response.data.data[0].subdivision)  
        return response.data.data[0].subdivision
        
    } catch (error) {
        console.log('catch')
        throw (error.response.data.message);    
    }
}



// personnel end
export const SubdivisionLotUpdate = async (lotNo,form) => {
    console.log('API SubdivisionLotUpdate executed')
    const token =store.getters['auth/getTokenID']
    try {
        const response = await axios.put(`${BASE_URL}lot/updatelot/${lotNo}`,form,{
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type' : 'multipart/form-data'
            }
        });     
        // console.log(response)
        return response.data

    } catch (error) {
        console.log(error.message)
        throw (error.message);  
    }
}

export const urlGeneratorSubdivisionImg = async (lotNo,filename) => {
    console.log('API urlGeneratorSubdivisionImg executed')
    try {
        const response = await axios.get(`${BASE_URL}lot/retrieve-lotImage/${lotNo}/${filename}`,{
            responseType: 'blob'
        });     
        // console.log('try')
        return response.data
    } catch (error) {
        // console.log('catch')
        console.log(error.message)
        throw (error.message);  
    }
}