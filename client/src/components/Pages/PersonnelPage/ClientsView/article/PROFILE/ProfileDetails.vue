<template>
    <div class="cost-profileDetails">
      
      <div class="header">
          <h3>ProfileDetails Details</h3>
          <button @click="toggleEdit">{{ editBtnText }}</button>
      </div>
      <form>
        <section class="items-form">
              <label for="buyerID">
                  Buyer's ID:
              </label>
              <input id="buyerID" type="text" v-model="userId" readonly>
          </section>

          <section class="items-form">
              <label for="buyerName">
                  Buyer's Name:
              </label>
              <input id="buyerName" type="text" v-model="buyerName" :readonly="!editableComputed">
          </section>
          
          <section class="items-form">
              <label for="buyerName">
                  Address:
              </label>
              <input id="buyerName" type="text" v-model="address" :readonly="!editableComputed">
          </section>
          
          <section class="items-form">
              <label for="buyerName">
                  Contact No:
              </label>
              <input id="buyerName" type="text" v-model="contactNo" :readonly="!editableComputed">
          </section>
          
          <section class="items-form">
              <label for="buyerName">
                  Civil Status:
              </label>
              <input id="buyerName" type="text" v-model="civilStatus" :readonly="!editableComputed">
          </section>
          
          <section class="items-form">
              <label for="buyerName">
                  Husband/Wife's Name:
              </label>
              <input id="buyerName" type="text" v-model="spouseName" :readonly="!editableComputed">
          </section>
          
          <section class="items-form">
              <label for="buyerName">
                  Occupation:
              </label>
              <input id="buyerName" type="text" v-model="occupation" :readonly="!editableComputed">
          </section>
          
          <section class="items-form">
              <label for="buyerName">
                  Monthly Gross Income:
              </label>
              <input id="buyerName" type="text" v-model="monthlyGross" :readonly="!editableComputed">
          </section>
  <br>
          <section class="items-form">
              <label for="buyerName">
                  Buyer's Source of Income:
              </label>
              <input id="buyerName" type="text" v-model="sourceIncome" :readonly="!editableComputed">
          </section>
          
          <section class="items-form">
              <label for="buyerName">
                  Type of Employment:
              </label>
              <input id="buyerName" type="text" v-model="typeEmployment" :readonly="!editableComputed">
          </section>
          
          <section class="items-form">
              <label for="buyerName">
                  Employer:
              </label>
              <input id="buyerName" type="text" v-model="employer" :readonly="!editableComputed">
          </section>
          
          <section class="items-form">
              <label for="buyerName">
                  Address:
              </label>
              <input id="buyerName" type="text" v-model="sourceIncomeAddress" :readonly="!editableComputed">
          </section>
          
          <section class="items-form">
              <label for="buyerName">
                  Gross Salary:
              </label>
              <input id="buyerName" type="text" v-model="sourceIncomeGrossSallary" :readonly="!editableComputed">
          </section>
          
          <section class="items-form">
              <label for="buyerName">
                  Business Name:
              </label>
              <input id="buyerName" type="text" v-model="businessName" :readonly="!editableComputed">
          </section>
          
          <section class="items-form">
              <label for="buyerName">
                  Address:
              </label>
              <input id="buyerName" type="text" v-model="businessAddress" :readonly="!editableComputed">
          </section>
          
          <section class="items-form">
              <label for="buyerName">
                  Monthly Gross Income:
              </label>
              <input id="buyerName" type="text" v-model="businessMonthlyGross" :readonly="!editableComputed">
          </section>
      </form>
      <button style="margin-top: 1rem" @click="saveNow">Save</button>
    </div>
  </template>
  
  <script>
  export default {
      emits: ['pass-data'],
      props: ['profileDetails'],
      data(){
          return{
              editable: false,
              editOccured: false,
  
              userId: this.profileDetails.userId,
              buyerName: this.profileDetails.fullname,
              address: this.profileDetails.homeAddress,
              contactNo: this.profileDetails.contactNumber,
              civilStatus: '',
              spouseName: '',
              occupation: '',
              monthlyGross: '',

              sourceIncome: '',
              typeEmployment: '',
              employer: '',
              sourceIncomeAddress: '',
              sourceIncomeGrossSallary: '',
              businessName: '',
              businessAddress: '',
              businessMonthlyGross: ''
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
          passData(){
              const payload = this.getDetails();
              this.$emit('pass-data',payload)
          },
          saveNow(){
              if(this.editOccured){
                  const obj = {
                  id: this.profileDetails.id,
                  fullname: this.buyerName,
                  email: this.profileDetails.email,
                  address: this.address,
                  }
                  this.$store.dispatch('client/updateClient',obj)
              }else{
                  console.log('no changes')
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
          }
      },
  
      watch:{
          buyerName(dataNew){
              if(dataNew !== this.profileDetails.fullname){
                  this.editOccured = true;
              }else{
                  this.editOccured = false
              }      
          },
          email(dataNew){
              if(dataNew !== this.profileDetails.email){
                  this.editOccured = true;
              }else{
                  this.editOccured = false
              }
          },
          address(dataNew){
              if(dataNew !== this.profileDetails.address){
                  this.editOccured = true;
              }else{
                  this.editOccured = false
              }
          }
      }
  
  }
  </script>
  
  
  <style scoped>
  .cost-profileDetails{
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
  .cost-profileDetails .header button{
      padding: 2px .5rem;
      background-color: #31A72A;
      color:white;
  }
  .cost-profileDetails .header button:hover{
      background-color: #30a72a8e;
  }
  .cost-profileDetails .header button:active{
      color: black;
  }
  .items-form{
      margin-bottom: .2rem;
      padding: 0 .5rem;
  }
  </style>