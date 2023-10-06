export default {
    namespaced: true,
    state(){
        return {
            subdivision: [
                {
                    imageUrl: '',                    
                    block_Lot_No:'1',
                    total_Sq_M:'' ,
                    amount_per_Sq: '',
                    total_Amount_Due: '',
                    status: ''
                },
                {
                    imageUrl: '',                    
                    block_Lot_No:'2',
                    total_Sq_M: '',
                    amount_per_Sq: '',
                    total_Amount_Due: '',
                    status: ''
                },
                {
                    imageUrl: '',                    
                    block_Lot_No:'3',
                    total_Sq_M: '',
                    amount_per_Sq: '',
                    total_Amount_Due: '',
                    status: ''
                },
                {
                    imageUrl: '',                    
                    block_Lot_No:'4',
                    total_Sq_M: '',
                    amount_per_Sq: '',
                    total_Amount_Due: '',
                    status: ''
                },
                {
                    imageUrl: 'https://picsum.photos/200/300?grayscale',                    
                    block_Lot_No:'5',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: 'https://picsum.photos/seed/picsum/200/300',                    
                    block_Lot_No:'6',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'reserved'
                },
                {
                    imageUrl: 'https://picsum.photos/seed/picsum/200/300',                    
                    block_Lot_No:'7',
                    total_Sq_M: 200,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 400000,
                    status: 'sale'
                },
                {
                    imageUrl: 'https://picsum.photos/200/300?grayscale',                    
                    block_Lot_No:'8',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'sold'
                },
                {
                    imageUrl: 'https://picsum.photos/200/300?grayscale',                    
                    block_Lot_No:'9',
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
                    imageUrl: 'https://picsum.photos/200/300.webp',
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
                    imageUrl: 'https://picsum.photos/200/300.webp',
                    block_Lot_No:'13',
                    total_Sq_M: 100,
                    amount_per_Sq: 2000,
                    total_Amount_Due: 200000,
                    status: 'reserved'
                },
                {
                    imageUrl: 'https://picsum.photos/200/300.webp',
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
                    imageUrl: 'https://picsum.photos/200/300.webp',
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

            //guest-end
            deepCopySubdivision: [],
            guestSearchedResult: null,

            //peronnel-end
            listSearchResult: [],
            searchedResult: null,
        }
    },

    mutations:{
        //start - guest
        initDeepCopySubdivisionList(state){
            state.deepCopySubdivision = state.subdivision.map(item=>({...item}))
        },
        filterList(state,params){
            console.log(params)
            if(params !== 'all'){
                const filtedArray = state.subdivision.filter(item => {
                    return item.status === params
                })
                state.deepCopySubdivision = filtedArray                
            }else{
                state.deepCopySubdivision = state.subdivision.map(item=>({...item}))
            }
        },
        searchNowfromGuest(state,id){
            const index = state.subdivision.findIndex(item => item.block_Lot_No === id)
            if(index>=0){
                state.guestSearchedResult = state.subdivision[index]
            }else{
                state.guestSearchedResult = null
            }
            
        },
        //end - guest

        //start - personnel
        update(state,payload){
            const index = state.subdivision.findIndex(item => item.block_Lot_No === payload.block_Lot_No)
            if(index>=0){
                state.subdivision[index] = payload   
            }
            console.log('updated',payload.block_Lot_No)
        },
        searchSuggestions(state,searchValue){
            state.listSearchResult = []
            const arrayResults = state.subdivision.filter(item => item.block_Lot_No.startsWith(searchValue))
            arrayResults.forEach(element => {
                state.listSearchResult.push(element)
            });
        },
        searchNow(state,searchValue){
            const index = state.subdivision.findIndex(item => item.block_Lot_No === searchValue)
            if(index>=0){
                state.searchedResult = state.subdivision[index]                
            }else{
                state.searchedResult = []
            }
        },
        setList(){
            //do something to set the list
        },
        //end- personnel
    },

    actions:{

        //start - personnel
        update(context,payload){
            context.commit('update',payload)
            //here for update http request
        },
        //end - personnel

        //start guest and pesonnel access
        getPropertyList(context){
            //here for get the list of all Subdivision
            context.commit('setList')
        }
        //end guest and pesonnel access
        
    },
    
    getters: {

        //start - guest
        deepCopySubdivisionListGetter(state){
            return state.deepCopySubdivision
        },
        guestSearchedResultGetter(state){
            return state.guestSearchedResult
        },
        //end - guest

        //start - personnel
        subdivisionGetter(state){
            return state.subdivision
        },
        subdivisionSearchResultsGetter(state){
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
        //end - personnel
    }
}