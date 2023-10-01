<template>
  <the-header/>
  
    <body>
    <profile-view
      v-if="isShowProfile"/>

    <router-view></router-view>

  </body>

</template>

<script>
import ProfileView from './ProfileView.vue'
// import DashboardView from './SubComponents/DashboardView.vue'
export default {
  components: {ProfileView,
    // DashboardView
  },
  computed: {
    isShowProfile(){
      return this.$store.getters['personnel/isProfileShownGetter']
    }
  },
  mounted(){
        this.$store.dispatch('client/getLegitList')
    } 
}
</script>

<style scoped>
body{
  display: flex;
}
</style>