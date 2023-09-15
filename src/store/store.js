import { createStore } from "vuex";
import auth from './authStore/authStore.js'

const store = createStore({
        modules:{
            auth,
        },

        getters:{
            isLogin(){
                return false
            }
        }
       
})


export default store