<template>
    <progress-loading type="spin" v-if="isLoading"></progress-loading>
    <div class="card"> 

        <div class="input-email" v-if="mode === 'email'">
            <header>
                <h5>Reset your password</h5>
            </header>
            <form @submit.prevent="sendCode">
                <section class="section1">
                    <div class="warning" v-if="emailEmpty">
                        <p class="fw-bold">Please fill in at least one field</p>
                        <p>Fill-in in order to reset your password</p>
                    </div>
                    <p>Please enter your email linked in your account</p>
                    <input type="email" placeholder="Email" v-model.trim="email">  
                </section>
                <section class="section2">
                    <button type="button" @click="close">Cancel</button>
                    <button type="submit">Send Code</button>
                </section>                   
            </form>
         
        </div>

        <div class="input-code" v-else>
            <header>
                <h5>Enter Security Code</h5>
            </header>
            <section class="section1">
            <div class="warning" v-if="allowSubmit">
                <p class="fw-bold">Please fill in at least one field</p>
                <p>Fill in in required field to reset your password</p>
            </div>
            <p>Please enter the code we sent to your email address.</p>
            <input type="email" placeholder="Enter Code" v-model.trim="code">  
            <input type="email" placeholder="password" v-model.trim="pass1">  
            <input type="email" placeholder="confirm password" v-model.trim="pass2">  
            </section>
            <section class="section2">
                <button class="back" @click="switchMode('email')">Back</button>
                <span>
                    <button @click="close">Cancel</button>
                    <button @click="submitCode">Submit</button>
                </span>
            </section>            
        </div>
    </div>
    
    
  </template>
  
  <script>
import ProgressLoading from '@/components/Reusable/LoadingScreens/ProgressLoading.vue'
  export default {
  components: { ProgressLoading },
    emits: ['close-forgot','toast-message'],
    data(){
        return{
            mode: 'email',
            email: '',
            emailEmpty: true,
            code: '',
            allowSubmit: true,
            isLoading: false,

            pass1: '',
            pass2: '',
            passwordMatch: false,
        }
    },
    methods:{
        switchMode(params){
            this.mode = params
        },
        close(){
            this.$emit('close-forgot')
        },
        async sendCode(){

            if(this.email.length > 0){
                this.isLoading = true
                this.emailEmpty = false
                
                try{
                    const response = await this.$store.dispatch('forgotPass/sendCode',this.email) 
                    this.$emit('toast-message',{message:response,status:'success'})
                    this.switchMode('code')
                    
                }catch(error){
                    this.$emit('toast-message',{message:error,status:'error'})
                }
                this.isLoading = false 
                
            }else{
                this.emailEmpty = true
            }
        },
        async submitCode(){
            
            if(this.code.length > 0){
                if(this.passwordMatch){
                    this.isLoading = true
                    this.allowSubmit = false
                    const payload = {
                        email: this.email,
                        recoveryCode: this.code,
                        password: this.pass2
                    }
                    try{
                        const response = await this.$store.dispatch('forgotPass/submitCode',payload)
                        this.$emit('toast-message',{message:response,status:'success'})
                        this.$emit('close-forgot')
                                             
                    }catch(error){
                        this.$emit('toast-message',{message:error,status:'error'})
                    }
                    this.isLoading = false   
                }else{
                    console.log('dili')
                    this.allowSubmit = true
                }
            }else{
                this.allowSubmit = true
            }
        },
    },
    watch:{
            pass1(newValue){
                console.log(this.pass1)
                console.log(newValue)
                if(newValue === this.pass2){
                    this.passwordMatch = true
                }else{
                    this.passwordMatch = false
                }
            },
            pass2(newValue){
                if(newValue === this.pass1){
                    this.passwordMatch = true
                }else{
                    this.passwordMatch = false
                }
            }
        }
  }
  </script>
  
  <style scoped>
    .warning{
        outline: 1px solid red;
        background-color: #FFEBE8;
        padding: .5rem;
    }
    p{
        font-size: clamp(0.5rem, 1vw, 1rem);
    }
    .back{
        border: none;
        background-color: transparent;
    }
   .section2  button{
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);
    margin-left: .5rem;
   }
   .section2{
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }
  input{
    width: 100%;
    padding: .5rem;
  }
   .section1{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
  h5{
    padding: 0;
    margin: 0;
  }
  header{
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    padding: 1rem;
  }
  .card{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);       
        border-radius: 5px;
        z-index: 3;
        background-color: white;
        outline: 1px solid black;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);

    }
  </style>