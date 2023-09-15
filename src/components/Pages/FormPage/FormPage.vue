<template>
  <the-header></the-header>
  <div class="forms">
    <reservation-agreement></reservation-agreement>
    <contract-details></contract-details>
    <letter-of-intent></letter-of-intent> 
    <call-slip></call-slip>   
  </div>

</template>

<script>
import ContractDetails from './SubForms/ContractDetails.vue'
import ReservationAgreement from './SubForms/ReservationAgreement.vue'
import LetterOfIntent from './SubForms/LetterOfIntent.vue'
import CallSlip from './SubForms/CallSlip.vue'
export default {
  components: {
    ReservationAgreement,ContractDetails,LetterOfIntent, CallSlip
  }

}
</script>

<style scoped>
.forms{
  display: grid;
  grid-template-columns: 1fr;
}
</style>