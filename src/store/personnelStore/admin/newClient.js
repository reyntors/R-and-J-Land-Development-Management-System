import * as API from '@/APIs/PERSONNEL/ADMIN/NewClientAPI.js'

export default{
    namespaced: true,

    state(){
        return{
            pendingClients: []
        }
    },

    mutations:{
        setList(state,list){
            // console.log(list)
            state.pendingClients = list
        },
        remove(state,requestId){
            const index = state.pendingClients.findIndex(item => item.requestId === requestId)
            if(index>=0){
                state.pendingClients.splice(index,1)
                console.log('deleted')
            }
            
        },
    },

    actions: {
        async getList(context){
            try{
                const response = await API.getNewClientsList()
                context.commit('setList',response.data[0].requests)
            }catch(error){
                console.error(error)
            }
        },
        async approval(context,payload){
            try{
                const response = await API.approvalAddingClient(payload)
                context.commit('remove',payload.requestId)
                return response.message
            }catch(error){
                console.error(error)
                throw error
            }
        }
    },

    getters:{
        listPendingClients(state){
            return state.pendingClients
        },
        islistEmpty(state){
            if(state.pendingClients.length>0){
                return false
            }else{
                return true
            }
        }
    }

}