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
                {
                    id: 2,
                    fullname: 'Reynard Torculas',
                    email: 'reynard@gmail.com',
                    address: 'Butuan City'
                },
                {
                    id: 3,
                    fullname: 'Karl Borromeo',
                    email: 'lrakborromeo@gmail.com',
                    address: 'Pasay City'
                }
            ]
        }
    },
    mutations:{
    },
    getters:{
        clientsGetter(state){
            return state.clients
        }
    }
}