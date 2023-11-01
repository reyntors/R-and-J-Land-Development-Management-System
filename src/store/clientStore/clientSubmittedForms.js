import * as API from '@/APIs/CLIENT/SubmittedFormsAPI.js'

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
            try{
                const response = await API.listSubmittedForms(id)
                // console.log(response.data)
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