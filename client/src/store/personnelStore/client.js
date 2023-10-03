import * as Client from '@/APIs/PERSONNEL/ClientAPI.js'

export default{

    namespaced: true,

    state(){
        return {
            clientsPending: [
                // {
                //     id: '101',
                //     fullname: 'ahahahah ako',
                //     email: 'borromeojhafdsa7@gmail.com',
                //     address: 'Pasay Cityfdsfsad'
                // },
                // {
                //     id: '102',
                //     fullname: 'hehe ifdsa qmeo',
                //     email: 'borromeojhaerix27@gmail.com',
                //     address: 'Py City'
                // },
                // {
                //     id: '103',
                //     fullname: 'Jhafdsafasmeo',
                //     email: 'borromefsdafojhaerix27@gmail.com',
                //     address: 'Pafdsay'
                // },
            ],

            searchResult: null,

            clientsAdded: [
                // {
                //     profile: {
                //         id: 1,
                //         fullname: 'Jhaerix Ompoy Borromeo',
                //         email: 'borromeojhaerix27@gmail.com',
                //         address: 'Pasay City'  
                //     },
                //     accountDetails: {

                //     },
                //     paymentDetails: {

                //     },
                //     accountingDetails:{

                //     },
                //     transaction:[
                //         {
                //             date: '2023-08-09',
                //             amountPaid: '5,000',
                //             purpose: 'Reservation Fee',
                //             attachement: ['receipt1']
                //         },
                //         {
                //             date: '2023-09-09',
                //             amountPaid: '50,000',
                //             purpose: 'Downpayment',
                //             attachement: ['receipt1', 'downpayment receipt']
                //         },  
                //         {
                //             date: '2023-10-09',
                //             amountPaid: '10,000',
                //             purpose: 'Monthly Payment',
                //             attachement: ['receipt1', 'downpayment receipt']
                //         },                        
                //     ],
                //     letterIntent:{

                //     },
                //     individualDeclaration: {

                //     },
                //     BirTinRequest: {

                //     },
                //     ContractDetails: {

                //     },
                //     scannedFiles:[
                //         'contractdetails.pdf','birtinrewue.pdf'
                //     ]
                // },
            ],

        }
    },
    mutations:{

        searchClient(state,id){
            const index = state.clientsPending.findIndex(item => item.userId=== id)
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
            const index = state.clientsAdded.findIndex(item => item.userId=== payload.id)
            console.log(index)
            console.log(state.clientsAdded[0].profile)
            if(index>=0){
               state.clientsAdded[index].profile = payload
            }    
        },

        deleteClient(state,id){
            const index = state.clientsAdded.findIndex(item => item.id === id)
            state.clientsAdded.splice(index,1)
        },

        addPayment(state,payload){
            const index = state.clientsAdded.findIndex(item => item.userId === payload.id)
            console.log(index)
            if(index>=0){
                console.log(state.clientsAdded[index])
                state.clientsAdded[index].transactions.push(payload.body)
            }      
        },

        setLocalListPending(state,response){
            response.data.forEach(item => {
                state.clientsPending.push(item)
                console.log(item)
            })
        },

        setLocalLegitList(state,response){
            response.data.forEach(item => {
                state.clientsAdded.push(item)
            })
        },
        justprint(state){
            console.log(state.clientsAdded)
        }
    },
    actions:{

        async getPendingList(context){
            try{
                const response = await Client.requestPendingList()
                context.commit('setLocalListPending',response)
            }catch(error){
                console.log(error)
            }   
        },

        async getLegitList(context){
            try{
                const response = await Client.requestLegitList()
                context.commit('setLocalLegitList',response)
            }catch(error){
                console.log(error)
            }
        },

        //do the http request functions here
        async addClient(context,id){   
            try{
                const payload = await Client.addToLegitClient(id)
                context.commit('addClient',payload.data)
                console.log(payload)
            }catch(error){
                console.log(error)
            }
        },
        updateClient(context,payload){
            context.commit('updateClient',payload)
            //http request for updating the specific legit client
        },
        deleteClient(context,id){
            context.commit('deleteClient',id)
            //http request for deleting specific legit client
        },
        async addPayment(context,payload){
            try{
                const response = await Client.addPaymentTransaction({
                    id:payload.id,
                    body:payload.obj})

                context.commit('addPayment',{
                    id:payload.id,
                    body:payload.obj})

                context.commit('justprint')
                return response.message
            }catch(error){
                console.log(error)
                throw error
            }
        }

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
        clientTransactionGetter(state,id){
            
            const index = state.clientsAdded.findIndex(item => item.profile.id === id)
            console.log(state.clientsAdded[index].transaction)
            return state.clientsAdded[index].transaction
        }
    }
}