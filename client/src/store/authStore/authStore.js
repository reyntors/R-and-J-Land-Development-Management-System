import AuthenticationService from '@/services/AuthenticationService';
import { register } from '@/services/Api';


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
        async login(context, credentials){
           

            try{
                
                const responseData = await AuthenticationService.login(credentials);

                
                  // Assuming responseData contains user data and a token,
                  // store this data in Vuex or local storage and commit it to the Vuex store
                const Data = {
                    user: responseData.data.fullname,
                    tokenID: responseData.data.token,
                    status: responseData.data,
                    message: responseData.message,
                }
                console.log(Data);

               


                context.commit('addLocalSttorage', Data);
                context.commit('addStoreState', Data);
                

                return responseData; 
                
            }catch(error){
                
                console.log(error)

                throw new Error ("Incorrect username/password")
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
            // console.log(state.organization)
            if(state.organization && state.tokenID){
                return true
            }else{
                return false
            }
        }
    }

}