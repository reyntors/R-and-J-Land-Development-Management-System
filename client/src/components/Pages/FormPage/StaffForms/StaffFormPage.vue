<template>
    <the-header/>
    <div class="forms">
      <section class="grid-item" @click="navigateChecklist">
          <form-thumbnail title="Checklist for CLosing Sale" imgThumbTitle="checklist"/> 
      </section>
      <section class="grid-item" @click="navigateApprovePayment">
          <form-thumbnail title="Approved Payment Scheme" imgThumbTitle="approvePaymentScheme"/>
      </section>
 
    </div>
    <the-footer/>
  </template>
  
  <script>
  import TheFooter from '@/components/Reusable/TheFooter.vue'
  
  export default {
    components: { TheFooter },
  
    methods: {
      navigateChecklist(){
        this.$router.push('/staff-forms/checklist')
      },
      navigateApprovePayment(){
        this.$router.push('/staff-forms/approve-payment')
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