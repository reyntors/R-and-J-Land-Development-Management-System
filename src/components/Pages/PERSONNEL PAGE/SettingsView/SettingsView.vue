<template>
  <div class="c-contPersonnelSettings">

    <section class="section1">
      <ul>
        <li class="fw-bold"><p>User Settings</p></li>
        <li class="tab" @click="navigateTo('settings')" :class="{focus:accountSettings}"><p>Settings</p></li>
      </ul> 
    </section>

    <section class="section2">
        <account-settings :settings="mySettings" v-if="isReady"></account-settings>
    </section>
  </div>
</template>

<script>
import AccountSettings from './SubComponents/AccountSettings.vue'

export default {
  components: { 
    AccountSettings,

  },
  data(){
    return{
      isReady: false,
      mySettings : null,

    }
  },
  methods:{
    navigateTo(section){
      this.focus = section
    },
  },
  computed:{

    accountSettings(){
      if(this.focus === 'settings'){
        return true
      }else{
        return false
      }
    },

  },
  async beforeCreate(){
    try{
      await this.$store.dispatch('mySettings/getMyAccountSettings')
      this.mySettings = this.$store.getters['mySettings/myAccountSettingsGetter']    
      this.isReady = true;  
    }catch(error){
      console.erro(error)
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
  padding: 1rem;
  height: 85vh;
  position: relative;
  border: 1px solid black;
}
.tab{
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
}
.section1 li{
  padding: 0.5rem 2rem 0.5rem 1rem;
  border-radius: 5px;
  white-space: nowrap;
  cursor: pointer;
  margin-bottom: 5px;
  position: relative;
}
.section1 ul{
  padding: 0;
  list-style: none;
}
.section1{
  /* background-color: rgba(0, 0, 0, 0.5); */
  display: flex;
  justify-content: end;
  padding: 1rem;
  border: 1px solid black;
  height: 85vh;
  /* background-color: transparent; */
}
.c-contPersonnelSettings{
  display: grid;
  grid-template-columns: 20% 80%;
}
.c-contPersonnelSettings::before {
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
</style>