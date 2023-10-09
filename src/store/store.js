import { createStore } from "vuex";
import auth from './authStore/authStore.js'

import personnel from './personnelStore/personnel.js'
import client from './personnelStore/client.js'
import report from './personnelStore/report.js'
import subdivision from './guest_personnelStore/subdivision.js'
import guest from './guestStore/guestStore.js'
import inquiries from "./personnelStore/inquiries.js";
import rawForms from './personnelStore/rawForms.js'

const store = createStore({
        modules:{
            auth,
            personnel,
            client,
            report,
            subdivision,
            guest,
            inquiries,
            rawForms,
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