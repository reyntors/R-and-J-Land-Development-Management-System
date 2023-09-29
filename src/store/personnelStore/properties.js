export default {
    namespaced: true,
    state(){
        return {
            properties: [
                {
                    imageUrl: '/image1',
                    block_Lot_No: 1,
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image2',
                    block_Lot_No: 2,
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image3',
                    block_Lot_No: 3,
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'reserved'
                },
                {
                    imageUrl: '/image4',
                    block_Lot_No: 4,
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image5',
                    block_Lot_No: 5,
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image6',
                    block_Lot_No: 6,
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'reserved'
                },
                {
                    imageUrl: '/image7',
                    block_Lot_No: 7,
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image8',
                    block_Lot_No: 8,
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'sold'
                },
                {
                    imageUrl: '/image9',
                    block_Lot_No: 9,
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image10',
                    block_Lot_No: 10,
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
            ]
        }
    },

    mutations:{
        update(state,payload){
            const index = state.properties.findIndex(item => item.block_Lot_No === payload.block_Lot_No)
            if(index>=0){
                state.properties[index] = payload   
            }
            console.log('updated')
        }
    },

    actions:{
        update(context,payload){
            context.commit('update',payload)
        }

        //UDPATE REQUEST HERE
    },
    
    getters: {
        propertiesGetter(state){
            return state.properties
        }
    }
}