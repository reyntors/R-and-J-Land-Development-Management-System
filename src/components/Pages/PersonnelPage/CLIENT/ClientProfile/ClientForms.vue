<template>
  <div class="form-container">
    <header class="header">
      <h3>Forms</h3>
    </header>
    <div class="folderCont" v-if="!openFormsComputed">
      <section class="section1">
        <h6>Request Forms</h6>
        
        <div class="flexCont">
            <section @click="openForm('letterIntent')">
              <p>Letter of Intent</p>
              <img src="@/assets/form-thumbnails/Letter-of-intent.png">              
            </section>

            <section @click="openForm('buyerDeclaration')">
              <p>Individual Declaration</p>
              <img src="@/assets/form-thumbnails/individual-buyer-declaration.png">              
            </section>

            <section @click="openForm('bir-tin')">
              <p>BIR-TIN-Request</p>
              <img src="@/assets/form-thumbnails/BIR-TIN-Request.png">              
            </section>

            <section  @click="openForm('contractDetails')">
              <p>Contract Details</p>
              <img src="@/assets/form-thumbnails/contract-details.png">              
            </section>
     
          
        </div>
      </section>
<br>
      <section class="section2">
        <h6>Upload here</h6>
        <div>
          <section class="add">
            <font-awesome-icon class="icon" icon="fa-solid fa-plus" beat size="3x"/>
          </section>
        </div>
      </section>


    </div>

    <letter-intent v-if="formVisible === 'letterIntent'" @back-click="toggleOpenForms"/>
    <buyer-declaration v-if="formVisible === 'buyerDeclaration'" @back-click="toggleOpenForms"/>
    <bir-tin v-if="formVisible === 'bir-tin'" @back-click="toggleOpenForms"/>
    <contract-details v-if="formVisible === 'contractDetails'" @back-click="toggleOpenForms"></contract-details>
      
  </div>
</template>

<script>
import ContractDetails from './FORMS/ContractDetails.vue'
import BirTin from './FORMS/BirTin.vue'
import BuyerDeclaration from './FORMS/BuyerDeclaration.vue'
import LetterIntent from './FORMS/LetterIntent.vue'
export default {
  components: { LetterIntent, BuyerDeclaration,BirTin,
    ContractDetails 
  },
    data(){
      return{
        formVisible: null,
        openForms: false,
      }
    },
    methods: {
      toggleOpenForms(){
        console.log('clicked')
        this.openForms = !this.openForms
        this.formVisible = null
      },
      openForm(param){
        this.openForms = !this.openForms
        if(param === 'letterIntent'){
          this.formVisible = 'letterIntent'
        }else if(param === 'buyerDeclaration'){
          this.formVisible = 'buyerDeclaration'
        }else if (param === 'bir-tin'){
          this.formVisible = 'bir-tin'
        }else{
          this.formVisible = 'contractDetails'
        }
      }
    },
    computed:{
      openFormsComputed(){
          return this.openForms
      }      
    }
 
}
</script>

<style scoped>
p{
  font-size: clamp(.6rem, 1vw, 1.5rem);
}
.form-container{
  overflow-y: auto;
  padding: .5rem;
}
.header{
  margin-bottom: 1rem;
}
.folderCont .section1 .flexCont{
  /* display: flex;
  gap: 1rem; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
.flexCont section{
  text-align: center;
  border: 1px solid black;
  /* width: 25%; */
  padding: .2rem .5rem .5rem;
  cursor: pointer;
}
@media screen and (max-width: 850px) {
  .folderCont .section1 .flexCont{

  grid-template-columns: 1fr 1fr;

  }
}
.flexCont section:hover{
  background-color: rgba(0, 0, 0, 0.1);
}
.flexCont section:active{
  background-color: #C2E7FF;
}
.flexCont img{
  width: 100%;
  border: 1px solid black;
}

.section2 div{
  /* border:1px solid black; */
  display: flex;
}
.section2 div .add{
  outline:1px solid black;
  display: flex;
  padding: 1rem;
  cursor: pointer;
}
.section2 div .add:hover{
  color: black;
}
.icon{
  color: rgba(0, 0, 0, 0.2);
  
}
.icon:hover{
  color: rgba(0, 0, 0, 0.8);
}

</style>