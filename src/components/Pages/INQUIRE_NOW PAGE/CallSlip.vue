<template>
    <form-card title="Call Slip">
      <div class="call-slip">
<br>
        <p style="text-align: end;">Date: <input type="date" v-model="date"></p>
<br>
        <div class="prospect-name">
          Prospect's Name:
          <span>
            <input placeholder="Lastname" v-model="lastName">
            <input placeholder="Firstname" v-model="firstName">
            <input placeholder="Middle" v-model="middleName">
          </span>
        </div>
<br>
        <div class="spouse">
          Spouse Name (if married)
          <span>
            <input placeholder="Spouse fullname" v-model="spouseName">
          </span>
        </div>
<br>
        <div class="contact">
          Contact Numbers: 
          <span>Tel No.</span><input v-model="telNumber">
          <span>Mobile</span><input v-model="contactNumber">
          <span>Email Address</span><input v-model="email">
        </div>
<br>
        <div>
          <p>Prospect/s interested in:</p>
          <div>
            <p>Prospects from:</p>
            <div class="checkboxes-cont">
              <section class="checkbox-item">
                <input type="checkbox" id="check-1" value="regular rospect" v-model="prospects"> <label for="check-1">regular prospect</label></section>
              <section class="checkbox-item">
                <input type="checkbox" id="check-2" value="referral" v-model="prospects"> <label for="check-2">referral</label></section>
              <section class="checkbox-item">
                <input type="checkbox" id="check-3" value="open house" v-model="prospects"> <label for="check-3">open house</label></section>
              <section class="checkbox-item">
                <input type="checkbox" id="check-4" value="office-in-charge" v-model="prospects"> <label for="check-4">office-in-charge</label></section>
              <section class="checkbox-item">
                <input type="checkbox" id="check-5" value="fb/website" v-model="prospects"> <label for="check-5">fb/website</label></section>
              <section class="checkbox-item">
                <input type="checkbox" id="check-6" value="mall exhibits" v-model="prospects"> <label for="check-6">mall exhibits</label></section>           
            </div>
          </div>
        </div>
 <br>
  <!--      <div class="signature-cont">
          
          <div class="grid-item">
            <div>
              <span class="label">Signed By:</span>
              <span class="underline"></span>
            </div>
            <div>
              <span class="label"></span>
              <div class="underline-text">Prospect Buyer</div>
            </div> 
          </div>

          <div class="grid-item">
            <div>
              <span class="label">Submitted By:</span>
              <span class="underline"></span>
            </div>
            <div>
              <span class="label"></span>
              <div class="underline-text">Real Estate Broker</div>
            </div> 
          </div>

          <div class="grid-item">
            <div>
              <span class="label">Received By:</span>
              <span class="underline"></span>
            </div>
            <div>
              <span class="label"></span>
              <div class="underline-text"><p>Signature/Date/Time</p><p>Sales Staff</p></div>
            </div> 
          </div>
          
          <div class="grid-item">
            <div>
              <span class="label">Noted By:</span>
              <span class="underline"></span>
            </div>
            <div>
              <span class="label"></span>
              <div class="underline-text"><p><strong>JESSSA MAED D. SISI</strong></p><p>Sales Manager</p></div>
            </div> 
          </div>
          
        </div> -->

      </div>

      <submit-form-button @click="submitCallSlip">Submit</submit-form-button>
    </form-card>
</template>
  
<script>
import { toast } from 'vue3-toastify'
export default {
  data(){
    return{
      date : "",
      lastName : "",
      firstName : "",
      middleName : "",
      telNumber : "",
      spouseName : "",
      email : "",
      contactNumber : "",
      prospects : []
    }
  },
  methods:{
    getData(){
      return{
        date : this.date,
        lastName : this.lastName,
        firstName : this.firstName,
        middleName : this.middleName,
        telNumber : this.telNumber,
        spouseName : this.spouseName,
        email : this.email,
        contactNumber : this.contactNumber,
        prospects : this.prospects    
      }
    },
    async submitCallSlip(){
      const payload = this.getData()
      try{
        const response = await this.$store.dispatch('callSlip/submitcallSlip',payload)
        toast.success(response, {autoClose: 1000})
      }catch(error){
        toast.error(error)
      }
    }
  }

}
</script>

<style scoped>
p{
  margin: 0;
}
.call-slip{
  font-size: clamp(.6rem, 1.2vw, 2rem);  
}

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