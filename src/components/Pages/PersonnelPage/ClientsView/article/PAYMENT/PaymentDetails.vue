<template>
  <div class="container-payment">
    <header>
      <h3>Payment Details</h3>  
    </header>
    <div>
      <section>
        <h6>Account Details</h6> 
          <p>Block and Lot No.:</p>  
          <p>Total Sq. Mtrs:</p>  
          <p>Amount per Sq.:</p>   
          <p>TOTAL AMOUNT DUE:</p> 
    <br>
        <h6>Payment Details</h6> 
          <p>Reservaton Payment</p>  
          <p>Dowpayment</p>  
          <p>Monthly Amortization Due</p> 
    <br>
        <h6>Accounting Details</h6> 
          <p style="font-weight: 600;">TOTAL AMOUNT DUE:</p>  
          <p>Total Payment Made</p>  
          <p>Total Amount Payable</p> 
      </section>
    <br>
    <hr>
      <section class="transaction-cont">
        <header>
          <h5>TRANSACTIONS</h5> 
          <button @click="toggleAddPayment">ADD TRANSACTION</button>
        </header>
        <table v-if="!isLoading">
          <tr>
            <td>DATE</td>
            <td>AMOUNT RECEIVED</td>
            <td>PURPOSE</td>
            <td>ATTACHMENTS</td>
          </tr>
            <tbody v-for="(transaction,index) in clientTransactionGetter" :key="index">
              <tr>
                <td>{{ transaction.date }}</td>
                <td>{{ transaction.amount }}</td>
                <td>{{ transaction.purpose }}</td>
                <td><a :href="transaction.url" :download="transaction.download">{{ transaction.attachments[0].filename }}</a></td>
                <!-- <td>{{ transaction.attachments[0].filename }}</td> -->
              </tr>
            </tbody>            
          <!-- {{ paymentTransaction }} -->
        </table>
        <h2 v-if="isLoading">Loading...</h2>
                
      </section>
    </div>

    <add-payment v-if="addPaymentForm" :id="clientObj.userId" @exit-btn="toggleAddPayment" @refresh="getListTransaction"/>

  </div>
</template>

<script>
import { toast } from 'vue3-toastify'
import AddPayment from './AddPayment.vue'
export default {
    components: {AddPayment },
    props: ['clientObj'],
    data(){
      return{
          addPaymentForm: false,
          isLoading: false,
      }
    },
    methods:{

      toggleAddPayment(){
        this.addPaymentForm = !this.addPaymentForm
      },

      async getListTransaction(id){
        this.isLoading = true
        try{
          const response = await this.$store.dispatch('client/getListTransaction',id)
          toast.success(response.message, {autoClose:500})
        }catch(error){
          toast.error(error,{autoClose:500})
        }
        this.isLoading = false
      },

    },


    computed: {
      clientTransactionGetter(){
        const transactionList =  this.$store.getters['client/clientTransactionGetter']
        //  this.createUrl(transactionList.attachments[0])
         return transactionList
      },
    },


    mounted(){
      console.log(this.clientObj.userId)
      this.getListTransaction(this.clientObj.userId)
    }
}
</script>

<style scoped>
.container-payment{
  padding: .5rem;
  position: relative;
}
.transaction-cont header{
  display: flex;
  justify-content: space-between;
}
.transaction-cont table{
  margin-top: .2rem;
  width: 100%;
  text-align: center;
}
.transaction-cont table > tr:nth-child(1){
  border: 1px solid black;
}
.transaction-cont table > tbody:nth-child(even){
  background-color: rgba(0, 0, 0, 0.1)
}
</style>