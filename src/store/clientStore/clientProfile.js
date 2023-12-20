import * as API from '@/APIs/CLIENT/ProfileAPI.js'

export default{
    namespaced: true,
    state(){
        return{
            myProfileDetails: null,
        }
    },
    mutations:{
        setMyProfileDetails(state,data){
            state.myProfileDetails = data
        },
        pushImage(state,data){
            state.myProfileDetails.uploadId.push(data)
        }
    },
    actions:{
        async getMyDetails(context,id){
            try{
                const response = await API.getMyDetails(id)
                console.log('store profile details',response)
                context.commit('setMyProfileDetails',response.data.profileDetails)
            }catch(error){
                console.error(error)
            }
        },
        async uploadID(context,payload){
            try{
                const response = await API.uploadID(payload)
                context.commit('pushImage',response.data)
                return response.message
            }catch(error){
                console.error(error)
            }
        },
        async requestSaveUpdate(_,payload){
            console.log(payload)
            try{
                const response = await API.requestSaveUpdate(payload)
                return response.message
            }catch(error){
                console.error(error)
            }
        },
    },
    getters:{
        myProfileDetailsGetter(state){
            return state.myProfileDetails
        }
    }
}