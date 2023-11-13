<template>
  <the-header/>
    <form-card id="Buyer-info-sheet" title="Buyer's Information Sheet">
    
      <property-details></property-details>

      <principal-buyer></principal-buyer>

      <spouse-info></spouse-info>

      <attorney-fact></attorney-fact>

    <submit-form-button @click="submit">Submit</submit-form-button> 
    </form-card>
</template>
  
<script>
import PropertyDetails from './Sub Components/PropertyDetails.vue'
import PrincipalBuyer from './Sub Components/PrincipalBuyer.vue'
import SpouseInfo from './Sub Components/SpouseInfo.vue'
import AttorneyFact from './Sub Components/AttorneyFact.vue'
export default{
  components: {
    PrincipalBuyer,
    PropertyDetails,
    SpouseInfo,
    AttorneyFact
  }

}
</script>

<style scoped>
.cont{
  border: 1px solid black;
}
</style>
