import * as API from '@/APIs/PERSONNEL/ADMIN/NewTransactionsAPI.js'
import store from '@/store/store.js'
export default{
    namespaced: true,

    state(){
        return {
            transactionsList : []
        };
    },
    mutations: {
        setList(state,data){
            state.transactionsList = data;
        },
        remove(state,transactionId){
            let index = state.transactionsList.findIndex(item => item._id == transactionId);
            if(index>=0){
                state.transactionsList.splice(index,1);
            }else{
                console.error('not found target transaction approval')
            }
        }
    },
    actions:{
        async getTransactions(context){
            store.dispatch('auth/monitorTokenSpan');
            try{
                const response = await API.getNewTransactions();
                console.log(response.data[0].request);
                context.commit('setList',response.data[0].request);
            }catch(error){
                console.error(error);
            }
        },
        async approval(context,payload){          
            try{
                const response = await API.approvalTransaction(payload);
                context.commit('remove',payload.transactionId);
                return response;
            }catch(error){
                console.error(error);
            }
        }
    },
    getters:{
        getList(state){
            console.log(state.transactionsList);
            return state.transactionsList;
        },
        islistEmpty(state){
            if(state.transactionsList.length>0){
                return false;
            }else{
                return true;
            }
        }
    }

}