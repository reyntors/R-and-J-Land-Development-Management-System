<template>
  
  <div class="container-payment" >
    <progress-loading v-if="isLoading" type="spin"></progress-loading>
    <div v-else>
      <header>
        <h3>Payment Details</h3>  
      </header>
      <div>
        <section>
          <h6>Account Details</h6> 
            <section>
              <span>Block and Lot No.:</span>
              <span class="var">{{ client.accountDetails.lotNumber }}</span>
            </section>
            <section>
              <span>Total Sq. Mtrs:</span>
              <span class="var">{{ client.accountDetails.totalSqm }}</span>
            </section>
            <section>
              <span>Amount per Square:</span>
              <span class="var">{{ client.accountDetails.amountperSquare }}</span>
            </section>  
            <section>
              <span>TOTAL AMOUNT DUE:</span>
              <span class="var">{{ client.accountDetails.totalAmountDue }}</span>
            </section>  

      <br>
          <h6>Payment Details</h6>
            <section>
              <span>Reservaton Payment:</span>
              <span class="var">{{ client.paymentDetails.reservationPayment }}</span>
            </section> 
            <section>
              <span>Dowpayment:</span>
              <span class="var">{{ client.paymentDetails.downPayment }}</span>
            </section> 
            <section>
              <span>Monthly Amortization Due:</span>
              <span class="var">{{ client.paymentDetails.monthlyAmortizationDue }}</span>
            </section> 
      <br>
          <h6>Accounting Details</h6> 
            <section>
              <span>TOTAL AMOUNT DUE:</span>
              <span class="var">{{ client.accountingDetails.totalAmountDue }}</span>
            </section> 
            <section>
              <span>Total Payment Made:</span>
              <span class="var">{{ client.accountingDetails.totalPayment }}</span>
            </section> 
            <section>
              <span>Total Amount Payable:</span>
              <span class="var">{{ client.accountingDetails.totalAmountPayable }}</span>
            </section> 
        </section>
      <br>
      <hr>
        <section class="transaction-cont">
          <header>
            <h5>TRANSACTIONS</h5> 
            <button @click="toggleAddPayment">ADD TRANSACTION</button>
          </header>
          <table>
            <tr>
              <td>DATE</td>
              <td>AMOUNT RECEIVED</td>
              <td>PURPOSE</td>
              <td>ATTACHMENTS</td>
            </tr>
              <tr v-if="isTransactionEmpty">
                <td colspan="4"><h6 >No history</h6></td>
                
              </tr>
              <tbody v-for="(transaction,index) in clientTransactionGetter" :key="index">
                <tr v-if="!isTransactionEmpty">
                  <td>{{ transaction.date }}</td>
                  <td>{{ transaction.amount }}</td>
                  <td>{{ transaction.purpose }}</td>
                  <td><a :href="transaction.attachments[0].url" :download="transaction.attachments[0].filename">{{ transaction.attachments[0].filename }}</a></td>
                  <!-- <td>{{ transaction.attachments[0].filename }}</td> -->
                </tr>
              </tbody>            
            <!-- {{ paymentTransaction }} -->
          </table>
          <!-- <h2 v-if="isLoading">Loading...</h2> -->
                  
        </section>
      </div>

      <add-payment v-if="addPaymentForm" :id="clientID" @exit-btn="toggleAddPayment" @refresh="getListTransaction" @upload-transaction="uploadTransaction"/>      
    </div>

  </div>
</template>

<script>
import { toast } from 'vue3-toastify'
import AddPayment from './AddPayment.vue'
export default {
    components: {AddPayment,},
    props: ['clientID'],
    data(){
      return{
          addPaymentForm: false,
          isLoading: true,
      }
    },
    methods:{

      toggleAddPayment(){
        this.addPaymentForm = !this.addPaymentForm
      },

      async getListTransaction(id){
        this.isLoading = true
        try{
          await this.$store.dispatch('client/getListTransaction',id)
        }catch(error){
          toast.error(error,{autoClose:500})
        }
        this.isLoading = false
      },

      async uploadTransaction(payload){
        this.isLoading = true
        try{
            await this.$store.dispatch('client/addPayment',{
                id:payload.id,
                obj: payload.obj,
                amountPaid: payload.amountPaid})
            // console.log(payload)
            this.getListTransaction(this.clientID)
        }catch(error){
          console.error(error)
        }   
        
      }
    },


    computed: {
      clientTransactionGetter(){
        return this.$store.getters['client/clientTransactionGetter']          
      },
      isTransactionEmpty(){
        const list = this.$store.getters['client/clientTransactionGetter']    
        if(list.length > 0){
          return false
        }else{
          return true
        }
      },
      client(){
          const listClients =  this.$store.getters['client/clientsGetter']
          const index = listClients.findIndex(item => item.userId === this.clientID)
          return listClients[index]
      }
    },
    mounted(){
      this.getListTransaction(this.clientID)
    }
}
</script>

<style scoped>
.var{
  margin-left: .5rem;
  font-weight: 700;
}
.container-payment{
  padding: .5rem;
  position: relative;
  min-height: 100%;
}
.transaction-cont{
  position: relative;
}
.transaction-cont header{
  display: flex;
  justify-content: space-between;
}
.transaction-cont button{
  padding: 0 .5rem;
  background-color: #30a72a8e;
}
.transaction-cont table{
  margin-top: .2rem;
  width: 100%;
  text-align: center;
}
.transaction-cont table > tr:nth-child(1){
  border: 1px solid black;
}
td{
  border: 1px solid black;
  padding: 0 .5em;
}
.transaction-cont table > tbody:nth-child(even){
  background-color: rgba(0, 0, 0, 0.1)
}
</style>