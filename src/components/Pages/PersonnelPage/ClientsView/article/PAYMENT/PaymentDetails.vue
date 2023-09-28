<template>
  <div class="container-payment">
    <header>
      <h3>Payment Details</h3>  
    </header>
    <div>
      <section>
        <h6>Account Detials</h6> 
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
        <table>
          <tr>
            <td>DATE</td>
            <td>AMOUNT RECEIVED</td>
            <td>PURPOSE</td>
            <td>ATTACHEMENTS</td>
          </tr>
          <tbody v-for="transaction in clientObj.transaction" :key="transaction">
            <tr>
              <td>{{ transaction.date }}</td>
              <td>{{ transaction.amountPaid }}</td>
              <td>{{ transaction.purpose }}</td>
              <td> attachements</td>
            </tr>
          </tbody>
          <!-- {{ paymentTransaction }} -->
        </table>
                
      </section>
    </div>

    <add-payment v-if="addPaymentForm" :id="clientObj.profile.id" @exit-btn="toggleAddPayment"/>

  </div>
</template>

<script>
import AddPayment from './AddPayment.vue'
export default {
    components: {AddPayment },
    props: ['clientObj'],
    data(){
      return{
          addPaymentForm: false,
      }
    },
    methods:{
      toggleAddPayment(){
        console.log(this.clientObj.profile.id)
        this.addPaymentForm = !this.addPaymentForm
      }
    },
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