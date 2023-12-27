import * as API from '@/APIs/FORMS/FormsAPI.js'
import store from '@/store/store.js'
export default{

    namespaced: true,

    actions:{
        async submitLetterOfIntent(_,payload){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await API.submitLetterOfIntent(payload)
                return response.message
            }catch(error){
                console.log(error)
                throw error
            }
        },

        async submitIndividualBuyerDeclaration(_,payload){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await API.submitIndividualBuyerDeclaration(payload)
                return response.message
            }catch(error){
                console.log(error)
                throw error
            }
        },
        
        async submitBirTinRequest(_,payload){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await API.submitBirTinRequest(payload)
                console.log(response)
                return response.message
            }catch(error){
                console.log(error)
                throw error
            }
        },

        async submitBuyerInfoSheet(_,payload){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await API.submitBuyerInfoSheet(payload)
                return response.message
            }catch(error){
                console.log(error)
                throw error
            }
        },

    }
}