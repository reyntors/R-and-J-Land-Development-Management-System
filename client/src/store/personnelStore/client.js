import { getAllUsers } from '@/services/Api';
import  AuthenticationService  from '@/services/AuthenticationService';





export default{

    namespaced: true,

    state(){
        return {
            clientsPending: [ ],

            searchResult: null,

            clientsAdded: [
                // {
                //     profile: {
                //         userId: 1,
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
            ]
        }
    },
    mutations:{

        setPendingClients(state, responseData){
            responseData.forEach((item)=>{
                // console.log(item)
                state.clientsPending.push(item)

            })
            // console.log(state.clientsPending)
        },
        resetList(state){

            state.clientsAdded = []

        },

        searchClient(state,id){
            const index = state.clientsPending.findIndex(item => item.userId === id)
            if(index>=0){
                // console.log(state.clientsPending[index])
                state.searchResult = state.clientsPending[index]
            }else{
                state.searchResult = null
                console.log('nothing found!')
            }
        },


        //CRUD CLIENTADDED
        setList(state,payload){
            payload.forEach(element => {
                state.clientsAdded.push(element)
            })
            console.log(state.clientsAdded)
        },

        updateClient(state,payload){
            const index = state.clientsAdded.findIndex(item => item.profile.id === payload.id)
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
            const obj = {}
            console.log('id'+ payload.id)
            payload.form.forEach((value,key) => {
                if(!Object.prototype.hasOwnProperty.call(obj, key)){
                    obj[key] = value
                }
            });
            console.log(obj)
            const index = state.clientsAdded.findIndex(item => item.profile.id === payload.id)
            if(index>=0){
                state.clientsAdded[index].transaction.push(obj)
            }      
        }
    },
    actions:{

        async getPendingClients(context){
            
            try {

                const responseData = await getAllUsers();

                context.commit('setPendingClients', responseData.data);


                return responseData;
                
            } catch (error) {
                console.log(error)
                throw error
            }
            
        },
        
        async addClient(context, userId){
            console.log(userId)
            try {               
                const responseData = await AuthenticationService.updateLegitimacy(userId);
                console.log(responseData)
                

            } catch (error) {
                console.log(error)
                throw error              
            }                 
        },

        async getLegitClients(context,legitimateClients){
            console.log("try get list legit")
            try{                
                const responseData = await AuthenticationService.listLegitimateClients(legitimateClients)
                console.log(typeof(responseData));
                context.commit('setList',responseData)
            
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
        addPayment(context,payload){
            context.commit('addPayment',payload)
            //http request for adding payment transactions
        },


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
            console.log(state.clientsAdded)
            return state.clientsAdded
        },
        clientTransactionGetter(state,id){
            
            const index = state.clientsAdded.findIndex(item => item.profile.id === id)
            console.log(state.clientsAdded[index].transaction)
            return state.clientsAdded[index].transaction
        }
    }
}