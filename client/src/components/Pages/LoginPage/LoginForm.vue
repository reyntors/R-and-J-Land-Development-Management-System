<template>
  <div class="background">
  </div>

    <progress-loading v-if="isLoadingComputed" />

    <!-- login -->
    <div class="cardLogin" v-if="goLoginComputed && !isLoadingComputed">
      <form @submit.prevent="">
          <div class="icon-container">
            <h5>Login</h5>
            <font-awesome-icon icon="fa-solid fa-x" size="1x"  class="icon" @click="close"/>
          </div>

          <div class="form">
            <div class="style-form">
                <input type="text" id="username" placeholder="" v-model.trim="loginUsername">
                <label for="username">Username</label>
            </div>

            <div class="style-form">
                <input type="password" placeholder=""  v-model.trim="loginPassword">
                <label for="password">Password</label>
            </div>

            <div class="style-form">
            <select v-model="roles" @change="checkRoleSelection">
              <option value="" disabled selected>Please select a role</option>
              <option value="guest">Guest</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>
          </div>

            <span class="error" v-if="isLoginErrorComputed">Please complete the form.</span>
            <div class="c-button">
              <button type="button" class="btn btn-primary p-2 fs-6" @click="login">LOGIN</button>
              <div class="or">
                <span/>or<span/>
              </div>
              <button type="button" class="btn btn-primary p-2 fs-6" @click="signUpInstead">SIGN UP</button>
            </div>  
          </div>
      </form>
    </div>
    <!-- signup-->
    <div class="cardSignup" v-if="!goLoginComputed && !isLoadingComputed">
      <form @submit.prevent="">
          <div class="icon-container">
            <h5>Sign up Form</h5>
            <font-awesome-icon icon="fa-solid fa-x" size="1x"  class="icon" @click="close"/>
          </div>

          <!-- form1 SIGNUP-->
          <div class="formSignUp1" v-if="!isNextComputed">
            <div class="style-form">
                <input type="text"  id="password" placeholder="" v-model.trim="signUpFullname">
                <label for="password">Fullname</label>
            </div>
            <div class="style-form">
                <input type="email"  id="email" placeholder="" v-model.trim="signUpEmail">
                <label for="email">Email</label>
            </div>
            <div class="style-form">
                <input type="tel"  id="contact" placeholder="" v-model.trim="signUpContact">
                <label for="contact">Contact No.</label>
            </div>
            <div class="style-form">
                <input type="text"  id="home-address" placeholder="" v-model.trim="signUpAddress">
                <label for="home-address">Home Address</label>
            </div>
            <div class="style-form">
                <input type="text"  id="fb-account" placeholder="" v-model.trim="signUpFbLink">
                <label for="fb-account">FB Account Link</label>
            </div>
            <div class="navNextContainer" @click="navigate">
              <font-awesome-icon icon="fa-solid fa-right-long" size="2x" class="iconNav"/>
            </div>  
            <p>Already have an account?<span class="loginInsteadButton" style="color: blue" @click="loginInstead">Log in</span></p>
          </div>

          <!-- form2 SIGNUP-->
          <div class="formSignUp2" v-else>
            <div class="style-form">
                <input type="text"  id="username" placeholder="" v-model.trim="signUpUsername">
                <label for="username">Username</label>
            </div>
            <div class="style-form" :class="{passwordConcernPromptContainer: !passwordStrongComputed && !passwordEmptyComputed}">
                <input type="text"  id="password" placeholder="" v-model.trim="signUpPassword">
                <label for="password">Password</label>
                <div class="hint">ex. MyP@ssw0rd</div>
                <div class="passwordConcernPrompt" v-if="!passwordStrongComputed && !passwordEmptyComputed">weak password</div>
            </div>
            <div class="style-form">
                <input type="text"  id="confirm" placeholder="" v-model.trim="signUpPasswordRepeat">
                <label for="confirm">Confirm Password</label>
                <div class="passwordConcernPrompt" v-if="!passwordMatchComputed && !passwordEmptyComputed">password don't match</div>
            </div> 
            <div class="style-form">
                <select v-model="signUpOrganization">
                  <option value="guest">Guest</option>
                  <option value="staff">Staff</option>
                  <option value="admin">Admin</option>
                </select>
            </div>
              <div class="navNextContainer" @click="navigate">
                <font-awesome-icon icon="fa-solid fa-left-long" size="2x" class="iconNav"/>
              </div> 
              <p class="signupError" v-if="isSignupErrorComputed">Please complete all required details.</p>
              <button type="button" class="btn btn-primary p-2 fs-6" @click="signup">SIGN UP</button> 
              <p>Already have an account?<span class="loginInsteadButton" @click="loginInstead">Log in</span></p>          
          </div>   
      </form>
    </div>
  <!-- </div> -->
</template>


<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  emits : ['close-button'],
  data(){
    return{
      goLogin: true,
      isNext: false,
      isLoginError: false,
      isSignupError: false,
      passwordStrong: true,
      passwordEmpty: true,
      passwordMatch: true,

      //login
      loginUsername: '',
      loginPassword: '',
      roles: '',

      //signup
      signUpFullname: '',
      signUpEmail: '',
      signUpContact: '',
      signUpAddress: '',
      signUpFbLink: '',
      signUpUsername: '',
      signUpPassword: '',
      signUpPasswordRepeat: '',
      signUpRoles: '',

      //pending boolean
      isLoading: false,
      isRequestError: false,

      //user details
      userRole: null,
      userTokenID: null,
      isLoggedInSuccessful: false,

    }
  },

  methods: {
    close(){
      this.$emit('close-button')
    },
    signUpInstead(){
      this.goLogin = false
    },
    loginInstead(){
      this.goLogin = true
    },
    navigate(){
      this.isNext = !this.isNext
    },

    passwordStrongChecker(param){
      if(param.length > 0){
        this.passwordEmpty= false
      }else{
        this.passwordEmpty= true
      }

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/;
      if (passwordRegex.test(param)){
        this.passwordStrong = true
      }else{
        this.passwordStrong = false
      }
    },

    passwordMatchChecker(param){
      if(param === this.signUpPassword){
        this.passwordMatch = true
      }else{
        this.passwordMatch = false
      }
    },

    async login() {
        if (this.loginUsername !== '' && this.loginPassword !== '' && this.loginRoles !== '') {
          this.isLoginError = false;
          this.isLoading = true;

          let response;

          // FETCH LOGIN REQUEST

          const credentials = {
            username: this.loginUsername,
            password: this.loginPassword,
            roles:    this.roles,
          }

          try {
            response = await this.$store.dispatch('auth/login', credentials);
            
              toast.success(response.message, { autoClose: 1000 });
              this.close()
              this.$router.replace('/home')
           
          } catch (error) {

            toast.error(error, { autoClose: 1000 });
          }

          this.isLoading = false;
        } else {
          // If the username, password, or roles are not provided
          this.isLoginError = true;
          toast.error("Please complete the form.", { autoClose: 1000 });
        }
      },

    async signup(){
      this.passwordStrongChecker(this.signUpPassword)
      this.passwordMatchChecker(this.signUpPasswordRepeat)
      this.isLoginError = false;
      this.isLoading = true;

      if(this.signUpAddress !== '' && this.signUpContact !== '' &&
        this.signUpEmail !== '' && this.signUpFbLink !== '' && 
        this.signUpFullname !== '' && this.signUpUsername !== '' && 
        this.passwordStrong === true && this.passwordMatch === true){
          
          //request SIGNUP
          this.isLoading = true;
          this.isSignupError = false

        
          const credentials = {
            fullname: this.signUpFullname,
            email: this.signUpEmail,
            contactNumber: this.signUpContact,
            homeAddress: this.signUpAddress, 
            fbAccount: this.signUpFbLink,
            username: this.signUpUsername,
            password: this.signUpPasswordRepeat,
           
          };



          try {
              const response = await this.$store.dispatch('auth/signup', credentials); // Assign the response

              if (response.message) {
                toast.success(response.message, { autoClose: 2000 });
                this.close();
                this.$router.replace('/home');
              } else {
                // Handle cases where there might not be a message in the response
                toast.success('Signed up successfully!', { autoClose: 2000 });
                this.close();
                this.$router.replace('/home');
              }
            } catch (error) {
              toast.error(error + '', { autoClose: 2000 });
            }
            this.isLoading = false;
          } else {
            console.log('ERROR SIGNING UP FORM');
            this.isSignupError = true;
          }
        }
  },

  computed: {
    goLoginComputed(){
      return this.goLogin
    },
    isNextComputed(){
      return this.isNext;
    },
    isLoginErrorComputed(){
      return this.isLoginError  
    },
    passwordStrongComputed(){
      return this.passwordStrong
    },
    passwordEmptyComputed(){
      return this.passwordEmpty
    },
    passwordMatchComputed(){
      return this.passwordMatch
    },
    isSignupErrorComputed(){
      return this.isSignupError
    },
    isLoadingComputed(){
      return this.isLoading
    },
  },

  watch: {
    signUpPassword(newPass){
      this.passwordStrongChecker(newPass)    
    },
    signUpPasswordRepeat(newPass){
      this.passwordMatchChecker(newPass)
    },
  }
}
</script>


<style scoped>
.style-form {
    position: relative;
}

.style-form input {
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

.cardLogin,.cardSignup{
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
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
.formSignUp1 .navNextContainer{
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: .2rem;
  font-weight: 5400;
}
.formSignUp2 .navNextContainer{
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: .2rem;
  font-weight: 5400;
}
.navNextContainer .iconNav:active,.navNextContainer .iconNav:hover{
  color: rgba(0, 0, 255, 0.566);
  font-weight: 500;
  background-color: rgba(192, 199, 206, 0.404);
  cursor: pointer;
}
.loginInsteadButton{
  cursor: pointer;
  color: blue;
}
.loginInsteadButton:active, .loginInsteadButton:hover{
  text-decoration: underline;
  font-weight: 500;
  text-decoration: underline;
}
.hint{
  padding: 0 5px; 
  text-align: start;
  font-size: x-small;
  /* border: 1px solid #ccc; */
}
.passwordConcernPromptContainer{
  border: 1px solid red;
}
.passwordConcernPrompt{
  background-color: red;
  color: white;
  font-weight: 200;
}
.signupError{
  color: red;
}
.error{
  color: red;
}
</style>