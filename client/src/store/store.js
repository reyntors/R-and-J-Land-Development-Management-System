import { createStore } from "vuex";
import auth from './authStore/authStore.js'

import personnel from './personnelStore/personnel.js'
import client from './personnelStore/client.js'
import report from './personnelStore/report.js'
import properties from './personnelStore/properties.js'

const store = createStore({
        modules:{
            auth,
            personnel,
            client,
            report,
            properties,
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