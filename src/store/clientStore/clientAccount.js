import * as API from '@/APIs/CLIENT/AccountAPI.js'

export default{
    namespaced: true,
    state(){
        return{
            myAccountDetails: null,
        }
    },
    mutations:{
        setMyAccountDetails(state,data){
            // console.log(data)
            state.myAccountDetails = data
        },
    },
    actions:{
        async getMyAccountDetails(context){
            // console.log('get my account store executed')
            try{
                const response = await API.myAccountDetails()
                context.commit('setMyAccountDetails',response.data)
            }catch(error){
                console.error(error)
            }
        },
    },
    getters:{
        myAccountDetailsGetter(state){
            return state.myAccountDetails
        }
    }
}