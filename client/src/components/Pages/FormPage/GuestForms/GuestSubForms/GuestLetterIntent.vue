<template>
  <the-header />

  <form-card id="letterOfIntent" title="Letter of Intent">
    <p style="margin-top: 1rem;">Date: <input type="date" v-model.trim="date" :class="{empty:isDateEmpty}"></p> 
    <br>
    <p>{{ companyName }}</p>
    <p>{{ companyAddress }}</p> 
    <br>
    <p>Gentlemen:</p>
    <p>I/We hereby manifest my/our intent to purchase <input v-model.trim="purchase" :class="{empty:isPurchaseEmpty}"> lot(s)/unit(s)</p>
    <div class="checkboxes" :class="{empty:isProjectEmpty}">
      <strong>Project:</strong>
      <input type="radio" value="type1" id="check1" v-model="project"><label for="check1">Northown</label>
      <input type="radio" value="type2" id="check2" v-model="project"><label for="check2">Northcrest</label>
      <input type="radio" value="type3" id="check3" v-model="project"><label for="check3">Eden Ridge</label>
      <input type="radio" value="type4" id="check4" v-model="project"><label for="check4">Narra Park Residence</label>
    </div>
    <div class="location">
      <b>Location:</b>
      <section>
        <div><label>PH</label>:<input v-model.trim="locationPH" :class="{empty:islocationPHEmpty}"></div>
        <div><label>Blk</label>:<input v-model.trim="locationBlk" :class="{empty:islocationBlkEmpty}"></div>
        <div><label>Lot/Unit</label>:<input v-model.trim="locationLotOrUnit" :class="{empty:islocationLotOrUnitEmpty}"></div>          
      </section>

    </div>

    <section class="reference">
        For your reference, please see my information below;
        <div>
            <label>Name</label>:
          <input v-model.trim="name" :class="{empty:isnameEmpty}">
        </div>
        <div>
            <label>Address</label>:
            <input v-model.trim="address" :class="{empty:isaddressEmpty}">
        </div>
        <div>
            <label>Citizenship</label>:
            <input v-model.trim="citizenship" :class="{empty:iscitizenshipEmpty}">
        </div>
        <div>
            <label>Contact No.</label>:
            <input v-model.trim="contactNo" :class="{empty:iscontactNoEmpty}">
        </div>
        <div>
            <label>Email Address</label>:
            <input type="email" v-model.trim="emailAddress" :class="{empty:isemailAddressEmpty}">
        </div>
    </section>

      <div class="intalicize">
        <strong>I understand  and agree on the following:</strong>
        <ul>
          <li>
            That this document does not  sifnify official booking of the sale.
          </li>
          <li>
            That the purpose of this document is <strong>only to BLOCK-OFF the lot/unit within SEVEN (7)
              WORKING DAYS.</strong>
          </li>
          <li>
            That I must submit all complete requirements and reservation fee not later than <input v-model.trim="reservationTimeSpan" :class="{empty:isreservationTimeSpanEmpty}"> to
            officially record the above-mentioned lot/unit as a safe, otherwise, ALsons Deve will <strong>
              automatically</strong> open the blocked off lot/unit other interested prospect buyers.
          </li>
        </ul>
      </div>

      <div class="client">
        <p>Sincerley yours,</p>
        <div>
          <div class="signature">Name of Client & Signature</div>
          <div class="date">DATE</div>
        </div>
      </div>
      <div class="receiver">
        <p>Received by:</p>
        <div>
          <div class="signature">Name of Client & Signature</div>
          <div class="date">DATE</div>
        </div>
      </div>
      <submit-form-button @click="submit"> Submit</submit-form-button>
  </form-card>  
  <the-footer/>
</template>

<script>

import TheFooter from '@/components/Reusable/TheFooter.vue'
export default{
components: { TheFooter },
data(){
  return{
    date: '',
    dateEmpty:false,

    purchase: '',
    purchaseEmpty: false,

    //chekcbox project
    project: null,
    projectEmpty:false,

    //location
    locationPH: '',
    locationPHEmpty: false,
    locationBlk: '',
    locationBlkEmpty: false,
    locationLotOrUnit: '',
    locationLotOrUnitEmpty: false,

    //reference
    name:'',
    nameEmpty: false,
    address: '',
    addressEmpty: false,
    citizenship: '',
    citizenshipEmpty: false,
    contactNo: '',
    contactNoEmpty: false,
    emailAddress: '',
    emailAddressEmpty: false,

    //reservation
    reservationTimeSpan: '',
    reservationTimeSpanEmpty:false,
  }
},
computed: {
  companyName(){
    return this.$store.getters.companyName
  },
  companyAddress(){
    return this.$store.getters.companyAddress
  },

  //ui
  isDateEmpty(){
    return this.dateEmpty
  },
  isPurchaseEmpty(){
    return this.purchaseEmpty
  },
  isProjectEmpty(){
    return this.projectEmpty
  },
  islocationPHEmpty(){
    return this.locationPHEmpty
  },
  islocationBlkEmpty(){
    return this.locationBlkEmpty
  },
  islocationLotOrUnitEmpty(){
    return this.locationLotOrUnitEmpty
  },
  isnameEmpty(){
    return this.nameEmpty
  },
  isaddressEmpty(){
    return this.addressEmpty
  },
  iscitizenshipEmpty(){
    return this.citizenshipEmpty
  },
  iscontactNoEmpty(){
    return this.contactNoEmpty
  },
  isemailAddressEmpty(){
    return this.emailAddressEmpty
  },
  isreservationTimeSpanEmpty(){
    return this.reservationTimeSpanEmpty
  }
},
methods: {

  checkDate(){
    this.dateEmpty = this.date!==''?false:true
    return this.dateEmpty
  },
  checkpurchase(){
    this.purchaseEmpty = this.purchase!==''?false:true
    return this.purchaseEmpty
  },
  checkproject(){
    this.projectEmpty = this.project!==null?false:true
    return this.projectEmpty
  },
  checklocationPH(){
    this.locationPHEmpty = this.locationPH!==''?false:true
    return this.locationPHEmpty
  },
  checklocationBlk(){
    this.locationBlkEmpty = this.locationBlk!==''?false:true
    return this.locationBlkEmpty
  },
  checklocationLotOrUnit(){
    this.locationLotOrUnitEmpty = this.locationLotOrUnit!==''?false:true
    return this.locationLotOrUnitEmpty
  },
  checkname(){
    this.nameEmpty = this.name!==''?false:true
    return this.nameEmpty
  },
  checkaddress(){
    this.addressEmpty = this.address!==''?false:true
    return this.addressEmpty
  },
  checkcitizenship(){
    this.citizenshipEmpty = this.citizenship!==''?false:true
    return this.citizenshipEmpty
  },
  checkcontactNo(){
    this.contactNoEmpty = this.contactNo!==''?false:true
    return this.contactNoEmpty
  },
  checkemailAddress(){
    this.emailAddressEmpty = this.emailAddress!==''?false:true
    return this.emailAddressEmpty
  },
  checkreservationTimeSpan(){
    this.reservationTimeSpanEmpty = this.reservationTimeSpan!==''?false:true
    return this.reservationTimeSpanEmpty
  },

  checkAllEmpty(){
    this.checkDate()
    this.checkpurchase()
    this.checkproject()
    this.checklocationPH()
    this.checklocationBlk()
    this.checklocationLotOrUnit()
    this.checkname()
    this.checkaddress()
    this.checkcitizenship()
    this.checkcontactNo()
    this.checkemailAddress() 
    this.checkreservationTimeSpan() 
  },

  checkReadySubmit(){
    if(
      !this.checkDate() &&
      !this.checkpurchase() &&
      !this.checkproject() &&
      !this.checklocationPH() &&
      !this.checklocationBlk() &&
      !this.checklocationLotOrUnit() &&
      !this.checkname() && 
      !this.checkaddress() &&
      !this.checkcitizenship() &&
      !this.checkcontactNo() &&
      !this.checkemailAddress() &&
      !this.checkreservationTimeSpan() 
    ){
      return true
    }else{
      return false
    }
  },

  getAllData(){
    return{
      date: this.date,
      purchase: this.purchase,
      project: this.project,
      locationPH: this.locationPH,
      locationBlk: this.locationBlk,
      locationLotOrUnit: this.locationLotOrUnit,
      name: this.name,
      address: this.address,
      citizenship: this.citizenship,
      contactNo: this.contactNo,
      emailAddress: this.emailAddress,
      reservationTimeSpan: this.reservationTimeSpan,
    }
  },
  async submit(){
    this.checkAllEmpty()
    const isGood = this.checkReadySubmit()
    if(isGood){
        

        const letterOfIntentData = {
              date: this.date,
              purchase: this.purchase,
              project: this.project,
              locationPH: this.locationPH,
              locationBlk: this.locationBlk,
              locationLotOrUnit: this.locationLotOrUnit,
              name: this.name,
              address: this.address,
              citizenship: this.citizenship,
              contactNo: this.contactNo,
              emailAddress: this.emailAddress,
              reservationTimeSpan: this.reservationTimeSpan,
        // Add any other data you need here
      };
   

      try {
       
        await this.$store.dispatch('auth/createLetterOfIntent', letterOfIntentData);

        
       
      } catch (error) {
        
        console.error('Error creating Letter of Intent:', error);
      }
    } 
  },
},
watch:{
  date(){
    this.checkDate()
  },
  purchase(){
    this.checkpurchase()
  },
  project(){
    this.checkproject()
  },
  locationPH(){
    this.checklocationPH()
  },
  locationBlk(){
    this.checklocationBlk()
  },
  locationLotOrUnit(){
    this.checklocationLotOrUnit()
  },
  name(){
    this.checkname()
  },
  address(){
    this.checkaddress()
  },
  citizenship(){
    this.checkcitizenship()
  },
  contactNo(){
    this.checkcontactNo()
  },
  emailAddress(){
    this.checkemailAddress()
  },
  reservationTimeSpan(){
    this.checkreservationTimeSpan()
  }
}
}
</script>

<style scoped>
#letterOfIntent{
  font-size: clamp(.6rem, 1.2vw, 2rem);
}
.empty{
  outline: 1px solid red;
  background-color: rgba(255, 0, 0, 0.222);
  box-shadow: 0 0 1px 1px red;
}
p{
  margin: 0;
  
}
input{
  text-align: center;
  border: .1px solid black;
  /* border-bottom: 1px solid black; */
  border-radius: 2px;
}

/*project*/
.checkboxes{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap:.5rem;
  margin-top: .5rem;
}

/*location*/
.location{
  margin-top: .5rem;
  display: flex;
  align-items: center;
  flex-flow: wrap;
  row-gap: .1rem;
}
.location b{
  margin-right: .5rem;
}
.location section{
  display: flex;
  row-gap: 1px;
  flex-wrap: wrap;
}

.location div{
  /* border: 1px solid black; */
  /* width: 20%; */
  display: flex;
  align-items: center;
  gap: .2rem;
  margin-right: .5rem;
}
@media screen and (max-width: 677px) {
  .location label{
  min-width: 40px;
  }  
}

/*Reference */
.reference{
  margin-top: .5rem;
  font-size: clamp(.6rem, 1.2vw, 2rem);
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.reference label{
  width: 8vw;
  min-width: 60px;
}

/*italic*/
.intalicize{
margin-top: .5rem;
font-style: oblique;
}

/*client & receiver */
.client, .receiver{
text-align: start;
margin-top: .5rem;
}
.client div, .receiver div{
display: flex;
justify-content: start;
margin-top: .5rem;
}
.client div .signature, .receiver div .signature{
border-top: 1px solid black;
width: 50%;
padding: 0 .5rem;
display: flex;
justify-content: center;
}
.client div .date, .receiver div .date{
border-top: 1px solid black;
width: 30%;
margin-left: 2rem;
display: flex;
justify-content: center;
}
</style>