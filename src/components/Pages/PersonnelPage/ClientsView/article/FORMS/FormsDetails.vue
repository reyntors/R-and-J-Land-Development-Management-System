<template>
  <div class="form-container">
    <header class="header">
      <h3>Forms</h3>
    </header>
    <div class="folderCont" v-if="!openFormsComputed">
      <section class="section1">
        <h6>Request Forms</h6>
        
        <div class="flexCont">
            <section @click="openForm('letterIntent')" v-if="clientObj.letterOfIntentURL !== ''">
              <p>Letter of Intent</p>
              <img src="@/assets/form-thumbnails/Letter-of-intent.png">              
            </section>

            <section @click="openForm('buyerDeclaration')" v-if="clientObj.individualDeclarationURL !== ''">
              <p>Individual Declaration</p>
              <img src="@/assets/form-thumbnails/individual-buyer-declaration.png">              
            </section>

            <section @click="openForm('bir-tin')" v-if="clientObj.BirTinRequestURL !== ''">
              <p>BIR-TIN-Request</p>
              <img src="@/assets/form-thumbnails/BIR-TIN-Request.png">              
            </section>

            <!-- <section  @click="openForm('contractDetails')" v-if="clientObj.ContractFormURL !== ''">
              <p>Contract Details</p>
              <img src="@/assets/form-thumbnails/contract-details.png">              
            </section> -->
     
          
        </div>
      </section>
<hr>
      <section class="section2">
        <h6>Upload here</h6>

        <div class="loadingUI" v-if="isLoading">
         <progress-loading type="dot"></progress-loading>
        </div>
        
        <div v-else>
          <h6 v-if="islistUploadedScannedFilesEmpty">NOTHING UPLOADED YET</h6>    
          <ul v-else>
            <li v-for="(file,index) in listUploadedScannedFiles" :key="index">
                <a :href="file.url" :download="file.filename">{{ file.filename }}</a>
            </li>
          </ul>          
        </div>



        <form enctype="multipart/form-data" @submit.prevent="submitUpload">
          <label class="uploadContainer" for="upload">
            <font-awesome-icon class="icon" icon="fa-solid fa-plus" beat size="2x"/>
            <p class="fs-6">Upload File</p>
          </label>
          <div v-if="uploadedFile">
            {{uploadedFileNameComputed}}
          </div>
          <button>Upload</button>
          <input 
          id="upload" 
          type="file"
          accept=".pdf"
          style="display: none;"
          @change="setUploadedFile">
        </form>

      </section>


    </div>

    <letter-intent v-if="formVisible === 'letterIntent'" @back-click="toggleOpenForms" :client-obj="clientObj.letterOfIntent" :whole-object="clientObj"/>
    <buyer-declaration v-if="formVisible === 'buyerDeclaration'" @back-click="toggleOpenForms" :client-obj="clientObj.individualDeclaration" :whole-object="clientObj"/>
    <bir-tin v-if="formVisible === 'bir-tin'" @back-click="toggleOpenForms" :client-obj="clientObj.BirTinRequest" :whole-object="clientObj"/>
    <contract-details v-if="formVisible === 'contractDetails'" @back-click="toggleOpenForms" :client-obj="clientObj.ContractDetails"></contract-details>
      
  </div>
</template>

<script>
import { toast } from 'vue3-toastify'
import ContractDetails from './FormComponents/ContractDetails.vue'
import BirTin from './FormComponents/BirTin.vue'
import BuyerDeclaration from './FormComponents/BuyerDeclaration.vue'
import LetterIntent from './FormComponents/LetterIntent.vue'
export default {
  components: { LetterIntent, BuyerDeclaration,BirTin,ContractDetails},
  props: ['clientObj'],
    data(){
      return{

        isLoading: true,

        formVisible: null,
        openForms: false,

        uploadedFile : null,
        uploadedFileName: null,

        listWithUrl: [],
        emptyList: true,
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
        console.log(this.uploadedFile)
      },
      setUpDonwloadable(file){
        const blob = new Blob([file],{type: 'application/pdf'})
        const url = URL.createObjectURL(blob)
        this.uploadedScannedFileURL = url
      },

      //submit uploads
      async submitUpload(){
        if(this.uploadedFile && this.uploadedFileName){
          const data = new FormData()
          data.append('file',this.uploadedFile)
          console.log(data)
          try{
            console.log(data)
            const response = await this.$store.dispatch('client/uploadScannedFile',{
                                id: this.clientObj.userId,
                                data: data
                              })
            toast.success(response)
          }catch(error){
            console.log(error)
            toast.success(error)
          }
          
          this.$store.dispatch('client/getListScannedFile', this.clientObj.userId)
        }else{
          console.log('no uploaded')
        }
      },

      async getListScannedFiles(){
        this.isLoading = true
        try{
          await this.$store.dispatch('client/getListScannedFile', this.clientObj.userId)
          await new Promise(resolve => setTimeout(resolve,500))
          this.isLoading = false
        }catch(error){
          console.log(error)
          toast.error(error)
        }
        
      }
    },



    computed:{
      openFormsComputed(){
          return this.openForms
      },
      uploadedFileNameComputed(){
        return this.uploadedFileName
      },
      islistUploadedScannedFilesEmpty(){
        const list = this.$store.getters['client/listCurrentClientScannedFilesGetter']
        if(list.length <= 0){
          return true
        }else{
          return false
        }
      },   
      listUploadedScannedFiles(){
        return this.$store.getters['client/listCurrentClientScannedFilesGetter']
      }     
    },

    mounted(){
      this.getListScannedFiles()
    }
 
}
</script>

<style scoped>
.uploadContainer{
  display: flex;
  flex-direction: column;
}
p{
  font-size: clamp(.6rem, 1vw, 1.5rem);
}
.form-container{
  overflow-y: auto;
  padding: .5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header{
  margin-bottom: 1rem;
}
.folderCont{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.folderCont .section1{
  flex-grow: 1;
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
.section2 form{
  margin-top: .5rem;
}
.section2 form label{
  padding: .5rem 1rem;
  border: 1px solid black;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  gap: .5rem;
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
.loadingUI{
  display: flex;
  justify-content: center;
  position: relative;
}
</style>