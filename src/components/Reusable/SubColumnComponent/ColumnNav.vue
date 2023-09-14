<template>
  <div class="bg-fade">

  </div>
  <div> 
    
    <div class="columnNav">
      <font-awesome-icon icon="fa-solid fa-x" class="closeButton" @click="closeNav"/>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/projects">PROJECTS</router-link>
      <router-link to="/gallery">GALLERY</router-link>
      <router-link to="/forms">FORMS</router-link>
      <router-link to="/contact">CONTACT INFO</router-link>
      <button @click="closeOrOpenForm(true)">LOG IN</button>
    </div>
    <login-form v-if="isLoginBoolComputed" @close-button="closeOrOpenForm(false)"></login-form>
  </div>
</template>

<script>
import LoginForm from '@/components/Pages/LoginPage/LoginForm.vue'
export default {
    emits: ['close-nav'],
    components: { LoginForm},
    data(){
      return{
        isLoginBool: false,
      }
    },
    methods: {
      closeOrOpenForm(bool){
        this.isLoginBool = bool
      },
      closeNav(){
        this.$emit('close-nav')
      }
    },
    computed: {
      isLoginBoolComputed(){
        return this.isLoginBool
      }
    }
}
</script>

<style scoped>
.columnNav{
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  background-color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px 1px gray;
  z-index: 1;
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
  padding: 1rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
}
.columnNav a:active{
  border: 1px solid black;
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
.bg-fade{
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100vw;
  background-color: red;
  z-index: 1;
  background-color: rgba(116, 105, 105, 0.425)
}
.closeButton{
  position: absolute;
  z-index: 1;
  left: -2.9rem;
  top: 2px;
  padding: 1rem;
  
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  cursor: pointer;
}
.closeButton:hover, .closeButton:active{
  outline: 1px solid black;
  font-weight: 700;
  background-color: rgba(116, 105, 105, 0.244);
  color: white;
}
</style>