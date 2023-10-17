<template>
  {{ isNotPersonnel }}
  <router-view></router-view>
  <messenger-chat v-if="isNotPersonnel"></messenger-chat>

</template>

<script>
import MessengerChat from './components/Pages/HomePage/MESSENGER/MessengerChat.vue'
export default {
  components: {MessengerChat},
  computed:{
    isNotPersonnel(){
      const role = this.$store.getters['auth/getRoleType']
      if(role === 'guest' || role === undefined){
        return true
      }else{
        return false
      }
    }
  }
}
</script>

<style >
*{
  padding: 0
MessengerChat;
  margin: 0;
  font-family: 'Poppins';
}
p {
  font-size: clamp(.5rem, 1.5vw, 2rem);
}
h2{
  font-weight: 600;
}
h4{
  font-size: clamp(1rem, 1.7vw, 2rem);
}

</style>