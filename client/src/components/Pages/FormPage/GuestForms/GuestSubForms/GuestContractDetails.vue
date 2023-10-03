<template>
    <the-header/>

    <form-card title="CONTRACT DETAILS FORM">
        
        <property-details @pass-data="getPropertyData"/>

        <contact-details @pass-data="getContactData"/>

        <business-employment @pass-data="getBusinessData"/>

        <spouse-information @pass-data="getSpouseData"/>

        <buyer-spa @pass-data="getBuyerSPAData"/>

        <corporate-buyer @pass-data="getCorpBuyerData"/>

        <other-details @pass-data="getOtherData"></other-details>


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

        <submit-form-button @click="submit">Submit</submit-form-button>
    </form-card>
    
    <the-footer/>
</template>

<script>
import SubmitFormButton from '@/components/Reusable/SubmitFormButton.vue'
import PropertyDetails from './ContractDetailsSubFiles/PropertyDetails.vue'
import ContactDetails from './ContractDetailsSubFiles/ContactDetails.vue'
import BusinessEmployment from './ContractDetailsSubFiles/BusinessEmployment.vue'
import SpouseInformation from './ContractDetailsSubFiles/SpouseInformation.vue'
import BuyerSpa from './ContractDetailsSubFiles/BuyerSpa.vue'
import CorporateBuyer from './ContractDetailsSubFiles/CorporateBuyer.vue'
import OtherDetails from './ContractDetailsSubFiles/OtherDetails.vue'
export default {
  components: { PropertyDetails ,ContactDetails, BusinessEmployment, SpouseInformation , BuyerSpa, CorporateBuyer, OtherDetails, SubmitFormButton},
    data(){
        return{
            propertyData: null,
            contactData: null,
            businessData: null,
            spouseData: null,
            buyerSPAData: null,
            corporateBuyerData: null,
            otherData: null,
        }
    },
    methods: {
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
}


/*REMARKS*/
.remarks{
    padding: 1rem;
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