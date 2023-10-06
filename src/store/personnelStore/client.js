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


        }
    },
    mutations:{

        //start search guest
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
        //end search guest

        //start modify legit client list local
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
        //end modify legit client list local

        //start set local guest list
        setLocalListPending(state,response){
            state.clientsPending = []
            response.data.forEach(item => {
                state.clientsPending.push(item)
                console.log(item)
            })
        },
        //end set local guest list

        //start set local legit client list
        setLocalLegitList(state,list){
            state.clientsAdded = list
        },
        //end set local legit client list

        //start payment transactions
        setLocalCurrentClientTransaction(state,list){
            state.listCurrentClientTransactions = list                         
        },
        //end payment transactions

        // start set scanned files
        setLocalCurrentUploadedScannedFiles(state,list){
            state.listCurrentClientScannedFiles = list
        },
        // end set scanned files

        // start reset temporary arrays
        resetTempArrays(state){
            state.listCurrentClientScannedFiles = []
            state.listCurrentClientTransactions = []
        }
        // end reset temporary arrays
        
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
            const tempList = []
            try{
                const response = await Client.requestLegitList()
                // console.log(response)
                context.commit('setLocalLegitList',response)        
/////////
                for(const item of response.data) {

                    const existletterOfIntent = item.letterOfIntent.isSubmitted

                    const existBirTinRequest = item.BirTinRequest.isSubmitted

                    const existindividualDeclaration = item.individualDeclaration.isSubmitted

                    const existContractForm = item.ContractDetails.isSubmitted

                    // start CREATE donwloadable URL letterofIntent
                    const letterOfIntentFilename = `${item.userId}_${item.fullname}_letter_of_intent.pdf`  
                    var letterOfIntentURL = '' 
                    if(existletterOfIntent){
                        try{
                            const downloadableLetterOfIntent = await Client.retrieveUploadedForm(item.userId,letterOfIntentFilename)
                            const LetterOfIntentBlob = new Blob([downloadableLetterOfIntent], {type: 'application/pdf'})
                            letterOfIntentURL = URL.createObjectURL(LetterOfIntentBlob)    
                            console.log(letterOfIntentURL)                    
                        }catch(error){
                            console.log(error)
                        }
                    }
                    item.letterOfIntentURL = letterOfIntentURL
                    item.letterOfIntentFilename = letterOfIntentFilename
                    //end CREATE donwloadable URL letterofIntent

                    //start CREATE downloadable URL BirTinRequest
                    const BirTinRequestFilename = `${item.userId}_${item.fullname}_BirTinRequest.pdf`  
                    var BirTinRequestURL = '' 
                    if(existBirTinRequest){
                        try{
                            const downloadableBirTinRequest = await Client.retrieveUploadedForm(item.userId,BirTinRequestFilename)
                            const BirTinRequestBlob = new Blob([downloadableBirTinRequest], {type: 'application/pdf'})
                            BirTinRequestURL = URL.createObjectURL(BirTinRequestBlob)                        
                        }catch(error){
                            console.log(error)
                        }
                    }
                    item.BirTinRequestURL = BirTinRequestURL
                    item.BirTinRequestFilename = BirTinRequestFilename
                    //end CREATE downloadable URL BirTinRequest


                    //start CREATE donwloadable URL Individual Declaration
                    const individualDeclarationFilename = `${item.userId}_${item.fullname}_individual_buyer_declaration.pdf`  
                    var individualDeclarationURL = '' 
                    if(existindividualDeclaration){
                        try{
                            const downloadableindividualDeclaration = await Client.retrieveUploadedForm(item.userId,individualDeclarationFilename)
                            const individualDeclarationBlob = new Blob([downloadableindividualDeclaration], {type: 'application/pdf'})
                            individualDeclarationURL = URL.createObjectURL(individualDeclarationBlob)                        
                        }catch(error){
                            console.log(error)
                        }
                    }
                    item.individualDeclarationURL = individualDeclarationURL
                    item.individualDeclarationFilename = individualDeclarationFilename
                    //end CREATE donwloadable URL Individual Declaration

                    //start CREATE donwloadable URL Contract Form
                    const contractFormFilename = `${item.userId}_${item.fullname}_individual_buyer_declaration.pdf`  
                    var contractFormURL = '' 
                    if(existContractForm){
                        try{
                            const downloadableContractForm = await Client.retrieveUploadedForm(item.userId,individualDeclarationFilename)
                            const contractFormDeclarationBlob = new Blob([downloadableContractForm], {type: 'application/pdf'})
                            contractFormURL = URL.createObjectURL(contractFormDeclarationBlob)                        
                        }catch(error){
                            console.log(error)
                        }
                    }
                    item.ContractFormURL = contractFormURL
                    item.ContractFormFilename = contractFormFilename         

                    tempList.push(item)
                }
//////////                                       
            }catch(error){
                console.log(error)
            }

            context.commit('setLocalLegitList',tempList)
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
        updateClient(context,payload){
            context.commit('updateClient',payload)
            //
        },
        deleteClient(context,id){
            context.commit('deleteClient',id)
            //
        },
        //end adding GUEST to LEGIT CLIENT

        //start payment transactions
        async getListTransaction(context,id){
            const tempList = []
            try{
                const response = await Client.getListTransaction(id)
                const list = response.data
                    if(list.length>0){
                        for(const item of list){     
                            console.log(item)                      
                            try{
                                const file = await Client.retrieveUploadedAttachment(id,item.attachments[0].filename)
                                console.log(file)
                                const blob = new Blob([file],{type: 'application/pdf'})
                                const url = URL.createObjectURL(blob)
                                const download = item.attachments[0].filename
                                item.url = url;
                                item.download = download;
                                tempList.push(item)                         
                            }catch(error){
                                console.log(error)
                                throw error
                            }
                        }
                    }
                context.commit('setLocalCurrentClientTransaction',tempList)
                return response
            }catch(error){
                console.log(error)
                throw error
            }

            
        },
        async addPayment(_,payload){
            try{
                const response = await Client.addPaymentTransaction({
                    id:payload.id,
                    obj:payload.obj})
                console.log(response)
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
            const newList = []
            try{
               const response = await Client.listScannedFile(id)
               const list = response.scannedFiles
               
               if(list.length>0){
                for(const item of list){
                    try{
                        const response = await Client.retrieveSpecificScannedFile(id,item.filename)
                        const blob = new Blob([response], {type: 'application/pdf'})
                        const url = URL.createObjectURL(blob)
                        console.log(url,item.filename)
                        newList.push({
                            filename: item.filename,
                            url: url
                        })                      
                    }catch(error){
                        console.log(error)
                    }
                }
                console.log(newList)
            }                      
            }catch(error){
                console.log(error)
            }
            context.commit('setLocalCurrentUploadedScannedFiles',newList)
        }
        //end downloadable Form

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

        /*start transaction payment */
        clientTransactionGetter(state){ 
            console.log(state.listCurrentClientTransactions )
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