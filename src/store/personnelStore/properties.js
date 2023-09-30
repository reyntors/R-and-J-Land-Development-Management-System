export default {
    namespaced: true,
    state(){
        return {
            properties: [
                {
                    imageUrl: 'https://picsum.photos/seed/picsum/200/300',                    block_Lot_No:'1',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'sale'
                },
                {
                    imageUrl: 'https://picsum.photos/200/300.jpg',                    block_Lot_No:'2',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: 'https://picsum.photos/seed/picsum/200/300',                    block_Lot_No:'3',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'reserved'
                },
                {
                    imageUrl: 'https://picsum.photos/200/300.jpg',                    block_Lot_No:'4',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: 'https://picsum.photos/200/300?grayscale',                    block_Lot_No:'5',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: 'https://picsum.photos/seed/picsum/200/300',                    block_Lot_No:'6',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'reserved'
                },
                {
                    imageUrl: 'https://picsum.photos/seed/picsum/200/300',                    block_Lot_No:'7',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: 'https://picsum.photos/200/300?grayscale',                    block_Lot_No:'8',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'sold'
                },
                {
                    imageUrl: 'https://picsum.photos/200/300?grayscale',                    block_Lot_No:'9',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: 'https://picsum.photos/200/300.jpg',
                    block_Lot_No: '10',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },

                {
                    imageUrl: 'https://picsum.photos/seed/picsum/200/300',
                    block_Lot_No:'11',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'sale'
                },
                {
                    imageUrl: 'https://picsum.photos/seed/picsum/200/300',
                    block_Lot_No:'12',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: 'https://picsum.photos/seed/picsum/200/300',
                    block_Lot_No:'13',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'reserved'
                },
                {
                    imageUrl: 'https://picsum.photos/seed/picsum/200/300',
                    block_Lot_No:'14',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: 'https://picsum.photos/seed/picsum/200/300',
                    block_Lot_No:'25',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: 'https://picsum.photos/seed/picsum/200/300',
                    block_Lot_No:'26',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'reserved'
                },
                {
                    imageUrl: 'https://picsum.photos/seed/picsum/200/300',
                    block_Lot_No:'37',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: 'https://picsum.photos/seed/picsum/200/300',
                    block_Lot_No:'38',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'sold'
                },
                {
                    imageUrl: 'https://picsum.photos/seed/picsum/200/300',
                    block_Lot_No:'39',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: 'https://picsum.photos/seed/picsum/200/300',
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
            if(index>=0){
                state.searchedResult = state.properties[index]                
            }else{
                state.searchedResult = []
            }
        },
        setList(){
            //do something to set the list
        }
    },

    actions:{
        update(context,payload){
            context.commit('update',payload)
            //here for update http request
        },
        getPropertyList(context){
            //here for get the list of all properties
            context.commit('setList')
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
        },
        issearchedResultEmptyGetter(state){
            if(state.searchedResult.length === 0){
                return true
            }else{
                return false
            }
        }
    }
}