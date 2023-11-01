<template>
  <the-header/>
  <div class="c-cont">

    <section class="section1">
      <ul>
        <li class="fw-bold"><p>User Settings</p></li>
        <li class="tab" @click="navigateTo('settings')" :class="{focus:accountSettings}"><p>Settings</p></li>
        <li class="tab" @click="navigateTo('my-account')" :class="{focus:accountMyAccount}"><p>My Account</p></li>
        <li class="tab" @click="navigateTo('profile')" :class="{focus:accountProfile}"><p>Profile</p></li>
        <li class="tab" @click="navigateTo('submitted-forms')" :class="{focus:accountSubmittedForms}"><p>Submitted Forms</p></li>
      </ul> 
    </section>

    <section class="section2">
        <account-settings v-if="focus === 'settings' && mySettings" :settings="mySettings"></account-settings>
        <account-details v-if="focus === 'my-account' && myAccount" :account="myAccount"></account-details>
        <account-profile v-if="focus=== 'profile' && myProfile" :profile="myProfile"></account-profile>
        <account-forms v-if="focus === 'submitted-forms' && submittedForms" :formLists="submittedForms"></account-forms> 
    </section>
  </div>

  <the-footer/>
</template>

<script>
import AccountProfile from './SubComponents/AccountProfile.vue'
import AccountForms from './SubComponents/AccountSubmittedForms.vue'
import AccountDetails from './SubComponents/AccountDetails.vue'
import AccountSettings from './SubComponents/AccountSettings.vue'
export default {
  components: { 
    AccountProfile,
    AccountForms,
    AccountDetails,
    AccountSettings
  },
  data(){
    return{
      focus: 'settings',
      myProfile: null,
      myAccount: null,
      submittedForms:null,
      mySettings : null,
    }
  },
  methods:{
    navigateTo(section){
      this.focus = section
    },
  },
  computed:{
    accountProfile(){
      if(this.focus === 'profile'){
        return true
      }else{
        return false
      }
    },
    accountMyAccount(){
      if(this.focus === 'my-account'){
        return true
      }else{
        return false
      }
    },
    accountSubmittedForms(){
      if(this.focus === 'submitted-forms'){
        return true
      }else{
        return false
      }
    },
    accountSettings(){
      if(this.focus === 'settings'){
        return true
      }else{
        return false
      }
    },
  },
  async beforeCreate(){

    const id = this.$store.getters['auth/getUserId']

    //init request for getting porfile settings
    await this.$store.dispatch('mySettings/getMyAccountSettings')
    this.mySettings = this.$store.getters['mySettings/myAccountSettingsGetter']
      
    //init request for getting profile details
    await this.$store.dispatch('myProfile/getMyDetails',id) 
    this.myProfile = this.$store.getters['myProfile/myProfileDetailsGetter']

    //init request for getting account details
    await this.$store.dispatch('myAccount/getMyAccountDetails')
    this.myAccount = this.$store.getters['myAccount/myAccountDetailsGetter']

    //init request for getting the list of submitted forms
    await this.$store.dispatch('mySubmittedForms/listSubmittedForms',id)
    this.submittedForms = this.$store.getters['mySubmittedForms/setSubmittedFormsGetters']
  }
}
</script>

<style scoped>
.focus{
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
}
.section2{
  background-color: rgba(255, 217, 0, 0.5);
  padding-top: 2rem;
  min-height: 85vh;
}
.tab:hover{
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
}
.section1 li{
  padding: 0.5rem 2rem 0.5rem 1rem;
  border-radius: 5px;
  white-space: nowrap;
  cursor: pointer;
  margin-bottom: 5px;
}
.section1 ul{
  padding: 0;
  list-style: none;
}
.section1{
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: end;
  padding: 1rem;
}
.c-cont{
  display: grid;
  grid-template-columns: 20% 80%;
}
</style>