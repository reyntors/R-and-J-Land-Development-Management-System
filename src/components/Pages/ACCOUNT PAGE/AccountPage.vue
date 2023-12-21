<template>
  <the-header/>
  <div class="c-cont">
    <button class="btn" @click="showNav">{{buttonText}}<font-awesome-icon icon="fa-solid fa-grip-vertical" /></button>

    <section class="section1" :class="{section1Visible:grabSection}">
      <ul>        
        <li class="fw-bold"><p>User Settings</p></li>
        <li class="tab" @click="navigateTo('settings')" :class="{focus:accountSettings}"><p>Settings</p></li>
        <li class="tab" @click="navigateTo('my-account')" :class="{focus:accountMyAccount}" v-if="!roleRealtorComputed"><p>My Account</p></li>
        <li class="tab" @click="navigateTo('profile')" :class="{focus:accountProfile}"><p>Profile</p></li>
        <li class="tab" @click="navigateTo('submitted-forms')" :class="{focus:accountSubmittedForms}" v-if="!roleRealtorComputed"><p>Submitted Forms</p></li>
        <li class="tab" @click="navigateTo('client-list')" :class="{focus:accountClients}" v-if="roleRealtorComputed"><p>Client List</p></li>
      </ul> 
    </section>
    
    <section class="section2">
        <account-settings v-if="focus === 'settings' && mySettings" :settings="mySettings"></account-settings>
        <account-details v-if="focus === 'my-account' && myAccount" :account="myAccount"></account-details>
        <account-profile v-if="focus=== 'profile' && myProfile" :profile="myProfile"></account-profile>
        <account-forms v-if="focus === 'submitted-forms' && submittedForms" :formLists="submittedForms"></account-forms> 
        <client-list v-if="focus === 'client-list' && clientList"></client-list>
    </section>
  </div>

  <the-footer/>
</template>

<script>
import AccountProfile from './SubComponents/AccountProfile.vue'
import AccountForms from './SubComponents/AccountSubmittedForms.vue'
import AccountDetails from './SubComponents/AccountDetails.vue'
import AccountSettings from './SubComponents/AccountSettings.vue'
import ClientList from './SubComponents/ClientList.vue'
export default {
  components: { 
    AccountProfile,
    AccountForms,
    AccountDetails,
    AccountSettings,
    ClientList
  },
  data(){
    return{
      focus: 'settings',
      myProfile: null,
      myAccount: null,
      submittedForms:null,
      mySettings : null,
      grabSection: false,
    }
  },
  methods:{
    navigateTo(section){
      this.focus = section
    },
    showNav(){
      this.grabSection = !this.grabSection
    }
  },
  computed:{
    buttonText(){
      if(this.grabSection == true){
        return "Hide Tabs"
      }else{
        return "Show Tabs"
      }
    },
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
    clientList(){
      if(this.focus === 'client-list'){
        return true
      }else{
        return false
      }
    },
    roleRealtorComputed(){
      return this.$store.getters['auth/authorizationRealtor']
    }
  },
  async beforeCreate(){

    const id = this.$store.getters['auth/getUserId']
    const isRealtor = this.$store.getters['auth/authorizationRealtor']

    //init request for getting porfile settings
    await this.$store.dispatch('mySettings/getMyAccountSettings')
    this.mySettings = this.$store.getters['mySettings/myAccountSettingsGetter']
      
    //init request for getting profile details
    await this.$store.dispatch('myProfile/getMyDetails',id) 
    this.myProfile = this.$store.getters['myProfile/myProfileDetailsGetter']

    
    if(!isRealtor){
      //init request for getting account details
      await this.$store.dispatch('myAccount/getMyAccountDetails')
      this.myAccount = this.$store.getters['myAccount/myAccountDetailsGetter']

       //init request for getting the list of submitted forms
      await this.$store.dispatch('mySubmittedForms/listSubmittedForms',id)
      this.submittedForms = this.$store.getters['mySubmittedForms/setSubmittedFormsGetters']
    
    }else{
      await this.$store.dispatch('client/getPendingList')
    }

  }
}
</script>

<style scoped>
.focus{
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
}
.section2{
  /* background-color: rgba(255, 217, 0, 0.5); */
  /* padding-top: 2rem; */
  min-height: 85vh;
  position: relative;
  width: 75%;
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
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* display: flex;
  justify-content: end; */
  padding: 1rem;
  position: relative;
  top: -2rem;
  padding-bottom: 2rem;
  background-color: rgba(255, 255, 255, 0.3);
  width: 25%;
  min-width: 250px;
  z-index:3;
}
.c-cont{
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 20% 80%;
  display: flex;
  position: relative; /* Change to relative so ::before is positioned relative to this element */
}

.c-cont::before {
  content: ''; /* Add content property to make the pseudo-element generate */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3ViZGl2aXNpb258ZW58MHx8MHx8fDA%3D);
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.1); /* Adjust the background color and alpha as needed */
  background-blend-mode:lighten;
  filter: blur(2px);
  content: ''; /* Add content property to make the pseudo-element generate */
}
.btn{
  display: none;
}

@media only screen and (max-width: 900px){
    .btn{
      position: absolute;
      top: 1rem;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      height: 2rem;
      padding: .5rem;
      display: flex;
      gap: .2rem;
      justify-content: center;
      align-items:center;
      background-color: blue;
      color: white;
      z-index: 4;
    }  

    .section1{
      position: absolute;
      top: 0;
      height: 100%;
      display: none;
      background-color: rgba(255, 255, 255, 0.95);
    }

    .section1Visible{
      display: block;
      animation: grow .2s ease-in-out;
    }
    
    @keyframes grow {
      0%{
        left: -100%;
      }
      100%{
        left: 0;
      }
    }

    .section2{
      width: 100%;
    }
}

</style>