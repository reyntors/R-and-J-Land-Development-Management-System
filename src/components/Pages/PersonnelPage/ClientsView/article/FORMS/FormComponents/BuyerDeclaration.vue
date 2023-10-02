<template>
    <form-card>
        <div class="navigation">
        <font-awesome-icon class="icon" icon="fa-solid fa-arrow-left-long" size="2x" @click="back"/> 
        <button @click="toggleEdit">{{ editBtnText }}</button>
        </div>

        <h4 style="text-align: center">Individual Buyer's Declaration</h4>
        <div class="c-container">
            <input type="date" style="display: block;">
        <br>
            <p class="text">I,<input v-model="name"> with BIR Tax Identifiaiton No. <input v-model="BIRtaxID"> hereby declares the following information</p>
        <br>
            <ol>
                <li>
                    <p><strong>1.</strong> I am ENGAGED IN BUSINESS</p>
                    <div class="checkboxes-cont">
                        <section><input type="radio" value="YES" id="yesEngaged" v-model="engagedInBusiness"><label for="yesEngaged">Yes</label></section>
                        <section><input type="radio" value="NO" id="noEngaged" v-model="engagedInBusiness"><label for="noEngaged">No</label> </section>
                        <section><input type="radio" value="N/A" id="NAEngaged" v-model="engagedInBusiness"><label for="NAEngaged">N/A</label> </section>
                    </div>
                </li>
                <li>
                    <p><strong>2.</strong> The Business is registered under my name</p>
                    <div class="checkboxes-cont">
                        <section><input type="radio" value="YES" id="yesBusiness" v-model="businessRegisteredUnder"><label for="yesBusiness">Yes</label></section>
                        <section><input type="radio" value="NO" id="noBusiness" v-model="businessRegisteredUnder"><label for="noBusiness">No</label> </section>
                        <section><input type="radio" value="N/A" id="NABusiness" v-model="businessRegisteredUnder"><label for="NABusiness">N/A</label> </section>
                    </div>
                </li>
                <p>If yes, name of business <input style="border: none;border-bottom: 1px solid black;" v-model="businessName"></p>

                <li>
                    <p><strong>3.</strong> The Registered Business is using my TIN</p>
                    <div class="checkboxes-cont">
                        <section><input type="radio" value="YES" id="yesUseTIN" v-model="businessUsingMyTIN"><label for="yesUseTIN">Yes</label></section>
                        <section><input type="radio" value="NO" id="noUseTIN" v-model="businessUsingMyTIN"><label for="noUseTIN">No</label> </section>
                        <section><input type="radio" value="N/A" id="NAUseTIN" v-model="businessUsingMyTIN"><label for="NAUseTIN">N/A</label> </section>
                    </div>
                </li>
            </ol>

        <br>
            <p>I acknowledge and understood the <strong>Bureau of Internan Revenue (BIR) Revenue Regulations No.:17-2003,
                Section 2.57.2.J which states that</strong></p>
        <br>
            <div class="indent">
                <p>"However, <strong>if the buyer is engaged in trade or business, whether a corporations or otherwise, these rules shall apply:</strong></p>
                <br>
                <p><strong>If the sale is a sale of property on the installment plan</strong>{i.ee..payments in the year
                    of sale do not exceed twenty five percent (25%) of the selling price},<strong>the tax shall be deducted and withheld by the ubyer from every installment</strong>
                    which tax shall be based on the ratio of actual colleciton of the consideration against the agreed consideration appearing in the Contract to Sell applied to the gross selling price or fair
                    market value of the property at the time of the execution of the Contract to Sell whichever is higher.""</p>
            </div>
        <br>
            <p>
                I agree that any additional taxes, interest or penalty that may be incurred by Alsons Development & Investment Corp. (Alsons Dev) due to my improper or non-disclosure of the above
                needed information shall be to my soleaccount and responisibility.
            </p>
        <br>
            <p>
                Thus, I hereby authorize {{ companyName }} to charge whatever is due me said taxes, interest, penalty and other charges arising therefrom and hold release of my land title until full
                settlement of said account.
            </p>
        <br>
            <p>Certified True and Correct:</p>
            <input style="display: block; border: none; border-bottom: 1px solid black; margin-top: .5rem;" readonly>
            <p>Signature above printed name</p>
        </div> 

        <span style="display: flex">
            <submit-form-button @click="submit">Save</submit-form-button>
            <submit-form-button @click="submit">Download</submit-form-button>
        </span>

    </form-card>
</template>

<script>
import SubmitFormButton from '@/components/Reusable/SubmitFormButton.vue'
export default{
    props: ['clientObj'],
    components: {SubmitFormButton},
    data(){
        return{
            editable: false,
            date: this.clientObj.date,
            name: this.clientObj.name,
            BIRtaxID: this.clientObj.BIRtaxID,
            businessName: this.clientObj.businessName,
            engagedInBusiness: this.clientObj.engagedInBusiness,
            businessRegisteredUnder: this.clientObj.businessRegisteredUnder,
            businessUsingMyTIN: this.clientObj.businessUsingMyTIN
        }
    },

    methods: {
        toggleEdit(){
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


.c-container{
    width: 100%;
    font-size: clamp(.6rem, 1.2vw, 2rem);
    padding-top: 1rem;
}
.text input{
    border: none;
    border-bottom: 1px solid black;
}
ol{
    display: flex;
    flex-direction: column;
}
li{
    display: flex;
    list-style: armenian;
    margin-top: .5rem;
}
li p{
    flex-grow: 1;
}
li div{
    padding-left: 1rem;
    width: 60%;
    display: flex;
    gap: 4rem;
}
li div section{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
}
@media screen and (max-width: 655px) {
    li{
        flex-direction: column;
        margin-top: 1rem;
    }
    li div{
        gap: 2rem;
    }
}






.indent{
    margin-left: 2rem;
}
</style>