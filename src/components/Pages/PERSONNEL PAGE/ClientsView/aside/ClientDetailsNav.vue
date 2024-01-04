<template>
  <div class="details-nav">
    <!-- {{ client }} -->
    <section class="section-left">
        <div class="imageProfile">
          <img :src="clientObj.profilePicture.url" class="img-thumbnail">
          <h5>{{clientObj.fullname}}</h5>
        </div>
        
        <div class="navigationBtns">
          <button :class="{flat:clientProfileVisibleComputed}" @click="goto('profile')">Buyer's Profile</button> 
          
          <button :class="{flat:clientPaymentVisibleComputed}" @click="goto('payment')">Payment Details</button>

          <button :class="{flat:clientFormsVisibleComputed}" @click="goto('forms')">Forms</button>

          <button :class="{flat:clientReservationFormVisible}" @click="goto('reservation-form')">Reservation</button>

          <button :class="{flat:clientPaymentSchemeVisible}" @click="goto('payment-scheme')">Payment Scheme</button>

          <button @click="createCTS"> Download CTS</button>

        </div>
      
    </section>

    <section class="section-right">
           <client-profile v-if="clientProfileVisibleComputed" :profile-details="clientObj" :clientID="clientObj.userId"/>
          <client-payment v-if="clientPaymentVisibleComputed" :client-obj="clientObj" :clientID="clientObj.userId"/>
         <client-forms  v-if="clientFormsVisibleComputed" :client-obj="clientObj"/> 
         <client-reservation v-if="clientReservationFormVisible" :clientID="clientObj.userId"></client-reservation>
         <client-payment-scheme v-if="clientPaymentSchemeVisible" :clientID="clientObj.userId"></client-payment-scheme>
    </section>

    <blur-loading v-if="isLoading"/>
  </div>
</template>

<script>
import ClientPayment from '../article/PAYMENT/PaymentDetails.vue';
import ClientProfile from '../article/PROFILE/ProfileDetails.vue';
import ClientForms from '../article/FORMS/FormsDetails.vue'
import ClientReservation from '../article/RESERVATION/ReservationAgreement.vue'
import ClientPaymentScheme from '../article/PAYMENT SCHEME/PaymentScheme.vue'
import { toast } from 'vue3-toastify';
export default {
  props: ['clientObj'],
  components: {
    ClientProfile,
    ClientForms,
    ClientPayment,
    ClientReservation,
    ClientPaymentScheme
  },
  data(){
    return{
      isLoading: false,
      clientProfileVisible: true,
      clientPaymentVisible: false,
      clientFormsVisible: false,
      clientReservationFormVisible: false,
      clientPaymentSchemeVisible: false,
    }
  },

  methods:{
    print(){
      // console.log(this.clientObj,this.clientObj.userId)
    },
    goto(params){
      this.reset();
      if(params === 'profile'){
        this.clientProfileVisible = true
      }else if(params === 'payment'){
        this.clientPaymentVisible = true
      }else if(params === 'forms'){
        this.clientFormsVisible = true
      }else if(params === 'reservation-form'){
        this.clientReservationFormVisible = true
      }else if(params === 'payment-scheme'){
        this.clientPaymentSchemeVisible = true
      }
    },
    reset(){
      this.clientProfileVisible = false
      this.clientPaymentVisible = false
      this.clientFormsVisible = false
      this.clientReservationFormVisible = false
      this.clientPaymentSchemeVisible = false
    },
    async createCTS(){
        const isConfirmed = confirm("Download CTS now?")
        if(isConfirmed){
          this.isLoading = true
          try{
            const response = await this.$store.dispatch('client/triggerCTS',this.clientObj.userId)
            window.open(response.pdfPath)
          }catch(error){
            toast.error(error)
          }
          this.isLoading = false          
        }

    }
  },

  
  computed: {
    clientProfileVisibleComputed(){
      return this.clientProfileVisible
    },
    clientPaymentVisibleComputed(){
      return this.clientPaymentVisible
    },
    clientFormsVisibleComputed(){
      return this.clientFormsVisible
    },
    authorizationRoleAdmin(){
      return this.$store.getters['auth/authorizationRoleAdmin']
    }
  },

  created(){
    this.print();
  }
}
</script>

<style scoped>
.imageProfile{
  margin-top: 1rem;
  /* border: 1px solid black; */
}
.imageProfile img{
  width: 95%;
  max-height: 15rem;
  object-fit: contain;
  margin-bottom: .5rem;
}


button{
  width: 100%;
  border: none;
  padding: .5rem 1rem;
  text-decoration: none;
  text-transform: capitalize;
  color: black;
  border-radius: .5rem;
  box-shadow: 0 0 .2rem .1rem rgba(0, 0, 0, 0.2);
  position: relative;
  white-space: nowrap;
  background-color: #F0A500;
  cursor: pointer;
  z-index: 1;
  transition: all .5s ease-in-out;
  text-transform: capitalize;
  margin: .5rem;
  }
button::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  border-radius: .5rem;
  transition: all .5s ease-in-out;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
  transform: scale(.9);
  font-weight: 600;
}
button::after{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  border-radius: .5rem;
  background-color: #F0A500;
  z-index: -1;
  transition: all .3s ease-in-out;
}
button:hover::after,
button:hover{
  background-color:  #CF7500;
  color: white;
}
button:hover::before{
  transform: scale(1.4);
  opacity: 0;
}

button:active::after,
button:active{
  transform: scale(.95);
  box-shadow: none;
}
.flat{
  outline: none;
  border: none;
  /* background-color: rgba(0, 0, 0, 0.5); */
  color: white;
  box-shadow: none;
}
.flat::after{
  background-color: rgba(0, 0, 0, 1);
}
.details-nav{
  width: 100%;
  height: 80vh;
  overflow: auto;
  padding: .5rem;
  display: flex;
  gap: 1rem;
  position: relative;
}
.details-nav .section-left{
  width: 25%;
  overflow-y: auto;
  /* box-shadow: 0 0 3px 1px black; */
  border-radius: 5px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 2rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  overflow-x: hidden;
  /* backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px); */
}
.details-nav .section-left .navigationBtns{
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  align-items: center;
  /* border: 1px dashed black; */
  /* height: 50%; */
  padding-top: 1rem;
}

.saveBtn:active,
.delBtn:active{
  background-color: #31A72A; 
  color: white;
}



.details-nav .section-right{
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 1rem;
  background-color: white;
  background-color: rgba(255, 255, 255, 0.8);
  overflow-y: auto;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>