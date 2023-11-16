export default{
    namespaced: true,

    state(){
        return{
            pendingClients:[
                {
                    id: '1',
                    context: 'The staff Sample Name added Sample name as a legit client',
                    date: '22023-11-16',
                },
                {
                    id: '2',
                    context: 'The staff Sample Name added Sample name as a legit client',
                    date: '22023-11-16',
                },
                {
                    id: '3',
                    context: 'The staff Sample Name added Sample name as a legit client',
                    date: '22023-11-16',
                }
            ]
        }
    },

    mutations:{
        approve(state,id){
            const index = state.pendingClients.findIndex(item => item.id === id)
           
            if(index>=0){
                console.log('approving',index)
                state.pendingClients.splice(index,1)
            }
            
        },
        reject(state,id){
            const index = state.pendingClients.findIndex(item => item.id === id)
            if(index>=0){
                state.pendingClients.splice(index,1)
                console.log('rejecting',index)
            }
            
        },
    },

    getters:{
        listPendingClients(state){
            return state.pendingClients
        }
    }

}