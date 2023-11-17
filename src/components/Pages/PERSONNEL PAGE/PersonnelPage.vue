<template>
  <the-header/>


    <settings-view v-if="isSettings"/>

    <div class="personnel-cont" v-else>

      
      <profile-view
        v-if="isShowProfile"/>

      <router-view></router-view>
      <!-- <progress-loading></progress-loading> -->



  </div>

  




</template>

<script>
import ProfileView from './ProfileView.vue'
import SettingsView from './SettingsView/SettingsView.vue'

export default {
  components: {
    ProfileView,
    SettingsView
  },
  computed: {
    isShowProfile(){
      return this.$store.getters['personnel/isProfileShownGetter']
    },
    isSettings(){
      return this.$store.getters['personnel/isSettingsViewGetter']
    }
  },
  mounted(){
        // this.$store.dispatch('client/getLegitList')
        // this.$store.dispatch('rawForms/getRawFormsList')
    } 
}
</script>

<style scoped>
.img-background{
  background-image: url(https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3ViZGl2aXNpb258ZW58MHx8MHx8fDA%3D);
  background-size: cover;
  background-repeat: no-repeat;
  background-color: 30a72a8e;
  background-blend-mode: lighten;
  background-position: center;
  filter: blur(3px);

}

.personnel-cont {
  display: flex;
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
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.1); /* Adjust the background color and alpha as needed */
  background-blend-mode:lighten;
  filter: blur(2px);
  content: ''; /* Add content property to make the pseudo-element generate */
}

</style>