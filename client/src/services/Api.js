import axios from 'axios';





// const BASE_URL = 'https://node-mongodb-api-u5qu.onrender.com/';
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
    try {
        const response = await axios.post(`${BASE_URL}users/register`, userData);
        return response.data;
    } catch (error) {
      throw (error.response.data.message);
    }
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

export const getAllUsers = async () => {
  try {

      const token = getToken();

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(`${BASE_URL}users`, {
        headers: headers,  
      
      });
      
      return response.data;
     
  } catch (error) {
      throw error.response.data.message;
  }
};

export const updateLegitimacy = async (userId) => {
  console.log("I am from API:", userId);
  try {

      const token = getToken();

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.put(`${BASE_URL}users/update-legitimacy/${userId}`, userId, {
        headers: headers,  
      
      });
      
      return response.data;
     
  } catch (error) {
      throw error.response.data.message;
  }
};

export const listLegitimateClients = async () => {
  
  try {

      const token = getToken();

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(`${BASE_URL}users/client/legit-clients`,  {
        headers: headers,  
      
      });
      
      return response.data;
     
  } catch (error) {
      throw error.response.data.message;
  }
};