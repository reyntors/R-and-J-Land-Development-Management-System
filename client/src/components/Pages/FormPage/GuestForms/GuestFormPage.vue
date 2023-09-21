<template>
  <the-header/>
  <div class="forms">
    <section class="grid-item" @click="navLetterIntent">
        <form-thumbnail title="Letter-of-Intent" imgThumbTitle="letterOfIntent"/> 
    </section>
    <section class="grid-item" @click="navigateContractDetails">
        <form-thumbnail title="Contract Details" imgThumbTitle="contractDetails"/>
    </section>
    <section class="grid-item" @click=" navigateIndividualBuyer">
        <form-thumbnail title="Individual Buyer Declaration" imgThumbTitle="individualBuyerDeclaration"/>     
    </section>
    <section class="grid-item" @click="navigateBIR_TIN">
        <form-thumbnail title="BIR TIN REQUEST" imgThumbTitle="BIR-TIN-Request"/>
    </section>
  </div>
  <the-footer/>
</template>

<script>
import TheFooter from '@/components/Reusable/TheFooter.vue'

export default {
  components: { TheFooter },

  methods: {
    navLetterIntent(){
      this.$router.push('/guest-forms/letter-of-intent')
    },
    navigateContractDetails(){
      this.$router.push('/guest-forms/contract-details')
    },
    navigateIndividualBuyer(){
      this.$router.push('/guest-forms/individual-buyer-declaration')
    },
    navigateBIR_TIN(){
      this.$router.push('/guest-forms/bir-tin-request')
    }
  }

}
</script>

<style scoped>
.forms{
  padding: 1rem .5rem 0;
  display: grid;
  grid-template-columns: 100%;
  /* row-gap: 1rem; */
}
.grid-item{
  margin: auto;
  /* padding: 1rem; */
  border-radius: 5px;
}
.grid-item:hover{
  background-color: rgba(0, 0, 0, 0.1);
}
.grid-item:active{
  background-color: #C2E7FF;
}
@media screen and (min-width: 453px) {
  .forms{
  grid-template-columns: 80%;
  justify-content: center;
  }
}
@media screen and (min-width: 575px) {
  .forms{
  grid-template-columns: 50% 50%;
  }
  .grid-item{
  width: 100%;
  }
}
@media screen and (min-width: 855px) {
  .forms{
  grid-template-columns: calc(100%/3) calc(100%/3) calc(100%/3);
  }
  .grid-item{
  /* border: 1px solid black; */
  width: 100%;
  }
}
</style>