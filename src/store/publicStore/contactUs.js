import * as API from '@/APIs/PUBLIC API/ContactUs.js'

export default{
    
    namespaced: true,

    actions:{
        async submitContactUS(_,payload){
            console.log('submitContactUS Store executed')
            try{
                const response = await API.submitContactUS(payload)
                // console.log(response)
                return response.data
            }catch(error){
                // console.log(error)
                throw error.message
            }
        }
    }
}