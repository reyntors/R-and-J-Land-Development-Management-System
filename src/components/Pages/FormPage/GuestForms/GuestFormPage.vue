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
      console.log("routed")
      this.$router.push('/guest-forms/letter-of-intent')
    },
    navigateContractDetails(){
      console.log("routed")
      this.$router.push('/guest-forms/contract-details')
    },
    navigateIndividualBuyer(){
      console.log("routed")
      this.$router.push('/guest-forms/individual-buyer-declaration')
    },
    navigateBIR_TIN(){
      console.log("routed")
      this.$router.push('/guest-forms/bir-tin-request')
    }
  }

}
</script>

<style>
.forms{
  padding: 1rem .5rem 0;
  display: grid;
  grid-template-columns: 1fr;
  /* row-gap: 1rem; */
}
p{
  /* font-size: clamp(.6rem, 1.2vw, 2rem); */
  margin: 0;
}
.grid-item{
  width: 80%;
  margin: auto;
  padding: 1rem;
  border-radius: 5px;
}
.grid-item:hover{
  background-color: rgba(0, 0, 0, 0.1);
}
.grid-item:active{
  background-color: #C2E7FF;
}
@media screen and (min-width: 400px) {
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