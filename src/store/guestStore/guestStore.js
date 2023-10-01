import * as API from '@/APIs/GuestAPI.js'

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
        }
    }
}