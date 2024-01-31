<template>
  
  <div style="position: absolute; z-index: 10; top:0; left: 0; width: 100%; height: 100%; background-color: red; visibility: hidden;">
    <progress-loading type="torks"/>
  </div>
  <progress-loading type="torks" v-if="isLoading"></progress-loading>
  <div class="cardLogin" v-else>
        <form @submit.prevent="login">
            <div class="icon-container">
              <h5>Login Form</h5>
              <font-awesome-icon icon="fa-solid fa-x" size="1x"  class="icon" @click="close"/>
            </div>
  
            <div class="form">
              <div class="style-form">
                  <input type="text" id="username" placeholder="" v-model.trim="loginUsername">
                  <label for="username">Username</label>
              </div>
  
              <div class="style-form">
                  <input type="password" placeholder=""  v-model.trim="loginPassword" @keydown="keydown">
                  <label for="password">Password</label>
              </div>
  
              <div class="style-form">
                  <select v-model="roles">
                    <option value="" disabled selected>Please select a role</option>
                    <option value="realtor">Realtor</option>
                    <option value="customer">Customer</option>
                    <option value="staff">Staff</option>
                    <option value="management">Management</option>
                  </select>
              </div>
  
              <span class="error" v-if="isLoginErrorComputed">Please complete the form.</span>
              <div class="c-button">
                <button type="submit" class="btn btn-primary p-2 fs-6">LOGIN</button>
                <p class="forgot-text" @click="forgotPassword">forgot password?</p>
                <div class="or">
                  <span/>or<span/>
                </div>
                <button type="button" class="btn btn-primary p-2 fs-6" @click="signUpInstead">SIGN UP</button>
              </div>  
            </div>
        </form>
      </div>
</template>

<script>
import ProgressLoading from '@/components/Reusable/LoadingScreens/ProgressLoading.vue';
import { toast } from 'vue3-toastify';
export default {
  emits : ['close-login','switch-signup','switch-forgot'],
  components: {ProgressLoading},
  data(){
    return{
      // goLogin: true,
      // isNext: false,
      isLoginError: false,
      isLoading : false,
      // isSignupError: false,
      // passwordStrong: true,
      // passwordEmpty: true,
      // passwordMatch: true,
  
      //login
      loginUsername: '',
      loginPassword: '',
      roles: 'customer',
    }
  },
  methods:{
    close(){
      this.$emit('close-login')
    },
    keydown(event){
        if(event.key === 'Enter'){
          this.login()
        }
    },
  
    async login(){
        if(this.loginUsername !== '' && this.loginPassword !=='' && this.loginRoles !== ''){
          console.log('logging in Now')
          this.isLoginError = false;
          this.isLoading = true;
  
          const credentials = {
            username: this.loginUsername,
            password: this.loginPassword,
            roles    : this.roles,
          }
          //FETCH LOGIN REQUEST
          try{
  
            const response  = await this.$store.dispatch('auth/login',credentials) //log in http request
  
            toast.success(response.message, {autoClose: 2000,});
            
            this.close()
            console.log('loginview',response.data.roles)
  
            if(response.data.roles === 'realtor' || response.data.roles === 'customer'){
              const isRedirectToLetterOfIntent = this.$store.getters['subdivision/redirectToFormGetter']  //var holder to decide to redirect to the letterof intent or not
              if(isRedirectToLetterOfIntent){
                const isSubmitLetterOfintent = this.$store.getters['auth/submittedLetterOfIntentGetter']
                const isSubmitBuyerInfoSheet = this.$store.getters['auth/submittedBuyerInfoGetter']
                if(!isSubmitLetterOfintent && !isSubmitBuyerInfoSheet){   //if not submitted neither letter of intent or buyer info sheet
                  this.$router.push('/guest-forms/letter-of-intent')
                }else if(!isSubmitLetterOfintent && isSubmitBuyerInfoSheet){  //if submitted buyer info sheet but not letter of intent
                  this.$router.push('/guest-forms/letter-of-intent')
                }else if(isSubmitLetterOfintent && !isSubmitBuyerInfoSheet){  //if submitted letter of intent but not buyer info sheet
                  this.$router.push('/guest-forms/buyer-info-sheet')
                }else{
                  toast.info('Submitted Already a Reservation Request')
                  toast.info('Only Once allowed to Avoid Spamming.')
                }
              }else{
                this.$router.replace('/home')     //redirect to home
              }

            }else{
              this.$router.replace('/personnel/client')
            } 
          }catch(error){
            
            toast.error(error+'', {autoClose: 3000,});
  
          }
          this.isLoading = false;
         
        }else{
          //error
          console.log('ERROR LOGIN FORM ')
          this.isLoginError = true;
        }
    },
    signUpInstead(){
      this.$emit('switch-signup')
    },
    forgotPassword(){
      console.log('forgot switch')
      this.$emit('switch-forgot')
    }
    
  },
  computed:{
    isLoginErrorComputed(){
        return this.isLoginError  
      },
  }

}
</script>

<style scoped>
.forgot-text {
  font-weight: 100;
  font-size: clamp(0.5rem, 1vw, 1rem);
  margin:5px;
  color:blue;
  cursor: pointer;
  transition: font-weight ease-in .5s;
  display: inline;
}
.forgot-text:hover{
  font-weight: 900;
}
.forgot-text:active{
  color: black;
}
  .hideVisibility{
    background-color: transparent;
  }
  .style-form {
      position: relative;
  }
  .style-form input,select {
      width: 100%;
      padding: 9px;
      border: 1px solid #ccc;
      border-radius: 4px;
  }
  
  .style-form label {
      position: absolute;
      top: 9px;
      left: 9px;
      pointer-events: none;
      transition: top 0.2s, font-size 0.2s;
  }
  .style-form select{
    box-shadow:  0 0 1px 1px rgb(210, 205, 205);
    cursor: pointer;
  }
  
  .style-form input:focus + label,
  .style-form input:not(:placeholder-shown) + label {
      top: 0px;
      font-size: 10px;
      font-weight: 300;
  }
  
  .cardLogin{
      position: absolute;
      top: 50%;
      /* margin-top: 15vh; */
      left: 50%;
      transform: translate(-50%,-50%);
      width: 30vw;
      min-width: 250px;
      min-height: 300px;
      border-radius: 10px;
      padding: 2rem;
      z-index: 3;
      background-color: white;
      outline: 1px solid black;
      text-align: center;
  }
  .icon-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon{
  
    padding: 1rem;
  }
  .icon:active, .icon:hover{
    background-color:rgba(195, 181, 181, 0.451);
    cursor: pointer;
  }
  img{
    width: 40%;
  }
  .form,.formSignUp1, .formSignUp2{
  
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .c-button{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
  }
  .c-button span{
    display: inline-block;
    width: 50%;
    border: .5px solid rgba(156, 139, 139, 0.721);
    margin: 0 .5rem;
  }
  .or{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .background{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(116, 105, 105, 0.425);
    z-index: 1;
  }
  </style>