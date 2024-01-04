import * as Client from '@/APIs/PERSONNEL/ClientAPI.js'
import store from '@/store/store.js'

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

            listSubmittedForms : [],

            // something: ''
        }
    },
    mutations:{

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
            state.clientsAdded.push(payload)
        },
        updateClient(state,payload){        //update profile deailts
            console.log(payload)
            const index = state.clientsAdded.findIndex(item => item.userId=== payload.id)
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
        deleteUploadedID(state,payload){    //delete the specific id locally
            const index = state.clientsAdded.findIndex(item => item.userId === payload.userId)  //find the index of the client
            if(index>=0){
                const index2 = state.clientsAdded[index].profileDetails.uploadId.findIndex(item => item._id === payload.imageId) //get the index of the matched image ID
                if(index2>=0){
                    state.clientsAdded[index].profileDetails.uploadId.splice(index2,1)  //deleting now the image
                }
            }
            console.log(state.clientsAdded)
        },
        //end modify legit client list local

        //start set local guest list
        setLocalListPending(state,response){
            // console.log(response)
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
            // console.log(list)
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

        // start set scanned files and submitted forms
        setLocalCurrentUploadedScannedFiles(state,list){
            state.listCurrentClientScannedFiles = list.reverse()
        },
        setListSubmittedForms(state,data){
            console.log(data)
            state.listSubmittedForms = data
        },
        // end set scanned files

        // start reset temporary arrays
        resetTempArrays(state){
            state.listCurrentClientScannedFiles = []
            state.listCurrentClientTransactions = []
        },
        // end reset temporary arrays

        // start add transaction
        updatePaymentDetails(state,payload){

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
        deletePaymentAccountDetails(state,payload){
            const index = state.clientsAdded.findIndex(item => item.userId === payload.userId)
            if(index>=0){
                
                //get the list of keys of the the object accountDetails
                const keyList = Object.keys(state.clientsAdded[index].accountDetails)

                //find the index of the matched keyname
                const newIndex  = keyList.findIndex(keyName => keyName === payload.details)

                //ensure the key exists
                if(newIndex >=0){
    
                    //update the keyList and removed the key name matched
                    keyList.splice(newIndex,1)

                    //loop the keylist to get each value of the object
                    //create new object
                    const newObject = {}
                    for(let key of keyList){
                        //set new key-value pairs
                        newObject[key] = state.clientsAdded[index].accountDetails[key]
                    }

                    //rewrite the current client's account details
                    state.clientsAdded[index].accountDetails = newObject

                }else{
                    console.log('no match of the details key on the local list accounting details')
                }
            }else{
                console.log('not found')
            }
        },
        // end add transaction

        //start reservation form
        updateAccountDetails(state,payload){
            console.log(payload)
            const index = state.clientsAdded.findIndex(item => item.userId === payload.userId)
            if(index>=0){
                // state.clientsAdded[index].accountDetails = {}
                state.clientsAdded[index].accountDetails = {...payload.object}
                state.clientsAdded[index].accountingDetails.totalAmountDue = payload.totalAmountDue
            }else{
                console.error('somethings wrong updating the amount due')
            }
        }
        //end reservation form
        
    },
    actions:{

        //start getting guest list
        async getPendingList(context){
            store.dispatch('auth/monitorTokenSpan')
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
            store.dispatch('auth/monitorTokenSpan')
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
            store.dispatch('auth/monitorTokenSpan')
            console.log('updating profile details')
            try{
                 const response = await Client.updateUserProfile(payload)
                context.commit('updateClient',payload)
                return response.message
            }catch(error){
                console.error(error)
            }
        },
        async deleteUploadedID(context,payload){
            console.log(payload)
            store.dispatch('auth/monitorTokenSpan')
            console.log('deleting uploaded id')
            try{
                 const response = await Client.deleteUploadedID(payload.userId, payload.imageId)
                context.commit('deleteUploadedID',{userId: payload.userId, imageId: payload.imageId})   //delete the ID in local list
                return response.message
            }catch(error){
                console.error(error)
                return error
            }
        },

        // end update profile

        //start adding GUEST to LEGIT CLIENT
        async addClient(context,payload){   
            store.dispatch('auth/monitorTokenSpan')
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
            store.dispatch('auth/monitorTokenSpan')
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
            store.dispatch('auth/monitorTokenSpan')
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
            store.dispatch('auth/monitorTokenSpan')
            console.log(payload.object)
            try{
                const response = await Client.addPaymentTransaction({
                    userId:payload.userId,
                    object:payload.object,})
                context.commit('updatePaymentDetails',payload)
                console.log(response)
                return response.message
            }catch(error){
                console.log(error)
                throw error
            }
        },

        async updatePayment(_,payload){
            store.dispatch('auth/monitorTokenSpan')
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
            store.dispatch('auth/monitorTokenSpan')
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

        async deleteAccountDetails(context,payload){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await Client.deletePaymentAccountDetails(payload)
                context.commit('deletePaymentAccountDetails',payload)
                return response.message
            }catch(error){
                console.error(error)
                throw(error)
            }
        },
        //end payment transactions

        //start downloadable Form and Submitted Forms
        async listSubmittedForms(context,id){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await Client.listSubmittedForms(id)
                context.commit('setListSubmittedForms',response.data)
            }catch(error){
                console.log(error)
            }
        },
        async retrieveUploadedForm(_,payload){
            store.dispatch('auth/monitorTokenSpan')
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
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await Client.uploadScannedFile(payload.id,payload.data)
                return response.message
            }catch(error){
                console.log(error)
            }
        },
        async getListScannedFile(context,id){
            store.dispatch('auth/monitorTokenSpan')
            try{
               const response = await Client.listScannedFile(id)
               const list = response.scannedFiles
               context.commit('setLocalCurrentUploadedScannedFiles',list)                   
            }catch(error){
                console.log(error)
            } 
        },
        async deleteScannedFile(_,payload){
            console.log(payload)
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await Client.deleteSpecificScannedFile(payload.userId,payload.fileId)
                return response.message
            }catch(error){
                console.log(error)
            }
        },
        //end downloadable Form

        //start reservation form
        async submitReservationForm(context,payload){
            store.dispatch('auth/monitorTokenSpan')
            console.log(payload)
            try{
                const response = await Client.submitReservationFormAPI(payload)
                console.log(response) 
                
                const object = {}
                if(response.data.details1){
                    // console.log(response.data.details1)
                    object.details1 = {...response.data.details1}
                }
                if(response.data.details2){
                    // console.log(response.data.details2)
                    object.details2 = {...response.data.details2}
                }
                if(response.data.details3){
                    // console.log(response.data.details3)
                    object.details3 = {...response.data.details3}
                }

                context.commit('updateAccountDetails',{
                    userId: payload.userId,
                    object: response.data[0],
                    totalAmountDue: response.totalAmountDue,
                }) 
                return response          
            }catch(error){
                return error
            } 
        },
        //end reservation form

        //start payment scheme
        async submitPaymentScheme(_,payload){
            const object = {
                typePayment: payload.typePayment,
                name: payload.name,
                blockNo: payload.blockNo,
                phaseNo: payload.phaseNo,
                lotNo: payload.lotNo,
                amount: payload.amount,
                datePaid: payload.datePaid,
            }
            let body = {}
            if(payload.typePayment === 'cash'){
                body = {
                    ...object,
                    ...payload.cash
                }
            }else if(payload.typePayment === 'installment'){
                body = {
                    ...object,
                    ...payload.installment
                }
            }else{
                body = {
                    ...object,
                    ...payload.others
                }
            }
            try{
                const response = await Client.submitPaymentSchemeAPI(body,payload.userId)
                return response
            }catch(error){
                return error
            }
        },
        //end payment scheme

        //start CTS contarct to sell
        async triggerCTS(_,userId){
            try{
                const response = await Client.triggerCreateCtsAPI(userId)
                console.log(response)
                return response
            }catch(error){
                console.error(error)
                throw error
            }
        }
        //end CTS contract to sell

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

        //start get scannedfiles
        listSubmittedFormsGetter(state){
            return state.listSubmittedForms
        },
        listCurrentClientScannedFilesGetter(state){
            // console.log(state.listCurrentClientScannedFiles)
            return state.listCurrentClientScannedFiles
        }
        //start get scannedfiles
    }
}