<template>
  <the-header/>
    <form-card id="letterOfIntent" title="Letter of Intent">

      <p style="margin-top: 1rem;">Date: <strong>{{ dateNow }}</strong></p> 
      <br>
      <p>{{ companyName }}</p>
      <p>{{ companyAddress }}</p> 


      <div class="mt-3"> 
        <p>Gentlemen:</p>
        <p>I/We hereby manifest my/our intent to purchase/lease:</p>
        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="floatingInput" placeholder="project name" v-model="projectName">
              <label for="floatingInput"><span>*</span> Project Name:</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="floatingInput" placeholder="lot no/unit no" v-model="lotNoUnitNo">
              <label for="floatingInput"><span>*</span> Lot(s) No/Unit No:</label>
            </div>
          </div>
        </div>        
      </div>


      <div class="mt-3">
        <p>For your reference, please see my information below</p>
        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="floatingInput" placeholder="Juan dela Cruz" v-model="fullname">
              <label for="floatingInput"><span>*</span> Full Name:</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="floatingInput" placeholder="filipino" v-model="citizenship">
              <label for="floatingInput"><span>*</span> Citizenship:</label>
            </div>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="floatingInput" placeholder="09132456789" v-model="mobileNo">
              <label for="floatingInput"><span>*</span> Mobile No.:</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="emailAddress">
              <label for="floatingInput"><span>*</span> Email Address:</label>
            </div>
          </div>          
        </div>
        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating mb-2">
              <input type="email" class="form-control" id="floatingInput" placeholder="Karl Borromeo" v-model="messengerAccount">
              <label for="floatingInput">Messenger Account:</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-2">
              <input type="email" class="form-control" id="floatingInput" placeholder="" v-model="viberNo">
              <label for="floatingInput">Viber No.:</label>
            </div>
          </div>          
        </div>


      </div>



        <div class="intalicize" style="font-style: oblique;">
          <strong>I understand  and agree on the following:</strong>
          <ul>
            <li>
              That this document does not  sifnify official booking of the sale.
            </li>
            <li>
              That the purpose of this document is ONLY to BLOCK-OFF the lot/unit No:<strong>{{ 'number' }}</strong>
            </li>
            <li>
              That I must submit all complete requirements and reservation fee <strong>with in 5 business days from the 
                date of this letter</strong> to officially record the above-mentioned Lot No./Unit No. as a sale/lease, 
                otherwise, {{ companyName }}<strong> will
                automatically</strong> open the blocked off Lot No./Unit No. to other interested prospect buyer(s).
            </li>
          </ul>
        </div>

        <submit-form-button @click="submit">Submit</submit-form-button> 
    </form-card>
</template>
  
<script>
import { toast } from 'vue3-toastify'
export default{
  methods:{
    checkReadySubmit(){
      if(
        this.dateNow !== null &&
        this.projectName !==  '' &&
        this.lotNoUnitNo !==  '' &&
        this.fullname !==  '' &&
        this.citizenship !==  '' &&
        this.mobileNo !== '' &&
        this.emailAddress !==  ''
      ){
        return true
      }else{
        return false
      }
    },
    submit(){
      const isReady = this.checkReadySubmit()
      if(isReady){
        const payload = {
          dateNow: this.dateNow,
          projectName: this.projectName,
          lotNoUnitNo: this.lotNoUnitNo,
          fullname: this.fullname,
          citizenship: this.citizenship,
          mobileNo: this.mobileNo,
          emailAddress: this.emailAddress,
          messengerAccount: this.messengerAccount,
          viberNo: this.viberNo,          
        }

          console.log(payload)
          this.$router.push("/guest-forms/buyer-info-sheet")

      }else{
        toast.warning('Please check your information and fill out the required fields',{autoClose: false})
      }
    }
  },
  data(){
    return{
      dateNow: null,
      projectName: '',
      lotNoUnitNo: '',
      fullname: '',
      citizenship: '',
      mobileNo:'',
      emailAddress: '',
      messengerAccount: '',
      viberNo: '',
    }
  },
  computed: {
    companyName(){
      return this.$store.getters.companyName
    },
    companyAddress(){
      return this.$store.getters.companyAddress
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
.date{
  border: none;
}
.date:focus{
  outline: none;
}
span{
  color: red;
}
</style>
