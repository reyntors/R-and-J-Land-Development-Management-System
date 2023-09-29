export default {
    namespaced: true,

    actions:{
        dailyRequest(_,payload){
            console.log('daily reports payload:'+ payload)
            //request here for daily
        },

        CustomReport(_,payload){
            console.log('custom report payload:',payload)
            //request here for custom report
        }
    }
}