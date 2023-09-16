import { login, register } from './Api';

export default {
  async login(credentials) {
    return login(credentials);
  },

  async register(credentials) {
    try {
      // Make an API request to register the user
      const response = await register(credentials);

      // Assuming the API response contains user data and a token
      return response.data; // You can adjust this to return specific data if needed
    } catch (error) {

        console.log(error)
      throw error
    }
  },
};
