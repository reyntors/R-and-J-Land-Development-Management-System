<template>

  <div class="header">

    <img class="logo" src="@/assets/logo.png" alt="ERROR" @click="goToHome">      
   
 

    <!-- ROW NAV-->
    <nav class="rowNav">
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/projects">PROJECTS</router-link>
      <router-link to="/gallery">GALLERY</router-link>
      <router-link to="/contact">CONTACT INFO</router-link>
      <router-link to="/forms" v-if="isUserValidComputed">FORMS</router-link>
      <button @click="closeOrOpenForm(true)" v-if="!isUserValidComputed">LOG IN</button>
      <button @click="logout" v-if="isUserValidComputed">LOG OUT</button>
    </nav>
    <login-form v-if="isLoginBoolComputed" @close-button="closeOrOpenForm(false)"></login-form>

    <!-- COLLUMN NAV-->
    <font-awesome-icon icon="fa-solid fa-bars" size="2x" class="bars" @click="showColumnNav(true)"/>
    <column-nav v-if="isShowColumnNavComputed" @close-nav="showColumnNav(false)" @log-in="closeOrOpenForm(true)"></column-nav>
  </div>

</template>

<script>
import LoginForm from '@/components/Pages/LoginPage/LoginForm.vue'
import ColumnNav from './SubColumnComponent/ColumnNav.vue'
export default {
  components:{LoginForm, ColumnNav},
  data(){
    return{
      isLoginBool: false,
      isShowColumnNav: false,

      //user details
      userOrganization : null,
      userTokenID : null,
      isUserValid : false,
      tryAuth: this.$store.state.auth.tokenID
    }
  },
  methods: {
    closeOrOpenForm(bool){
        this.isLoginBool = bool
    },
    showColumnNav(bool){
      this.isShowColumnNav = bool;
    },
    goToHome(){
      this.$router.push('/')
    },
    // tryLogin(){
    //   this.$store.commit('auth/getLocalStorage')  //get the localstorage into vuex
    // },
    logout(){
      this.$store.commit('auth/eraseStoreState')
      this.$store.commit('auth/eraseLocalStorage')
      this.$router.push('/home')
    }
  },
  computed: {

    isLoginBoolComputed(){
      return this.isLoginBool
    },
    isShowColumnNavComputed(){
      return this.isShowColumnNav
    },
    isUserValidComputed(){
      return this.$store.getters['auth/authGetter'] //get the realtime updates of the vuex
    }

  },
  // mounted(){
  //   console.log("MOUNTED diri")
  //   this.tryLogin()
  // },
}
</script>


<style scoped>
.header{
    position: sticky;
    top: 0;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 15vh;
    background-position: center center;
    box-shadow: 0 1px 11px 0.5px rgba(0, 0, 0, 0.407);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: white;
    z-index: 2;
}
.header img{
  width: 15vw;
  min-width: 120px;
}
.logo{
  width: 200px;
}
.rowNav{
  display: flex;
}
a{
  padding: 1rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
}
button{
  margin-left: 1px;
  box-sizing: border-box;
  border: none;
  box-shadow: 0 0 5px .5px rgba(0, 0, 0, 0.381);
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
  outline: 1px solid blue;
}
.bars{
  cursor: pointer;
  padding: .5rem;
  border-radius: 5px;
}
.bars:hover, .bars:active {
  border: .5px solid black;
}


@media screen and (max-width: 821px) {
    .rowNav{
      display: none;
    }
    .bars{
      display: visible;
    }
}
@media screen and (min-width: 821px) {
    .rowNav{
      display: visible;
    }
    .bars{
      display: none;
    }
}
</style>