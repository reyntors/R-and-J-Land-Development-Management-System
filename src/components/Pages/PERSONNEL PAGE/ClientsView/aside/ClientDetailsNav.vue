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

          <button :class="{flat:clientReservationFormVisible}" @click="goto('reservation-form')">Reservation Form</button>

        </div>
      
    </section>

    <section class="section-right">
           <client-profile v-if="clientProfileVisibleComputed" :profile-details="clientObj" :clientID="clientObj.userId"/>
          <client-payment v-if="clientPaymentVisibleComputed" :client-obj="clientObj" :clientID="clientObj.userId"/>
         <client-forms  v-if="clientFormsVisibleComputed" :client-obj="clientObj"/> 
         <client-reservation v-if="clientReservationFormVisible"></client-reservation>
    </section>
  </div>
</template>

<script>
import ClientPayment from '../article/PAYMENT/PaymentDetails.vue';
import ClientProfile from '../article/PROFILE/ProfileDetails.vue';
import ClientForms from '../article/FORMS/FormsDetails.vue'
import ClientReservation from '@/components/Forms Used/ReservationAgreement.vue'
export default {
  props: ['clientObj'],
  components: {
    ClientProfile,
    ClientForms,
    ClientPayment,
    ClientReservation,
  },
  data(){
    return{
      clientProfileVisible: true,
      clientPaymentVisible: false,
      clientFormsVisible: false,
      clientReservationFormVisible: false,
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
      }else{
        this.clientReservationFormVisible = true
      }
    },
    reset(){
      this.clientProfileVisible = false
      this.clientPaymentVisible = false
      this.clientFormsVisible = false
      this.clientReservationFormVisible = false
    },
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
  /* margin-top: 1rem; */
  height: 50%;
  display: flex;
  flex-direction: column;
}
.imageProfile img{
  width: 100%;
  height: 100%;
  max-height: 200px;
  max-width: 200px;
  object-fit: cover;
}


button:hover{
  background-color: #30a72a8e;
}
.flat{
  outline: none;
  border: none;
  background-color: #31A72A;
  color: white;
  box-shadow: none;
}
.details-nav{
  width: 100%;
  height: 80vh;
  padding: .5rem;
  display: flex;
  gap: 1rem;
}
.details-nav .section-left{
  width: 25%;
  /* box-shadow: 0 0 3px 1px black; */
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 2rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  /* backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px); */
}
.details-nav .section-left .navigationBtns{
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  align-items: center;
  /* border: 1px dashed black; */
  height: 50%;
  padding-top: 1rem;
}
.details-nav .section-left .navigationBtns button{
  width: 100%;
  border: none;
  box-shadow: 0 1px 1px .5px rgba(0, 0, 0, 0.2);
  padding: .3rem;
  border-radius: 5px;
} 

.saveBtn:active,
.delBtn:active{
  background-color: #31A72A; 
  color: white;
}



.details-nav .section-right{
  width: 75%;
  height: 100%;
  border: 1px solid black;
  /* box-shadow: 0 0 3px 1px black; */
  border-radius: 5px;
  padding: 1rem;
  /* background-color: white; */
  background-color: rgba(255, 255, 255, 0.8);
  overflow-y: auto;
}
</style>