export default{
        namespaced: true,

        state(){
            return {
                isProfileShown: false,
            }
        },
        mutations:{
            togglePofileShow(state){
                state.isProfileShown = !state.isProfileShown
            }
        },


        getters: {
            isProfileShownGetter(state){
                return state.isProfileShown
            }
        }
}   