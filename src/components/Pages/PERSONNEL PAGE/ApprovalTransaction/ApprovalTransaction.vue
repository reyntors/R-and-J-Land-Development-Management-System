<template>
    <div class="addedClient-container">
        <h4>New Transactions</h4>
        <table>
            <thead>
                <tr>
                    <!-- <th>Staff</th> -->
                    <th>Purpose</th>
                    <th>Amount</th>
                    <th>Date(yyyy-mm-dd)</th>
                    <td>Action</td>
                </tr>                
            </thead>        
            <tbody v-for="(item,index) in list" :key="index">
                <tr>
                    <!-- <td>Sample Staff</td> -->
                    <td>{{ item.purpose }}</td>
                    <td>{{ item.amount }}</td>
                    <td>{{ item.date }}</td>
                    <td class="option">
                        <span class="check-span" @click="approval(item.userId,item._id,'approved')">
                            Approve
                           <font-awesome-icon icon="fa-solid fa-check" class="icon check"/>
                        </span>
                        <span @click="approval(item.userId,item._id,'rejected')">
                            Reject
                            <font-awesome-icon icon="fa-solid fa-xmark" class="icon ex"/>
                        </span>
                    </td>
                </tr>    
            </tbody>
        </table>
        <div class="emptyList" v-if="isEmptyList">
            Empty List
        </div>
    </div>
    <blur-loading v-if="isLoading" type="torks" class="overRideLoading"></blur-loading>
  </template>
  
  <script>
  import { toast } from 'vue3-toastify'
  export default {
    data(){
        return{
            isLoading: false
        }
    },
    methods:{
        async approval(userId,transactionId,isApproved){
            let confirmed = null;
            if(isApproved === 'approved'){
              confirmed = confirm('are you sure to add this transaction?')
            }else{
              confirmed = confirm('are you sure to reject this transaction?')
            }
            if(confirmed){
              this.isLoading = true;
              try{
                const response = await this.$store.dispatch('newTransactions/approval',{
                  userId: userId,
                  transactionId:transactionId,
                  approval:isApproved});
                toast.success(response.message)
              }catch(error){
                toast.error(error)
              }
              this.isLoading = false;
            }
        },
        numberGenerate(index){
          return index + 1 + '. '
        }
    },
    computed:{
        list(){
            console.log(this.$store.getters['newTransactions/getList']);
            return this.$store.getters['newTransactions/getList']
        },
        isEmptyList(){
            return this.$store.getters['newTransactions/islistEmpty']
        }
    },
    async beforeMount(){
      await this.$store.dispatch('newTransactions/getTransactions');
    }
  }
  </script>
  
  <style scoped>
  .emptyList{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 5px;;
  }
   table tbody:nth-child(even){
    background-color: #30a72aa7;;

  }
  table tbody:nth-child(odd){
    background-color: rgba(255, 255, 255, 0.5);
  }
  th,td{
    text-align: center;
    padding: .5rem;
  }

  .option{
    /* border: 1px solid black; */
    text-align: center; 
  }
  .date{
    width: 20%;
    /* border: 1px solid black; */
    text-align: center;
  }
  .context{
    width: 50%;
    /* border: 1px solid black; */
  }
  table{
    /* border: 1px solid black; */
    width: 100%;
  }
  .addedClient-container{
      width: 80vh;
      flex-grow: 1;
      height: 90vh;
      overflow: auto;
      padding: 1rem;
      border-left: 2px solid rgba(0, 0, 0, 0.5);
      position: relative;
  }
  h4{
    margin: 0;
    padding: 0;
  }
  .div1{
      width:100%;
      height: 10%;
      /* background-color: bisque; */
      border-bottom: 1px solid black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
  }
  .div2{
      width:100%;
      height: 90%;
      /* background-color: bisque; */
      display: flex;
      justify-content: start; 
      align-items: start;
      /* padding: 1rem; */
      gap: 1rem;
      position: relative;
  }
  span{
    cursor: pointer;
    display: inline;
    gap: 5px;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    white-space: nowrap;
  }
  span:active{
    opacity: .5;
  }
  .check{
    color: blue;
  }
  .ex{
    color: red;
  }
  .check-span{
    margin-left: 1rem;
  }
  </style>