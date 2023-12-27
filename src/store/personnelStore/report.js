import * as API from '@/APIs/PERSONNEL/ReportsAPI.js'
import store from '@/store/store.js'
export default {
    namespaced: true,
    state(){
        return{
            dailyReport: [],
            weeklyReport: [],
            monthlyReport: [],
            customReport: [],

            dailyfilenameReport : '',
            weeklyfilenameReport : '',
            monthlyfilenameReport : '',
            customfilenameReport : '',

            URLdailyfilenameReport : '',
            URLweeklyfilenameReport : '',
            URLmonthlyfilenameReport : '',
            URLcustomfilenameReport : '',

            dailyTotalAmount: 0,
            weeklyTotalAmount: 0,
            monthlyTotalAmount: 0,
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
        setWeeklyReport(state,obj){
            console.log(obj)
            state.URLweeklyfilenameReport = obj.url
            state.weeklyfilenameReport = obj.filename
            state.weeklyTotalAmount = obj.totalAmount
            state.weeklyReport = obj.list
        },
        setMonthlyReport(state,obj){
            state.URLmonthlyfilenameReport = obj.url
            state.monthlyfilenameReport = obj.filename
            state.monthlyTotalAmount = obj.totalAmount
            state.monthlyReport = obj.list
        },
        setCustomReport(state,obj){
            state.URLcustomfilenameReport = obj.url
            state.customfilenameReport = obj.filename
            state.customTotalAmount = obj.totalAmount
            state.customReport = obj.list
        }
    },
    actions:{
        async dailyRequest(context,payload){  
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await API.requestDailyReport(payload)
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

        async weeklyReport(context,payload){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await API.requestWeeklyReport(payload)
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
                context.commit('setWeeklyReport',obj)
                return response               
            }catch(error){
                context.commit('setWeeklyReport',[])
                console.log(error)
                throw error
            }
        },

        async monthlyReport(context,payload){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await API.requestMonthlyReport(payload)
                const file = await API.requestExcelFileReport(response.filename)
                const blob = new Blob([file],{ type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
                const url = URL.createObjectURL(blob)
                const obj = {
                    url: url,
                    filename : response.filename,
                    totalAmount: response.totalAmount,
                    list: response.data
                }
                context.commit('setMonthlyReport',obj)
                return response               
            }catch(error){
                context.commit('setMonthlyReport',[])
                console.log(error)
                throw error
            }
        },

        async customReport(context,payload){
            store.dispatch('auth/monitorTokenSpan')
            try{
                const response = await API.requestCustomReport(payload)
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
        weeklyReportGetter(state){
            return state.weeklyReport
        },
        monthlyReportGetter(state){
            return state.monthlyReport
        },
        customReportGetter(state){
            return state.customReport
        },


        dailyReportFilenameGetter(state){
            return state.dailyfilenameReport
        },
        weeklyReportFilenameGetter(state){
            return state.weeklyfilenameReport
        },
        monthlyReportFilenameGetter(state){
            return state.monthlyfilenameReport
        },
        customReportFilenameGetter(state){
            return state.customfilenameReport
        },


        URLdailyfilenameReportGetter(state){
            return state.URLdailyfilenameReport
        },
        URLweeklyfilenameReportGetter(state){
            return state.URLweeklyfilenameReport 
        },
        URLmonthlyfilenameReportGetter(state){
            return state.URLmonthlyfilenameReport 
        },
        URLcustomfilenameReportGetter(state){
            return state.URLcustomfilenameReport 
        },


        dailyTotalAmountGetter(state){
            return state.dailyTotalAmount
        },
        weeklyTotalAmountGetter(state){
            return state.weeklyTotalAmount
        },
        monthlyTotalAmountGetter(state){
            return state.monthlyTotalAmount
        },
        customTotalAmountGetter(state){
            return state.customTotalAmount
        }
    }
}