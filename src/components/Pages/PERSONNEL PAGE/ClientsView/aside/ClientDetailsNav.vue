<template>
  <div class="c-container">
    <!-- {{ client }} -->
    <section class="section-left">
        <div>
          <img src="@/assets/profile.png">
          <h6>{{clientObj.fullname}}</h6>
        </div>
        
        <div>
          <button :class="{flat:clientProfileVisibleComputed}" @click="goto('profile')">Buyer's Profile</button> 
          
          <button :class="{flat:clientPaymentVisibleComputed}" @click="goto('payment')">Payment Details</button>

          <button :class="{flat:clientFormsVisibleComputed}" @click="goto('forms')">Forms</button>

          <button :class="{flat:clientReservationFormVisible}" @click="goto('reservation-form')">Reservation Form</button>

        </div>

        <div>
          <!-- <button class="saveBtn" @click="saveNow">Save</button> -->
          <button class="delBtn" @click="deleteNow(clientObj.userId)" v-if="authorizationRoleAdmin">Delete</button>
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
import { toast } from 'vue3-toastify';
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

    //delete
    async deleteNow(id){
      const confirmed = confirm('Are you sure to remove this client?')
      if(confirmed){
        try{
          await this.$store.dispatch('client/removeClient',id)
          toast.success('removed succesfully')
        }catch(error){
          toast.error(error)
        }
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
button{
  font-size: clamp(.6rem, 1vw, 1.5rem);
}
.flat{
  outline: none;
  border: none;
  background-color: #31A72A;
  color: white;
  box-shadow: none;
}
.c-container{
  width: 100%;
  /* height: 75vh; */
  padding: .5rem;
  display: flex;
  gap: 1rem;
}
.c-container .section-left{
  width: 25%;
  box-shadow: 0 0 3px 1px black;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 2rem;
  text-align: center;
  background-color: white;
}
.c-container .section-left div{
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  align-items: center;
}
.c-container .section-left div button{
  width: 100%;
  border: none;
  /* outline: 1px solid black; */
  box-shadow: 0 0 1px .5px black;
  padding: .3rem;
}
img{
  width: 100%;
  border-radius: 100%;
  border: 1px solid black;
  margin-top: 1rem;
}
.saveBtn:active,
.delBtn:active{
  background-color: #31A72A; 
  color: white;
}



.c-container .section-right{
  width: 75%;
  height: 100%;
  border: 1px solid black;
  box-shadow: 0 0 3px 1px black;
  padding: 1rem;
  background-color: white;
  overflow-y: auto;
}
</style>