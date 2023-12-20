import * as API from '@/APIs/PUBLIC API/CallSlipAPI.js'

export default{
    
    namespaced: true,

    actions:{
        async submitcallSlip(_,payload){
            try{
                const response = await API.submitcallSlip(payload)
                return response.message
            }catch(error){
                // console.log(error)
                throw error.message
            }
        }
    }
}