import * as Setttings from '@/APIs/BOTH/SettingsAPI.js' 
import store from '@/store/store.js'
export default{
        namespaced: true,

        state(){
            return {
                isProfileShown: true,
                isSettingsView: false,
                myAccountSettings: null,
            }
        },
        mutations:{
            togglePofileShow(state){
                state.isProfileShown = !state.isProfileShown
            },
            hidePofileShow(state){
                state.isProfileShown = false
            },
            switchSettings(state){
                state.isSettingsView = true;
            },
            switchDashboard(state){
                state.isSettingsView = false;
            },
            setMyAccountSettings(state,data){
                state.myAccountSettings = data
            },
        },

        actions:{
            async updateMySettings(_,payload){
                store.dispatch('auth/monitorTokenSpan')
                console.log(payload)
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
                try{
                    const response = await Setttings.updateMyAccountSettingsPersonnel(form)
                    console.log(response)
                    return response.message
                }catch(error){
                    console.error(error)
                }
            },
            async getMyAccountSettings(context){
                store.dispatch('auth/monitorTokenSpan')
                console.log('getMyAccountSettings Store personnel executed')
                try{
                    const response = await Setttings.myAccountSettings()
                    console.log(response)
                    context.commit('setMyAccountSettings',response.data)
                }catch(error){
                    console.error(error)
                }
            },
        },


        getters: {
            isProfileShownGetter(state){
                return state.isProfileShown
            },
            isSettingsViewGetter(state){
                return state.isSettingsView
            },
            myAccountSettingsGetter(state){
                return state.myAccountSettings
            }
        }
}   