import * as API from '@/APIs/BOTH/SettingsAPI.js'

export default{
    namespaced: true,
    state(){
        return{
            myAccountSettings: null,
        }
    },
    mutations:{
        setMyAccountSettings(state,data){
            // console.log(data)
            state.myAccountSettings = data
        },
    },
    actions:{
        async getMyAccountSettings(context){
            console.log('getMyAccountSettings Store executed')
            try{
                const response = await API.myAccountSettings()
                // console.log(response)
                context.commit('setMyAccountSettings',response.data)
            }catch(error){
                console.error(error)
            }
        },
        async updateMyAccountSettings(_,payload){
            console.log('updateMyAccountSettings Store executed')
            const form = new FormData()
            if(payload.image){
                form.append('image',payload.image)
            }
            if(payload.username){
                form.append('username', payload.username)
            }
            if(payload.password){
                form.append('password',payload.password)
            }
            if(payload.recoveryCode){
                form.append('recoveryCode',payload.recoveryCode)
            }
            try{
                const response = await API.updateMyAccountSettings(form)
                // console.log(response.message)
                return response.message
            }catch(error){
                console.error(error)
                throw error
            }
        },
    },
    getters:{
        myAccountSettingsGetter(state){
            return state.myAccountSettings
        }
    }
}