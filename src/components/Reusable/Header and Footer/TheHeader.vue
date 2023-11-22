  <template>

    <div class="header">

      <!-- show when logged in as GUEST -->
      <img class="logo" :src="logo" alt="ERROR" @click="goToHome" v-if="!authorizationPersonnel"> 
      
      <!-- show when logged in as personnel -->
      <div class="logoStaffAdmin" v-if="authorizationRoleStaff || authorizationPersonnel">
        <font-awesome-icon icon="fa-solid fa-bars" size="2x" class="barsStaffAdmin" @click="toggleProfile" v-if="!isPersonnelProfile"/>
        <img class="logo" :src="logo" alt="ERROR">       
      </div>

      <!-- ROW NAV-->
      <!-- show when logged in as GUEST-->
      <nav class="rowNav" v-if="!authorizationPersonnel">
        <!-- <section style="display: flex; height: 100%; position: absolute;"> -->
            
          <!-- </section> -->

        <!-- <div :class="{active: isPathHome}" style="display: flex;"> -->
          <section style="position: relative; display: flex; flex-direction: column;" :class="{active: isPathAbout}">
            <about-drop @navigate-now="navigateHome"></about-drop>      
          </section>

          <section style="position: relative; display: flex; flex-direction: column;" :class="{active: isPathBuild || isPathSell || isPathProvide}">
            <services-drop @navigate-now="navigateServices"></services-drop>      
          </section>
          

          <router-link to="/projects" >PROJECTS</router-link>
          <router-link to="/careers" >CAREERS</router-link>
          <router-link to="/customer-service" >CUSTOMER SERVICE</router-link>

          <profile-drop v-if="isUserValidComputed && authorizationRoleGuest" :imgProfile="profilePicComputed" @logout-now="logout"></profile-drop>


         
          <button @click="closeOrOpenForm(true)" v-if="!isUserValidComputed">LOG IN</button>

          <!-- {{ profilePicComputed }} -->
        <!-- <img :src="profilePicComputed"> -->

        
      </nav>
      <!-- <img :src="profile" style="object-fit:cover; width: 100px; height: 100px;"> -->

      <!-- show when log in as personnel -->
      <!-- <div class="navStaffAdmin" v-if="authorizationPersonnel">
        <font-awesome-icon icon="fa-solid fa-circle-user" size="2x" /> <span></span><p>Welcome {{ authorizationPersonnelTEXT }}</p>
        <font-awesome-icon class="icon" v-if="!isShowStaffAdminColumnComputed" :icon="['fas', 'caret-down']" @click="toggleStaffAdminColumn" />
        <font-awesome-icon class="icon" v-if="isShowStaffAdminColumnComputed" :icon="['fas', 'caret-up']" @click="toggleStaffAdminColumn" />
        <div v-if="isShowStaffAdminColumnComputed">
          <router-link to="/personnel/client">CLIENTS</router-link>
          <router-link to="/personnel/subdivision">SUBDIVISION</router-link>
          <router-link to="/personnel/inquiries">INQUIRIES</router-link>
          <router-link to="/personnel/emptyForms">EMPTY FORMS</router-link>
          <router-link to="/personnel/reports">REPORTS</router-link>
          <button @click="logout">LOG OUT</button>
        </div>  
      </div> -->
      <navigation-personnel v-if="authorizationPersonnel" @logout-now="logout"/>

      <!-- COLLUMN NAV-->
      <!-- show when loggedin as GUEST -->
      <font-awesome-icon v-if="!authorizationPersonnel" icon="fa-solid fa-bars" size="2x" class="bars" @click="showColumnNav(true)"/>
      <column-nav v-if="isShowColumnNavComputed && !authorizationPersonnel" @close-nav="showColumnNav(false)" @log-in="closeOrOpenForm(true)"></column-nav>      


      <login-form v-if="isLoginBoolComputed" @close-button="closeOrOpenForm(false)"></login-form>

      <!-- <div style="position: absolute; z-index: 10; top:0; left: 0; width: 100%; height: 100vh; background-color: red;" >
        <progress-loading type="torks"/>
      </div> -->
      <loading-logout v-if="isLoggingOut"></loading-logout>

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
        // WeBuildDrop,
        // WeSellDrop,
        // WeProvideDrop,
    },
    data(){
      return{
        // activeHomeNav: '',
        logo: logo,
        // profile,
        // isLoginBool: false,
        isShowColumnNav: false,

        //user details
        userOrganization : null,
        userTokenID : null,
        isUserValid : false,
        tryAuth: this.$store.state.auth.tokenID,

        //STAFF&ADMIN
        // isShowStaffAdminColumn: false,

        //log out promt
        isLoggingOut: false,

      }
    },
    methods: {

      navigateServices(sectionID,path){

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

      navigateHome(id){
        // this.$store.commit('resetId')
        this.scrollNavigateHome(id)
      },
      scrollNavigateHome(sectionID){
        // this.activeHomeNav = sectionID
        if(this.$route.path === '/home'){
          this.$emit('navigation-scroll',sectionID)
        }else{
          this.$router.push({path:'/', query: {to: sectionID}});
        }
      },

      navigateSell(id){
        this.scrollNavigateSell(id)
      },
      scrollNavigateSell(sectionID){
        if(this.$route.path === '/sell'){
          this.$emit('navigation-scroll',sectionID)
        }else{
          this.$router.push({path:'/sell', query: {to: sectionID}});
        }
      },

      navigateProvide(id){
        this.scrollNavigateProvide(id)
      },
      scrollNavigateProvide(sectionID){
        if(this.$route.path === '/provide'){
          this.$emit('navigation-scroll',sectionID)
        }else{
          this.$router.push({path:'/provide', query: {to: sectionID}});
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
      // toggleStaffAdminColumn(){
      //   this.isShowStaffAdminColumn = !this.isShowStaffAdminColumn
      // },
      async logout(){
        console.log('loggin out now')
        this.isLoggingOut = true;
        await new Promise(resolve => setTimeout(resolve,1500))
        this.$store.commit('auth/eraseStoreState')
        this.$store.commit('auth/eraseLocalStorage')
        this.$store.commit('personnel/switchDashboard') //ensure the personnel dashboard shown first when going to log in as personnel
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
      authorizationRoleGuest(){
          return this.$store.getters['auth/authorizationRoleGuest']
      },
      authorizationPersonnel(){
        return this.$store.getters['auth/authorizationPersonnel']
      },
      isPersonnelProfile(){
        return this.$store.getters['personnel/isSettingsViewGetter']
      },
      // authorizationPersonnelTEXT(){
      //   return this.$store.getters['auth/authorizationPersonnelTEXT']
      // },
      activeHomeAbout(){
        return this.homeNav ==='about'?true:false
      },
      activeHomeModelHouse(){
        return this.homeNav ==='model-house'?true:false
      },
      activeHomeSubdivision(){
        return this.homeNav ==='subdivision'?true:false
      },
    },
  }
  </script>


  <style scoped>
  .active{
    outline: 1px solid blue;
  }
  .about{
    cursor: pointer;
  }
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
      z-index: 3;
  }
  .header .logoStaffAdmin{
    display: flex;
    align-items: center; 
  }
  .barsStaffAdmin{
    cursor: pointer;
    opacity: 0.5;
    margin-right: 1rem;
  }
  .barsStaffAdmin:active{
    scale: 1.1;
    transition: scale .1s ease-in;
  }
  /* .header img{
    width: 15vw;
    min-width: 120px;
  } */
  .logo{
    width: 200px;
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
    /* border: 1px solid black; */

  }
  a{
    padding: .5rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    color: black;
    cursor: default;
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
    height: 100%;
  }
  button:active{
    background-color: #84d9169f;
    color: white;
  }
  /* a:active{
    outline: 1px solid blue;
  } */
  .bars{
    cursor: pointer;
    padding: .5rem;
    border-radius: 5px;
  }
  .bars:hover, .bars:active {
    border: .5px solid black;
  }
  /* .navStaffAdmin{
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
  } */


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
  .router-link-active{
    outline: 1px solid blue;
    color: black;
  }
  .activeHomeNav{
    padding: .5rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    color: black;
    cursor: default;
    outline: 1px solid blue;
  }
  </style>