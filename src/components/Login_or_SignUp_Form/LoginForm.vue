<template>
  <div class="login-page-cont">
    <!-- <div class="background">
    </div>   -->
    <login-view
      v-if="mode === 'login'"
      @close-login="close"
      @switch-signup="signupInstead"
      @switch-forgot="forgotPassword"
    />

    <signup-view
      v-if="mode === 'signup'"
      @close-signup ="close"
      @switch-login="loginInstead"
    />

    <forgot-view
      v-if="mode === 'forgot'"
      @close-forgot="loginInstead"
      @toast-message = "toastRender"
    />
  </div>
  


</template>


<script>
import LoginView from './subComp/LoginView.vue'
import SignupView from './subComp/SignupView.vue'
import ForgotView from './subComp/ForgotView.vue'
import { toast } from 'vue3-toastify'
export default {
  components: {LoginView, SignupView,ForgotView},
  emits : ['close-button'],
  data(){
    return{
      mode : 'login',
    }
  },
  methods:{
    close(){
        this.$emit('close-button')
    },
    signupInstead(){
      this.mode= 'signup'
    },
    loginInstead(){
      this.mode= 'login'
    },
    forgotPassword(){
      console.log('forgot')
      this.mode= 'forgot'
    },
    toastRender(param){
      if(param.status === 'error'){
        toast.error(param.message)
      }else{
        toast.success(param.message)
      }
    }
  },
}
</script>

<style scoped>
.login-page-cont{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* border: 1px solid blue; */
  background-color: rgba(116, 105, 105, 0.425);
}
</style>
