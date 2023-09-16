export default {
    namespaced: true,
    
    state(){
        return{
            organization: null,
            tokenId: null,
        }
    },
    mutations:{
        addStoreState(state,responseData){
            state.organization = responseData.user
            state.tokenID = responseData.tokenID
        },
        eraseStoreState(state){
            state.organization = null;
            state.tokenID = null
        },
        addLocalStorage(_,responseData){
            localStorage.setItem('user',responseData.user)
            localStorage.setItem('token',responseData.tokenID)
        },
        getLocalStorage(state){
            state.organization = localStorage.getItem('user')
            state.tokenID = localStorage.getItem('token')
        },
        eraseLocalStorage(){
            localStorage.removeItem('user')
            localStorage.removeItem('token')
        },

    },
    actions:{
        //LOGIN REQUEST
        async login(context){
            console.log('login clicked')

            try{
                //change this to HTTP REQUEST
                await new Promise(resolve=> (setTimeout(resolve,1000))) 

                //TOGGLE if we assume ERROR
                // throw Error('SOMETHING WENT WRONG')
    
                //TOGGLE we assume SUCCESS and the user is GUEST
                const responseData = {
                    user : 'guest',
                    tokenID: 'A2pqD123' }
                context.commit('addLocalStorage',responseData)
                context.commit('addStoreState',responseData)

            }catch(error){
                console.log(error)
                throw error
            }
  
        },

        //SIGNUP REQUEST
        async signup(context,payload){
            console.log('signup clicked')
            console.log(payload)
            try{
                //change this to HTTP REQUEST
                await new Promise(resolve=> (setTimeout(resolve,1000))) 

                //TOGGLE if we assume ERROR
                // throw Error('SOMETHING WENT WRONG')

                // //TOGGLE we assume SUCCESS and the user is GUEST
                const responseData = {
                    user : 'guest',
                    tokenID: 'A2pqD123' }
                context.commit('addLocalStorage',responseData)
                context.commit('addStoreState',responseData)

            }catch(error){
                console.log(error)
                throw error
            }
  
        }
    },
    getters: {
        authGetter(state){
            // console.log(state.organization)
            if(state.organization && state.tokenID){
                return true
            }else{
                return false
            }
        }
    }

}