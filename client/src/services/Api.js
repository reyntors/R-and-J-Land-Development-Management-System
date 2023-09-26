import axios from 'axios';





const BASE_URL = 'https://node-mongodb-api-u5qu.onrender.com/';

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


const getToken = () => {
  return localStorage.getItem('token'); 
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

export const createIndividualBuyerDeclaration = async (individualBuyerDeclarationtData) => {
  try {
    // Retrieve the token from local storage
      const token = getToken();

      // Set the "Authorization" header with the token
      const headers = {
        Authorization: `Bearer ${token}`,
      };
        
      const response = await axios.post(`${BASE_URL}individualbuyer/addindividualbuyer`, individualBuyerDeclarationtData,{
        headers: headers,
      });
      
      
      return response.data;
  } catch (error) {
      throw error.response.data.message;
  }


};

export const createBirTinRequest = async (birTinRequestData) => {
  try {
    // Retrieve the token from local storage
      const token = getToken();

      // Set the "Authorization" header with the token
      const headers = {
        Authorization: `Bearer ${token}`,
      };
        
      const response = await axios.post(`${BASE_URL}birtinrequest/addbirtinrequest`, birTinRequestData,{
        headers: headers,
      });
      
      
      return response.data;
  } catch (error) {
      throw error.response.data.message;
  }
};

export const createContractDetails = async (contractDetailsData) => {
  try {
    // Retrieve the token from local storage
      const token = getToken();

      // Set the "Authorization" header with the token
      const headers = {
        Authorization: `Bearer ${token}`,
      };
        
      const response = await axios.post(`${BASE_URL}contractdetails/addcontract`, contractDetailsData,{
        headers: headers,
      });
      
      
      return response.data;
  } catch (error) {
      throw error.response.data.message;
  }
};