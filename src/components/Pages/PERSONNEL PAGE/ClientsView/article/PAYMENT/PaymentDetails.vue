<template>
  
  <div class="container-payment" >
    <progress-loading v-if="isLoading" type="torks"></progress-loading>
    <div v-else>
      <header class="row justify-content-between main-head">
        <h3 class="col">Payment Details</h3>  
        <button class="col-auto" @click="reset" v-if="roleAdmin">Reset</button>
      </header>
      <div>
        <section>
          <h5>Account Details</h5> 
          <div v-if="!isDetailsPresent"> 
            <section><span>Lot Number:</span></section>
            <section><span>Block Number:</span></section>
            <section><span>Total Squared Meters:</span></section>
            <section class="mb-2"><span>Amount/Square:</span></section>
          </div>

          <ul>
            <div v-if="client.accountDetails.details1" class="accountDetailsElement">
              <!-- <font-awesome-icon class="icon-delete-account-details" icon="fa-solid fa-circle-xmark" size="lg" v-if="roleAdmin" @click="deleteADetails('details1')"/> -->
              <section>
                <span>Lot Number:</span>
                <span class="var">{{ client.accountDetails.details1.lotNumber_1 }}</span>
              </section>
              <section>
                <span>Block Number:</span>
                <span class="var">{{ client.accountDetails.details1.blockNumber_1 }}</span>
              </section>
              <section>
                <span>Total Squared Meters:</span>
                <span class="var">{{ client.accountDetails.details1.totalSqm_1 }}</span>
              </section>
              <section class="mb-2">
                <span>Amount/Square:</span>
                <span class="var">{{ client.accountDetails.details1.amountperSquare_1 }}</span>
              </section>
            </div> 

            <div v-if="client.accountDetails.details2" class="accountDetailsElement">
              <!-- <font-awesome-icon class="icon-delete-account-details" icon="fa-solid fa-circle-xmark" size="lg" v-if="roleAdmin" @click="deleteADetails('details2')"/> -->
              <section>
                <span>Lot Number:</span>
                <span class="var">{{ client.accountDetails.details2.lotNumber_2 }}</span>
              </section>
              <section>
                <span>Block Number:</span>
                <span class="var">{{ client.accountDetails.details2.blockNumber_2 }}</span>
              </section>
              <section>
                <span>Total Squared Meters:</span>
                <span class="var">{{ client.accountDetails.details2.totalSqm_2 }}</span>
              </section>
              <section class="mb-2">
                <span>Amount/Square:</span>
                <span class="var">{{ client.accountDetails.details2.amountperSquare_2 }}</span>
              </section>
            </div> 

            <div v-if="client.accountDetails.details3" class="accountDetailsElement">
              <!-- <font-awesome-icon class="icon-delete-account-details" icon="fa-solid fa-circle-xmark" size="lg" v-if="roleAdmin" @click="deleteADetails('details3')"/> -->
              <section>
                <span>Lot Number:</span>
                <span class="var">{{ client.accountDetails.details3.lotNumber_3 }}</span>
              </section>
              <section>
                <span>Block Number:</span>
                <span class="var">{{ client.accountDetails.details3.blockNumber_3 }}</span>
              </section>
              <section>
                <span>Total Squared Meters:</span>
                <span class="var">{{ client.accountDetails.details3.totalSqm_3 }}</span>
              </section>
              <section class="mb-2">
                <span>Amount/Square:</span>
                <span class="var">{{ client.accountDetails.details3.amountperSquare_3 }}</span>
              </section>
            </div> 
          </ul>
 
          <hr>
          <h5>Payment Details</h5>
          <section>
            <span>Reservaton Payment:</span>
            <span class="var">{{ details.paymentDetails.reservationPayment }}</span>
          </section> 
          <section>
            <span>Downpayment:</span>
            <span class="var">{{ details.paymentDetails.downPayment }}</span>
          </section> 
          <section>
            <span>Monthly Amortization Due:</span>
            <span class="var">{{ details.paymentDetails.monthlyAmortizationDue }}</span>
          </section> 

          <hr>

          <h5>Accounting Details</h5> 
          <section>
            <span>TOTAL AMOUNT DUE:</span>
            <span class="var">{{ details.accountingDetails.totalAmountDue }}</span>
          </section> 
          <section>
            <span>INTEREST AMOUNT:</span>
            <span class="var">{{ details.accountingDetails.totalInterest }}</span>
          </section> 
          <section>
            <span>Total Payment Made:</span>
            <span class="var">{{ details.accountingDetails.totalPayment }}</span>
          </section> 
          <section>
            <span>Total Amount Payable:</span>
            <span class="var">{{ details.accountingDetails.totalAmountPayable }}</span>
          </section> 
        </section>
 
        <hr>

        <header class="sub-head">
          <h5>TRANSACTIONS</h5> 
          <div> 
            <button @click="saveEdit" style="margin-right: .5rem;" v-if="editPaymentForm ">SAVE <font-awesome-icon icon="fa-solid fa-plus"/></button>
            <button @click="toggleAddPayment" style="padding: .5rem 1rem">ADD <font-awesome-icon icon="fa-solid fa-plus" /></button>
          </div>
        </header>

        <section class="transaction-cont">
          <table> 
            <tr>
              <th>DATE</th>
              <th>AMOUNT RECEIVED</th>
              <th>PURPOSE</th>
              <th>ATTACHMENTS</th>
              <th v-if="roleAdmin">EDIT</th>
              <th v-if="roleAdmin">DELETE</th>
            </tr> 
            
            <tr v-if="isTransactionEmpty">
              <td :colspan="columnSpanNum"><h6 class="noHistory">No history</h6></td>
            </tr>
            
            <tbody v-for="(transaction,index) in clientTransactionGetter" :key="index">
              {{ index }}
              <tr v-if="!isTransactionEmpty">
                <td>
                  <div class="firstElement"> 
                    <strong class="number">{{  elementNumber(index) }}</strong>
                    <input type="date" v-model="editObj.date" v-if="editPaymentForm && focusElement === index">
                    <p style="white-space: nowrap;" v-else>{{ transaction.date }}</p>                      
                  </div>
                </td>

                <td>
                  <input v-model="editObj.amount" v-if="editPaymentForm && focusElement === index">
                  <p style="white-space: nowrap;" v-else>{{ transaction.amount }}</p>
                </td>

                <td>
                  <select v-if="editPaymentForm && focusElement === index" v-model="editObj.purpose">
                    <!-- <option value="downpayment">downpayment</option> -->
                    <option value="reservation">reservation</option>
                    <option value="monthly-payment">monthly-payment</option>
                  </select>
                  <p v-else style="white-space: nowrap;">{{ transaction.purpose }}</p>
                </td>

                <td>
                  <input type="file" accept=".pdf" @input="setAttachment" v-if="editPaymentForm && focusElement === index">
                  <a v-else :href="transaction.attachments[0].url" :download="transaction.attachments[0].filename">{{ transaction.attachments[0].filename }}</a>
                </td>

                <td v-if="roleAdmin">
                  <font-awesome-icon class="icon" icon="fa-solid fa-file-pen" @click="toggleEditTransaction(transaction,index)" v-if="!editPaymentForm"/>
                  <button v-else class="cancelEditBtn" @click="cancelEditElement">Cancel<font-awesome-icon class="icon" icon="fa-solid fa-xmark"/></button>
                </td>
                
                <td v-if="roleAdmin"><font-awesome-icon class="icon" icon="fa-solid fa-minus" @click="deleteTransaction(transaction.transactionId)"/></td>
              </tr>     
            </tbody>
          </table>
                  
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
    components: {
      AddPayment,
    },
    props: ['clientID'],
    data(){
      return{
          addPaymentForm: false,
          editPaymentForm: false,
          isLoading: true,

          editObj: null,
          focusElement: null,
          newAttachment: null,
          transactionId: null,

          tempListAccountDetails: {
            totalAmountDue: 230000,
            details: [
              {
                lotNumber: 12,
                blockNumber: 1,
                totalSqm: 1000,
                amountperSquare: 200
              },
              {
                lotNumber: 10,
                blockNumber: 1,
                totalSqm: 200,
                amountperSquare: 100
              },
              {
                lotNumber: 12,
                blockNumber: 1,
                totalSqm: 100,
                amountperSquare: 100
              },
            ]
          }
      }
    },
    methods:{

      toggleAddPayment(){
        this.addPaymentForm = !this.addPaymentForm
      },

      async getListTransaction(){
        this.isLoading = true
        try{
          await this.$store.dispatch('client/getPaymentDetails',this.clientID)    //request for payment detiails
          await this.$store.dispatch('client/getListTransaction',this.clientID)   //request for transction list
        }catch(error){
          toast.error(error,{autoClose:500})
        }
        this.isLoading = false
      },

      async uploadTransaction(object){
        this.isLoading = true
        try{
            await this.$store.dispatch('client/addPayment',{
                userId: this.clientID,
                object: object,
                })
            this.getListTransaction(this.clientID)
        }catch(error){
            toast.error(error,{autoClose: false})
            this.isLoading = false
        }   
        
      },

      toggleEditTransaction(obj,index){
        this.editPaymentForm = true
          this.focusElement = index;
          this.editObj = {...obj}
          this.transactionId = obj.transactionId
      },

      cancelEditElement(){
        this.editPaymentForm = false
        this.focusElement = null
      },

      setAttachment(event){
        this.newAttachment = event.target.files[0]
      },

      async saveEdit(){
        console.log('saving edit')
        const object = {         
          date: this.editObj.date,
          amount: this.editObj.amount,
          purpose: this.editObj.purpose,
          file:this.newAttachment
        }
        try{
          this.isLoading = true
          const response = await this.$store.dispatch('client/updatePayment',{
              userId: this.clientID,
              transactionId: this.transactionId,
              object: object,
              })
          console.log(response)
          toast.success(response)
          this.cancelEditElement()
          this.getListTransaction(this.clientID)
        }catch(error){
            toast.error(error)
            toast.error(error,{autoClose: false})
        }   
      },

      async deleteTransaction(transactionId){
        const confirmed = confirm("are you sure to delete this transaction?")
        if(confirmed){
          try{
            const response = await this.$store.dispatch('client/deleteTransactionPayment',{
            userId: this.clientID,
            transactionId: transactionId
            })       
            toast.success(response)   
          }catch(error){
            toast.error(error)
          }          
        }

      },  
      elementNumber(index){
        return index + 1 + '.'
      },
      async reset(){
        const confirmed = confirm('Are you sure to reset Payment details in this page?')
        if(confirmed){
          const response = await this.$store.dispatch('client/resetPaymentDetails',this.clientID)
          toast.success(response.message)
        }else{
          toast.warn('You cancelled reseting the details')
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
      client(){   //get the client list lot purchased
          const listClients =  this.$store.getters['client/clientsGetter']
          const index = listClients.findIndex(item => item.userId === this.clientID)
          return listClients[index]
      },

      //get the payment details
      details(){
        console.log(this.$store.getters['client/paymentDetailsGetter'])
        return this.$store.getters['client/paymentDetailsGetter']
      },

      roleAdmin(){
        return this.$store.getters['auth/authorizationRoleAdmin']
      },
      columnSpanNum(){
          const isAdmin = this.$store.getters['auth/authorizationRoleAdmin']
          if(isAdmin){
            return 6
          }else{
            return 4
          }
      },

      // check if there is details exists
      isDetailsPresent(){
        if(this.client.accountDetails.details1 || this.client.accountDetails.details2 || this.client.accountDetails.details3 ){
            return true
        }else{
            return false
        }
      }
    },
    async created(){
      await this.getListTransaction()
    },
}
</script>

<style scoped>
.icon-delete-account-details:hover{
  color: black;
}
.icon-delete-account-details{
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.accountDetailsElement{
  box-shadow: -1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  width: 50%;
  min-width: 300px;
  max-width: 450px;
  padding-left: .5rem;
  border-radius: 3px;
  position: relative;
}
.cancelEditBtn{
  border: none;
  background-color: transparent;
  outline: none;
  padding: 5px 10px;
  margin: 0;
  display: flex;
  align-items:center;
  gap: 3px;
}
.cancelEditBtn:hover{
  background-color: rgba(0, 0, 0, 0.1)
}
.optionBtns button{
  border-radius: 3px;
  border: 1px solid black;
  padding: 2px;
}
.optionBtns{
  display: flex;
  gap: 5px;
}
th{
  padding: .5rem;
  /* white-space: nowrap; */
  border: 1px solid black;
}
tbody{
  table-layout: fixed;
}
input,select{
  /* width: 100%; */
  outline: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
}
input:focus, select:focus{
  outline: 1px solid black;
}
.icon{
  cursor: pointer;
  color: blue;
  /* opacity: .5rem; */
}
.icon:hover{
  scale: 1.1;
  opacity: 1;
  transition: scale 0.2ms ease-in;
  transition: opacity 0.2ms ease-in;
}
.icon:active{
  color: black;
  opacity: 0.2;
}
a{
  color: black;
}
.noHistory{
  display: flex; 
  align-items: center; 
  padding: 1rem; 
  justify-content: center;
}
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
  overflow: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
}
header{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
header.main-head button{
  padding: 0 .5rem;
  background-color: red;
  color: white;
  border: none;
  border-radius: 3px;
  transition: 0.3s ease-in-out;
}
header.main-head button:hover{
  background-color: orange;
  /* color: black; */
}
header.main-head button:active{
  opacity: 0.5;
}
header.sub-head button{
  padding: 0 .5rem;
  background-color: #31A72A;
  color: white;
  border: none;
  border-radius: 3px;
}
header.sub-head button:hover{
  background-color: #30a72a8e;
  color: black;
}
header.sub-head button:active{
  opacity: 0.5;
}
.transaction-cont table{
  margin-top: .2rem;
  width: 100%;
  text-align: center;
  /* overflow: auto;*/
  /* border: 2px dashed black;  */
}
.transaction-cont table > tr:nth-child(1){
  border: 1px solid black;
}
td{
  /* border: 1px solid black; */
  box-sizing: cover;
  padding: .5rem;
}
.transaction-cont table > tbody:nth-child(even){
  background-color: rgba(0, 0, 0, 0.1)
}
.firstElement{
  display: flex;
  gap: .5rem;
  text-align: start;
}
span{
  text-transform: uppercase;
}
</style>