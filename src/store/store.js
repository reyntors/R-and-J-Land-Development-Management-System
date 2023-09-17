import { createStore } from "vuex";
import auth from './authStore/authStore.js'

const store = createStore({
        modules:{
            auth,
        },
        state(){
            return{
                companyName: 'R&J Land Development Corporation',
                companyAddress: '329 Bonifacio St. Davao City'
            }
        },

        getters:{
            companyName(state){
                return state.companyName
            },
            companyAddress(state){
                return state.companyAddress
            }
        }
       
})


export default store