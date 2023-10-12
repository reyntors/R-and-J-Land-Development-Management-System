import axios from "axios";
import store from '@/store/store.js'
const BASE_URL = process.env.VUE_APP_KEY;

export const requestDailyReport= async (dateNow) => {
    // console.log('API requestDailyReport executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`${BASE_URL}reports/daily-reports/${dateNow}`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }) 
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}
export const requestCustomReport= async (date) => {
    // console.log('API requestCustomReport executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`${BASE_URL}reports/custom-reports?startDate=${date.from}&endDate=${date.to}`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }) 
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}
export const requestExcelFileReport= async (filename) => {
    // console.log('API requestExcelFileReport executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`${BASE_URL}reports/excel-file/${filename}`,{
            headers:{
                'Authorization': `Bearer ${token}`
            },
            responseType: 'blob'
        }) 
        console.log(response)
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}