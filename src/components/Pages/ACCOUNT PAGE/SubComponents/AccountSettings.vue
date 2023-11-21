<template>
   <form class="account-settings-cont" enctype="multipart/form-data" @submit.prevent="updateProfile">
      <section>
         <h4>Settings</h4>
      </section>
      
      <article>

         <section class="form-section">
            <label>Profile</label>
            <div style="position: relative;"> 
               <section class="image">
                  <img :src="mySettings.profilePicture">
               </section>  
               <input id="upload-avatar" type="file" accept="image/*" @change="setUploadedImg">             
            </div>
         </section>

         <section class="form-section">
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="userIdPersonnel" placeholder="" v-model="mySettings.userId" readonly>
              <label for="userIdPersonnel">User Account ID (not editable)</label>
            </div>
         </section>
        
         <section class="form-section">
            <!-- <label>Email Linked (not editable)</label>
            <input v-model="mySettings.email" readonly> -->
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="emailPersonnel" placeholder="" v-model="mySettings.email" readonly>
              <label for="emailPersonnel">Email Linked (not editable)</label>
            </div>
         </section>
         <section class="form-section">
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="usernamePersonnel" placeholder="" v-model="mySettings.username">
              <label for="usernamePersonnel">Username</label>
            </div>
         </section>
            
         <section class="form-section">

            <section style="position: relative">
               <div class="form-floating mb-2">
                  <input :type="passwordVisibilityComputed" class="form-control" id="newPassPersonnel" placeholder="" v-model.trim="newPassword">
                  <label for="newPassPersonnel">New Password</label>
               </div>
               <span class="eye" @click="togglePasswordVisibility">
                  <font-awesome-icon icon="fa-solid fa-eye" v-if="passwordVisibility"/>
                  <font-awesome-icon icon="fa-solid fa-eye-slash" v-else />   
               </span>
            </section>
            </section>
            <section class="form-section">
            <section style="position: relative">
               <div class="form-floating mb-2">
                  <input :type="passwordVisibilityComputed" class="form-control" id="confirmNewPassPersonnel" placeholder=""  v-model.trim="confirmedPassword">
                  <label for="confirmNewPassPersonnel">Confirm Password</label>
               </div>
               <span class="eye" @click="togglePasswordVisibility">
                  <font-awesome-icon icon="fa-solid fa-eye" v-if="passwordVisibility"/>
                  <font-awesome-icon icon="fa-solid fa-eye-slash" v-else />  
               </span>
            </section>   

         </section>         

      </article>

      <button type="submit" class="submit-btn fw-bold">Update</button>

      <submit-code v-if="submitCodeBool" 
         @close-submit-code="closeSubmitCode"
         @submit-code="submitCode"
         @resend-code="updateProfile"
      ></submit-code>  
      
      <div class="background" v-if="isLoading"></div>
      <progress-loading type="torks" v-if="isLoading"/>
  </form>
</template>

<script>
import SubmitCode from './SubComp/SubmitCode.vue'
import { toast } from 'vue3-toastify'
import ProgressLoading from '@/components/Reusable/LoadingScreens/ProgressLoading.vue'
export default {
   props: ['settings'],
   components: {SubmitCode, ProgressLoading},
   data(){
      return{
         isLoading: false,
         mySettings: null,
         editPasswordBool: false ,
         passwordVisibility: false,

         newImage: null,
         newPassword: '',
         confirmedPassword : '',

         profileChangedBool: false,
         usernameChangedBool: false,
         paswordMatchBool: false,

         submitCodeBool: false,
         resendCodeObj: null,
      }
   },
   methods:{
      editPassword(){
         this.editPasswordBool = true
      },
      togglePasswordVisibility(){
         this.passwordVisibility = !this.passwordVisibility
      },
      setUploadedImg(event){
         const img = event.target.files[0]
         const blob = new Blob([img],{type: 'image/jpeg'})
         const url = URL.createObjectURL(blob)
         this.mySettings.profilePicture = url
         this.newImage = img
      },
      logout(){
         this.$store.commit('auth/eraseStoreState')
         this.$store.commit('auth/eraseLocalStorage')
         this.$router.push('/home')
      },

      async updateProfile(){
         const payload = {}

         //add to the object if the user update profile
         if(this.profileChangedBool){
            payload.image = this.newImage
            // this.requestNow(payload)
         }

         //add to the object if the user changed the username
         if(this.usernameChangedBool){
            payload.username = this.mySettings.username
            // this.requestNow(payload)
         }

         //add the new password to the object, and it will add if the password is matched
         if(this.newPassword){
            if(this.paswordMatchBool){
               payload.password = this.confirmedPassword
            }
         }

         // console.log(payload)
         // check if the object is empty, check if there is no changes on the inputs
         if(Object.keys(payload).length>0){
            this.isLoading = true

            if(this.newPassword){
               if(this.paswordMatchBool){
                  console.log(payload)
                  try{
                  const response = await this.$store.dispatch('mySettings/updateMyAccountSettings',payload)
                  toast.success(response)
                  // if(this.usernameChangedBool || this.newPassword){

                  this.resendCodeObj = payload
                  this.submitCodeBool = true

                  if(payload.image){
                     this.$store.commit('auth/updateProfilePictureLocal',payload.image)
                  }
                     // }
                  }catch(error){
                     console.log(error)            
                  }                   
               }else{
                  toast.warning("your password doesn't match")
               }
            }else{
               console.log(payload)
               try{
                  const response = await this.$store.dispatch('mySettings/updateMyAccountSettings',payload)
                  toast.success(response)
                  if(this.usernameChangedBool){

                     this.resendCodeObj = payload
                     this.submitCodeBool = true
                  }

                  if(payload.image){
                     this.$store.commit('auth/updateProfilePictureLocal',payload.image)
                  }
               }catch(error){
                  console.log(error)            
               }                       
            }

            this.isLoading = false   
         }     
         else{
            toast.warning('no changes occured')
         }

      },
      async submitCode(code){
         console.log('submit code executed')
         console.log(code)
         if(code){
            const payload = {'recoveryCode':code}
            try{
               const response = await this.$store.dispatch('mySettings/updateMyAccountSettings',payload)
               toast.success(response)
               await new Promise(resolve => setTimeout(resolve, 2000))
               this.logout()  
            }catch(error){
               toast.error(error.message)
            }
         }
         
      },
      closeSubmitCode(){
         this.submitCodeBool = false
      }
   },
   computed:{
      passwordVisibilityComputed(){
         if(this.passwordVisibility === true){
            return 'text'
         }else{
            return 'password'
         }
      }
   },
   created(){
      this.mySettings = {...this.settings}
   },
   watch:{
      'mySettings.profilePicture': function(newValue){
         if(newValue !== this.settings.profilePicture){
            this.profileChangedBool = true
         }else{
            this.profileChangedBool = false
         }
      },
      'mySettings.username':function(newValue){
         if(newValue !== this.settings.username){
            this.usernameChangedBool = true
         }else{
            this.usernameChangedBool = false
         }
      },
      confirmedPassword(newValue){
         if(newValue === this.newPassword){
            this.paswordMatchBool = true
         }else{
            this.paswordMatchBool = false
         }
      },
      newPassword(newValue){
         if(newValue === this.confirmedPassword){
            this.paswordMatchBool = true
         }else{
            this.paswordMatchBool = false
         }
      }
   },
   mounted(){
      console.log('created setttings')
   }
}
</script>

<style scoped>
button:active{
   opacity: 0.5;
}
button:hover{
   color: black;
}
button{
   border: none;
   box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
   color: white;
   background-color: #31A72A;
}
.background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.4px);
    -webkit-backdrop-filter: blur(9.4px);
}
.submit-btn{
   position: absolute;
   top: 0;
   right: 0;
   padding: .5rem 1rem;
   margin: .5rem 1rem;
   border-radius: 5px;
}
.eye{
   position: absolute;
   right: 0;
   top: 50%;
   margin-right: 1rem;
}
.change-pass-btn{
   padding: .2rem .5rem;
   border: none;
   outline: 1px solid rgba(0, 0, 0, 0.5);
}
img{
   width: 100%;
   height: 100%;
   object-fit: cover;
}
.image{
   border: 1px solid black;
   width: 200px;
   height: 200px;
}
.form-section{
  padding: .5rem 1rem;
}
input{
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 5px;
  width: 100%;
}
.form-section label{
  min-width: 145px;
}
article{
   padding: 0 1rem;
}
.account-settings-cont{
   width: 90%;
   margin: 0 auto 2rem;
   position: relative;
   padding: 5px;
   margin-top: 2rem;
   margin-bottom: 2rem;
   padding: 1rem;
   background-color: rgba(255, 255, 255, 0.7);
    border: 1px solid white;
    border-radius: 5px; 
}
</style>