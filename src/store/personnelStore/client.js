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

            // const index = state.clientsPending.findIndex(item => item.userId=== id)
            // if(index>=0){
            //     console.log(state.clientsPending[index])
            //     state.searchResult = state.clientsPending[index]
            // }else{
            //     state.searchResult = null
            //     console.log('nothing found!')
            // }
        },
        //end search guest

        //start modify legit client list local
        addClient(state,payload){
            console.log('added')
            state.clientsAdded.push(payload)
        },
        updateClient(state,payload){
            console.log(payload)
            const index = state.clientsAdded.findIndex(item => item.userId=== payload.id)
            // console.log(state.clientsAdded[0].profile)
            if(index>=0){
               state.clientsAdded[index].additionalInfo = payload.additionalInfo
               state.clientsAdded[index].fullname = payload.defaultInfo.fullname
               state.clientsAdded[index].homeAddress = payload.defaultInfo.homeAddress
               state.clientsAdded[index].contactNumber = payload.defaultInfo.contactNumber
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
            console.log(payload)
            const index = state.clientsAdded.findIndex(item => item.userId === payload.id)
            state.clientsAdded[index].accountingDetails.totalAmountPayable = state.clientsAdded[index].accountingDetails.totalAmountPayable - payload.amountPaid
            state.clientsAdded[index].accountingDetails.totalPayment =  state.clientsAdded[index].accountingDetails.totalPayment + payload.amountPaid
        }
        // end add transaction
        
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
            // console.log('running getLegitList')
            // const tempList = []
            try{
                const response = await Client.requestLegitList()
                // console.log(response.data)
                context.commit('setLocalLegitList',response.data)        
// /////////
//                 for(const item of response.data) {

//                     const existletterOfIntent = item.letterOfIntent.isSubmitted

//                     const existBirTinRequest = item.BirTinRequest.isSubmitted

//                     const existindividualDeclaration = item.individualDeclaration.isSubmitted

//                     const existContractForm = item.ContractDetails.isSubmitted

//                     // start CREATE donwloadable URL letterofIntent
//                     const letterOfIntentFilename = `${item.userId}_${item.fullname}_letter_of_intent.pdf`  
//                     var letterOfIntentURL = '' 
//                     if(existletterOfIntent){
//                         try{
//                             const downloadableLetterOfIntent = await Client.retrieveUploadedForm(item.userId,letterOfIntentFilename)
//                             const LetterOfIntentBlob = new Blob([downloadableLetterOfIntent], {type: 'application/pdf'})
//                             letterOfIntentURL = URL.createObjectURL(LetterOfIntentBlob)                        
//                         }catch(error){
//                             console.log(error)
//                         }
//                     }
//                     item.letterOfIntentURL = letterOfIntentURL
//                     item.letterOfIntentFilename = letterOfIntentFilename
//                     //end CREATE donwloadable URL letterofIntent

//                     //start CREATE downloadable URL BirTinRequest
//                     const BirTinRequestFilename = `${item.userId}_${item.fullname}_BirTinRequest.pdf`  
//                     var BirTinRequestURL = '' 
//                     // FIX NEED FOR BIR DONWLOAD FORM
//                     if(existBirTinRequest){
//                         try{
//                             const downloadableBirTinRequest = await Client.retrieveUploadedForm(item.userId,BirTinRequestFilename)
//                             const BirTinRequestBlob = new Blob([downloadableBirTinRequest], {type: 'application/pdf'})
//                             BirTinRequestURL = URL.createObjectURL(BirTinRequestBlob)                        
//                         }catch(error){
//                             console.log(error)
//                         }
//                     }
//                     item.BirTinRequestURL = BirTinRequestURL
//                     item.BirTinRequestFilename = BirTinRequestFilename
//                     //end CREATE downloadable URL BirTinRequest


//                     //start CREATE donwloadable URL Individual Declaration
//                     const individualDeclarationFilename = `${item.userId}_${item.fullname}_individual_buyer_declaration.pdf`  
//                     var individualDeclarationURL = '' 
//                     if(existindividualDeclaration){
//                         try{
//                             const downloadableindividualDeclaration = await Client.retrieveUploadedForm(item.userId,individualDeclarationFilename)
//                             const individualDeclarationBlob = new Blob([downloadableindividualDeclaration], {type: 'application/pdf'})
//                             individualDeclarationURL = URL.createObjectURL(individualDeclarationBlob)                        
//                         }catch(error){
//                             console.log(error)
//                         }
//                     }
//                     item.individualDeclarationURL = individualDeclarationURL
//                     item.individualDeclarationFilename = individualDeclarationFilename
//                     //end CREATE donwloadable URL Individual Declaration

//                     //start CREATE donwloadable URL Contract Form
//                     const contractFormFilename = `${item.userId}_${item.fullname}_individual_buyer_declaration.pdf`  
//                     var contractFormURL = '' 
//                     if(existContractForm){
//                         try{
//                             const downloadableContractForm = await Client.retrieveUploadedForm(item.userId,individualDeclarationFilename)
//                             const contractFormDeclarationBlob = new Blob([downloadableContractForm], {type: 'application/pdf'})
//                             contractFormURL = URL.createObjectURL(contractFormDeclarationBlob)                        
//                         }catch(error){
//                             console.log(error)
//                         }
//                     }
//                     item.ContractFormURL = contractFormURL
//                     item.ContractFormFilename = contractFormFilename         

//                     tempList.push(item)
//                 }
//////////                                       
            }catch(error){
                console.log(error)
            }

            // context.commit('setLocalLegitList',tempList)
        },
        //start getting legit list

        //start adding GUEST to LEGIT CLIENT
        async addClient(context,id){   
            try{
                const payload = await Client.addToLegitClient(id)
                context.commit('addClient',payload.data)
                console.log(payload)
            }catch(error){
                console.log(error)
            }
        },
        async updateClient(context,payload){
            try{
                await Client.updateUserProfile(payload)
                context.commit('updateClient',payload)
            }catch(error){
                console.error(error)
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
                // console.log(list)
                context.commit('setLocalCurrentClientTransaction',list)
                return response
            }catch(error){
                console.log(error)
                throw error
            }

            
        },
        async addPayment(context,payload){
            try{
                const response = await Client.addPaymentTransaction({
                    id:payload.id,
                    obj:payload.obj,})
                context.commit('updateAccountingDetails',{id:payload.id,amountPaid: payload.amountPaid})
                return response.message
            }catch(error){
                console.log(error)
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
        }
        //end downloadable Form

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
            console.log(state.listCurrentClientScannedFiles)
            return state.listCurrentClientScannedFiles
        }
        //start set scannedfiles
    }
}