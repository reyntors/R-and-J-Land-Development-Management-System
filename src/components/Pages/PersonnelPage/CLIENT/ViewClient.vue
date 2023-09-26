<template>
  <div class="c-contianer">
    <!-- {{ client }} -->
    <section class="section-left">
        <div>
          <img src="@/assets/profile.png">
          <h6>{{client.fullname}}</h6>
        </div>
        
        <div>
          <button :class="{flat:clientProfileVisibleComputed}" @click="goto('profile')">Buyer's Profile</button> 
          
          <button :class="{flat:clientIncomeVisibleComputed}" @click="goto('income')">Source of Income</button>

          <button :class="{flat:clientAccountDetailsVisibleComputed}" @click="goto('accountDetails')">Account details</button>

          <button :class="{flat:clientFormsVisibleComputed}" @click="goto('forms')">Add forms</button>
        </div>

        <div>
          <button class="saveBtn" @click="saveNow">Save</button>
          <button class="delBtn" @click="deleteNow(client.id)" v-if="authorizationRoleAdmin">Delete</button>
        </div>
      
    </section>

    <section class="section-right">

          <client-profile v-if="clientProfileVisibleComputed" :client="client" @pass-data="getProfile"/>
          <client-income v-if="clientIncomeVisibleComputed"/>
          <client-account  v-if="clientAccountDetailsVisibleComputed"/>
          <client-forms  v-if="clientFormsVisibleComputed"/>

    </section>
  </div>
</template>

<script>
import ClientForms from './ClientProfile/ClientForms.vue';
import ClientIncome from './ClientProfile/ClientIncome.vue';
import ClientAccount from './ClientProfile/ClientAccount.vue';
import ClientProfile from './ClientProfile/ClientProfile.vue';
export default {
  props: ['client'],
  components: {ClientProfile, ClientForms,ClientIncome,ClientAccount},
  data(){
    return{
      clientProfileVisible: true,
      clientIncomeVisible: false,
      clientAccountDetailsVisible: false,
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
      }else if(params === 'income'){
        this.clientIncomeVisible = true
      }else if(params === 'accountDetails'){
        this.clientAccountDetailsVisible = true
      }else{
        this.clientFormsVisible = true
      }
    },
    reset(){
      this.clientProfileVisible = false
      this.clientIncomeVisible = false
      this.clientAccountDetailsVisible = false
      this.clientFormsVisible = false
    },


    //getting data
    getProfile(payload){
      this.profileData = payload
    },


    //save
    saveNow(){
      if(this.profileData){
        const obj = {
          id: this.client.id,
          ...this.profileData
        }
        this.$store.commit('client/updateClient',obj)
      }else{
        console.log('no changes')
      }
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
    clientIncomeVisibleComputed(){
      return this.clientIncomeVisible
    },
    clientAccountDetailsVisibleComputed(){
      return this.clientAccountDetailsVisible
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
.flat{
  outline: none;
  border: none;
  background-color: #31A72A;
  color: white;
  box-shadow: none;
}
.c-contianer{
  width: 100%;
  height: 75vh;
  padding: .5rem;
  display: flex;
  gap: 1rem;
}
.c-contianer .section-left{
  width: 25%;
  height: 100%;
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
.c-contianer .section-left div{
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
}
.c-contianer .section-left div button{
  width: 100%;
  border: none;
  /* outline: 1px solid black; */
  box-shadow: 0 0 1px .5px black;
  padding: .3rem;
}
img{
  width: 60%;
  border-radius: 100%;
  border: 1px solid black;
  margin-top: 1rem;
}
.saveBtn:active,
.delBtn:active{
  background-color: #31A72A; 
  color: white;
}



.c-contianer .section-right{
  width: 75%;
  height: 100%;
  border: 1px solid black;
  padding: 1rem;
  background-color: white;
}
</style>