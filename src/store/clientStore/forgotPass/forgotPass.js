import * as API from '@/APIs/CLIENT/ForgotPass/ForgotAPI.js'

export default{
    namespaced: true,
    actions:{
        async sendCode(_,email){
            console.log('sendCode STORE executed')
            try{
                const response = await API.sendCode(email)
                console.log(response)
                return response.message
            }catch(error){
                console.error(error)
                throw error.message
            }
        },
        async submitCode(_,payload){
            console.log('submitCode STORE executed')
            try{
                const response = await API.submitCode(payload)
                return response.message
            }catch(error){
                console.error(error)
                throw error.message
            }
        },
    },
}