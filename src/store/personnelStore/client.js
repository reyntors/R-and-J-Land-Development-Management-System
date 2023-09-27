export default{

    namespaced: true,

    state(){
        return {
            clientsPending: [
                {
                    id: '101',
                    fullname: 'ahahahah ako',
                    email: 'borromeojhafdsa7@gmail.com',
                    address: 'Pasay Cityfdsfsad'
                },
                {
                    id: '102',
                    fullname: 'hehe ifdsa qmeo',
                    email: 'borromeojhaerix27@gmail.com',
                    address: 'Py City'
                },
                {
                    id: '103',
                    fullname: 'Jhafdsafasmeo',
                    email: 'borromefsdafojhaerix27@gmail.com',
                    address: 'Pafdsay'
                },
            ],

            searchResult: null,

            clientsAdded: [
                {
                    id: 1,
                    fullname: 'Jhaerix Ompoy Borromeo',
                    email: 'borromeojhaerix27@gmail.com',
                    address: 'Pasay City'
                },
                {
                    id: 2,
                    fullname: 'J Borromeo',
                    email: 'borromeojhaerix27@gmail.com',
                    address: 'Pasay City'
                },
            ],

            clientTransaction:[
                {
                    date: '2023-08-09',
                    amountPaid: '5,000',
                    purpose: 'Reservation Fee',
                    attachement: ['receipt1']
                },
                {
                    date: '2023-09-09',
                    amountPaid: '50,000',
                    purpose: 'Downpayment',
                    attachement: ['receipt1', 'downpayment receipt']
                },
                {
                    date: '2023-10-09',
                    amountPaid: '3,000',
                    purpose: 'Monthly',
                    attachement: ['receipt1']
                }
            ]
        }
    },
    mutations:{

        searchClient(state,id){
            const index = state.clientsPending.findIndex(item => item.id === id)
            if(index>=0){
                console.log(state.clientsPending[index])
                state.searchResult = state.clientsPending[index]
            }else{
                state.searchResult = null
                console.log('nothing found!')
            }
        },

        //CRUD CLIENTADDED
        addClient(state,payload){
            console.log('added')
            state.clientsAdded.push(payload)
        },

        updateClient(state,payload){
            const index = state.clientsAdded.findIndex(item => item.id === payload.id)
            if(index>=0){
               state.clientsAdded[index] = payload
            }    
        },

        deleteClient(state,id){
            const index = state.clientsAdded.findIndex(item => item.id === id)
            state.clientsAdded.splice(index,1)
        },

        addPayment(state,payload){
            const obj = {}
           
            payload.forEach((value,key) => {
                if(!Object.prototype.hasOwnProperty.call(obj, key)){
                    obj[key] = value
                }
            });
            console.log(obj)
            state.clientTransaction.push(obj)
        }
    },
    actions:{
        //do the http request functions here
    },
    getters:{
        searchResultGetter(state){
            if(state.searchResult){
               return state.searchResult 
            }else{
                return null
            }
        },
        clientsGetter(state){
            return state.clientsAdded
        },
        clientTransactionGetter(state){
            console.log('transaction')
            return state.clientTransaction
        }
    }
}