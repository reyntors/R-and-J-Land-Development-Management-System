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
        
        <form enctype="multipart/form-data" @submit.prevent="">
          <label class="uploadCont" for="upload">
            <font-awesome-icon class="icon" icon="fa-solid fa-plus" beat size="2x"/>
            <p class="fs-6">Upload File</p>
          </label>
          <div v-if="uploadedFile">
            {{uploadedFileNameComputed}}
          </div>
          <button @click="submitUpload">Upload</button>
          <input 
          id="upload" 
          type="file"
          style="display: none;"
          @change="setUploadedFile">
        </form>

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
  components: { LetterIntent, BuyerDeclaration,BirTin,ContractDetails},
    data(){
      return{
        formVisible: null,
        openForms: false,

        uploadedFile : null,
        uploadedFileName: null,
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
      },
      setUploadedFile(event){
        this.uploadedFile = event.target.files[0]
        this.uploadedFileName = this.uploadedFile.name
        // console.log(this.uploadedFileName)
      },

      //submit uploads
      submitUpload(){
        if(this.uploadedFile && this.uploadedFileName){
          const data = new FormData()
          data.append('file',this.uploadedFile)
          data.forEach(element => {
            console.log(element)
          });
          try{
            //request here
            //use data as payload
          }catch(error){
            console.log(error)
          }
        }else{
          console.log('no uploaded')
        }
      }
    },
    computed:{
      openFormsComputed(){
          return this.openForms
      },
      uploadedFileNameComputed(){
        return this.uploadedFileName
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

.section2 form label{
  padding: .5rem 1rem;
  border: 1px solid black;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section2 form label:hover{
  background-color: #C2E7FF;
}
.section2 form label:hover .icon{
  color:black;
}
.icon{
  color: rgba(0, 0, 0, 0.2);
}
.section2 form button{
  width: 100%;
  border: none;
  color: white;
  background-color:#31A72A; 
  padding: .2rem 0 ;
  border: 1px solid black;
  border-top: none;
}
.section2 form button:hover{
  background-color: #30a72a8e;;
}
.section2 form button:active{
  color: black;
}
.section2 form div{
 text-align:center; 
 font-style: oblique; 
 border: 1px solid black;
 border-top: none;
 border-bottom: none;
}
</style>