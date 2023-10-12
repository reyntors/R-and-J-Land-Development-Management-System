import * as RAW from '@/APIs/PERSONNEL/RawFormsAPI.js'
export default {
    namespaced: true,
    state(){
        return{
            objectsOfDonwloadable: {}
        }
    },
    mutations:{
        setLocalObject(state,obj){
            state.objectsOfDonwloadable = obj
        }
    },

    actions:{
        async getRawFormsList(context){
            try{
                const response = await RAW.requestRawFormsList()
                const list = response.data.forms
                console.log(list)
                const newObject = {}
                
                let letterOfIntentFileName = ""
                let letterOfIntentURL = ""
                let contractDetailsFileName = ""
                let contractDetailsURL = ""
                let individualBuyerFileName = ""
                let individualBuyerURL = ""
                let birTinFileName = ""
                let birTinURL = ""
                let approvePaymentFilename = ""
                let approvePaymentURL = ""
                let callSlipFilename = ""
                let callSlipURL = ""
                let checklistFilename = ""
                let checklistURL = ""
                let reservationFilename = ""
                let reservationURL = ""


                for(const form of list){

                    const filename = form.filename
                    try{
                        const file = await RAW.generateDonwloadableRawForms(filename)                       
                        const blob = new Blob([file], {type: 'application/pdf'})
                        const url = URL.createObjectURL(blob)
                        if(filename === 'Letter of Intent.pdf'){
                            // console.log(filename)
                            letterOfIntentFileName =  filename
                            letterOfIntentURL =  url
                        }else if(filename === 'Contract Details.pdf'){
                            // console.log(filename)
                            contractDetailsFileName =  filename
                            contractDetailsURL =  url
                        }else if(filename === 'Individual Buyer Declaration.pdf'){
                            // console.log(filename)
                            individualBuyerFileName =  filename
                            individualBuyerURL =  url
                        }else if(filename === 'BIR Tin Request.pdf'){
                            // console.log(filename)
                            birTinFileName =  filename
                            birTinURL =  url
                        }else if(filename === 'Approved-Payment-Scheme.pdf'){
                            // console.log(filename)
                            approvePaymentFilename =  filename
                            approvePaymentURL =  url
                        }else if(filename === 'CALL-SLIP.pdf'){
                            // console.log(filename)
                            callSlipFilename =  filename
                            callSlipURL =  url
                        }else if(filename === 'Checklist for Closing of Sale.pdf'){
                            // console.log(filename)
                            checklistFilename =  filename
                            checklistURL =  url
                        }else if(filename === 'RESERVATION-AGREEMENT.pdf'){
                            // console.log(filename)
                            reservationFilename =  filename
                            reservationURL =  url
                        }else{
                            throw new Error("none of the list")
                        }                      
                    }catch(error){
                        console.log(error)

                    }
                }

                newObject.letterOfIntentFileName = letterOfIntentFileName
                newObject.letterOfIntentURL = letterOfIntentURL
                newObject.contractDetailsFileName = contractDetailsFileName
                newObject.contractDetailsURL = contractDetailsURL
                newObject.individualBuyerFileName = individualBuyerFileName
                newObject.individualBuyerURL = individualBuyerURL
                newObject.birTinFileName = birTinFileName
                newObject.birTinURL = birTinURL
                newObject.approvePaymentFilename =approvePaymentFilename
                newObject.approvePaymentURL = approvePaymentURL
                newObject.callSlipFilename = callSlipFilename
                newObject.callSlipURL = callSlipURL
                newObject.checklistFilename = checklistFilename
                newObject.checklistURL = checklistURL
                newObject.reservationFilename =reservationFilename
                newObject.reservationURL =reservationURL

                context.commit('setLocalObject',newObject)

            }catch(error){
                console.log(error)
            }
        }
    },

    getters:{
        objectsOfDonwloadableGetter(state){
            return state.objectsOfDonwloadable
        }
    }

}