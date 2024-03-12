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

            clientPaymentDetails : {},

            /* sample add transaction pending approval*/
            transactionsApproval: [{}]
        }
    },
    mutations:{

        //START search guest
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

        //START modify legit client list local
        addClient(state,payload){
            state.clientsAdded.push(payload)
        },
        updateClient(state,payload){        //update profile deailts
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
        },

        //START set local guest list
        setLocalListPending(state,response){
            state.clientsPending = []
            response.data.forEach(item => {
                state.clientsPending.push(item)
            })     
            state.listGuestSuggestions = state.clientsPending //copy the whole list for suggestion list
        },
        refreshListPending(state){
            state.listGuestSuggestions = []
        },

        //START set local legit client list
        setLocalLegitList(state,list){
            state.clientsAdded = list
        },

        //START payment transactions
        setLocalCurrentClientTransaction(state,list){
            state.listCurrentClientTransactions = list                       
        },

        // START set scanned files and submitted forms
        setLocalCurrentUploadedScannedFiles(state,list){
            state.listCurrentClientScannedFiles = list.reverse()
        },
        setListSubmittedForms(state,data){
            state.listSubmittedForms = data
        },

        // START reset temporary arrays
        resetTempArrays(state){
            state.listCurrentClientScannedFiles = []
            state.listCurrentClientTransactions = []
        },

        // START add transaction
        resetPaymentDetails(state,userId){
            const index = state.clientsAdded.findIndex(item => item.userId === userId)
            if(index>=0){   
                state.clientPaymentDetails.accountDetails = {}
                state.clientPaymentDetails.paymentDetails = {
                    reservationPayment: 0,
                    downPayment: 0,
                    monthlyAmortizationDue: 0,
                }
                state.clientPaymentDetails.accountingDetails = {
                    totalAmountDue: 0,
                    totalPayment: 0,
                    totalAmountPayable: 0,
                    totalInterest: 0
                }
                state.clientsAdded[index].accountDetails = []
                state.listCurrentClientTransactions = []
            }else{
                console.log('not found')
            }
        },

        // START payment details
            setPaymentDetails(state,data){
                console.log(data)
                state.clientPaymentDetails = data
            }      
    },

    actions:{
        // START getting guest list
        async getPendingList(context){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await Client.requestPendingList()
                context.commit('setLocalListPending',response)
            }catch(error){
                console.error(error)
            }   
        },

        //START getting legit list
        async getLegitList(context){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await Client.requestLegitList()
                context.commit('setLocalLegitList',response.data)                                            
            }catch(error){
                console.error(error)
            }
        },

        // START update profile
        async updateClient(context,payload){
            store.dispatch('auth/monitorTokenSpan')
            try{
                 const response = await Client.updateUserProfile(payload)
                context.commit('updateClient',payload)
                return response.message
            }catch(error){
                console.error(error)
            }
        },
        async deleteUploadedID(context,payload){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await Client.deleteUploadedID(payload.userId, payload.imageId)
                context.commit('deleteUploadedID',{userId: payload.userId, imageId: payload.imageId})   //delete the ID in local list
                return response.message
            }catch(error){
                console.error(error)
                return error
            }
        },

        // START adding GUEST to LEGIT CLIENT
        async addClient(context,payload){   
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await Client.addToLegitClient(payload)
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

        // START payment transactions
        async getListTransaction(context,id){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await Client.getListTransaction(id)
                const list = response.data
                context.commit('setLocalCurrentClientTransaction',list)
                return response
            }catch(error){
                console.log(error)
                throw error
            }       
        },
        async addPayment(_,payload){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await Client.addPaymentTransaction({
                    userId:payload.userId,
                    object:payload.object,})
                return response.message
            }catch(error){
                console.log(error)
                throw error
            }
        },
        async updatePayment(_,payload){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await Client.updatePaymentTransaction(payload)
                return response.message
            }catch(error){
                console.log(error)
                throw error
            }
        },     
        async deleteTransactionPayment(_,payload){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await Client.deletePaymentTransaction(payload)
                return response.message
            }catch(error){
                console.error(error)
                throw error
            }
        },

        // START downloadable Form and Submitted Forms
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
                console.error(error)
                throw error
            }
        },
        async uploadScannedFile(_,payload){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await Client.uploadScannedFile(payload.id,payload.data)
                return response.message
            }catch(error){
                console.error(error)
            }
        },
        async getListScannedFile(context,id){
            store.dispatch('auth/monitorTokenSpan')
            try{
               const response = await Client.listScannedFile(id)
               const list = response.scannedFiles
               context.commit('setLocalCurrentUploadedScannedFiles',list)                   
            }catch(error){
                console.error(error)
            } 
        },
        async deleteScannedFile(_,payload){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await Client.deleteSpecificScannedFile(payload.userId,payload.fileId)
                return response.message
            }catch(error){
                console.error(error)
            }
        },

        // START reservation form
        async submitReservationForm(_,payload){
            console.log('naa ko diri: ',payload);
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await Client.submitReservationFormAPI(payload)              
                const object = {}
                if(response.data.details1){
                    object.details1 = {...response.data.details1}
                }
                if(response.data.details2){
                    object.details2 = {...response.data.details2}
                }
                if(response.data.details3){
                    object.details3 = {...response.data.details3}
                }
                return response          
            }catch(error){
                console.error(error)
                return error
            } 
        },

        // START payment scheme
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
                console.error(error)
                throw error
            }
        },

        // START CTS contarct to sell
        async triggerCTS(_,userId){
            try{
                const response = await Client.triggerCreateCtsAPI(userId)
                return response
            }catch(error){
                console.error(error)
                throw error
            }
        },

        // START payment details
        async getPaymentDetails(context,userId){
            try{
                const response = await Client.getPaymentDetailsAPI(userId)
                context.commit('setPaymentDetails',response.data)
            }catch(error){
                console.error(error)
                throw error
            }
        },
        async resetPaymentDetails(context,userId){
            try{
                const response = await Client.resetPaymentDetailsAPI(userId)
                context.commit('resetPaymentDetails',userId)
                return response
            }catch(error){
                console.error(error)
                throw error
            }
        }
    },

    getters:{
        searchResultGetter(state){
            return state.searchResult 
        },

        clientsGetter(state){
            return state.clientsAdded
        },

        pendingClients(state){
            return state.listGuestSuggestions
        },

        clientTransactionGetter(state){ 
            console.log(state.listCurrentClientTransactions )
            return state.listCurrentClientTransactions 
        },

        listSubmittedFormsGetter(state){
            return state.listSubmittedForms
        },

        listCurrentClientScannedFilesGetter(state){
            return state.listCurrentClientScannedFiles
        },

        paymentDetailsGetter(state){
            return state.clientPaymentDetails
        }
    }
}