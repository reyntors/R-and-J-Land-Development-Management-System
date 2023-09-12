<template>
  <div class="header">
    <img class="logo" src="@/assets/logo.png" alt="ERROR"> 
    <nav>
      <a href="#about">ABOUT</a>
      <a href="#map">MAP</a>
      <button @click="login">LOG IN</button>
    </nav>
  </div>
  <login-form v-if="isLogin" @close-button="closeForm"></login-form>
</template>

<script>
import LoginForm from '@/components/Forms/LoginForm.vue'
export default {
  components:{LoginForm},
  data(){
    return{
      isLoginBool: false,
    }
  },
  methods: {
    login(){
      this.isLoginBool = true
    },
    closeForm(){
      this.isLoginBool = false
    }
  },
  computed: {
    isLogin(){
      return this.isLoginBool
    }
  }
}
</script>


<style scoped>
.header{
    width: 100%;
    /* background-image: url('@/assets/theme.jpg'); */
    /* background-image: url('@/assets/header.png'); */
    background-repeat: no-repeat;
    background-size: cover;
    height: 15vh;
    background-position: center center;
    box-shadow: 0 1px 11px 0.5px rgba(0, 0, 0, 0.407);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}
.logo{
  width: 200px;
}
a{
  padding: 1rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
}
button{
  padding: .5rem;
  font-weight: 700;
  font-size: 1rem;
  background-color: #86D916;
}
button:active{
  background-color: #84d9169f;
  color: white;
}
a:active{
  border: 1px solid blue;
}
</style>