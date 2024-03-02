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
            console.log('mutations in new transactions',transactionId)
            let index = state.transactionsList.findIndex(item => item.request[0].transactionId == transactionId);
            if(index>=0){
                state.transactionsList.splice(index,1);
            }
        }
    },
    actions:{
        async getTransactions(context){
            store.dispatch('auth/monitorTokenSpan');
            try{
                const response = await API.getNewTransactions();
                context.commit('setList',response.data);
            }catch(error){
                console.error(error);
            }
        },
        async approval(context,payload){          
            try{
                await API.approvalTransaction(payload);
                context.commit('remove',payload.id);
                return payload.approval;
            }catch(error){
                console.error(error);
            }
        }
    },
    getters:{
        getList(state){
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