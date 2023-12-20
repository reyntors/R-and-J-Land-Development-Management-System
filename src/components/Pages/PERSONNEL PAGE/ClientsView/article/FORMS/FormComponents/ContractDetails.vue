<template>
    <!-- <the-header/> -->

    <form-card>
        <div class="navigation">
            <font-awesome-icon class="icon" icon="fa-solid fa-arrow-left-long" size="2x" @click="back"/> 
        </div>
    
        <h4 style="text-align: center">CONTRACT DETAILS FORM</h4>
        
        <property-details @pass-data="getPropertyData" class="overrideWidth" :client-obj="clientObj"/>

        <contact-details @pass-data="getContactData" class="overrideWidth" :client-obj="clientObj"/>

        <business-employment @pass-data="getBusinessData" class="overrideWidth" :client-obj="clientObj"/>

        <spouse-information @pass-data="getSpouseData" class="overrideWidth" :client-obj="clientObj"/>

        <buyer-spa @pass-data="getBuyerSPAData" class="overrideWidth" :client-obj="clientObj"/>

        <corporate-buyer @pass-data="getCorpBuyerData" class="overrideWidth" :client-obj="clientObj"/>

        <other-details @pass-data="getOtherData" class="overrideWidth" :client-obj="clientObj"/>


        <!-- <div class="remarks">
            <p>SPECIAL INSTRUCTIONS/ REMARKS (Please specify:)</p>
            <textarea></textarea>
        </div>

        <div class="signature">
            <div>
                <section>
                    <input>
                    <p>Signature of buyer(s)</p>
                </section>   
                <section>
                    <input type="date">
                    <p>Date)</p>
                </section>            
            </div>
            
        </div> -->
        <span style="display: flex">
            <submit-form-button @click="submit">Download</submit-form-button>
        </span>
        
    </form-card>
    
    <!-- <the-footer/> -->
</template>

<script>
import SubmitFormButton from '@/components/Reusable/Form SubComponents/SubmitFormButton.vue'
import PropertyDetails from './ContractSub/PropertyDetails.vue'
import ContactDetails from './ContractSub/ContactDetails.vue'
import BusinessEmployment from './ContractSub/BusinessEmployment.vue'
import SpouseInformation from './ContractSub/SpouseInformation.vue'
import BuyerSpa from './ContractSub/BuyerSpa.vue'
import CorporateBuyer from './ContractSub/CorporateBuyer.vue'
import OtherDetails from './ContractSub/OtherDetails.vue'
export default {
  components: { SubmitFormButton,PropertyDetails ,ContactDetails, BusinessEmployment, SpouseInformation , BuyerSpa, CorporateBuyer, OtherDetails},
    props: ['clientObj'],
    data(){
        return{
            propertyData: null,
            contactData: null,
            businessData: null,
            spouseData: null,
            buyerSPAData: null,
            corporateBuyerData: null,
            otherData: null,

            editable: false,
        }
    },
    methods: {
        toggleEdit(){
            this.editable = !this.editable
        },
        back(){
            this.$emit('back-click')
        },


        getPropertyData(payload){
            this.propertyData = payload
        },
        getContactData(payload){
            this.contactData = payload
        },
        getBusinessData(payload){
            this.businessData = payload
        },
        getSpouseData(payload){
            this.spouseData = payload
        },
        getBuyerSPAData(payload){
            this.buyerSPAData = payload
        },
        getCorpBuyerData(payload){
            this.corporateBuyerData = payload
        },
        getOtherData(payload){
            this.otherData = payload
        },
        submit(){
            const payload = {...this.propertyData, ...this.contactData, 
                ...this.businessData, ...this.spouseData, ...this.buyerSPAData,
                ...this.corporateBuyerData, ...this.otherData
            }
            console.log(payload)
            //REQUEST HERE
        }

    },
    computed:{
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
    },

    mounted(){
        console.log(this.clientObj)
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



.c-cont{
    /* width:80%; */
    /* width: 100%; */
    /* border: 5px solid black; */
}
.empty{
    outline: 1px solid red;
    background-color: rgba(255, 0, 0, 0.222);
    box-shadow: 0 0 1px 1px red;
}
input{
    text-align: center;
}


/*REMARKS*/
.remarks{
    /* padding: 1rem; */
    width: 90%;
    margin: auto;
}
.remarks textarea{
    padding: 1rem;
    resize: none;
    min-height: 8rem;
    width: 100%;
}
.signature{
    width: 100%;
    display: flex;
    justify-content: end;
}
.signature div{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.signature div section{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.signature div section input{
    width: 100%;
}
</style>