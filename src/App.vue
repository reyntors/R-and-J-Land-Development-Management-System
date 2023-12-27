<template>
  <router-view></router-view>
  <messenger-chat v-if="isNotPersonnel"></messenger-chat>
  
  <auto-logout v-if="autoLogoutNow"></auto-logout>

</template>

<script>
import MessengerChat from './components/MESSENGER/MessengerChat.vue'
import AutoLogout from './components/Reusable/LoadingScreens/AutoLogout.vue'
export default {
  components: {MessengerChat,AutoLogout},
  data(){
    return{
      autoLogoutNow: false,
    }
  },
  computed:{
    isNotPersonnel(){
      const role = this.$store.getters['auth/getRoleType']
      if(role === 'guest' || role === undefined){
        return true
      }else{
        return false
      }
    },
    isAutoLougout(){
      return this.$store.getters['auth/autoLogoutNowGetter']
    }
  },
  watch:{
    'isAutoLougout': async function(newValue) {
      if(newValue === true){
        this.$router.push('/home')
        this.autoLogoutNow = true;
        await new Promise(resolve => setTimeout(resolve, 4000))
        this.autoLogoutNow = false;
      }
    }
  }

}
</script>

<style >
*{
  padding: 0;
  margin: 0;
  font-family: 'Poppins';
}
p {
  /* font-size: clamp(.5rem, 1.2vw, 1.5rem); */
  margin: 0;
}
h2{
  font-weight: 600;
}
/* h4{
  font-size: clamp(1rem, 1.7vw, 2rem);
} */
.Toastify__toast-container {
  top: 15vh !important;
}

</style>