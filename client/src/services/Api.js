import axios from 'axios';





const BASE_URL = 'http://localhost:4000/';

export const login = async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}users/login`, credentials);
      return response.data;
      
    } catch (error) {
        throw (error.response.data.message);
    }
  };
  

export const register = async (userData) => {
    const response = await axios.post(`${BASE_URL}users/register`, userData);
    return response.data;

};

// Function to retrieve the token from local storage
const getToken = () => {
  return localStorage.getItem('token'); // Assuming your token is stored as 'token' in local storage
};


export const createLetterOfIntent = async (letterOfIntentData) => {
  try {
    // Retrieve the token from local storage
      const token = getToken();

      // Set the "Authorization" header with the token
      const headers = {
        Authorization: `Bearer ${token}`,
      };
        
      const response = await axios.post(`${BASE_URL}letter/addletter`, letterOfIntentData,{
        headers: headers,
      });
      
      
      return response.data;
  } catch (error) {
      throw error.response.data.message;
  }
};