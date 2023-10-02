
import * as Auth from '@/APIs/BOTH/AuthAPI.js'

export default {
    namespaced: true,
    
    state(){
        return{
            role: null,
            tokenID: null,
        }
    },
    mutations:{
        addStoreState(state,responseData){
            state.role = responseData.roles
            state.tokenID = responseData.tokenID
        },
        eraseStoreState(state){
            state.role = null;
            state.tokenID = null
        },
        addLocalStorage(_,responseData){
            localStorage.setItem('user',responseData.roles)
            localStorage.setItem('token',responseData.tokenID)
        },
        getLocalStorage(state){
            state.role = localStorage.getItem('user')
            state.tokenID = localStorage.getItem('token')
        },
        eraseLocalStorage(){
            localStorage.removeItem('user')
            localStorage.removeItem('token')
        },

    },
    actions:{
        //LOGIN REQUEST
        async login(context, credentials){
            console.log('login clicked')
            try{
               const responseData = await Auth.login(credentials);

                const Data = {
                    
                    tokenID: responseData.data.token,
                    roles: responseData.data.roles,
                   
                }

                context.commit('addLocalStorage',Data)
                context.commit('addStoreState',Data)

                return responseData;

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
            // console.log(state.role)
            if(state.role && state.tokenID){
                return true
            }else{
                return false
            }
        },
        getTokenID(state){
            return state.tokenID
        },
        authorizationRoleGuest(state){
            if(state.role && state.tokenID){
                if(state.role === 'guest'){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }
        },
        authorizationRoleStaff(state){
            if(state.role && state.tokenID){
                if(state.role === 'staff'){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }
        },
        authorizationRoleAdmin(state){
            if(state.role && state.tokenID){
                if(state.role === 'admin'){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }
        },
        authorizationPersonnel(state){
            if(state.role && state.tokenID){
                if(state.role !== 'guest'){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }
        },
        authorizationPersonnelTEXT(state){
            if(state.role && state.tokenID){
                if(state.role === 'staff'){
                    return 'staff'
                }else if(state.role === 'admin'){
                    return 'admin'
                }
            }else{
                return 'SOMETHING UNKNONW'
            }
        },

        getRoleType(state){
            if(state.role && state.tokenID){
                return state.role
            }else{
                return undefined
            }
        }
    }

}