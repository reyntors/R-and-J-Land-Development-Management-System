import * as Setttings from '@/APIs/BOTH/SettingsAPI.js' 
export default{
        namespaced: true,

        state(){
            return {
                isProfileShown: true,
                isSettingsView: false,
            }
        },
        mutations:{
            togglePofileShow(state){
                state.isProfileShown = !state.isProfileShown
            },
            switchSettings(state){
                state.isSettingsView = true;
            },
            switchDashboard(state){
                state.isSettingsView = false;
            }
        },

        actions:{
            async updateMySettings(_,payload){
                try{
                    await Setttings.updateMyAccountSettingsPersonnel(payload)
                }catch(error){
                    console.error(error)
                }
            }
        },


        getters: {
            isProfileShownGetter(state){
                return state.isProfileShown
            },
            isSettingsViewGetter(state){
                return state.isSettingsView
            }
        }
}   