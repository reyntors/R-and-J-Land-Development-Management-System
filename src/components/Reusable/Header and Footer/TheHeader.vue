<template>

  <div class="header">

    <!-- show when logged in as GUEST -->
    <img class="logo" :src="logo" alt="ERROR" @click="goToHome" v-if="!authorizationPersonnel"> 
    
    <!-- show when logged in as PERSONNEL -->
    <div class="logoStaffAdmin" v-if="authorizationRoleStaff || authorizationPersonnel">
      <font-awesome-icon icon="fa-solid fa-bars" size="2x" class="barsStaffAdmin" @click="toggleProfile" v-if="!isPersonnelProfile"/>
      <img class="logo" :src="logo" alt="ERROR">       
    </div>

    <!-- ROW NAV-->
    <!-- show when logged in as GUEST,REALTOR-->
    <nav class="rowNav" v-if="!authorizationPersonnel">

        <section style="position: relative; display: flex; flex-direction: column;" :class="{active: isPathBuild || isPathSell || isPathProvide}">
          <services-drop @navigate-now="navigateServices" ></services-drop>      
        </section>

        <section style="position: relative; display: flex; flex-direction: column;" :class="{active: isPathAbout}">
          <about-drop @navigate-now="navigateAbout"></about-drop>      
        </section>

        <router-link to="/projects" >PROJECTS</router-link>
        <router-link to="/careers" >CAREERS</router-link>
        <router-link to="/customer-service" >CUSTOMER SERVICE</router-link>

        <profile-drop v-if="isUserValidComputed && authorizationRoleGuest" :imgProfile="profilePicComputed" @logout-now="logout"></profile-drop>
        <button @click="closeOrOpenForm(true)" v-if="!isUserValidComputed">LOG IN <font-awesome-icon icon="fa-solid fa-user" /></button>
    </nav>


    <!-- COLLUMN NAV-->
    <!-- show when loggedin as GUEST -->
    <font-awesome-icon v-if="!authorizationPersonnel" icon="fa-solid fa-bars" size="2x" class="bars" @click="showColumnNav(true)"/>
    <transition name="columnNav"> 
      <column-nav v-if="isShowColumnNavComputed && !authorizationPersonnel" @close-nav="showColumnNav(false)" @log-in="closeOrOpenForm(true)" @navigate-now="columnNavigationController"></column-nav>           
    </transition>

    
    <!-- open navigation header IF PERSONNEL USER -->
    <navigation-personnel v-if="authorizationPersonnel" @logout-now="logout"/>  


    <!-- toggled widgets -->
    <login-form v-if="isLoginBoolComputed" @close-button="closeOrOpenForm(false)"></login-form> <!-- open login form -->
    <loading-logout v-if="isLoggingOut"></loading-logout> <!-- loggin out animation -->

  </div>

</template>

<script>

import AboutDrop from './dropdowns/AboutDrop.vue'
import ServicesDrop from './dropdowns/ServicesDrop.vue'
import ProfileDrop from './dropdowns/ProfileDrop.vue'

import NavigationPersonnel from './personnel dropdowns/NavigationPersonnel.vue'

import LoginForm from '@/components/Login_or_SignUp_Form/LoginForm.vue'
import ColumnNav from '../Header Column/ColumnNav.vue'
import logo from '@/assets/logo.png'

import LoadingLogout from '@/components/Login_or_SignUp_Form/LoadingLogout.vue'

export default {
  props: ['homeNav'],
  emits: ['navigation-scroll'],
  components:{
      LoginForm, 
      ColumnNav,
      AboutDrop,
      ServicesDrop,
      ProfileDrop,
      NavigationPersonnel,
      LoadingLogout,
  },
  data(){
    return{
      logo: logo,
      isShowColumnNav: false,

      //user details
      userOrganization : null,
      userTokenID : null,
      isUserValid : false,
      tryAuth: this.$store.state.auth.tokenID,

      //log out prompt
      isLoggingOut: false,

      closeServiceDrop: false,

    }
  },
  methods: {

    columnNavigationController(sectionId,path){   //this method is for column navigation bars only scrolling events
        console.log(sectionId,path)
        if(path === ""){
          this.navigateAbout(sectionId)
        }else{
          this.navigateServices(sectionId,path)
        }
    },

    navigateServices(sectionID,path){     //this method is for row navigation 
      if(this.$route.path === path){
        this.$emit('navigation-scroll',sectionID)
      }else{
        if(path === '/home'){
          this.$router.push({path:'/', query: {to: sectionID}});
        }else if(path === '/sell'){
          this.$router.push({path:'/sell', query: {to: sectionID}});
        }else if(path === '/provide'){
          this.$router.push({path:'/provide', query: {to: sectionID}});
        }else{
          console.error('something wrong on navigation')
        } 
      }          
    },

    navigateAbout(id){        //this method is for row navigation 
      this.scrollNavigateAbout(id)     
    },
    scrollNavigateAbout(sectionID){     //this method is for row navigation 
      if(this.$route.path === '/home'){
        this.$emit('navigation-scroll',sectionID)
      }else{
        this.$router.push({path:'/', query: {to: sectionID}});
      }
    },
    closeOrOpenForm(bool){
        this.$store.commit('auth/toggleLoginForm',bool)
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
    async logout(){
      console.log('loggin out now')
      this.isLoggingOut = true;
      await new Promise(resolve => setTimeout(resolve,1500))
      this.$store.commit('auth/eraseStoreState')
      this.$store.commit('auth/eraseLocalStorage')
      this.$store.commit('personnel/switchDashboard') //ensure the personnel dashboard shown first when going to log in as personnel
      this.$store.commit('subdivision/redirectToForm',false)   //set the redirect to letter of intent to false after logging out
      this.$router.push('/home')
      this.isLoggingOut = false
    }
  },
  computed: {
    isPathAbout(){
      return this.$store.getters['isAboutActive']
    },
    isPathBuild(){
      return this.$store.getters['isWeBuildActive']
    },
    isPathSell(){
      if(this.$route.path === '/sell'){
        return true
      }else{
        return false
      }
    },
    isPathProvide(){
      if(this.$route.path === '/provide'){
        return true
      }else{
        return false
      }
    },
    profilePicComputed(){
      return this.$store.getters['auth/profilePicGetter']
    },
    isLoginBoolComputed(){
      return this.$store.getters['auth/openLoginFormGetter']
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
    authorizationRoleGuest(){  //true if logged in as realtor or customer
        return this.$store.getters['auth/authorizationRoleGuest']
    },
    authorizationPersonnel(){
      return false;
      // return this.$store.getters['auth/authorizationPersonnel']
    },
    isPersonnelProfile(){
      return this.$store.getters['personnel/isSettingsViewGetter']
    },
    activeHomeAbout(){
      return this.homeNav ==='about'?true:false
    },
    activeHomeModelHouse(){
      return this.homeNav ==='model-house'?true:false
    },
    activeHomeSubdivision(){
      return this.homeNav ==='subdivision'?true:false
    },

    autoLogoutNow(){    //get the bool if auto log out or not
      return this.$store.getters['auth/autoLogoutNowGetter']
    }
  },
}
</script>


<style scoped>
.columnNav-enter-from,
.columnNav-leave-to{
  transform: scale(0);
}
.columnNav-enter-active,
.columnNav-leave-active{
  transition: transform .3s ease-in-out;
}
.columnNav-enter-to,
.columnNav-leave-from{
  transform: scale(1);
}
.active{
  border-bottom: 2px solid white;
}
.about{
  cursor: pointer;
}
.header{
    position: sticky;
    top: 0;
    width: 100%vw;
    background-repeat: no-repeat;
    background-size: cover;
    /* height: 10vh; */
    height: 5rem;
    background-position: center center;
    box-shadow: 0 1px 11px 0.5px rgba(0, 0, 0, 0.407);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    /* background-color: rgba(0, 0, 0, 0.9); */
    background-color: rgb(24, 22, 22);
    z-index: 5;
}
.header .logoStaffAdmin{
  display: flex;
  align-items: center; 
}
.barsStaffAdmin{
  cursor: pointer;
  opacity: 0.5;
  margin-right: 1rem;
  transition: scale .1s ease-in;
  color: white;
}
.barsStaffAdmin:active,
.barsStaffAdmin:hover{
  scale: 1.1;
}
/* .header img{
  width: 15vw;
  min-width: 120px;
} */
.logo{
  /* max-width: 200px; */
  width: 180px;
}
/* .rowNav img{
  width: 50px;
  height: 50px;
  object-fit: cover;
} */
.rowNav{
  display: flex;
  gap: .2rem;
  align-items: center;
  color: white;
  /* border: 1px solid black; */

}
a{
  padding: .5rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  color: rgb(255, 255, 255);
  cursor: default;
}
.rowNav button{
  margin: 0 1rem;
  box-sizing: border-box;
  border: none;
  box-shadow: 0 0 1 px .5px rgba(0, 0, 0, 0.381);
  padding: .5rem 1rem;
  font-weight: 700;
  font-size: 1rem;
  background-color: #86D916;
  height: 100%;
  border-radius: 100px;
  transition: all .3s ease-in-out;
}
button:active,
button:hover{
  background-color: #84d9169f;
  color: white;
} 

.bars{
  cursor: pointer;
  padding: .5rem;
  border-radius: 5px;
  color: white;
  transition: all .3s ease-in-out;
}
.bars:hover, .bars:active {
  transform: scale(1.2);
}

.router-link-active{
  border-bottom: 2px solid white;
}

@media only screen and (max-width:1000px) {
    .rowNav{
      display: none;
    }
    .bars{
      display: visible;
    }
}
@media only screen and (min-width: 1001px) {
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