import axios from 'axios';

// import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';



const BASE_URL = 'http://localhost:4000/';

export const login = async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}users/login`, credentials);
      return response.data;
      
    } catch (error) {

       
        throw (error.response.data.message);
      // If there's an error, you can handle it here
    //   if (error.response && error.response.data && error.response.data.message) {
       
    //     toast.error(error.response.data.message,{ autoClose: 1000 });

    //   } else {
    //     // Handle other errors or provide a default message
    //     throw new Error('An error occurred while logging in.');
    //   }
    }
  };
  

export const register = async (userData) => {
    const response = await axios.post(`${BASE_URL}users/register`, userData);
    return response.data;

};

