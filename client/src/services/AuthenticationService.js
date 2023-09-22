import { login, register, createLetterOfIntent } from './Api';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


export default {
  async login(credentials) {
  
    
    return login(credentials);
  },

  async register(credentials) {
    try {
 
      const response = await register(credentials);

      
      return response.data; 
    } catch (error) {

        console.error(error)
      throw error
    }
  },

  async createLetterOfIntent(letterOfIntentData) {
    try {
      
      const response = await createLetterOfIntent(letterOfIntentData);
      
      toast.success(response.message, { autoClose: 2000 });
      
      return response.data; 
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  
};
