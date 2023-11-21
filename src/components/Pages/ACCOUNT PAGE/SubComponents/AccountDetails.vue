<template>
   <div class="account-details-cont">
      <section>
         <h4>My Account</h4>
      </section>
      <article>
         <p class="fs-5">Account Details</p>
         <section class="form-section">
            <label>Block and Lot No.</label>
            <input v-model="myDetails.accountDetails.lotNumber">
         </section>
         <section class="form-section">
            <label>Total Squared Meters</label>
            <input v-model="myDetails.accountDetails.totalSqm">
         </section>
         <section class="form-section">
            <label>Amount per Square</label>
            <input v-model="myDetails.accountDetails.amountperSquare">
         </section>
         <section class="form-section">
            <label>Total Amount Due</label>
            <input v-model="myDetails.accountDetails.totalAmountDue">
         </section>
      </article>
      <hr>
      <article>
         <p class="fs-5">Payment Details</p>
         <section class="form-section">
            <label>Reservation Payment</label>
            <input v-model="myDetails.paymentDetails.reservationPayment">
         </section>
         <section class="form-section">
            <label>Downpayment</label>
            <input v-model="myDetails.paymentDetails.downPayment">
         </section>
         <section class="form-section">
            <label>Monthly Amortization Due</label>
            <input v-model="myDetails.paymentDetails.monthlyAmortizationDue">
         </section>
      </article>
      <hr>
      <article>
         <p class="fs-5">Accounting Details</p>
         <section class="form-section">
            <label>Total Amount Due</label>
            <input v-model="myDetails.accountingDetails.totalAmountDue">
         </section>
         <section class="form-section">
            <label>Total Payment Made</label>
            <input v-model="myDetails.accountingDetails.totalPayment">
         </section>
         <section class="form-section">
            <label>Total Amount Payable</label>
            <input v-model="myDetails.accountingDetails.totalAmountPayable">
         </section>
      </article>

      <br>
      <section style="border-top: 1px solid black; padding-left: 1rem;">
         <p class="fs-5">Transactions History</p>
      </section>
      <article>
         <table>
            
            <tr>
               <td>Date</td>
               <td>Amount Paid</td>
               <td>Purpose</td>
               <td>Attachments</td>
            </tr>
          
            <tbody v-for="(item,index) in myDetails.transactions" :key="index">
               <tr>
                  <td>{{ item.date }}</td>
                  <td>{{ item.amount }}</td>
                  <td>{{ item.purpose }}</td>
                  <td>
                     <li v-for="(file,index) in item.attachments" :key="index">
                        <a :href="file.url" :download="file.filename">{{ file.filename }}</a>
                     </li>
                     
                  </td>
               </tr>
            </tbody>
         </table>

      </article>

   </div>
</template>

<script>
export default {
   props: ['account'],
   created(){  
      // console.log(this.account)
      this.myDetails = {...this.account}
   },

}
</script>

<style scoped>
td{
   text-align: center;
}
table{
   width: 100%;
   /* border: 1px solid black; */
}
.form-section{
  padding: .5rem 1rem;
  display: flex;
  align-items: center;
  gap: .5rem;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 1rem;
}
input{
  border-radius: 5px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  /* border: none; */
  padding: 5px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.4);
}
.form-section label{
  min-width: 210px;
}
article{
   padding: 0 1rem;
}
.account-details-cont{
   /* border:1px solid black; */
   width: 90%;
   margin: auto;
   margin-top: 2rem;
   margin-bottom: 2rem;
   padding: 1rem;
   background-color: rgba(255, 255, 255, 0.7);
    border: 1px solid white;
    border-radius: 5px; 
}
p{
   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.399);
   text-transform: uppercase;
}
</style>