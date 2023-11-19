import * as Client from '@/APIs/PERSONNEL/ClientAPI.js'

export default{

    namespaced: true,

    state(){
        return {
            clientsPending: [],

            searchResult: null,

            clientsAdded: [],

            listCurrentClientTransactions: [],

            listCurrentClientScannedFiles: [],

            objectValuesEmpty: false,

            listGuestSuggestions: [],

            // something: ''
        }
    },
    mutations:{

        // setSomething(state,param){
        //     state.something = param
        // },

        //start search guest
        searchGuest(state,value){
            if(value !== '' || value !== null){
                const searchValue = value.toLowerCase()
                const tempList = state.clientsPending.filter(
                    item => item.fullname.toLowerCase().startsWith(searchValue)
                )
                state.listGuestSuggestions = tempList                
            }else{
                state.listGuestSuggestions = state.clientsPending
            }
        },
        //end search guest

        //start modify legit client list local
        addClient(state,payload){
            // console.log('added')
            // console.log(payload)
            state.clientsAdded.push(payload)
        },
        updateClient(state,payload){
            console.log(payload)
            const index = state.clientsAdded.findIndex(item => item.userId=== payload.id)
            // console.log(state.clientsAdded[0].profile)
            if(index>=0){
                state.clientsAdded[index].profileDetails = payload.data
            }    
        },
        removeClient(state,id){
            console.log(id)
            const index = state.clientsAdded.findIndex(item => item.userId === id)
            if(index>=0){
                state.clientsAdded.splice(index,1) 
            }
            
            console.log(state.clientsAdded)
        },
        //end modify legit client list local

        //start set local guest list
        setLocalListPending(state,response){
            state.clientsPending = []
            response.data.forEach(item => {
                state.clientsPending.push(item)
                // console.log(item)
            })
            //copy the whole list for suggesiton list
            state.listGuestSuggestions = state.clientsPending
        },
        refreshListPending(state){
            state.listGuestSuggestions = []
        },
        //end set local guest list

        //start set local legit client list
        setLocalLegitList(state,list){
            state.clientsAdded = list
        },
        //end set local legit client list

        //start payment transactions
        setLocalCurrentClientTransaction(state,list){
            state.listCurrentClientTransactions = list.reverse()                        
        },
        deleteTransactionPayment(state,id){
            console.log(state.listCurrentClientTransactions,id)
            const index = state.listCurrentClientTransactions.findIndex(item => item.transactionId = id)
            if(index>=0){
                console.log('existed')
                state.listCurrentClientTransactions.splice(index,1)
            }else{
                console.log('not found')
            }
        },
        //end payment transactions

        // start set scanned files
        setLocalCurrentUploadedScannedFiles(state,list){
            state.listCurrentClientScannedFiles = list.reverse()
        },
        // end set scanned files

        // start reset temporary arrays
        resetTempArrays(state){
            state.listCurrentClientScannedFiles = []
            state.listCurrentClientTransactions = []
        },
        // end reset temporary arrays

        // start add transaction
        updateAccountingDetails(state,payload){

            const index = state.clientsAdded.findIndex(item => item.userId === payload.userId)
            const purpose = payload.object.purpose
            const amount = payload.object.amount

            // client.paymentDetails.monthlyAmortizationDue = monthlyAmortization


            if(purpose === 'downpayment'){

                state.clientsAdded[index].paymentDetails.downPayment = amount;

                const annualInterestRate = 0.02;
        
                // Calculate the monthly interest rate
                const monthlyInterestRate = annualInterestRate / 12; // Assuming monthly payments
        
                console.log('monthly interest:',monthlyInterestRate)
                // Define the loan term in months
                const loanTermMonths = 12; // For a 12-month loan term
        
        
                const totalAmountDue = state.clientsAdded[index].accountDetails.totalAmountDue;
                
                const downPayment = state.clientsAdded[index].paymentDetails.downPayment;
        
                const principal = totalAmountDue - downPayment;
        
              
                // Calculate the monthly amortization
                const numerator = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths);
                const denominator = Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1;
                const monthlyAmortization = (numerator / denominator).toFixed(2)
        
                state.clientsAdded[index].paymentDetails.monthlyAmortizationDue = monthlyAmortization

            }else if(purpose === 'reservation'){
                state.clientsAdded[index].paymentDetails.reservationPayment = amount
            }else if(purpose === 'monthly-payment'){
                const amountPaid = parseFloat(amount);
                const totalAmountDue = parseFloat(state.clientsAdded[index].accountDetails.totalAmountDue);
                
                
                state.clientsAdded[index].accountingDetails.totalAmountDue = totalAmountDue;
            
                if(state.clientsAdded[index].accountingDetails.totalPayment === 0){
            
                    state.clientsAdded[index].accountingDetails.totalPayment = amountPaid;
            
                }else{
            
                    state.clientsAdded[index].accountingDetails.totalPayment += amountPaid
                }
            
                if( state.clientsAdded[index].accountingDetails.totalAmountPayable === 0){
            
                    state.clientsAdded[index].accountingDetails.totalAmountPayable = totalAmountDue - amountPaid;
            
                }else{
            
                    state.clientsAdded[index].accountingDetails.totalAmountPayable -= amountPaid
            
                }

            }else{
                console.error('something wrong of adding a transaction')
            }
            // state.clientsAdded[index].accountingDetails.totalAmountPayable = state.clientsAdded[index].accountingDetails.totalAmountPayable - payload.amountPaid
            // state.clientsAdded[index].accountingDetails.totalPayment =  state.clientsAdded[index].accountingDetails.totalPayment + payload.amountPaid
        },
        // end add transaction

        //start reservation form
        automateUpdateAmountDue(state,payload){
            console.log(payload)
            const index = state.clientsAdded.findIndex(item => item.userId === payload.userId)
            if(index>=0){
                state.clientsAdded[index].accountingDetails.totalAmountDue = payload.amount
            }else{
                console.error('somethings wrong updating the amount due')
            }
            
        }
        //end reservation form
        
    },
    actions:{

        //start getting guest list
        async getPendingList(context){
            try{
                const response = await Client.requestPendingList()
                context.commit('setLocalListPending',response)
            }catch(error){
                console.log(error)
            }   
        },
        //end getting guest list

        //start getting legit list
        async getLegitList(context){
            try{
                const response = await Client.requestLegitList()
                // console.log(response.data)
                context.commit('setLocalLegitList',response.data)                                            
            }catch(error){
                console.log(error)
            }
        },
        //start getting legit list


        // start update profile
        async updateClient(context,payload){
            console.log('updating profile details')
            try{
                 const response = await Client.updateUserProfile(payload)
                context.commit('updateClient',payload)
                return response.message
            }catch(error){
                console.error(error)
            }
        },
        // end update profile
        //start adding GUEST to LEGIT CLIENT
        async addClient(context,payload){   
            try{
                const response = await Client.addToLegitClient(payload)
                console.log('isAdmin:',payload.isAdmin)
                if(payload.isAdmin){
                    context.commit('addClient',response.data)
                }
                
                return response.message
            }catch(error){
                console.log(error)
            }
        },

        async removeClient(context,id){
            try{
                await Client.removeToLegitClient(id)
                context.commit('removeClient',id)
            }catch(error){
                console.error(error)
            }
        },
        //end adding GUEST to LEGIT CLIENT

        //start payment transactions
        async getListTransaction(context,id){
            try{
                const response = await Client.getListTransaction(id)
                const list = response.data
                console.log(list)
                context.commit('setLocalCurrentClientTransaction',list)
                return response
            }catch(error){
                console.log(error)
                throw error
            }

            
        },

        async addPayment(context,payload){
            console.log(payload.object)
            try{
                const response = await Client.addPaymentTransaction({
                    userId:payload.userId,
                    object:payload.object,})
                context.commit('updateAccountingDetails',payload)
                return response.message
            }catch(error){
                console.log(error)
                throw error
            }
        },

        async updatePayment(_,payload){
            console.log('updating store')

            try{
                const response = await Client.updatePaymentTransaction(payload)
                return response.message
            }catch(error){
                console.log(error)
                throw error
            }
        },
        
        async deleteTransactionPayment(context,payload){
            try{
                const response = await Client.deletePaymentTransaction(payload)
                context.commit('deleteTransactionPayment',payload.transactionId)
                console.log(response)
                return response.message
            }catch(error){
                console.error(error)
                throw error
            }
        },
        //end payment transactions

        //start downloadable Form
        async retrieveUploadedForm(_,payload){
            try{
                const response = await Client.retrieveUploadedForm({
                    id: payload.id,
                    filename: payload.filename
                })
                return response
            }catch(error){
                console.log(error)
                throw error
            }
        },
        async uploadScannedFile(_,payload){
            try{
                const response = await Client.uploadScannedFile(payload.id,payload.data)
                return response.message
            }catch(error){
                console.log(error)
            }
        },
        async getListScannedFile(context,id){
            try{
               const response = await Client.listScannedFile(id)
               const list = response.scannedFiles
               context.commit('setLocalCurrentUploadedScannedFiles',list)                   
            }catch(error){
                console.log(error)
            } 
        },
        //end downloadable Form

        //start reservation form
        async submitReservationForm(context,payload){
            // console.log(payload)
            // try{
                // const response = await Client.submitReservationFormAPI(payload)
                // console.log(response) 
                context.commit('automateUpdateAmountDue',{userId: payload.userId,amount: 50000})     
                // return response          
            // }catch(error){
            //     console.log(error)
            // } 
        }
        //end reservation form

    },
    getters:{

        // somethingGetter(state){
        //     return state.something
        // },

        searchResultGetter(state){
               return state.searchResult 
        },

        clientsGetter(state){
            // console.log(state.clientsAdded)
            return state.clientsAdded
        },

        // start pending clients
        pendingClients(state){
            return state.listGuestSuggestions
        },
        // end pending clients

        /*start transaction payment */
        clientTransactionGetter(state){ 
            // console.log(state.listCurrentClientTransactions )
            return state.listCurrentClientTransactions 
        },
        /*end transaction payment */

        //start set scannedfiles
        listCurrentClientScannedFilesGetter(state){
            // console.log(state.listCurrentClientScannedFiles)
            return state.listCurrentClientScannedFiles
        }
        //start set scannedfiles
    }
}