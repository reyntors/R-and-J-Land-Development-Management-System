export default {
    namespaced: true,
    
    state(){
        return{
            properties: [
                {
                    lotNumber: 1,
                    totalSqMeters: 50,
                    amountPerSq: 1000,
                    totalAmountDue: 50000
                },
                {
                    lotNumber: 2,
                    totalSqMeters: 100,
                    amountPerSq: 2000,
                    totalAmountDue: 200000
                }
            ]
        }
    },
    getters:{
        properties(state){
            return state.properties
        }
    }
}