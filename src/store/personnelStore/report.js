import * as API from '@/APIs/PERSONNEL/ReportsAPI.js'
export default {
    namespaced: true,
    state(){
        return{
            dailyReport: [],
            customReport: [],
            dailyfilenameReport : '',
            customfilenameReport : '',
            URLdailyfilenameReport : '',
            URLcustomfilenameReport : '',
            dailyTotalAmount: 0,
            customTotalAmount: 0,
        }
    },
    mutations:{
        setDailyReport(state,obj){   
            console.log(obj)     
            state.URLdailyfilenameReport = obj.url
            state.dailyfilenameReport = obj.filename
            state.dailyTotalAmount = obj.totalAmount
            state.dailyReport = obj.list
        },
        setCustomReport(state,obj){
            state.URLcustomfilenameReport = obj.url
            state.customfilenameReport = obj.filename
            state.customTotalAmount = obj.totalAmount
            state.customReport = obj.list
        }
    },
    actions:{
        async dailyRequest(context,dateNow){
              
            try{
                const response = await API.requestDailyReport(dateNow)
                console.log(response)
                const file = await API.requestExcelFileReport(response.filename)
                const blob = new Blob([file],{ type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
                const url = URL.createObjectURL(blob)
                const obj = {
                    url: url,
                    filename : response.filename,
                    totalAmount: response.totalAmount,
                    list: response.data
                }
                context.commit('setDailyReport',obj)
                return response                
            }catch(error){
                context.commit('setDailyReport',[])
                console.log(error)
                throw error
            }

        },

        async customReport(context,date){
            try{
                const response = await API.requestCustomReport(date)
                const file = await API.requestExcelFileReport(response.filename)
                const blob = new Blob([file],{ type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
                const url = URL.createObjectURL(blob)
                const obj = {
                    url: url,
                    filename : response.filename,
                    totalAmount: response.totalAmount,
                    list: response.data
                }
                context.commit('setCustomReport',obj)
                return response               
            }catch(error){
                context.commit('setCustomReport',[])
                console.log(error)
                throw error
            }
        },

        donwloadableFileReport(){

        }
    },

    getters:{
        dailyReportGetter(state){
            return state.dailyReport
        },
        customReportGetter(state){
            return state.customReport
        },
        dailyReportFilenameGetter(state){
            return state.dailyfilenameReport
        },
        customReportFilenameGetter(state){
            return state.customfilenameReport
        },
        URLdailyfilenameReportGetter(state){
            return state.URLdailyfilenameReport
        },
        URLcustomfilenameReportGetter(state){
            return state.URLcustomfilenameReport 
        },
        dailyTotalAmountGetter(state){
            return state.dailyTotalAmount
        },
        customTotalAmountGetter(state){
            return state.customTotalAmount
        }
    }
}