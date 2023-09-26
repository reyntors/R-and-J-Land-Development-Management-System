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
              
                console.error(error);
                throw error
               
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
  
        },

        async createLetterOfIntent(context, letterOfIntentData) {
            try {
              
                const response = await AuthenticationService.createLetterOfIntent(letterOfIntentData);
                
                const Data = {
                    date: this.date,
                    
                }
                
                context.commit('addLocalStorage',Data)
                context.commit('addStoreState',Data)
               
                
               
                return response.data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async createIndividualBuyerDeclaration(context, individualBuyerDeclarationtData) {
            try {
              
                const response = await AuthenticationService.createIndividualBuyerDeclaration(individualBuyerDeclarationtData);
                
                const Data = {
                    date: this.date,
                    
                }
                
                context.commit('addLocalStorage',Data)
                context.commit('addStoreState',Data)
               
                
               
                return response.data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async createBirTinRequest(context,birTinRequestData) {
            try {
              
                const response = await AuthenticationService.createBirTinRequest(birTinRequestData);
                
                const Data = {
                    date: this.date,
                    
                }
                
                context.commit('addLocalStorage',Data)
                context.commit('addStoreState',Data)
               
                
               
                return response.data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async createContractDetails(context,contractDetailsData) {
            try {
              
                const response = await AuthenticationService.createContractDetails(contractDetailsData);
                
                const Data = {
                    date: this.date,
                    
                }
                
                context.commit('addLocalStorage',Data)
                context.commit('addStoreState',Data)
               
                
               
                return response.data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
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
        authorizationRoleAdmin(state){
            if(state.roles && state.tokenID){
                if(state.roles === 'admin'){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }
        },
        authorizationPersonnel(state){
            console.log("I am authStore:",state.roles);
            if(state.roles && state.tokenID){
                if(state.roles !== 'guest'){
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