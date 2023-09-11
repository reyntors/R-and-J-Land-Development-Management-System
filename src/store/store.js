import { createStore } from "vuex";
import home from './home/index.js'

const store = createStore({
        modules:{
            home,
        },

        getters:{
            isLogin(){
                return false
            }
        }
       
})


export default store