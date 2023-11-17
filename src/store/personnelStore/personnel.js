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


        getters: {
            isProfileShownGetter(state){
                return state.isProfileShown
            },
            isSettingsViewGetter(state){
                return state.isSettingsView
            }
        }
}   