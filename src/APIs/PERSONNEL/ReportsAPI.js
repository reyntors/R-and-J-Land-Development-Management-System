import axios from "axios";
import store from '@/store/store.js'
const BASE_URL = process.env.VUE_APP_KEY;

export const requestDailyReport= async (payload) => {
    // console.log(payload)
    const token =store.getters['auth/getTokenID']
    console.log(token)
    try{
        const response = await axios.get(`${BASE_URL}reports/daily-reports/2023-10-28`,{
            params:{selectedColumns: payload.selectedColumns},
            headers:{
                'Authorization': `Bearer ${token}`,
            },
        })
        console.log(response)
        return response.data      
    }catch(error){
        console.log(error)
        throw (error.response.data.message);
    }
}

export const requestWeeklyReport= async (payload) => {
    // console.log(payload)
    console.log('API requestWeeklyReport executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`https://node-mongodb-api-u5qu.onrender.com/reports/weekly-reports`,
        {   params:{
                selectedColumns: payload.selectedColumns
            },
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        }) 
        console.log(response)
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}

export const requestMonthlyReport= async (payload) => {
    // console.log(payload)
    console.log('API requestMonthlyReport executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`https://node-mongodb-api-u5qu.onrender.com/reports/monthly-reports`,
        {   params:{
                selectedColumns: payload.selectedColumns
            },
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        }) 
        console.log(response)
        return response.data      
    }catch(error){
        throw (error.response.data.message);
    }
}

export const requestCustomReport= async (payload) => {
    // console.log(payload)
    console.log('API requestCustomReport executed')
    const token =store.getters['auth/getTokenID']
    try{
        const response = await axios.get(`https://node-mongodb-api-u5qu.onrender.com/reports/daily-reports/2023-10-28`,
        {   params:{
                startDate: payload.from,
                endDate: payload.to,
                selectedColumns: payload.selectedColumns
            },
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        }) 
        console.log(response)
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