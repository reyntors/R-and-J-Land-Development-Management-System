<template>
    <div class="cost-profileDetails">
      
        <div class="header">
            <h3>Profile Details</h3>
            <button @click="toggleEdit">{{ editBtnText }}</button>
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
      <button style="margin-top: 1rem" @click="saveNow">Save</button>
      <div class="shade" v-if="isLoading"/>
      <progress-loading type="spin" v-if="isLoading && isError"/>
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
              copyAdditionalInfoObj: null,

              isLoading: false,
              isError: false,

                // isbusinessAddressEdited : false,
                // isbusinessMonthlyIncomeEdited : false,
                // isbusinessNameEdited : false,
                // isbuyerSourceOfIncomeEdited : false,
                // iscivilStatusEdited : false,
                // isemployerEdited : false,
                // isemployerAddressEdited : false,
                // isgrossSalaryEdited : false,
                // ismonthlyGrossIncomeEdited : false,
                // isoccupationEdited : false,
                // isspouseNameEdited : false,
                // istypeOfEmploymentEdited : false,

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
            // checkChanges(){
            //     if(
            //         this.isbusinessAddressEdited === true &&
            //         this.isbusinessMonthlyIncomeEdited === true &&
            //         this.isbusinessNameEdited === true &&
            //         this.isbuyerSourceOfIncomeEdited === true &&
            //         this.iscivilStatusEdited === true &&
            //         this.isemployerEdited === true &&
            //         this.isemployerAddressEdited === true &&
            //         this.isgrossSalaryEdited === true &&
            //         this.ismonthlyGrossIncomeEdited === true &&
            //         this.isoccupationEdited === true &&
            //         this.isspouseNameEdited === true &&
            //         this.istypeOfEmploymentEdited === true
            //     ){
            //         return true
            //     }else{
            //         return false
            //     }
            // },
            async saveNow(){
                // const edited = this.checkChanges()
                // if(!edited){
                    this.isLoading = true
                    this.isError = true
                    const defaultInfo = {
                        fullname: this.client.fullname,
                        homeAddress: this.client.homeAddress,
                        contactNumber: this.client.contactNumber,    
                    }
                    console.log(defaultInfo)
                    console.log(this.client.additionalInfo)
                    try{
                        await this.$store.dispatch('client/updateClient',{
                                id: this.clientID,
                                additionalInfo: this.client.additionalInfo,
                                defaultInfo: defaultInfo
                            })         
                        this.isError = false        
                    }catch(error){
                        toast.error(error)
                    }
                    this.isLoading = false
                // }else{
                //     toast.warning('no changes occured')
                // }


            },
        },
  
        computed:{

            // somethingComputed(){
            //     return this.$store.getter['client/somethingGetter']
            // },

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
  
        // watch:{
        //     businessMonthlyIncome(newVal){if(newVal === this.copyAdditionalInfoObj.businessMonthlyIncome){ this.isbusinessMonthlyIncomeEdited = false}else{this.isbusinessMonthlyIncomeEdited = true}},
        //     businessName(newVal){if(newVal === this.copyAdditionalInfoObj.businessName){ this.isbusinessNameEdited = false}else{this.isbusinessNameEdited = true}},
        //     buyerSourceOfIncome(newVal){if(newVal === this.copyAdditionalInfoObj.buyerSourceOfIncome){ this.isbuyerSourceOfIncomeEdited = false}else{this.isbuyerSourceOfIncomeEdited = true}},
        //     civilStatus(newVal){if(newVal === this.copyAdditionalInfoObj.civilStatus){ this.iscivilStatusEdited = false}else{this.iscivilStatusEdited = true}},
        //     employer(newVal){if(newVal === this.copyAdditionalInfoObj.employer){ this.isemployerEdited = false}else{this.isemployerEdited = true}},
        //     employerAddress(newVal){if(newVal === this.copyAdditionalInfoObj.employerAddress){ this.isemployerAddressEdited = false}else{this.isemployerAddressEdited = true}},
        //     grossSalary(newVal){if(newVal === this.copyAdditionalInfoObj.grossSalary){ this.isgrossSalaryEdited = false}else{this.isgrossSalaryEdited = true}},
        //     monthlyGrossIncome(newVal){if(newVal === this.copyAdditionalInfoObj.monthlyGrossIncome){ this.ismonthlyGrossIncomeEdited = false}else{this.ismonthlyGrossIncomeEdited = true}},
        //     occupation(newVal){if(newVal === this.copyAdditionalInfoObj.occupation){ this.isoccupationEdited = false}else{this.isoccupationEdited = true}},
        //     spouseName(newVal){if(newVal === this.copyAdditionalInfoObj.spouseName){ this.isspouseNameEdited = false}else{this.isspouseNameEdited = true}},
        //     typeOfEmployment(newVal){if(newVal === this.copyAdditionalInfoObj.typeOfEmployment){ this.istypeOfEmploymentEdited = false}else{this.istypeOfEmploymentEdited = true}},        
        // },

        created(){
            this.$store.commit('client/resetTempArrays')
            const list = this.$store.getters['client/clientsGetter']
            const index = list.findIndex(item => item.userId === this.clientID)
            if(index>=0){
                const obj = list[index]
                console.log(obj.profileDetails)
                this.client = {...obj.profileDetails}
            }else{
                this.client = {}
            }
            
            // this.client= {
            //     additionalInfo: obj.additionalInfo,
            //     contactNumber: obj.contactNumber,
            //     fullname: obj.fullname,
            //     homeAddress: obj.homeAddress,
            // }
            // console.log(this.client)
            // console.log(this.copyAdditionalInfoObj)

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
    text-transform: uppercase;
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
 button{
      padding: 2px .5rem;
      background-color: #31A72A;
      color:white;
  }
 button:hover{
      background-color: #30a72a8e;
  }
 button:active{
      color: black;
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
  </style>