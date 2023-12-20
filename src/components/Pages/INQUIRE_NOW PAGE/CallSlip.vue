<template>
    <form-card title="Inquire Now" style="position: relative;">
      <div class="call-slip">

        <div class="mt-3">
          <p style="text-align: end;">Date: <strong>{{ dateNow }}</strong> </p>
        </div>
        

<!-- name -->
        <div class="mb-3">
          <label class="form-label">Prospect's Name:</label>
          <div class="row g-2">
            <div class="col-md">
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="filipino" v-model.trim="lastName">
                <label for="floatingInput"><span>*</span> Last Name:</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="filipino" v-model.trim="firstName">
                <label for="floatingInput"><span>*</span> First Name:</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="filipino" v-model.trim="middleName">
                <label for="floatingInput"><span>*</span> Middle Name:</label>
              </div>
            </div>
          </div>
        </div>
<!-- spouse -->
        <div class="mb-3">
          <label for="spouseName" class="form-label">Spouse Name (if married)</label>
          <input type="text" class="form-control" id="spouseName" placeholder="Juan dela Cruz" v-model.trim="spouseName">
        </div>

        <div class="mb-3">
          <label class="form-label">Contact Numbers: </label>
          <div class="row g-2">
            <div class="col-md">
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="filipino" v-model.trim="messengerAcc">
                <label for="floatingInput"><span>*</span> Messenger Account:</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="filipino" v-model.trim="contactNumber">
                <label for="floatingInput"><span>*</span> Mobile No:</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating mb-2">
                <input type="email" class="form-control" id="floatingInput" placeholder="filipino" v-model.trim="email">
                <label for="floatingInput"><span>*</span> Email Address:</label>
              </div>
            </div>
          </div>
        </div>
<!-- prospect interested -->
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Prospect/s interested in </label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" v-model.trim="interestIn"></textarea>
        </div>
<!-- prospects from-->
        <div class="">
          <label class="form-label">Prospects from: </label>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="regular prospect" id="regular-prospect" v-model.trim="prospects">
            <label class="form-check-label" for="regular-prospect">
              Regular Prospect
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="referral" id="refferal" v-model.trim="prospects">
            <label class="form-check-label" for="refferal">
              Referral
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="open house" id="open-house" v-model.trim="prospects">
            <label class="form-check-label" for="open-house">
              Open House
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="office in charge" id="office-in-charge" v-model.trim="prospects">
            <label class="form-check-label" for="office-in-charge">
              Office-in-Charge
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="fb/website" id="fb-website" v-model.trim="prospects">
            <label class="form-check-label" for="fb-website">
              FB/Website
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="mall exhibits" id="mall-exhibits" v-model.trim="prospects">
            <label class="form-check-label" for="mall-exhibits">
              Mall Exhibits
            </label>
          </div>
        </div>
        <blur-loading v-if="isLoading"></blur-loading>
        <!-- <progress-loading type="torks"></progress-loading> -->
   </div>

      <submit-form-button @click="submitCallSlip">Submit</submit-form-button>
  
  </form-card>
</template>
  
<script>
import { toast } from 'vue3-toastify'
export default {
  data(){
    return{
      dateNow : null,
      lastName : "",
      firstName : "",
      middleName : "",
      contactNumber : "",
      spouseName : "",
      email : "",
      messengerAcc : "",
      prospects : [],

      isLoading : false,
    }
  },
  methods:{
    allowedSubmition(){
      if(this.lastName != "" && this.lastName != "" && this.firstName != "" && this.contactNumber != "" && this.email != "" && this.messengerAcc != ""
        && this.prospects.length>0)
        {
          return true
        }
      else{
        return false
      }
    },
    getData(){
        return{
        date : this.dateNow ,
        lastName : this.lastName,
        firstName : this.firstName,
        middleName : this.middleName,
        contactNumber : this.contactNumber,
        spouseName : this.spouseName,
        email : this.email,
        messengerAcc : this.messengerAcc,
        interestIn: this.interestIn,
        prospects : this.prospects    
      }
    },
    async submitCallSlip(){
      const allowed = this.allowedSubmition()
      if(allowed){
        this.isLoading = true
        const payload = this.getData()
        try{
          const response = await this.$store.dispatch('callSlip/submitcallSlip',payload)
          toast.success(response, {autoClose: 500})
        }catch(error){
          toast.error(error)
        }     
        this.isLoading = false   
      }else{
        toast.warning('Please complete the required details')
      }

    }
  },
  created(){
    const dateNow = new Date();
    const dateString = dateNow.toISOString().split('T')[0];
    this.dateNow = dateString
  }

}
</script>

<style scoped>
p{
  margin: 0;
}
/* .call-slip{
  font-size: clamp(.6rem, 1.2vw, 2rem);  
} */

/*prospect and spouse */
.prospect-name,.spouse {
  display: flex;
}
.prospect-name span,.spouse span {
  display: flex;
  flex-grow: 1;
  margin-left: .5rem;
}
.prospect-name span input {
  box-sizing: border-box;
  margin: 0 3px;
  width: calc(100%/3);
  height: 100%;
  padding: 0 .5rem;
  border: none;
  border-bottom: 1px solid black;
}
.spouse span input{
  width: 100%;
  height: 100%;
  padding: 0 .5rem;
  border: none;
  border-bottom: 1px solid black;
}

.contact{
  display: flex;
  column-gap: .5rem;
  /* flex-direction: column; */
}
@media screen and (max-width: 655px) {
  .contact{
    flex-direction: column;
  }
}

/*PROSPECTS*/
.checkboxes-cont{
  display: flex;
  flex-wrap: wrap;
  column-gap: .5rem;
  padding-left: 1rem;
}
.checkboxes-cont .checkbox-item{
  padding: .2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
}

.signature-cont{
  /* border: 1px solid black; */
  display: grid;
  grid-template-columns: repeat(2,1fr);
}
.grid-item{
  padding: .5rem;
}
.grid-item div{
  display: flex;
}
.grid-item div span{
  display: inline-block;
}
.grid-item .label{
  display: inline-block;
  width: 10vw;
  min-width: 60px;
  /* outline: 1px solid black; */
}
.grid-item div .underline{
  width: 100%;
  border-bottom: 1px solid black;
}
.grid-item div .underline-text{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start; 
  align-items: center;
}
@media screen and (max-width: 655px) {
  .signature-cont{
  grid-template-columns: repeat(1,1fr);
  }
}

</style>