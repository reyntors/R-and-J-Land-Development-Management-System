<template>
  <the-header></the-header>
  <div class="forms">
    <reservation-agreement></reservation-agreement>
    <letter-of-intent></letter-of-intent> 
    <call-slip></call-slip>  
    <bir-tin-request></bir-tin-request> 
  </div>

</template>

<script>
import ReservationAgreement from './SubForms/ReservationAgreement.vue'
import LetterOfIntent from './SubForms/LetterOfIntent.vue'
import CallSlip from './SubForms/CallSlip.vue'
import BirTinRequest from './SubForms/BirTinRequest.vue'
export default {
  components: {
    ReservationAgreement,LetterOfIntent,CallSlip, 
    BirTinRequest
  }

}
</script>

<style>
.forms{
  display: grid;
  grid-template-columns: 1fr;
}
p{
  font-size: clamp(.6rem, 1.2vw, 2rem);
  margin: 0;
}
</style>