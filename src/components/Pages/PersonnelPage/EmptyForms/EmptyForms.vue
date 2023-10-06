<template>
    <div class="empty-froms-cont">
      <div class="div1">
        <h4>Empty Forms</h4>
      </div>

      <div class="div2">
        <section class="grid-item" @click="navLetterIntent">
            <form-thumbnail title="Letter of Intent" imgThumbTitle="letterOfIntent"/> 
        </section>
        <section class="grid-item" @click="navigateContractDetails">
            <form-thumbnail title="Contract Details" imgThumbTitle="contractDetails"/>
        </section>
        <section class="grid-item" @click=" navigateIndividualBuyer">
            <form-thumbnail title="Individual Buyer Declaration" imgThumbTitle="individualBuyerDeclaration"/>     
        </section>
        <section class="grid-item" @click="navigateBIR_TIN">
            <form-thumbnail title="BIR TIN Request" imgThumbTitle="BIR-TIN-Request"/>
        </section>
        <section class="grid-item" @click="navigateBIR_TIN">
            <form-thumbnail title="Checklist" imgThumbTitle="checklist"/>
        </section>
        <section class="grid-item" @click="navigateBIR_TIN">
            <form-thumbnail title="Approve Payment" imgThumbTitle="approve-payment"/>
        </section>
        <section class="grid-item" @click="navigateBIR_TIN">
            <form-thumbnail title="Call Slip" imgThumbTitle="call-slip"/>
        </section>
        <section class="grid-item" @click="navigateBIR_TIN">
            <form-thumbnail title="Reservation Payment" imgThumbTitle="reservation"/>
        </section>
      
      
      </div>


    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
.empty-froms-cont{
  width: 100%;
    height: 85vh;
    padding: 1rem;
}

.div1{
    width:100%;
    height: 10%;
    background-color: bisque;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}
.div2{
    width:100%;
    height: 90%;
    background-color: bisque;
    padding: 1rem;
    /* gap: 1rem; */
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    overflow-y: auto;
}
@media screen and (max-width:933px) {
    .div2{
      grid-template-columns: 1fr 1fr;
    }
}
@media screen and (max-width:672px) {
    .div2{
      grid-template-columns: 1fr;
    }
}
  </style>