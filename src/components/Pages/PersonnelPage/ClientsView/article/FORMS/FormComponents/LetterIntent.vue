<template>
    
    <form-card id="letterOfIntent" >
      <div class="navigation">
        <font-awesome-icon class="icon" icon="fa-solid fa-arrow-left-long" size="2x" @click="back"/> 
        <button @click="toggleEdit">{{ editBtnText }}</button>
      </div>
    
      <h4 style="text-align: center">Letter of Intent</h4>
      <p style="margin-top: 1rem;">Date: <input type="date" v-model="date"></p> 
      <br>
      <p>{{ companyName }}</p>
      <p>{{ companyAddress }}</p> 
      <br>
      <p>Gentlemen:</p>
      <p>I/We hereby manifest my/our intent to purchase <input style="border: none;
        border-bottom: 1px solid black;"  v-model="purchase"> lot(s)/unit(s)</p>
      <div class="checkboxes">
        <strong>Project:</strong>
        <input type="radio" value="value1" id="check1" v-model="project"><label for="check1">Northown</label>
        <input type="radio" value="value2" id="check2" v-model="project"><label for="check2">Northcrest</label>
        <input type="radio" value="value3" id="check3" v-model="project"><label for="check3">Eden Ridge</label>
        <input type="radio" value="value4" id="check4" v-model="project"><label for="check4">Narra Park Residence</label>
      </div>
      <div class="location">
        <b>Location:</b>
        <div>PH:<input v-model="locationPH"></div>
        <div>Blk:<input v-model="locationBlk"></div>
        <div>Lot/Unit:<input v-model="locationLotOrUnit"></div>
      </div>

      <section class="reference">
            For your reference, please see my information below;
            <div>
                <label>Name</label>
                <input v-model="name">
            </div>
            <div>
                <label>Address</label>
                <input v-model="address
">
            </div>
            <div>
                <label>Citizenship</label>
                <input v-model="citizenship">
            </div>
            <div>
                <label>Contact No.</label>
                <input v-model="contactNo">
            </div>
            <div>
                <label>Email Address</label>
                <input v-model="emailAddress">
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
              That I must submit all complete requirements and reservation fee not later than <input style="border: none; border-bottom: 1px solid black;" v-model="reservationTimeSpan"> to
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

        <span style="display: flex">
            <submit-form-button @click="submit">Save</submit-form-button>
            <submit-form-button @click="submit">Download</submit-form-button>
        </span>
        <a :href="downloadURL" :download="downloadName">DOWNLOAD</a>
    </form-card>
</template>
  
<script>
import SubmitFormButton from '@/components/Reusable/SubmitFormButton.vue'
export default{
    props: ['clientObj', 'wholeObject'],
    components: {SubmitFormButton},
    emits:['back-click'],
    data(){
        return{
            editable: false,
            
          date: this.clientObj.date,
          purchase: this.clientObj.purchase,
          project: this.clientObj.project,
          locationPH: this.clientObj.locationPH,
          locationBlk: this.clientObj.locationBlk,
          locationLotOrUnit: this.clientObj.locationLotOrUnit,
          name: this.clientObj.name,
          address: this.clientObj.address,
          citizenship: this.clientObj.citizenship,
          contactNo: this.clientObj.contactNo,
          emailAddress: this.clientObj.emailAddress,
          reservationTimeSpan: this.clientObj.reservationTimeSpan,

          downloadURL: this.wholeObject.LetterOfIntentURL,
          downloadName: this.wholeObject.LetterOfIntentFilename
        }
    },
    methods: {
        toggleEdit(){
          console.log(this.clientObj)
            this.editable = !this.editable
        },
        back(){
            this.$emit('back-click')
        }
    },
    computed: {
        //navigation
        editableComputed(){
            return this.editable
        },
        editBtnText(){
            if(this.editable === true){
                return 'Cancel'
            }else{
                return 'Edit'
            }
        },

        companyName(){
        return this.$store.getters.companyName
        },
        companyAddress(){
        return this.$store.getters.companyAddress
        }
  }
}
</script>
  
  <style scoped>
  /* NAVIGATION */
  .navigation{
    display: flex;
    justify-content: space-between;
  }
  .navigation button{
    background-color: #31A72A;
    padding: .2rem 1rem;
    font-weight: 600;
    box-shadow: 0 0 1px 1px rgb(0, 0, 0);
    cursor: pointer;
    margin: 5px 0;
    color: white;
    border: none;
  }
  .navigation button:hover{
    background-color: #30a72a8e;
    }
    .navigation button:active{
    color: black;
    }
  .navigation .icon{
    cursor: pointer;
  }
  .navigation .icon:hover{
    color: blue;
    scale: 1.2;
  }



  #letterOfIntent{
    font-size: clamp(.6rem, 1.2vw, 2rem);
    /* width: 100%; */
  }
  p{
    margin: 0;
    
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
  }
  .location b{
    margin-right: 2px;
  }
  .location div{
    /* border: 1px solid black; */
    /* width: 20%; */
    display: flex;
    align-items: center;
  }
  .location input{
    width: 100%;
    
  }

  /*Reference */
.reference{
    margin-top: .5rem;
    font-size: clamp(.6rem, 1.2vw, 2rem);
}
.reference label{
    width: 10vw;
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