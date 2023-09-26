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
                },
                {
                    id: 4,
                    fullname: 'Jhaerix Ompoy Borromeo2222',
                    email: 'borromeojhaerix27@gmail.com222',
                    address: 'Pasay City2222'
                },
                {
                    id: 5,
                    fullname: 'Reynard Torculas222222',
                    email: 'reynard@gmail.com222',
                    address: 'Butuan City222'
                },
                {
                    id: 6,
                    fullname: 'Karl Borromeo2222',
                    email: 'lrakborromeo@gmail.com222',
                    address: 'Pasay City222'
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