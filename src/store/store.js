import { createStore } from "vuex";
import auth from './authStore/authStore.js'

import personnel from './personnelStore/personnel.js'
import client from './personnelStore/client.js'
import report from './personnelStore/report.js'
import subdivision from './guest_personnelStore/subdivision.js'
import form from './formSubmissionStore/formStore.js'
import inquiries from "./personnelStore/inquiries.js";
import rawForms from './personnelStore/rawForms.js'
import myProfile from './clientStore/clientProfile.js'
import mySubmittedForms from './clientStore/clientSubmittedForms.js'
import contactUs from './publicStore/contactUs.js'
import callSlip from "./publicStore/callSlip.js";
import myAccount from './clientStore/clientAccount.js'
import mySettings from './clientStore/clientSettings.js'
import forgotPass from './clientStore/forgotPass/forgotPass.js'
import newClients from './personnelStore/admin/newClient.js'

const store = createStore({
        modules:{
            auth,
            personnel,
            client,
            report,
            subdivision,
            form,
            inquiries,
            rawForms,
            contactUs,
            callSlip,
            myProfile,
            mySubmittedForms,
            myAccount,
            mySettings,
            forgotPass,
            newClients
        },
        state(){
            return{
                companyName: 'R & J Land Development Corporation',
                companyAddress: 'Sitio Buenavista, Barangay Matutungan, Sta. Cruz, Davao del Sur',
                companyEmail: 'rjlanddevcorp@gmail.com',
                companyContactNumber: '09123456789',
                //header
                homeID: '',
            }
        },

        mutations:{
            setHomeID(state,id){
                // console.log(id)
                state.homeID = id
            },
            resetHomeId(state){
                state.homeID = ''
            },
        },

        getters:{
            companyName(state){
                return state.companyName
            },
            companyAddress(state){
                return state.companyAddress
            },
            companyEmail(state){
                return state.companyEmail
            },
            companyContactNumber(state){
                return state.companyContactNumber
            },
            isAboutActive(state){
                if(
                    state.homeID === 'about' ||
                    state.homeID === 'sustainability' ||
                    state.homeID === 'corp-officers' ||
                    state.homeID === 'licenses&permits'
                ){
                    return true
                }else{
                    return false
                }
            },
            isWeBuildActive(state){
                if(
                    state.homeID === 'residential-house' ||
                    state.homeID === 'commercial-bldg' ||
                    state.homeID === 'amenities' ||
                    state.homeID === 'structural-foundation'
                ){
                    return true
                }else{
                    return false
                }
            },
        }
       
})


export default store