<template>
  <div class="columnNav-container"> 
      <font-awesome-icon icon="fa-solid fa-x" class="closeButton" @click="closeNav"/>

      <ul class="list">
        <li>
          <a class="nav-btns" @click="navigatePush('/home')">home</a>
        </li>
        <li class="nav-account-drop" v-if="isUserValidComputed && authorizationRoleGuest">
          <a class="nav-btns" @click="navigatePush('/account')">Account</a>
        </li>
        <li class="nav-about-drop">
          <a class="nav-btns ">about <font-awesome-icon icon="fa-solid fa-chevron-down" /></a>
          <ul class="subList subListAbout">
            <li class="sub-nav-btns" @click="navigate('about','')">Commitments</li><span class="comma">,</span>
            <li class="sub-nav-btns" @click="navigate('sustainability','')">Sustainability</li><span class="comma">,</span>
            <li class="sub-nav-btns" @click="navigate('corp-officers','')">Corporate Officers</li><span class="comma">,</span>
            <li class="sub-nav-btns" @click="navigate('licenses&permits','')">Licenses and Permits</li>
          </ul>
        </li>
        <li class="nav-services-drop">
          <a class="nav-btns ">services <font-awesome-icon icon="fa-solid fa-chevron-down" /></a>
          <ul class="subList subListServices">
            <li class="sub-nav-title">WE BUILD</li>     
              <li class="sub-nav-btns" @click="navigate('residential-house','/home')">Resedential Houses</li><span class="comma">,</span>
              <li class="sub-nav-btns" @click="navigate('commercial-bldg','/home')">Commercial Building</li><span class="comma">,</span>
              <li class="sub-nav-btns" @click="navigate('amenities','/home')">Amenities</li><span class="comma">,</span>
              <li class="sub-nav-btns" @click="navigate('structural-foundation','/home')">Structural Foundation</li>         
            <li class="sub-nav-title">WE SELL</li>
              <li class="sub-nav-btns" @click="navigate('land-for-sale','/sell')">Land for Sale</li><span class="comma">,</span>
              <li class="sub-nav-btns" @click="navigate('sell-others','/sell')">Others</li>
            <li class="sub-nav-title">WE PROVIDE</li>
              <li class="sub-nav-btns" @click="navigate('heavy-equipment','/provide')">Heavy Equipment for Rent</li><span class="comma">,</span>
              <li class="sub-nav-btns" @click="navigate('survey-services','/provide')">Survey Services</li><span class="comma">,</span>
              <li class="sub-nav-btns" @click="navigate('titling-processing','/provide')">Titling Processing</li><span class="comma">,</span>
              <li class="sub-nav-btns" @click="navigate('permits-licenses','/provide')">Business Permits and Licenses</li>
          </ul>
        </li>
        <li><a class="nav-btns" @click="navigatePush('/projects')">projects</a></li>
        <li><a class="nav-btns" @click="navigatePush('/careers')">careers</a></li>
        <li><a class="nav-btns" @click="navigatePush('/customer-service')">customer services</a ></li>
        <li><a class="nav-btns"  @click="navigatePush('/guest-forms')" v-if="authorizationRoleGuest" >forms</a></li>
        <li>  
          <a class="nav-btns" @click="closeOrOpenForm" v-if="!isUserValidComputed">LOG IN</a>
          <a class="nav-btns" @click="logout" v-else>LOG OUT</a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    emits: ['close-nav','log-in','navigate-now'],
    data(){
      return{
        isLoginBool: false,
      }
    },
    methods: {
      async closeOrOpenForm(){
        await new Promise(resolve => setTimeout(resolve,320))
        this.$emit('close-nav')
        this.$emit('log-in')
      },
      async closeNav(){
        await new Promise(resolve => setTimeout(resolve,150))
        this.$emit('close-nav')
      },
      async logout(){
        await new Promise(resolve => setTimeout(resolve,320))
        this.$store.commit('auth/eraseStoreState')
        this.$store.commit('auth/eraseLocalStorage')
        this.$emit('close-nav')
        this.$router.push('/home')
      },
      async navigate(id,path){
        await new Promise(resolve => setTimeout(resolve,320))
        this.closeNav()
        this.$emit('navigate-now',id,path)
      },
      async navigatePush(path){
        await new Promise(resolve => setTimeout(resolve,320))
        this.$router.push(path)
        this.closeNav()
      }
    },
    computed: {
      isLoginBoolComputed(){
        return this.isLoginBool
      },
      navVisibleComputed(){
        return this.navVisible
      },
      isUserValidComputed(){
        return this.$store.getters['auth/authGetter'] //get the realtime updates of the vuex
      },
      authorizationRoleGuest(){
        return this.$store.getters['auth/authorizationRoleGuest']
      },
      roleRealtorComputed(){
        return this.$store.getters['auth/authorizationRealtor']
      },

      // userRole(){
      //   const stringRole = this.$store.getters['auth/getRoleType']
      //   if(stringRole === 'guest'){
      //     return '/guest-forms'
      //   }else if(stringRole === 'staff'){
      //     return '/staff-forms'
      //   }else{
      //     return '/admin-we-will-change-this'
      //   }
      // }
    }
}
</script>

<style scoped>
.comma{
  display: inline-block;
  color: white;
  margin: 0 .2rem;
}
.columnNav-container{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 2;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 15vh;
  padding-bottom: 2rem;
}
.columnNav-container .list,
.columnNav-container .subList{
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  display: static;
}
.columnNav-container .subList{
  display: none;
  overflow: hidden;
}
.columnNav-container .subList li{
  padding: .3rem;
}
.columnNav-container .subList .sub-nav-title{
  color: gold;
  font-weight: 700;
  cursor: default;
  font-style: oblique;
}
.columnNav-container .subList .sub-nav-btns{
  display: inline-block;
  color: white;
  font-weight: 100;
  border-radius: 3px;
  cursor: pointer;
  transition: all .3s ease-in-out;
}
.columnNav-container .subList .sub-nav-btns:hover{
  background-color: rgba(255, 255, 255, 0.5);
}

.columnNav-container .list .nav-btns{
  display: inline-block;
  padding: 1rem 5rem;
  white-space: nowrap;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  font-weight: 1000;
  border-radius: 100px;
  background-image: linear-gradient(120deg,rgba(255, 255, 255, 0) 50%, rgb(0, 0, 0,.95) 50%,gold 50%, gold 100%);
  background-size: 300%;
  background-position: 0%;
  transition: all .3s ease-in-out;
  cursor: pointer;
}

.columnNav-container .nav-about-drop:hover .subListAbout,
.columnNav-container .nav-services-drop:hover .subListServices{
  display: block;
  animation: grow 1s ease-in;
}

@keyframes grow {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.columnNav-container .list .nav-btns:hover,
.columnNav-container .nav-services-drop:hover .nav-btns,
.columnNav-container .nav-about-drop:hover .nav-btns{
  background-position: 100%;
  text-shadow: 0 0 1px black;
  color: black;
}
.columnNav-container .list .nav-btns:active{
  color: white;
  background-image: none;
  background-image: linear-gradient(120deg,rgba(255, 255, 255, 0) 50%, rgb(0, 0, 0,.95) 50%,#30a72a8e 50%, #30a72a8e 100%);
}
.closeButton{
  position: absolute;
  z-index: 3;
  right: 2rem;
  top: 2rem;
  margin: 2rem;
  color: white;
  /* background-color: rgb(255, 255, 255); */
  box-sizing: border-box;
  cursor: pointer;
  transition: transform .3s ease-in-out;
}
.closeButton:hover{
  transform: scale(1.5);
}
.closeButton:active{
  color: rgba(255, 255, 255, 0.5);
}
</style>