import axios from 'axios'
// import store from '@/store/store.js'

const BASE_URL = process.env.VUE_APP_KEY;

export const getListSubdivision = async () => {
    console.log('API getListSubdivision executed')
    // const token =store.getters['auth/getTokenID']
    try {
        const response = await axios.get(`${BASE_URL}lot/allLot`,{
        },);     
        console.log(response.data)
        return response.data

    } catch (error) {
        throw (error.response.data.message);
        
    }

}