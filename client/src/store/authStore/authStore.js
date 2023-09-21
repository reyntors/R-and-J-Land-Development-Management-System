import AuthenticationService from '@/services/AuthenticationService';
import { register } from '@/services/Api';


export default {
    namespaced: true,
    
    state(){
        return{
            roles: null,
            tokenId: null,
        }
    },
    mutations:{
        addStoreState(state,responseData){
            state.roles = responseData.roles
            console.log(state.roles);
            state.tokenID = responseData.tokenID
        },
        eraseStoreState(state){
            state.roles = null;
            state.tokenID = null
        },
        addLocalStorage(_,responseData){
            localStorage.setItem('user',responseData.roles)
            localStorage.setItem('token',responseData.tokenID)
        },
        getLocalStorage(state){
            state.roles = localStorage.getItem('user')
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
           

           try {
            
           
                
                const responseData = await AuthenticationService.login(credentials);

                
                  // Assuming responseData contains user data and a token,
                  // store this data in Vuex or local storage and commit it to the Vuex store
                const Data = {
                    // user: responseData.data.fullname,
                    tokenID: responseData.data.token,
                    roles: responseData.data.roles,
                    // status: responseData.data,
                    // message: responseData.message,
                }
                console.log(Data);
                

                context.commit('addLocalStorage', Data);
                context.commit('addStoreState', Data);
            
                
                return responseData; 
                
            }catch (error) {
                // console.log("This is ERROR:",error.message)
                console.error(error);
                throw error
                // if (error.responseData && error.responseData.data && error.responseData.data.message) {
                    
                //    throw  (error.responseData.data.message);
                   
                //     //     toast.error(error.response.data.message,{ autoClose: 1000 });
                // }
            }
        },

        //SIGNUP REQUEST
        async signup(context, credentials){
            
            try{

                const responseData = await register(credentials);
                
                const Data = {
                    contactNumber: responseData.data.fullname,
                    email: responseData.data.email,
                    fbAccount: responseData.data.fbAccount,
                    fullname: responseData.data.fullname,
                    homeAddress: responseData.data.homeAddress,
                    password: responseData.data.password,
                    username: responseData.data.username,
                }
                
                context.commit('addLocalStorage',Data)
                context.commit('addStoreState',Data)

                return responseData;

            }catch(error){
                console.log(error)
                throw error
            }
  
        }
    },
    getters: {
        authGetter(state){
          
            if(state.roles && state.tokenID){
                
                return true
            }else{
                return false
            }
        },
        authorizationRoleGuest(state){
            if(state.roles && state.tokenID){
    
                if(state.roles === 'guest'){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }
        },
        authorizationRoleStaff(state){
            if(state.roles && state.tokenID){
                if(state.roles === 'staff'){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }
        },
        getRoleType(state){
            if(state.roles && state.tokenID){
                return state.roles
            }else{
                return undefined
            }
         }

    }
}