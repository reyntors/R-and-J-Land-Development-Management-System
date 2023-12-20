<template>
  <the-header/>

    <div style="position: relative;">
        <settings-view v-if="isSettings"/>

        <div class="personnel-cont" v-else>
    
        <transition name="profile">
          <profile-view
            v-if="isShowProfile"/>
        </transition>
          <router-view></router-view>
          
        </div>
  

      <blur-loading v-if="isLoading" />      
    </div>

</template>

<script>
import ProfileView from './ProfileView.vue'
import SettingsView from './SettingsView/SettingsView.vue'
import { toast } from 'vue3-toastify'
export default {
  components: {
    ProfileView,
    SettingsView
  },
  data(){
    return {
      isLoading: true,
    }
  },
  computed: {
    isShowProfile(){
      return this.$store.getters['personnel/isProfileShownGetter']
    },
    isSettings(){
      return this.$store.getters['personnel/isSettingsViewGetter']
    }
  },
  async mounted(){
    console.log('created')
    this.isLoading = true
    try{
      
      //get the list of legit clients
      await this.$store.dispatch('client/getLegitList')

      // this.$store.dispatch('client/getLegitList')
      await this.$store.dispatch('rawForms/getRawFormsList')

      //get the inquiries list
      await this.$store.dispatch('inquiries/getInquiriesList')

      //get the list of need approval clients
      await this.$store.dispatch('newClients/getList')

      // //get the subidivsion lists
      await this.$store.dispatch('subdivision/getPropertyList')

    }catch(error){
      console.error(error)
      toast.error(error)
    }

    // await new Promise(resolve => setTimeout(resolve,200))
    this.isLoading = false
  } 
}
</script>

<style scoped>
.profile-enter-from,
.profile-leave-to{
    opacity: 0;
    /* transform: translateX(-100%); */
    width: 0;
}
.profile-enter-active,
.profile-leave-active{
    transition: all 1s ease-in-out;
}
.profile-enter-to,
.profile-leave-from{
    opacity: 1;
    width: 20vw;
    /* transform: translateX(0); */
}
.personnel-cont {
  display: flex;
  flex-wrap: nowrap;
  position: relative; /* Change to relative so ::before is positioned relative to this element */
}

.personnel-cont::before {
  content: ''; /* Add content property to make the pseudo-element generate */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3ViZGl2aXNpb258ZW58MHx8MHx8fDA%3D);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.1); /* Adjust the background color and alpha as needed */
  background-blend-mode:lighten;
  filter: blur(2px);
  content: ''; /* Add content property to make the pseudo-element generate */
}

</style>