export default{

    namespaced: true,

    state(){
        return {
            clients: [
                {
                    id: 1,
                    fullname: 'Jhaerix Ompoy Borromeo',
                    email: 'borromeojhaerix27@gmail.com',
                    address: 'Pasay City'
                },
            ]
        }
    },
    mutations:{

        addClient(state,payload){
            console.log('added')
            state.clients.push(payload)
        },

        updateClient(state,payload){
            const index = state.clients.findIndex(item => item.id === payload.id)
            if(index>=0){
               state.clients[index] = payload
            }    
        },

        deleteClient(state,id){
            const index = state.clients.findIndex(item => item.id === id)
            state.clients.splice(index,1)
        }
    },
    getters:{
        clientsGetter(state){
            return state.clients
        }
    }
}