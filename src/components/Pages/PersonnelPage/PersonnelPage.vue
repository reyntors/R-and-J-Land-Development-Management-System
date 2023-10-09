<template>
  <the-header/>
  
    <body>
    <profile-view
      v-if="isShowProfile"/>

    <router-view></router-view>
    <!-- <progress-loading></progress-loading> -->

  </body>

</template>

<script>
import ProfileView from './ProfileView.vue'
export default {
  components: {ProfileView,
  },
  computed: {
    isShowProfile(){
      return this.$store.getters['personnel/isProfileShownGetter']
    }
  },
  mounted(){
        // this.$store.dispatch('client/getLegitList')
        // this.$store.dispatch('rawForms/getRawFormsList')
    } 
}
</script>

<style scoped>
body{
  display: flex;
}
</style>