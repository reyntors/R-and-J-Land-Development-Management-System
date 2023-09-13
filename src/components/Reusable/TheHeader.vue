<template>
  <div class="header">
    <img class="logo" src="@/assets/logo.png" alt="ERROR"> 
    <nav class="rowNav">
      <a href="#about">ABOUT</a>
      <a href="#about">PROJECTS</a>
      <a href="#about">GALLERY</a>
      <a href="#about">FORMS</a>
      <a href="#about">CONTACT INFO</a>
      <button @click="login">LOG IN</button>
    </nav>
    <font-awesome-icon icon="fa-solid fa-bars" size="2x" class="bars" @click="showColumnNav(true)"/>
    <div class="columnNav" v-if="isShowColumnNav">
      <!-- <div class="backgroundFade">

      </div> -->
      <div>
        <font-awesome-icon icon="fa-solid fa-x"  @click="showColumnNav(false)"/>
      </div>
      <a href="#about">ABOUT</a>
      <a href="#about">PROJECTS</a>
      <a href="#about">GALLERY</a>
      <a href="#about">FORMS</a>
      <a href="#about">CONTACT INFO</a>
      <button @click="login">LOG IN</button>
    </div>
  </div>
  <login-form v-if="isLogin" @close-button="closeForm"></login-form>
</template>

<script>
import LoginForm from '@/components/Forms/LoginForm.vue'
export default {
  components:{LoginForm},
  data(){
    return{
      isLoginBool: true,
      isShowColumnNav:false,
    }
  },
  methods: {
    login(){
      this.isLoginBool = true
      this.showColumnNav(false);
    },
    closeForm(){
      this.isLoginBool = false
    },
    showColumnNav(bool){
      this.isShowColumnNav = bool;
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
.header img{
  width: 15vw;
  min-width: 120px;
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
  border: 1px solid blue;
}
.columnNav{
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  background-color: white;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px 1px gray;
}
.columnNav div{
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: .5rem;
}
.columnNav button{
  width: 100%;
  border: none;
}
.columnNav a{
  text-align: center;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.188);
}
.columnNav a:active{
  border: 1px solid black;
}
/* .backgroundFade{
  position: initial;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  z-index: 0;
} */



@media screen and (max-width: 767px) {
    .rowNav{
      display: none;
    }
    .bars{
      display: visible;
    }
}
@media screen and (min-width: 767px) {
    .rowNav{
      display: visible;
    }
    .bars{
      display: none;
    }
}
</style>