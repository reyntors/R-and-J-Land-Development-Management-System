<template>
  <div class="c-container">
    <!-- {{ client }} -->
    <section class="section-left">
        <div>
          <img src="@/assets/profile.png">
          <h6>{{client.fullname}}</h6>
        </div>
        
        <div>
          <button :class="{flat:clientProfileVisibleComputed}" @click="goto('profile')">Buyer's Profile</button> 
          
          <button :class="{flat:clientPaymentVisibleComputed}" @click="goto('payment')">Payment Details</button>

          <button :class="{flat:clientFormsVisibleComputed}" @click="goto('forms')">Forms</button>

          <button class="delBtn" @click="deleteNow(client.id)" v-if="authorizationRoleAdmin">Delete</button>
        </div>

        <div>
          <!-- <button class="saveBtn" @click="saveNow">Save</button> -->
          <!-- <button class="delBtn" @click="deleteNow(client.id)" v-if="authorizationRoleAdmin">Delete</button> -->
        </div>
      
    </section>

    <section class="section-right">

          <client-profile v-if="clientProfileVisibleComputed" :client="client" @pass-data="getProfile"/>
          <client-payment v-if="clientPaymentVisibleComputed"/>
          <client-forms  v-if="clientFormsVisibleComputed"/>

    </section>
  </div>
</template>

<script>
import ClientForms from './ClientProfile/ClientForms.vue';
import ClientPayment from './ClientProfile/ClientPayment.vue';
import ClientProfile from './ClientProfile/ClientProfile.vue';
export default {
  props: ['client'],
  components: {ClientProfile, ClientForms,ClientPayment},
  data(){
    return{
      clientProfileVisible: true,
      clientPaymentVisible: false,
      clientFormsVisible: false,

      //OBJECTS DATA
      profileData: null,
    }
  },

  methods:{
    goto(params){
      this.reset();
      if(params === 'profile'){
        this.clientProfileVisible = true
      }else if(params === 'payment'){
        this.clientPaymentVisible = true
      }else{
        this.clientFormsVisible = true
      }
    },
    reset(){
      this.clientProfileVisible = false
      this.clientPaymentVisible = false
      this.clientFormsVisible = false
    },

    //getting data
    getProfile(payload){
      this.profileData = payload
    },

    //delete
    deleteNow(id){
      alert('Deleting now')
      this.$store.commit('client/deleteClient',id)
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
  /* height: 95%; */
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
  padding: 1rem;
  background-color: white;
  overflow-y: auto;
}
</style>