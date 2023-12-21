<template>
    <div class="cost-profileDetails">
      
        <div class="header">
            <h3>Profile Details</h3>
            <clickable-button @click="toggleEdit">{{ editBtnText }}</clickable-button>
        </div>
        <form>
            <section class="items-form">
                <label>Full Name</label>
                <input type="text" v-model="client.fullname" :readonly="!editable" :class="{editable: !editable}">
            </section>
            <section class="items-form">
                <label>Contact Number</label>
                <input type="text" v-model="client.contactNumber" :readonly="!editable" :class="{editable: !editable}">
            </section>
            <section class="items-form">
                <label>Email Address</label>
                <input type="text" v-model="client.email" readonly :class="{editable:true}">
            </section>
            <section class="items-form">
                <label>Address</label>
                <input v-model="client.address" :readonly="!editable" :class="{editable: !editable}">
            </section>
            <section class="items-form">
                <label>Civil Status</label>
                <input type="text" v-model="client.civilStatus" :readonly="!editable" :class="{editable: !editable}">
            </section>
            <section class="items-form">
                <label>Spouse Name</label>
                <input type="text" v-model="client.spouseName" :readonly="!editable" :class="{editable: !editable}">
            </section>
            <section class="items-form">
                <label>Occupation</label>
                <input type="text" v-model="client.occupation" :readonly="!editable" :class="{editable: !editable}">
            </section>
            <section class="items-form">
                <label>Monthly Gross Income</label>
                <input type="text" v-model="client.monthlyGrossIncome" :readonly="!editable" :class="{editable: !editable}">
            </section>
            <section class="items-form">
                <label>Source of Income</label>
                <input type="text" v-model="client.buyerSourceOfIncome" :readonly="!editable" :class="{editable: !editable}">
            </section>
            <section class="items-form">
                <label>Type of Employment</label>
                <input type="text" v-model="client.typeOfEmployment" :readonly="!editable" :class="{editable: !editable}">
            </section>
            <section class="items-form">
                <label>Employer</label>
                <input type="text" v-model="client.employer" :readonly="!editable" :class="{editable: !editable}">
            </section>
            <section class="items-form">
                <label>Gross Salary</label>
                <input type="text" v-model="client.grossSalary" :readonly="!editable" :class="{editable: !editable}">
            </section>
            <section class="items-form">
                <label>Business Name</label>
                <input type="text" v-model="client.businessName" :readonly="!editable" :class="{editable: !editable}">
            </section>
            <section class="items-form">
                <label>Business Address</label>
                <input type="text" v-model="client.businessAddress" :readonly="!editable" :class="{editable: !editable}">
            </section>    
        </form>
<hr>
        <div style="margin-top: 1rem;"> 
            <p class="fw-bold fs-4">Uploaded ID</p>
            <section class="uploadedID">
                <p v-if="client.uploadId.length<1">No Valid ID's Uploaded</p>
                <ul v-for="(image,index) in client.uploadId" :key="index">
                    <li>
                    <img :src="image.url">
                    </li>
                    
                </ul>
            </section>
        </div>
      <clickable-button style="margin-top: 1rem; width: 50%; margin: auto;" @click="saveNow">Save</clickable-button>
      <div class="shade" v-if="isLoading"/>
      <progress-loading type="torks" v-if="isLoading && isError"/>
    </div>
    
    
  </template>
  
  <script>
import ProgressLoading from '@/components/Reusable/LoadingScreens/ProgressLoading.vue'
  import { toast } from 'vue3-toastify'
  export default {
  components: { ProgressLoading },
      emits: ['pass-data'],
      props: ['profileDetails','clientID'],
      data(){
          return{
                editable: false,
                editOccured: false,
                id: this.clientID,

                client: null,
                clientReference: null,
                copyAdditionalInfoObj: null,

                isLoading: false,
                isError: false,

                fullnameChanged: false,
                contactNumberChanged: false,
                addressChanged: false,
                civilStatusChanged: false,
                spouseNameChanged: false,
                occupationChanged: false,
                monthlyGrossIncomeChanged: false,
                buyerSourceOfIncomeChanged: false,
                typeOfEmploymentChanged: false,
                employerChanged: false,
                grossSalaryChanged: false,
                businessNameChanged: false,
                businessAddressChanged: false,

          }
      },
      
        methods: {
            getDetails(){
                return {
                    fullname: this.fullname,
                    email: this.email,
                    address: this.address,
                }
            },
            toggleEdit(){
                this.editable = !this.editable
            },
            checkChanges(){
                if(
                    this.fullnameChanged === true ||
                    this.contactNumberChanged === true ||
                    this.addressChanged === true ||
                    this.civilStatusChanged === true ||
                    this.spouseNameChanged === true ||
                    this.occupationChanged === true ||
                    this.monthlyGrossIncomeChanged === true ||
                    this.buyerSourceOfIncomeChanged === true ||
                    this.typeOfEmploymentChanged === true ||
                    this.employerChanged === true ||
                    this.grossSalaryChanged === true ||
                    this.businessNameChanged === true ||
                    this.businessAddressChanged === true
                ){
                    return true
                }else{
                    return false
                }
            },
            async saveNow(){
                const edited = this.checkChanges()
                if(edited){
                    this.isLoading = true
                    this.isError = true
                    try{
                        const response = await this.$store.dispatch('client/updateClient',{
                                id: this.clientID,
                                data: this.client
                            })         
                        this.isError = false 
                        toast.success(response)       
                    }catch(error){
                        toast.error(error)
                    }
                    this.isLoading = false
                }else{
                    toast.warning('no changes occured')
                }


            },
        },
  
        computed:{


            editableComputed(){
              return this.editable
            },
            editBtnText(){
              if(this.editable === false){
                  return 'Edit'
              }else{
                  return 'Cancel'
              }
            },
        },
  
        watch:{
            'client.fullname': function(newValue){
                // console.log(this.clientReference.fullname)
                // console.log(newValue)
                if(this.clientReference.fullname != newValue){
                    this.fullnameChanged = true
                }else{
                    this.fullnameChanged = false
                }
            },
            'client.contactNumber': function(newValue){
                // console.log(this.clientReference.contactNumber)
                // console.log(newValue)
                if(this.clientReference.contactNumber != newValue){
                    this.contactNumberChanged = true
                }else{
                    this.contactNumberChanged = false
                }
            },
            'client.address': function(newValue){
                // console.log(this.clientReference.address)
                // console.log(newValue)
                if(this.clientReference.address != newValue){
                    this.addressChanged = true
                }else{
                    this.addressChanged = false
                }
            },
            'client.civilStatus': function(newValue){
                // console.log(this.clientReference.civilStatus)
                // console.log(newValue)
                if(this.clientReference.civilStatus != newValue){
                    this.civilStatusChanged = true
                }else{
                    this.civilStatusChanged = false
                }
            },
            'client.spouseName': function(newValue){
                // console.log(this.clientReference.spouseName)
                // console.log(newValue)
                if(this.clientReference.spouseName != newValue){
                    this.spouseNameChanged = true
                }else{
                    this.spouseNameChanged = false
                }
            },
            'client.occupation': function(newValue){
                // console.log(this.clientReference.occupation)
                // console.log(newValue)
                if(this.clientReference.occupation != newValue){
                    this.occupationChanged = true
                }else{
                    this.occupationChanged = false
                }
            },
            'client.monthlyGrossIncome': function(newValue){
                // console.log(this.clientReference.monthlyGrossIncome)
                // console.log(newValue)
                if(this.clientReference.monthlyGrossIncome != newValue){
                    this.monthlyGrossIncomeChanged = true
                }else{
                    this.monthlyGrossIncomeChanged = false
                }
            },
            'client.buyerSourceOfIncome': function(newValue){
                // console.log(this.clientReference.buyerSourceOfIncome)
                // console.log(newValue)
                if(this.clientReference.buyerSourceOfIncome != newValue){
                    this.buyerSourceOfIncomeChanged = true
                }else{
                    this.buyerSourceOfIncomeChanged = false
                }
            },
            'client.typeOfEmployment': function(newValue){
                // console.log(this.clientReference.typeOfEmployment)
                // console.log(newValue)
                if(this.clientReference.typeOfEmployment != newValue){
                    this.typeOfEmploymentChanged = true
                }else{
                    this.typeOfEmploymentChanged = false
                }
            },
            'client.employer': function(newValue){
                // console.log(this.clientReference.employer)
                // console.log(newValue)
                if(this.clientReference.employer != newValue){
                    this.employerChanged = true
                }else{
                    this.employerChanged = false
                }
            },
            'client.grossSalary': function(newValue){
                // console.log(this.clientReference.grossSalary)
                // console.log(newValue)
                if(this.clientReference.grossSalary != newValue){
                    this.grossSalaryChanged = true
                }else{
                    this.grossSalaryChanged = false
                }
            },
            'client.businessName': function(newValue){
                // console.log(this.clientReference.businessName)
                // console.log(newValue)
                if(this.clientReference.businessName != newValue){
                    this.businessNameChanged = true
                }else{
                    this.businessNameChanged = false
                }
            },
            'client.businessAddress': function(newValue){
                // console.log(this.clientReference.businessAddress)
                // console.log(newValue)
                if(this.clientReference.businessAddress != newValue){
                    this.businessNameChanged = true
                }else{
                    this.businessNameChanged = false
                }
            },
        },

        created(){
            this.$store.commit('client/resetTempArrays')
            const list = this.$store.getters['client/clientsGetter']
            const index = list.findIndex(item => item.userId === this.clientID)
            if(index>=0){
                const obj = list[index]
                this.clientReference = {...obj.profileDetails}
                this.client = {...obj.profileDetails}
            }else{
                this.client = {}
            }
            

        }
  
  }
  </script>
  
  
  <style scoped>
  .shade{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.22);
    /* border-radius: 16px; */
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.09);
  }
  .edit{
    border-bottom: 1px solid black;
  }
  input{
    border: none;
    width: 100%;
    font-weight: 600;
    /* text-transform: uppercase; */
    padding-left: 1rem;
    overflow: visible;
    outline: 1px solid black;
  }
  /* input:focus{
    outline: none;
  } */
  .cost-profileDetails{
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 1rem;
  }
  .cost-profileDetails .header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: none;
      margin-bottom: 1rem;
  
      /* border: 1px solid black; */
  }
  .items-form{
      margin-bottom: .5rem;
      padding: 0 .5rem;
      width: 100%;
      display: flex;
      gap: .5rem;
  }
  .items-form label{
      white-space: nowrap;
      min-width: 180px;
      /* border: 1px solid black; */
  }
  .editable{
    outline: none;
  }
  img{
  padding: .5rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 300px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}
.uploadedID{
  min-height: 10vh;
  /* border: 1px solid black; */
  padding-bottom: 1rem;
  gap: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
input{
  background-color: transparent;
  border-radius: 3px;
}
  </style>