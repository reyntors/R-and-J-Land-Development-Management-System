import axios from 'axios'
import store from '@/store/store.js'

const BASE_URL = 'http://localhost:4000/'

export const submitLetterOfIntent = async (credentials) => {
    console.log('API submitletter executed')
    const token =store.getters['auth/getTokenID']
    // console.log(token)
    try {
        const response = await axios.post(`${BASE_URL}letter/addletter`,credentials,{
            headers: {
                Authorization: `Bearer ${token}`
            } 
        },);
        
        return response.data

    } catch (error) {
        throw (error.response.data.message);
        
    }
}

export const submitIndividualBuyerDeclaration = async (credentials) => {
    console.log('API submitIndividualBuyerDeclaration executed')
    const token =store.getters['auth/getTokenID']
    try {
        const response = await axios.post(`${BASE_URL}individualbuyer/addindividualbuyer`,credentials,{
            headers: {
                Authorization: `Bearer ${token}`
            } 
        },);
        
        return response.data

    } catch (error) {
        throw (error.response.data.message);
        
    }
}

export const submitBirTinRequest = async (credentials) => {
    console.log('API submitBirTinRequest executed')
    const token =store.getters['auth/getTokenID']
    try {
        const response = await axios.post(`${BASE_URL}birtinrequest/addbirtinrequest`,credentials,{
            headers: {
                Authorization: `Bearer ${token}`
            } 
        },);
        
        return response.data

    } catch (error) {
        throw (error.response.data.message);
        
    }
}
