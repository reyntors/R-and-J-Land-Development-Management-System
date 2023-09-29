export default {
    namespaced: true,
    state(){
        return {
            properties: [
                {
                    imageUrl: '/image1',
                    block_Lot_No:'1',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image2',
                    block_Lot_No:'2',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image3',
                    block_Lot_No:'3',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'reserved'
                },
                {
                    imageUrl: '/image4',
                    block_Lot_No:'4',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image5',
                    block_Lot_No:'5',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image6',
                    block_Lot_No:'6',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'reserved'
                },
                {
                    imageUrl: '/image7',
                    block_Lot_No:'7',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image8',
                    block_Lot_No:'8',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'sold'
                },
                {
                    imageUrl: '/image9',
                    block_Lot_No:'9',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image10',
                    block_Lot_No: '10',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },

                {
                    imageUrl: '/image11',
                    block_Lot_No:'11',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image12',
                    block_Lot_No:'12',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image13',
                    block_Lot_No:'13',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'reserved'
                },
                {
                    imageUrl: '/image14',
                    block_Lot_No:'14',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image25',
                    block_Lot_No:'25',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image26',
                    block_Lot_No:'26',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'reserved'
                },
                {
                    imageUrl: '/image37',
                    block_Lot_No:'37',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image38',
                    block_Lot_No:'38',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'sold'
                },
                {
                    imageUrl: '/image39',
                    block_Lot_No:'39',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: '/image40',
                    block_Lot_No: '40',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
            ],

            listSearchResult: [],
            searchedResult: null,
        }
    },

    mutations:{
        update(state,payload){
            const index = state.properties.findIndex(item => item.block_Lot_No === payload.block_Lot_No)
            if(index>=0){
                state.properties[index] = payload   
            }
            console.log('updated',payload.block_Lot_No)
        },
        searchSuggestions(state,searchValue){
            state.listSearchResult = []
            const arrayResults = state.properties.filter(item => item.block_Lot_No.startsWith(searchValue))
            arrayResults.forEach(element => {
                state.listSearchResult.push(element)
            });
        },
        searchNow(state,searchValue){
            const index = state.properties.findIndex(item => item.block_Lot_No === searchValue)
            state.searchedResult = state.properties[index]
        }
    },

    actions:{
        update(context,payload){
            context.commit('update',payload)
        }
    },
    
    getters: {
        propertiesGetter(state){
            return state.properties
        },
        propertiesSearchResultsGetter(state){
            return state.listSearchResult
        },
        searchedResultGetter(state){
            return state.searchedResult
        }
    }
}