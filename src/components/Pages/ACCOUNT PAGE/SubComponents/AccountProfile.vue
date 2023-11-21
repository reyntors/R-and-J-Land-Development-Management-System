<template>
  <div class="account-profile">
    <div class="background" v-if="isLoading || isUploading"></div>
    <section>
      <h4>Profile</h4>
    </section>
    <div class="buttons">
      <button class="btn" @click="saveUpdate">Save</button>
      <button class="btn" @click=" toggleEdit" v-if="!editable">Edit</button>
      <button class="btn" @click=" cancelEdit" v-else>Cancel <font-awesome-icon icon="fa-solid fa-xmark" /></button>
    </div>
    
    <form class="form">
      <section class="form-section">
        <label>Full Name</label>
        <input type="text" v-model="myProfile.fullname" :readonly="!editable" :class="{editable: !editable}">
      </section>
      <section class="form-section">
        <label>Contact Number</label>
        <input type="text" v-model="myProfile.contactNumber" :readonly="!editable" :class="{editable: !editable}">
      </section>
      <section class="form-section">
        <label>Email Address</label>
        <input type="text" v-model="myProfile.email" readonly :class="{editable:true}">
      </section>
      <section class="form-section">
        <label>Address</label>
        <input v-model="myProfile.address" :readonly="!editable" :class="{editable: !editable}">
      </section>
      <section class="form-section">
        <label>Civil Status</label>
        <input type="text" v-model="myProfile.civilStatus" :readonly="!editable" :class="{editable: !editable}">
      </section>
      <section class="form-section">
        <label>Spouse Name</label>
        <input type="text" v-model="myProfile.spouseName" :readonly="!editable" :class="{editable: !editable}">
      </section>
      <section class="form-section">
        <label>Occupation</label>
        <input type="text" v-model="myProfile.occupation" :readonly="!editable" :class="{editable: !editable}">
      </section>
      <section class="form-section">
        <label>Monthly Gross Income</label>
        <input type="text" v-model="myProfile.monthlyGrossIncome" :readonly="!editable" :class="{editable: !editable}">
      </section>
      <section class="form-section">
        <label>Source of Income</label>
        <input type="text" v-model="myProfile.buyerSourceOfIncome" :readonly="!editable" :class="{editable: !editable}">
      </section>
      <section class="form-section">
        <label>Type of Employment</label>
        <input type="text" v-model="myProfile.typeOfEmployment" :readonly="!editable" :class="{editable: !editable}">
      </section>
      <section class="form-section">
        <label>Employer</label>
        <input type="text" v-model="myProfile.employer" :readonly="!editable" :class="{editable: !editable}">
      </section>
      <section class="form-section">
        <label>Gross Salary</label>
        <input type="text" v-model="myProfile.grossSalary" :readonly="!editable" :class="{editable: !editable}">
      </section>
      <section class="form-section">
        <label>Business Name</label>
        <input type="text" v-model="myProfile.businessName" :readonly="!editable" :class="{editable: !editable}">
      </section>
      <section class="form-section">
        <label>Business Address</label>
        <input type="text" v-model="myProfile.businessAddress" :readonly="!editable" :class="{editable: !editable}">
      </section>    

      <progress-loading type="torks" v-if="isLoading"/>
      
    </form>
    <hr>
    <div style="margin-top: 1rem;"> 
      <header style="display: flex; justify-content: space-between; margin-bottom: .5rem;"> 
        <h4>Uploaded ID</h4>
        <button class="btn" v-if="image" @click="uploadToCloud">Upload</button>
      </header>
      
      <section class="uploadedID">
        <!-- <add-govt-id></add-govt-id> -->
        <progress-loading type="torks" v-if="isUploading"/>
          <div class="box"> 
            <input type="file" id="idUpload" accept="image/*" @change="uploadedImg">
          </div>
          <ul v-for="(image,index) in myProfile.uploadId" :key="index">
            <li class="box">
              <img :src="image.url">
            </li>
            
          </ul>
      </section>
    </div>

    
    
  </div>
  
</template>

<script>
// import AddGovtId from './SubComp/AddGovtId.vue'
import { toast } from 'vue3-toastify'
export default {
  props: ['profile'],
  components: {
    // AddGovtId
  },
  data(){
    return{
      myProfile: null,
      editable: false,
      
      fullnameChangedBool: false,
      addressChangedBool: false,
      businessAddressChangedBool: false,
      businessNameChangedBool: false,
      buyerSourceOfIncomeChangedBool: false,
      civilStatusChangedBool: false,
      contactNumberChangedBool: false,
      grossSalaryChangedBool: false,
      monthlyGrossIncomeChangedBool: false,
      occupationChangedBool: false,
      spouseNameChangedBool: false,
      typeOfEmploymentChangedBool: false,
      employerChangedBool: false,

      isLoading : false,

      image: null,
      userId: null,
      isUploading: false,
    }
  },
  methods:{
    toggleEdit(){
      this.editable = !this.editable
    },
    cancelEdit(){
      this.toggleEdit()
      this.myProfile = {...this.profile}
    },
    getData(){
      const data = {}
      if(this.fullnameChangedBool){
        data.fullname = this.myProfile.fullname
      }
      if(this.addressChangedBool){
        data.address= this.myProfile.address
      }
      if(this.businessAddressChangedBool){
        data.businessAddress= this.myProfile.businessAddress
      }
      if(this.businessNameChangedBool){
        data.businessName= this.myProfile.businessName
      }
      if(this.buyerSourceOfIncomeChangedBool){
        data.buyerSourceOfIncome= this.myProfile.buyerSourceOfIncome
      }
      if(this.civilStatusChangedBool){
        data.civilStatus= this.myProfile.civilStatus
      }
      if(this.contactNumberChangedBool){
        data.contactNumber= this.myProfile.contactNumber
      }
      if(this.grossSalaryChangedBool){
        data.grossSalary= this.myProfile.grossSalary
      }
      if(this.spouseNameChangedBool){
        data.spouseName= this.myProfile.spouseName
      }
      if(this.monthlyGrossIncomeChangedBool){
        data.monthlyGrossIncome= this.myProfile.monthlyGrossIncome
      }
      if(this.occupationChangedBool){
        data.occupation= this.myProfile.occupation
      }
      if(this.employerChangedBool){
        data.employer= this.myProfile.employer
      }
      if(this.typeOfEmploymentChangedBool){
        data.typeOfEmployment= this.myProfile.typeOfEmployment
      }
      return data
    },
    checkIfEdited(){
      if(
        this.fullnameChangedBool ||
        this.addressChangedBool ||
        this.businessAddressChangedBool ||
        this.businessNameChangedBool ||
        this.buyerSourceOfIncomeChangedBool ||
        this.civilStatusChangedBool ||
        this.contactNumberChangedBool ||
        this.grossSalaryChangedBool ||
        this.monthlyGrossIncomeChangedBool ||
        this.occupationChangedBool ||
        this.spouseNameChangedBool ||
        this.typeOfEmploymentChangedBool ||
        this.employerChangedBool
      ){
        return true
      }else{
        return false
      }
    },
    async saveUpdate(){
      const isEdited = this.checkIfEdited()
      if(isEdited){
        const data = this.getData()
        console.log(data)
        try{
          this.isLoading = true
          const response = await this.$store.dispatch('myProfile/requestSaveUpdate',data)
          toast.success(response,{autoClose: 2000})
          await new Promise(resolve => setTimeout(resolve, 500))
          toast.success("Please wait or the mean time to check your details",{autoClose: false})
        }catch(error){
          toast.error(error)
        }
        this.isLoading = false
      }else{
        toast.warning('no changes')
      }
    },
    uploadedImg(event){
        const img = event.target.files[0]
        if(img){
            console.log(img)
            this.image = img
        }else{
          this.image = null
        }
    },
    async uploadToCloud(){
        if(this.image){
            // console.log('image present')
            this.isUploading = true
            const data = new FormData()
            data.append('image',this.image)
            const payload = {
                id: this.userId,
                image: data
            }
            try{
                const response = await this.$store.dispatch('myProfile/uploadID',payload)
                console.log(response)
            }catch(error){
                console.error(error)
            }  
            this.isUploading = false
        }else{
          toast.warning('no uploaded imaged detected')
        }
    }
  },
  computed:{
    permissionToEdit(){
      if(this.myProfile.permissionEdit){
        return true
      }else{
        return false
      }
    }
  },
  created(){
    // console.log(this.profile)
    this.myProfile = {...this.profile}
    this.userId = this.$store.getters['auth/getUserId']
  },
  watch:{
      'myProfile.fullname': function(newValue){
         if(newValue !== this.profile.fullname){
            this.fullnameChangedBool = true
            // console.log('changed')
         }else{
            this.fullnameChangedBool = false
            // console.log('no changes')
         }
      },
      'myProfile.address': function(newValue){
        // console.log(newValue)
         if(newValue !== this.profile.address){
            this.addressChangedBool= true
         }else{
            this.addressChangedBool = false
         }
      },
      'myProfile.businessAddress': function(newValue){
        // console.log(newValue)
         if(newValue !== this.profile.businessAddress){
            this.businessAddressChangedBool= true
         }else{
            this.businessAddressChangedBool = false
         }
      },
      'myProfile.businessName': function(newValue){
        // console.log(newValue)
         if(newValue !== this.profile.businessName){
            this.businessNameChangedBool= true
         }else{
            this.businessNameChangedBool = false
         }
      },
      'myProfile.buyerSourceOfIncome': function(newValue){
        // console.log(newValue)
         if(newValue !== this.profile.buyerSourceOfIncome){
            this.buyerSourceOfIncomeChangedBool= true
         }else{
            this.buyerSourceOfIncomeChangedBool = false
         }
      },
      'myProfile.civilStatus': function(newValue){
        // console.log(newValue)
         if(newValue !== this.profile.civilStatus){
            this.civilStatusChangedBool= true
         }else{
            this.civilStatusChangedBool = false
         }
      },
      'myProfile.contactNumber': function(newValue){
        // console.log(newValue)
         if(newValue !== this.profile.contactNumber){
            this.contactNumberChangedBool= true
         }else{
            this.contactNumberChangedBool = false
         }
      },
      'myProfile.grossSalary': function(newValue){
        // console.log(newValue)
         if(newValue !== this.profile.grossSalary){
            this.grossSalaryChangedBool= true
         }else{
            this.grossSalaryChangedBool = false
         }
      },
      'myProfile.monthlyGrossIncome': function(newValue){
        // console.log(newValue)
         if(newValue !== this.profile.monthlyGrossIncome){
            this.monthlyGrossIncomeChangedBool= true
         }else{
            this.monthlyGrossIncomeChangedBool = false
         }
      },
      'myProfile.occupation': function(newValue){
        // console.log(newValue)
         if(newValue !== this.profile.occupation){
            this.occupationChangedBool= true
         }else{
            this.occupationChangedBool = false
         }
      },
      'myProfile.spouseName': function(newValue){
        // console.log(newValue)
         if(newValue !== this.profile.spouseName){
            this.spouseNameChangedBool= true
         }else{
            this.spouseNameChangedBool = false
         }
      },
      'myProfile.typeOfEmployment': function(newValue){
        // console.log(newValue)
         if(newValue !== this.profile.typeOfEmployment){
            this.typeOfEmploymentChangedBool= true
         }else{
            this.typeOfEmploymentChangedBool = false
         }
      },
      'myProfile.employer': function(newValue){
        // console.log(newValue)
         if(newValue !== this.profile.employer){
            this.employerChangedBool= true
         }else{
            this.employerChangedBool = false
         }
      },
  }
}
</script>

<style scoped>

.background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.4px);
    -webkit-backdrop-filter: blur(9.4px);
    z-index: 2;
}
.editable{
  /* outline: none; */
  /* border: 1px solid black; */
  /* background-color: rgba(255, 255, 255, 0.4); */
}
li{
  height: 100%;
}
ul{
  margin:0;
  padding: 0;
  list-style: none;
}
img{
  padding: 5px;
  object-fit: cover;
  width: 100%;
  height: 100%;
  /* box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);
  border-radius: 5px; */
}
.uploadedID{
  /* height: 50vh; */
  /* border: 1px solid black; */
  padding-bottom: 1rem;
  gap: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
}

.form{
  width: 100%;
  position: relative;
  padding: 0 1rem;
  /* background-color: white;; */
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
}
.buttons{
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 1rem;
  margin-top: .5rem;
  display: flex;
  gap: .5rem;
}
.btn{
  padding: .25rem .5rem;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
  background-color: #31A72A;
  color: white;
}
.btn:hover{
  color: black;
}
.btn:active{
  opacity: .5;
}
.form-section label{
  min-width: 180px;
}
input{
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  /* outline: none; */
  /* border: none; */
  padding: 5px;
  width: 100%;
}
.form-section{
  padding: .5rem 1rem;
  display: flex;
  align-items: center;
  gap: .5rem;
  background-color: white;
  margin-bottom: 1rem;
  border-radius: 5px;
}
.account-profile{
  position: relative;
  width: 90%;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid white;
  border-radius: 5px; 
}
@media screen and (max-width: 1240px) {
  /* .form{
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-template-columns: 1fr;
  } */
  .uploadedID{
  grid-template-columns: 1fr 1fr;
  }
}

.box{
  max-height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
}
.box input{
  border: none;
  outline: none;
}
</style>