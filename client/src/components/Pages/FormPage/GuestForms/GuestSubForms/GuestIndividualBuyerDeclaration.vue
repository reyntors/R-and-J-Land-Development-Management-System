<template>

    <the-header/>    

    <form-card title="Individual Buyer's Declaration">
        <div class="c-container">
            <input type="date" :class="{empty:isdateEmpty}" style="display: block;" v-model="date">
        <br>
            <p class="text">I,<input :class="{empty: isnameEmpty}" v-model="name"> with BIR Tax Identifiaiton No. <input :class="{empty:isBIRtaxIDEmpty}" v-model="BIRtaxID"> hereby declares the following information</p>
        <br>
            <ol>
                <li>
                    <p><strong>1.</strong> I am ENGAGED IN BUSINESS</p>
                    <div class="checkboxes-cont">
                        <section><input type="radio" id="yesEngaged" value="YES" v-model="engagedInBusiness"><label for="yesEngaged">Yes</label></section>
                        <section><input type="radio" id="noEngaged" value="NO" v-model="engagedInBusiness"><label for="noEngaged">No</label> </section>
                        <section><input type="radio" id="NAEngaged" value="N/A" v-model="engagedInBusiness"><label for="NAEngaged">N/A</label> </section>
                    </div>
                </li>
                <li>
                    <p><strong>2.</strong> The Business is registered under my name</p>
                    <div class="checkboxes-cont">
                        <section><input type="radio" id="yesBusiness" value="YES" v-model="businessRegisteredUnder"><label for="yesBusiness">Yes</label></section>
                        <section><input type="radio" id="noBusiness" value="NO" v-model="businessRegisteredUnder"><label for="noBusiness">No</label> </section>
                        <section><input type="radio" id="NABusiness" value="N/A" v-model="businessRegisteredUnder"><label for="NABusiness">N/A</label> </section>
                    </div>
                </li>
                <p v-if="businessRegisteredUnder == 'YES'">If yes, name of business <input v-model.trim="businessName" :class="{empty:ischeckbusinessNameEmpty}" ></p>

                <li>
                    <p><strong>3.</strong> The Registered Business is using my TIN</p>
                    <div class="checkboxes-cont">
                        <section><input type="radio" id="yesUseTIN" value="YES" v-model="businessUsingMyTIN"><label for="yesUseTIN">Yes</label></section>
                        <section><input type="radio" id="noUseTIN" value="NO" v-model="businessUsingMyTIN"><label for="noUseTIN">No</label> </section>
                        <section><input type="radio" id="NAUseTIN" value="N/A" v-model="businessUsingMyTIN"><label for="NAUseTIN">N/A</label> </section>
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
                I agree that any additional taxes, interest or penalty that may be incurred by {{ companyName }} due to my improper or non-disclosure of the above
                needed information shall be to my soleaccount and responisibility.
            </p>
        <br>
            <p>
                Thus, I hereby authorize {{ companyName }} to charge whatever is due me said taxes, interest, penalty and other charges arising therefrom and hold release of my land title until full
                settlement of said account.
            </p>
        <br>
            <p>Certified True and Correct:</p>
            <br>
            <!-- <input style="display: block; border: none; border-bottom: 1px solid black; margin-top: .5rem;"> -->
            <div style="height: 1rem; border-bottom: 1px solid black; width: 20%; min-width: 150px;"/>
            <p>Signature above printed name</p>
        </div> 
        <submit-form-button @click="submit"> Submit</submit-form-button>
    </form-card>

    <the-footer/>
</template>

<script>
export default{
    data(){
        return{
            date:'',
            dateEmpty:false,
            name: '',
            nameEmpty: false,
            BIRtaxID: '',
            BIRtaxIDEmpty: false,
            engagedInBusiness: 'YES',
            businessRegisteredUnder: 'YES',
            businessName: '',
            businessNameEmpty: false,
            businessUsingMyTIN: 'YES'
        }
    },
    methods:{
        checkdate(){
            this.dateEmpty = this.date!==''?false:true
            return this.dateEmpty
        },
        checkname(){
            this.nameEmpty = this.name!==''?false:true
            return this.nameEmpty
        },
        checkBIRtaxID(){
            this.BIRtaxIDEmpty = this.BIRtaxID!==''?false:true
            return this.BIRtaxIDEmpty
        },
        checkbusinessName(){
            this.businessNameEmpty = this.businessName!==''?false:true
            return this.businessNameEmpty
        },

        checkAllEmpty(){
            this.checkdate()
            this.checkname()
            this.checkBIRtaxID()
            this.checkbusinessName()
        },

        checkReadySubmit(){
            if(
                !this.checkdate() &&
                !this.checkname() &&
                !this.checkBIRtaxID()&&
                !this.checkbusinessName()
            ){
                return true
            }else{
                return false
            }
        },

        getAllData(){
            return {
                date: this.date,
                name: this.name,
                BIRtaxID: this.BIRtaxID,
                businessName: this.businessName,
                engagedInBusiness: this.engagedInBusiness,
                businessRegisteredUnder: this.businessRegisteredUnder,
                businessUsingMyTIN: this.businessUsingMyTIN,

            }
        },

       async submit(){
            this.checkAllEmpty()
            const isGood = this.checkReadySubmit()
            if(isGood){
        

        const individualBuyerDeclarationtData = {
                date: this.date,
                name: this.name,
                BIRtaxID: this.BIRtaxID,
                businessName: this.businessName,
                engagedInBusiness: this.engagedInBusiness,
                businessRegisteredUnder: this.businessRegisteredUnder,
                businessUsingMyTIN: this.businessUsingMyTIN,
        // Add any other data you need here
      };
   

      try {
       
        await this.$store.dispatch('auth/createIndividualBuyerDeclaration', individualBuyerDeclarationtData);

        
       
      } catch (error) {
        
        console.error( error);
      }
    }
            
        },
        

        
    },

    computed: {
        companyName(){
        return this.$store.getters.companyName
        },
        companyAddress(){
        return this.$store.getters.companyAddress
        },


        isdateEmpty(){
            return this.dateEmpty
        },
        isnameEmpty(){
            return this.nameEmpty
        },
        isBIRtaxIDEmpty(){
            return this.BIRtaxIDEmpty
        },
        ischeckbusinessNameEmpty(){
            return this.businessNameEmpty
        }
    },
    watch:{
        name(){
            this.checkname()
        },
        date(){
            this.checkdate()
        },
        BIRtaxID(){
            this.checkBIRtaxID()
        },
        businessName(){
            this.checkbusinessName()
        },
        businessRegisteredUnder(newVal){
            if(newVal !== 'YES'){
                this.businessName = 'NONE'
            }
        }
    }
}
</script>

<style scoped>
.empty{
    outline: 1px solid red;
    background-color: rgba(255, 0, 0, 0.222);
    box-shadow: 0 0 1px 1px red;
}
input{
    text-align: center;
    border: none;
    border-bottom: 1px solid black;
}
.c-container{
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