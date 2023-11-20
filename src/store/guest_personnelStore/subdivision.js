import * as API from '@/APIs/BOTH/BothAPI.js'

export default {
    namespaced: true,
    state(){
        return {

            //guest-end
            deepCopySubdivision: [],
            guestSearchedResult: null,

            //peronnel-end
            listSearchResult: [],
            searchedResult: null,

            subdivision: []
        }
    },

    mutations:{
        //start - guest

        //end - guest

        //start - personnel
        update(state,payload){
            const index = state.subdivision.findIndex(item => item.lotNumber === payload.lotNumber)
            if(index>=0){
                state.subdivision[index] = payload   
            }
            console.log('updated',payload.lotNumber)
        },
        searchSuggestions(state,searchValue){
            state.listSearchResult = []
            // console.log(typeof(searchValue),searchValue)
            const arrayResults = state.subdivision.filter(item => item.lotNumber.startsWith(searchValue))
            arrayResults.forEach(element => {
                state.listSearchResult.push(element)
            });
            // console.log(state.listSearchResult)
        },
        searchNow(state,searchValue){
            const index = state.subdivision.findIndex(item => {
                console.log(item.lotNumber,searchValue)
                return item.lotNumber === searchValue
                
            })
            // console.log(state.subdivision)
            // console.log(searchValue)
            console.log(index)
            if(index>=0){
                state.searchedResult = state.subdivision[index]                
            }else{
                state.searchedResult = []
            }
        },
        setList(state,list){
            // console.log(list)
            state.subdivision = list
        },
        //end- personnel
    },

    actions:{

        // start guest
        async reserveSubdivision(_,payload){
            try{
                const response =  await API.reserveSubdivision(payload)
                return response
            }catch(error){
                console.log(error)
                throw error
            }
        },
        // end guest

        //start - personnel
        async update(_,payload){
            // context.commit('update',payload)
            try{
                const response = await API.SubdivisionLotUpdate(payload.lotNo, payload.form)
                console.log(response.message)
                return response.message
            }catch(error){
                console.log(error)
                throw error
            }
        },
        //end - personnel

        //start guest and pesonnel access
        async getPropertyList(context){
            console.log('get property list action')
            try{
                const response =  await API.getListSubdivision()
                const list = response;
                context.commit('setList',list)
            }catch(error){
                console.log(error)
                throw(error)
            }   
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
            // return state.listLot
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
        },
        //end - personnel

        //real
        // listLotGetter(state){
        //     return state.listLot
        // }
        
    }
}