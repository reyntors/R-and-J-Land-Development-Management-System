import * as API from '@/APIs/GUEST/GuestAPI.js'

export default{

    namespaced: true,

    actions:{
        async submitLetterOfIntent(_,payload){
            try{
                const response = await API.submitLetterOfIntent(payload)
                return response.message
            }catch(error){
                console.log(error)
                throw error
            }
        },

        async submitIndividualBuyerDeclaration(_,payload){
            try{
                const response = await API.submitIndividualBuyerDeclaration(payload)
                return response.message
            }catch(error){
                console.log(error)
                throw error
            }
        },
        
        async submitBirTinRequest(_,payload){
            try{
                const response = await API.submitBirTinRequest(payload)
                return response.message
            }catch(error){
                console.log(error)
                throw error
            }
        },

        async submitContractForm(_,payload){
            try{
                const response = await API.submitContractForm(payload)
                return response.message
            }catch(error){
                console.log(error)
                throw error
            }
        },
    }
}