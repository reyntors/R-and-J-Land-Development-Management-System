<template>
    <div class="card-container">
      <header>
          {{ title }}
      </header>
      <section>
          <img :src="imgLink">
      </section>
    </div>
  </template>
  
  <script>
  import LetterOfIntent from '@/assets/form-thumbnails/Letter-of-intent.png';
  import ContractDetails from '@/assets/form-thumbnails/contract-details.png';
  import individual from '@/assets/form-thumbnails/individual-buyer-declaration.png';
  import BIR_TIN_Request from '@/assets/form-thumbnails/BIR-TIN-Request.png';
  import ApprovedPaymentScheme from '@/assets/form-thumbnails/approve-payment.png';
  import ChecklistClosingSale from '@/assets/form-thumbnails/checklist-for-closing.png';
  export default {
      props: ['title','imgThumbTitle'],
      data(){
          return{
              img: null,
          }
      },
      computed:{
          imgLink(){
              if(this.imgThumbTitle === 'letterOfIntent'){
                      return LetterOfIntent
              }else if(this.imgThumbTitle === 'contractDetails'){
                  return ContractDetails
              }else if(this.imgThumbTitle === 'individualBuyerDeclaration'){
                  return individual
              }else if(this.imgThumbTitle === 'approvePaymentScheme'){
                  return ApprovedPaymentScheme
              }else if(this.imgThumbTitle === 'checklist'){
                  return ChecklistClosingSale
              }
              else{
                  return BIR_TIN_Request
              }
          }
      }
  }
  </script>
  
  
  <style scoped>
  header{
        font-size: clamp(.8rem, 1.5vw, 2rem);
  }
  .card-container{
      /* width: 70%; */
      margin: auto;
      box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
  }
  .card-container:hover{
      margin: auto;
      box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5);
  }
  .card-container header{
      border: 1px solid black;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1.5rem;
      font-weight: 700;
      background-color: white;
      padding: 1rem;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
  }
  .card-container section{
      width: 100%;
      border: 1px solid black;
      border-top: none;
      display: flex;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
  }
  img{
      width: 100%;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
  }
  </style>