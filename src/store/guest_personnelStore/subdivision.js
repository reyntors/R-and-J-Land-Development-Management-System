import * as API from '@/APIs/BOTH/BothAPI.js'
import store from '@/store/store.js'
export default {
    namespaced: true,
    state(){
        return {

            //guest-end
            redirectLetterOfIntent: false,  //var holder deciison to redirect after login
            reservationTarget:{     //var holder to the lot info the client want to reserve
                projectName: "",
                lotNumberSelected: ""
            },   

            //peronnel-end
            listSearchResult: [],
            searchedResult: [],

            subdivision: []
        }
    },

    mutations:{
        //start - guest
        redirectLetterOfIntent(state,bool){     //toggle the boolean of the redirect after login
            state.redirectLetterOfIntent = bool
        },
        setlotNumberSelected(state,details){      //set the lot details of the client want to reserve
            state.reservationTarget.projectName = details.projectName
            state.reservationTarget.lotNumberSelected = details.lotNumberSelected

        },
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
            const listKey = Object.keys(state.subdivision)
            const numericRegex = /^\d+$/;
            if(numericRegex.test(searchValue)){
                console.log('numberic strings')
                state.listSearchResult = listKey.filter(item => item.startsWith('lot' + searchValue)) 
            }else{
                console.log('text strings')
                state.listSearchResult = listKey.filter(item => item.startsWith(searchValue)) 
            }
            console.log(state.listSearchResult)
            
        },
        searchNow(state,searchValue){
            
            const listKey = Object.keys(state.subdivision)  //get the list of the keys

            const index = listKey.findIndex(item => {   //search the value on the list of keys and return its index
                // console.log(searchValue)
                return item === searchValue
            })
            
            console.log(index,searchValue,listKey)
            if(index>=0){
                const keyName = listKey[index]  //store thekeyname of the result of the search list
                state.searchedResult = state.subdivision[keyName]                
            }else{
                state.searchedResult = []
            }
        },
        setList(state,list){  //set a local list
            console.log(list)
            state.subdivision = list
        },
        //end- personnel
    },

    actions:{

        // start guest
        async reserveSubdivision(_,payload){
            store.dispatch('auth/monitorTokenSpan')
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
            store.dispatch('auth/monitorTokenSpan')
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
                console.log(list)
                context.commit('setList',list)
            }catch(error){
                console.log(error)
                throw(error)
            }   
        }
        //end guest and pesonnel access
        
    },
    
    getters: {

        //start guest
        redirectLetterOfIntentGetter(state){    //return boolean to redirect lettter of intent after login
            return state.redirectLetterOfIntent
        },
        lotNumberSelectedGetter(state){    //return value of the lot details the client want to reserve
            return state.reservationTarget
        },
        //end guest


        //start - personnel
        subdivisionGetter(state){  //return local list
            return state.subdivision
        },
        subdivisionSearchResultsGetter(state){ //return suggestion search results
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