<template>
  <the-header></the-header>
  <div class="forms">
    <reservation-agreement></reservation-agreement>
    <letter-of-intent></letter-of-intent> 
    <call-slip></call-slip>  
    <bir-tin-request></bir-tin-request> 
    <individual-buyers-declaration></individual-buyers-declaration>
    <approved-payment-scheme></approved-payment-scheme>
    <checklist-closing-sale></checklist-closing-sale>
    <contact-details></contact-details>
  </div>

</template>

<script>
import ContactDetails from './SubForms/ContractDetails.vue'
import ReservationAgreement from './SubForms/ReservationAgreement.vue'
import LetterOfIntent from './SubForms/LetterOfIntent.vue'
import CallSlip from './SubForms/CallSlip.vue'
import BirTinRequest from './SubForms/BirTinRequest.vue'
import IndividualBuyersDeclaration from './SubForms/IndividualBuyersDeclaration.vue'
import ApprovedPaymentScheme from './SubForms/ApprovedPaymentScheme'
import ChecklistClosingSale from './SubForms/ChecklistClosingSale.vue'
export default {
  components: {
    ContactDetails,
    ReservationAgreement,LetterOfIntent,CallSlip,IndividualBuyersDeclaration,ApprovedPaymentScheme,ChecklistClosingSale,BirTinRequest
  }

}
</script>

<style>
.forms{
  display: grid;
  grid-template-columns: 1fr;
}
p{
  /* font-size: clamp(.6rem, 1.2vw, 2rem); */
  margin: 0;
}
</style>