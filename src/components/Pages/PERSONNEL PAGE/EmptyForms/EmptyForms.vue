<template>
    <div class="empty-forms-cont">
      <div class="div1">
        <h4>Empty Forms</h4>
      </div>
      <div class="div2">

        <progress-loading v-if="isLoading" type="spin"></progress-loading>
        <div class="grid" v-else>
          <section class="grid-item" @click="show(this.obj.letterOfIntentURL)">
                <form-thumbnail title="Letter of Intent" imgThumbTitle="letterOfIntent"/> 
          </section>
          <section class="grid-item" @click="show(this.obj.contractDetailsURL)">
                <form-thumbnail title="Buyer Info Sheet" imgThumbTitle="buyerInfoSheet"/>
          </section>
          <section class="grid-item" @click="show(this.obj.individualBuyerURL)">
                <form-thumbnail title="Individual Buyer Declaration" imgThumbTitle="individualBuyerDeclaration"/>    
          </section>
          <section class="grid-item" @click="show(this.obj.birTinURL)">
                <form-thumbnail title="BIR TIN Request" imgThumbTitle="BirTinRequest"/>
          </section>
          <section class="grid-item" @click="show(this.obj.checklistURL)">
              <form-thumbnail title="Checklist" imgThumbTitle="checklist"/>
          </section>
          <section class="grid-item" @click="show(this.obj.approvePaymentURL)">
              <form-thumbnail title="Approve Payment" imgThumbTitle="approvePaymentScheme"/>
          </section>
          <section class="grid-item" @click="show(this.obj.callSlipURL)">
              <form-thumbnail title="Call Slip" imgThumbTitle="call-slip"/>
          </section>
          <section class="grid-item" @click="show(this.obj.reservationURL)">
              <form-thumbnail title="Reservation Payment" imgThumbTitle="reservation"/>
          </section>          
        </div>

     
      </div>

    </div>
  </template>
  
  <script>
  // import { toast } from 'vue3-toastify'
  export default {
      data(){
        return{
          isLoading: false,
        }
      },
      computed:{
        obj(){
          // console.log(this.$store.getters['rawForms/objectsOfDonwloadableGetter'])
          return this.$store.getters['rawForms/objectsOfDonwloadableGetter']
        }
      },

      methods: {
        show(url){
          window.open(url)
        }
      },

      // async mounted(){
      //   this.isLoading = true
      //   try{
      //     await this.$store.dispatch('rawForms/getRawFormsList') 
      //     this.isLoading = false
      //   }catch(error){
      //     console.log(error)
      //     toast.error(error)
      //   }
        
      // }
  }
  </script>
  
  <style scoped>
.empty-forms-cont{
  width: 80vh;
  flex-grow: 1;
  height: 90vh;
  padding: 1rem;
  border-left: 2px solid rgba(0, 0, 0, 0.5);
  position: relative;
}
h4{
  padding: 0;
  margin: 0;
}
.div1{
    width:100%;
    height: 10%;
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}
.div2{
    width:100%;
    height: 90%;
    background-color: transparent;
    padding: 1rem;
    overflow-y: auto;
    position: relative;
}
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.div2 .grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
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