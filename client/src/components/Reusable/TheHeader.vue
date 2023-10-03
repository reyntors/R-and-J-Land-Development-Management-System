<template>

  <div class="header">

    <!-- show when logged in as GUEST -->
    <img class="logo" :src="logo" alt="ERROR" @click="goToHome" v-if="!authorizationPersonnel"> 
    
    <!-- show when logged in as personnel -->
    <div class="logoStaffAdmin" v-if="authorizationRoleStaff || authorizationPersonnel">
      <font-awesome-icon icon="fa-solid fa-bars" size="2x" class="barsStaffAdmin" @click="toggleProfile" />
      <img class="logo" :src="logo" alt="ERROR">       
    </div>
 

    <!-- ROW NAV-->
    <!-- show when logged in as GUEST-->
    <nav class="rowNav" v-if="!authorizationPersonnel">
      <router-link to="/about" >ABOUT</router-link>
      <router-link to="/projects" >PROJECTS</router-link>
      <router-link to="/gallery" >GALLERY</router-link>
      <router-link to="/contact" >CONTACT INFO</router-link>
      <router-link to="/guest-forms" v-if="authorizationRoleGuest">FORMS</router-link>
      <button @click="closeOrOpenForm(true)" v-if="!isUserValidComputed">LOG IN</button>
      <button @click="logout" v-if="isUserValidComputed">LOG OUT</button>
    </nav>

    <!-- show when log in as personnel -->
    <div class="navStaffAdmin" v-if="authorizationPersonnel">
      <font-awesome-icon icon="fa-solid fa-circle-user" size="2x" /> <span></span><p>Welcome {{ authorizationPersonnelTEXT }}</p>
      <font-awesome-icon class="icon" v-if="!isShowStaffAdminColumnComputed" :icon="['fas', 'caret-down']" @click="toggleStaffAdminColumn" />
      <font-awesome-icon class="icon" v-if="isShowStaffAdminColumnComputed" :icon="['fas', 'caret-up']" @click="toggleStaffAdminColumn" />
      <div v-if="isShowStaffAdminColumnComputed">
        <button>SOMETHING1</button>
        <button>SOMETHING2</button>
        <button @click="logout">LOG OUT</button>
      </div>  
    </div>


    <login-form v-if="isLoginBoolComputed" @close-button="closeOrOpenForm(false)"></login-form>

    <!-- COLLUMN NAV-->
    <!-- show when loggedin as GUEST -->
    <font-awesome-icon v-if="!authorizationPersonnel" icon="fa-solid fa-bars" size="2x" class="bars" @click="showColumnNav(true)"/>
    <column-nav v-if="isShowColumnNavComputed && !authorizationPersonnel" @close-nav="showColumnNav(false)" @log-in="closeOrOpenForm(true)"></column-nav>      


  </div>

</template>

<script>
import LoginForm from '@/components/Pages/LoginPage/LoginForm.vue'
import ColumnNav from './SubColumnComponent/ColumnNav.vue'
import logo from '@/assets/logo.png'
export default {
  components:{LoginForm, ColumnNav},
  data(){
    return{
      logo: logo,
      isLoginBool: false,
      isShowColumnNav: false,

      //user details
      userOrganization : null,
      userTokenID : null,
      isUserValid : false,
      tryAuth: this.$store.state.auth.tokenID,

      //STAFF&ADMIN
      isShowStaffAdminColumn: false,
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
    toggleProfile(){
      this.$store.commit('personnel/togglePofileShow')
    },
    toggleStaffAdminColumn(){
      this.isShowStaffAdminColumn = !this.isShowStaffAdminColumn
    },
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
    isShowStaffAdminColumnComputed(){
      return this.isShowStaffAdminColumn
    },
    isUserValidComputed(){
      return this.$store.getters['auth/authGetter'] //get the realtime updates of the vuex
    },
    authorizationRoleGuest(){
        return this.$store.getters['auth/authorizationRoleGuest']
    },
    // authorizationRoleStaff(){
    //   return this.$store.getters['auth/authorizationRoleStaff']
    // },
    // authorizationRoleAdmin(){
    //   return this.$store.getters['auth/authorizationRoleAdmin']
    // },
    authorizationPersonnel(){
      return this.$store.getters['auth/authorizationPersonnel']
    },
    authorizationPersonnelTEXT(){
      return this.$store.getters['auth/authorizationPersonnelTEXT']
    }

  },
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
.header .logoStaffAdmin{
  display: flex;
  align-items: center; 
}
.barsStaffAdmin{
  cursor: pointer;
}
.barsStaffAdmin:active{
  scale: 1.1;
  transition: scale .1s ease-in;
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
.rowNav button{
  margin-left: 1px;
  box-sizing: border-box;
  border: none;
  box-shadow: 0 0 1 px .5px rgba(0, 0, 0, 0.381);
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
.navStaffAdmin{
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 1rem;
}
.navStaffAdmin p{
  margin-left: .2rem;
  margin-right: .5rem;
}
.navStaffAdmin div{
  position: absolute;
  right: 0;
  top: 100%;
  display: flex;
  width: 100%;
  flex-direction: column;
}
.navStaffAdmin .icon{
  cursor: pointer;
  scale: 1.5;
}
.navStaffAdmin .icon:hover{
  scale: 1.8;
  transition: scale .1s ease-in;
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
@media screen and (max-width: 375px) {
  .logoStaffAdmin img{
    /* visibility: hidden; */
    display: none; 
  }
}
</style>