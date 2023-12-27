import * as API from '@/APIs/CLIENT/SubmittedFormsAPI.js'
import store from '@/store/store.js'
export default{
    namespaced: true,
    state(){
        return{
            submittedForms: [],
        }
    },
    mutations:{
        setSubmittedForms(state,list){
            // console.log(list)
            state.submittedForms = []
            state.submittedForms = list
        }
    },
    actions:{
        async listSubmittedForms(context,id){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await API.listSubmittedForms(id)
                console.log(response)
                context.commit('setSubmittedForms',response.data)
            }catch(error){
                console.error(error)
            }
        }
    },
    getters:{
        setSubmittedFormsGetters(state){
            return state.submittedForms
        }
    }
}