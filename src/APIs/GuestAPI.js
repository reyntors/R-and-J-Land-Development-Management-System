import axios from 'axios'
import store from '@/store/store.js'

const BASE_URL = process.env.VUE_APP_KEY;

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

// export const createLetterOfIntent = async (letterOfIntentData) => {
//     console.log('ni dagan')
//     try {
//       // Retrieve the token from local storage
//         const token = store.getters['auth/getTokenID'];
  
//         // Set the "Authorization" header with the token
//         const headers = {
//           Authorization: `Bearer ${token}`,
//         };
          
//         const response = await axios.post(`${BASE_URL}letter/addletter`, letterOfIntentData,{
//           headers: headers,
//         });
        
        
//         return response.data;
//     } catch (error) {
//         console.log(error)
//         throw error
//     }
// }