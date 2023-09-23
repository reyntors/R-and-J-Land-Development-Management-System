<template>
    <div class="c-cont corporate">
      <header>CORPORATE BUYER</header>
  
      <article class="article1">
          <section class="section1">
              <p>Name of Corporation</p>
              <input v-model="corpName" :class="{empty:iscorpNameEmpty}">
          </section>
          <section class="section2">
              <p>Name of Business</p>
              <input v-model="corpBusinessName" :class="{empty:iscorpBusinessNameEmpty}">
          </section>
      </article>
  
      <article class="article2">
          <div class="section1">
              <p>BUSINESS ADDRESS</p>
              <input style="width:100%;" v-model="corpBusinessAddress" :class="{empty:iscorpBusinessAddressEmpty}">
              <p>Zip Code: <input style="width:100%;" v-model="corpZipCode" :class="{empty:iscorpZipCodeEmpty}"></p>
          </div>
  
          <div class="section2">
              <p>BUSINESS PHONE NO.</p>
              <input v-model="corpBusinessPhoneNo" :class="{empty:iscorpBusinessPhoneNoEmpty}">
          </div>
          <div class="section3">
              <p>FAX NO.</p>
              <input v-model="corpFaxNo" :class="{empty:iscorpFaxNoEmpty}">
          </div>
      </article>
  
      <article class="article3">
          <div class="section1-left">
                  <p>NAME OF AUTHORIZED SIGNATORY</p>
              <br>
              <div class="names">
                  <section>
                      <input type="text" v-model="corpAuthorizedLastname" :class="{empty:iscorpAuthorizedLastnameEmpty}">
                      <p>Last Name</p>
                  </section>
                  <section>
                      <input type="text" v-model="corpAuthorizedFirstname" :class="{empty:iscorpAuthorizedFirstnameEmpty}">
                      <p>First Name</p>
                  </section>
                  <section>
                      <input type="text" v-model="corpAuthorizedMiddlename" :class="{empty:iscorpAuthorizedMiddlenameEmpty}">
                      <p>Middle Name</p>
                  </section>
              </div>
          </div>
  
          <div class="section1-right">
              <p>DESIGNATION / POSITION</p>
              <br>
              <input v-model="corpAuthorizedPosition" :class="{empty:iscorpAuthorizedPositionEmpty}">
              <br>
          </div>
      </article>
  
      <article class="article4">
          <div class="div1">
              <p>SECONDARY ADDRESS</p>
              <input style="width:100%;" v-model="corpAuthorizedSecondaryAddress" :class="{empty:iscorpAuthorizedSecondaryAddressEmpty}">
              <br>
              <p>Zip Code: <input style="width:100%;" v-model="corpAuthorizedZip" :class="{empty:iscorpAuthorizedZipEmpty}"></p>
          </div>
          <div class="div2" :class="{empty:iscorpAuthorizedSexEmpty}">
              <p>Sex</p>
              <div class="status">
                  <section><input type="radio" id="corpMale" value="Male" v-model="corpAuthorizedSex"><label for="corpMale">Male</label></section>
                  <section><input type="radio" id="corpFemale" value="Female" v-model="corpAuthorizedSex"><label for="corpFemale">Female</label></section>  
              </div>
          </div>
          <div class="div3">
              <p>Birthdate</p>
              <input style="display: block;" type="date" v-model="corpAuthorizedBirthdate" :class="{empty:iscorpAuthorizedBirthdateEmpty}">
              <p>Place of Birth</p>
              <input style="border: none; border-bottom: 1px solid black;" v-model="corpAuthorizedBirthPlace" :class="{empty:iscorpAuthorizedBirthPlaceEmpty}">
          </div>
      </article>
  
      <article class="article5">
          <div class="div1">
              <section>
                  <div>
                      <p>HOME PHONE NO.</p>
                      <input v-model="corpAuthorizedHomePhoneNo" :class="{empty:iscorpAuthorizedHomePhoneNoEmpty}">
                  </div>
                  <div>
                      <p>FAX NO.</p>
                      <input v-model="corpAuthorizedFaxNo" :class="{empty:iscorpAuthorizedFaxNoEmpty}">
                  </div>
              </section>
              
              <p style="font-size: clamp(.5rem, 1vw, 1rem);">(please incluse country and area codes, if possible)</p>
              <input type="text" style="display: block;" v-model="corpAuthorizedIncludeCtry" :class="{empty:iscorpAuthorizedIncludeCtryEmpty}">
          </div>
  
          <div class="div2">
              <div class="div">
                  <section>
                      <p>MOBILE NO.</p>
                      <input v-model="corpAuthorizedMobileNo" :class="{empty:iscorpAuthorizedMobileNoEmpty}">
                  </section>
                  <section>
                      <p>T.I.N.</p>
                      <input v-model="corpAuthorizedTIN" :class="{empty:iscorpAuthorizedTINEmpty}">
                  </section>
              </div>
              <section class="section">
                  <p>EMAIL ADDRESS.</p>
                  <input style="display: block;" v-model="corpAuthorizedEmail" :class="{empty:iscorpAuthorizedEmailEmpty}">
              </section>
          </div>
  
          <div class="div3">
              <section class="section1">
                  <p>CITIZENSHIP.</p>
                  <input v-model="corpAuthorizedCitizenship" :class="{empty:iscorpAuthorizedCitizenshipEmpty}">
              </section>
              <section class="section2" :class="{empty:iscorpAuthorizedCivilStatusEmpty}">
                  <p>Civil Status</p>
                  <section>
                      <span><input type="radio" id="corpSingle" value="Single" v-model="corpAuthorizedCivilStatus"><label for="corpSingle">Single</label></span>
                      <span><input type="radio" id="corpWidow" value="Widow/er" v-model="corpAuthorizedCivilStatus"><label for="corpWidow">Widow/er</label></span>
                      <span><input type="radio" id="corpMarried" value="Married" v-model="corpAuthorizedCivilStatus"><label for="corpMarried">Married</label></span>
                      <span><input type="radio" id="corpSeparated" value="Separated" v-model="corpAuthorizedCivilStatus"><label for="corpSeparated">Separated</label></span>
                  </section>
              </section>
          </div>
      </article>
  
      <article class="article6" :class="{empty:iscorpAuthorizedGovtIssuedIDEmpty}">
          <p>ANY GOVERNEMNT ISSUED I.D. (<span style="font-style: oblique;">please check one</span>)</p>
          <div>
              <section>
                  <span><input type="radio" id="corpSSS" value="SSS/GSIS" v-model="corpAuthorizedGovtIssuedID"><label for="corpSSS">SSS/GSIS</label> </span>:<input>
              </section>
              <section>
                  <span><input type="radio" id="driver" value="Driver's License" v-model="corpAuthorizedGovtIssuedID"> <label for="driver">Driver's License</label> </span>:<input>
              </section>
              <section>
                  <span><input type="radio" id="PRC" value="PRC" v-model="corpAuthorizedGovtIssuedID"> <label for="PRC">PRC</label></span>:<input>
              </section>
              <section>
                  <span><input type="radio" id="passport" value="Passport" v-model="corpAuthorizedGovtIssuedID"> <label for="passport">Passport</label></span>:<input>
              </section>
              <section>
                  <span><input type="radio" id="others" value="Others" v-model="corpAuthorizedGovtIssuedID"> <label for="others">Others</label></span>:<input>
              </section>
          </div>
      </article>
  </div>
  </template>
  
  <script>
  export default {
      data(){
          return{
              //corporate buyer
              corpName: '',
              corpNameEmpty: false,
              corpBusinessName: '',
              corpBusinessNameEmpty: false,
              corpBusinessAddress: '',
              corpBusinessAddressEmpty: false,
              corpZipCode: '',
              corpZipCodeEmpty: false,
              corpBusinessPhoneNo: '',
              corpBusinessPhoneNoEmpty: false,
              corpFaxNo: '',
              corpFaxNoEmpty: false,
              corpAuthorizedLastname: '',
              corpAuthorizedLastnameEmpty: false,
              corpAuthorizedFirstname: '',
              corpAuthorizedFirstnameEmpty: false,
              corpAuthorizedMiddlename: '',
              corpAuthorizedMiddlenameEmpty: false,
              corpAuthorizedPosition: '',
              corpAuthorizedPositionEmpty: false,
              corpAuthorizedSecondaryAddress: '',
              corpAuthorizedSecondaryAddressEmpty: false,
              corpAuthorizedZip: '',
              corpAuthorizedZipEmpty: false,
              corpAuthorizedBirthdate: '',
              corpAuthorizedBirthdateEmpty: false,
              corpAuthorizedBirthPlace: '',
              corpAuthorizedBirthPlaceEmpty: false,
              corpAuthorizedSex: '',
              corpAuthorizedSexEmpty: false,
              corpAuthorizedHomePhoneNo: '',
              corpAuthorizedHomePhoneNoEmpty: false,
              corpAuthorizedFaxNo: '',
              corpAuthorizedFaxNoEmpty: false,
              corpAuthorizedIncludeCtry: '',
              corpAuthorizedIncludeCtryEmpty: false,
              corpAuthorizedMobileNo: '',
              corpAuthorizedMobileNoEmpty: false,
              corpAuthorizedTIN: '',
              corpAuthorizedTINEmpty: false,
              corpAuthorizedEmail: '',
              corpAuthorizedEmailEmpty: false,
              corpAuthorizedCitizenship: '',
              corpAuthorizedCitizenshipEmpty: false,
              corpAuthorizedCivilStatus: '',
              corpAuthorizedCivilStatusEmpty: false,
              corpAuthorizedGovtIssuedID: '',
              corpAuthorizedGovtIssuedIDEmpty: false,
          }
      },
      methods:{
          checkcorpName(){return this.corpNameEmpty = this.corpName!==""?false:true},
          checkcorpBusinessName(){return this.corpBusinessNameEmpty = this.corpBusinessName!==""?false:true},
          checkcorpBusinessAddress(){return this.corpBusinessAddressEmpty = this.corpBusinessAddress!==""?false:true},
          checkcorpZipCode(){return this.corpZipCodeEmpty = this.corpZipCode!==""?false:true},
          checkcorpBusinessPhoneNo(){return this.corpBusinessPhoneNoEmpty = this.corpBusinessPhoneNo!==""?false:true},
          checkcorpFaxNo(){return this.corpFaxNoEmpty = this.corpFaxNo!==""?false:true},
          checkcorpAuthorizedLastname(){return this.corpAuthorizedLastnameEmpty = this.corpAuthorizedLastname!==""?false:true},
          checkcorpAuthorizedFirstname(){return this.corpAuthorizedFirstnameEmpty = this.corpAuthorizedFirstname!==""?false:true},
          checkcorpAuthorizedMiddlename(){return this.corpAuthorizedMiddlenameEmpty = this.corpAuthorizedMiddlename!==""?false:true},
          checkcorpAuthorizedPosition(){return this.corpAuthorizedPositionEmpty = this.corpAuthorizedPosition!==""?false:true},
          checkcorpAuthorizedSecondaryAddress(){return this.corpAuthorizedSecondaryAddressEmpty = this.corpAuthorizedSecondaryAddress!==""?false:true},
          checkcorpAuthorizedZip(){return this.corpAuthorizedZipEmpty = this.corpAuthorizedZip!==""?false:true},
          checkcorpAuthorizedBirthdate(){return this.corpAuthorizedBirthdateEmpty = this.corpAuthorizedBirthdate!==""?false:true},
          checkcorpAuthorizedBirthPlace(){return this.corpAuthorizedBirthPlaceEmpty = this.corpAuthorizedBirthPlace!==""?false:true},
          checkcorpAuthorizedSex(){return this.corpAuthorizedSexEmpty = this.corpAuthorizedSex!==""?false:true},
          checkcorpAuthorizedHomePhoneNo(){return this.corpAuthorizedHomePhoneNoEmpty = this.corpAuthorizedHomePhoneNo!==""?false:true},
          checkcorpAuthorizedFaxNo(){return this.corpAuthorizedFaxNoEmpty = this.corpAuthorizedFaxNo!==""?false:true},
          checkcorpAuthorizedIncludeCtry(){return this.corpAuthorizedIncludeCtryEmpty = this.corpAuthorizedIncludeCtry!==""?false:true},
          checkcorpAuthorizedMobileNo(){return this.corpAuthorizedMobileNoEmpty = this.corpAuthorizedMobileNo!==""?false:true},
          checkcorpAuthorizedTIN(){return this.corpAuthorizedTINEmpty = this.corpAuthorizedTIN!==""?false:true},
          checkcorpAuthorizedEmail(){return this.corpAuthorizedEmailEmpty = this.corpAuthorizedEmail!==""?false:true},
          checkcorpAuthorizedCitizenship(){return this.corpAuthorizedCitizenshipEmpty = this.corpAuthorizedCitizenship!==""?false:true},
          checkcorpAuthorizedCivilStatus(){return this.corpAuthorizedCivilStatusEmpty = this.corpAuthorizedCivilStatus!==""?false:true},
          checkcorpAuthorizedGovtIssuedID(){return this.corpAuthorizedGovtIssuedIDEmpty = this.corpAuthorizedGovtIssuedID!==""?false:true},
  
          //////////////////////////////////////////////////////////////
          passData(){
              const payload = {
                  corpName: this.corpName,
                  corpBusinessName: this.corpBusinessName,
                  corpBusinessAddress: this.corpBusinessAddress,
                  corpZipCode: this.corpZipCode,
                  corpBusinessPhoneNo: this.corpBusinessPhoneNo,
                  corpFaxNo: this.corpFaxNo,
                  corpAuthorizedLastname: this.corpAuthorizedLastname,
                  corpAuthorizedFirstname: this.corpAuthorizedFirstname,
                  corpAuthorizedMiddlename: this.corpAuthorizedMiddlename,
                  corpAuthorizedPosition: this.corpAuthorizedPosition,
                  corpAuthorizedSecondaryAddress: this.corpAuthorizedSecondaryAddress,
                  corpAuthorizedZip: this.corpAuthorizedZip,
                  corpAuthorizedBirthdate: this.corpAuthorizedBirthdate,
                  corpAuthorizedBirthPlace: this.corpAuthorizedBirthPlace,
                  corpAuthorizedSex: this.corpAuthorizedSex,
                  corpAuthorizedHomePhoneNo: this.corpAuthorizedHomePhoneNo,
                  corpAuthorizedFaxNo: this.corpAuthorizedFaxNo,
                  corpAuthorizedIncludeCtry: this.corpAuthorizedIncludeCtry,
                  corpAuthorizedMobileNo: this.corpAuthorizedMobileNo,
                  corpAuthorizedTIN: this.corpAuthorizedTIN,
                  corpAuthorizedEmail: this.corpAuthorizedEmail,
                  corpAuthorizedCitizenship: this.corpAuthorizedCitizenship,
                  corpAuthorizedCivilStatus: this.corpAuthorizedCivilStatus,
                  corpAuthorizedGovtIssuedID: this.corpAuthorizedGovtIssuedID,
              }
              this.$emit('pass-data',payload)
          }
      },
      computed:{
          iscorpNameEmpty(){return this.corpNameEmpty},
          iscorpBusinessNameEmpty(){return this.corpBusinessNameEmpty},
          iscorpBusinessAddressEmpty(){return this.corpBusinessAddressEmpty},
          iscorpZipCodeEmpty(){return this.corpZipCodeEmpty},
          iscorpBusinessPhoneNoEmpty(){return this.corpBusinessPhoneNoEmpty},
          iscorpFaxNoEmpty(){return this.corpFaxNoEmpty},
          iscorpAuthorizedLastnameEmpty(){return this.corpAuthorizedLastnameEmpty},
          iscorpAuthorizedFirstnameEmpty(){return this.corpAuthorizedFirstnameEmpty},
          iscorpAuthorizedMiddlenameEmpty(){return this.corpAuthorizedMiddlenameEmpty},
          iscorpAuthorizedPositionEmpty(){return this.corpAuthorizedPositionEmpty},
          iscorpAuthorizedSecondaryAddressEmpty(){return this.corpAuthorizedSecondaryAddressEmpty},
          iscorpAuthorizedZipEmpty(){return this.corpAuthorizedZipEmpty},
          iscorpAuthorizedBirthdateEmpty(){return this.corpAuthorizedBirthdateEmpty},
          iscorpAuthorizedBirthPlaceEmpty(){return this.corpAuthorizedBirthPlaceEmpty},
          iscorpAuthorizedSexEmpty(){return this.corpAuthorizedSexEmpty},
          iscorpAuthorizedHomePhoneNoEmpty(){return this.corpAuthorizedHomePhoneNoEmpty},
          iscorpAuthorizedFaxNoEmpty(){return this.corpAuthorizedFaxNoEmpty},
          iscorpAuthorizedIncludeCtryEmpty(){return this.corpAuthorizedIncludeCtryEmpty},
          iscorpAuthorizedMobileNoEmpty(){return this.corpAuthorizedMobileNoEmpty},
          iscorpAuthorizedTINEmpty(){return this.corpAuthorizedTINEmpty},
          iscorpAuthorizedEmailEmpty(){return this.corpAuthorizedEmailEmpty},
          iscorpAuthorizedCitizenshipEmpty(){return this.corpAuthorizedCitizenshipEmpty},
          iscorpAuthorizedCivilStatusEmpty(){return this.corpAuthorizedCivilStatusEmpty},
          iscorpAuthorizedGovtIssuedIDEmpty(){return this.corpAuthorizedGovtIssuedIDEmpty},
      },
      watch:{
          corpName(){
              this.checkcorpName()
              this.passData()
          },
          corpBusinessName(){
              this.checkcorpBusinessName()
              this.passData()
          },
          corpBusinessAddress(){
              this.checkcorpBusinessAddress()
              this.passData()
          },
          corpZipCode(){
              this.checkcorpZipCode()
              this.passData()
          },
          corpBusinessPhoneNo(){
              this.checkcorpBusinessPhoneNo()
              this.passData()
          },
          corpFaxNo(){
              this.checkcorpFaxNo()
              this.passData()
          },
          corpAuthorizedLastname(){
              this.checkcorpAuthorizedLastname()
              this.passData()
          },
          corpAuthorizedFirstname(){
              this.checkcorpAuthorizedFirstname()
              this.passData()
          },
          corpAuthorizedMiddlename(){
              this.checkcorpAuthorizedMiddlename()
              this.passData()
          },
          corpAuthorizedPosition(){
              this.checkcorpAuthorizedPosition()
              this.passData()
          },
          corpAuthorizedSecondaryAddress(){
              this.checkcorpAuthorizedSecondaryAddress()
              this.passData()
          },
          corpAuthorizedZip(){
              this.checkcorpAuthorizedZip()
              this.passData()
          },
          corpAuthorizedBirthdate(){
              this.checkcorpAuthorizedBirthdate()
              this.passData()
          },
          corpAuthorizedBirthPlace(){
              this.checkcorpAuthorizedBirthPlace()
              this.passData()
          },
          corpAuthorizedSex(){
              this.checkcorpAuthorizedSex()
              this.passData()
          },
          corpAuthorizedHomePhoneNo(){
              this.checkcorpAuthorizedHomePhoneNo()
              this.passData()
          },
          corpAuthorizedFaxNo(){
              this.checkcorpAuthorizedFaxNo()
              this.passData()
          },
          corpAuthorizedIncludeCtry(){
              this.checkcorpAuthorizedIncludeCtry()
              this.passData()
          },
          corpAuthorizedMobileNo(){
              this.checkcorpAuthorizedMobileNo()
              this.passData()
          },
          corpAuthorizedTIN(){
              this.checkcorpAuthorizedTIN()
              this.passData()
          },
          corpAuthorizedEmail(){
              this.checkcorpAuthorizedEmail()
              this.passData()
          },
          corpAuthorizedCitizenship(){
              this.checkcorpAuthorizedCitizenship()
              this.passData()
          },
          corpAuthorizedCivilStatus(){
              this.checkcorpAuthorizedCivilStatus()
              this.passData()
          },
          corpAuthorizedGovtIssuedID(){
              this.checkcorpAuthorizedGovtIssuedID()
              this.passData()
          },
      }
  }
  </script>
  
  <style scoped>
  *{
      font-size: clamp(.6rem, 1.2vw, 2rem);
  }
  .empty{
      outline: 1px solid red;
      background-color: rgba(255, 0, 0, 0.222);
      box-shadow: 0 0 1px 1px red;
  }
  input{
      text-align: center;
  }
  .c-cont header{
      padding: .2rem 0;
      text-align: center;
      border-top: 1px solid black;
      border-right: 1px solid black;
      border-left: 1px solid black;
      background-color: #CFD7EC;
      color: #3D73A9;
      font-weight: 700;
  }
  /*CORPORATE*/
  .corporate input{
      border: none;
      border-bottom: 1px solid black;
  }
  .corporate article{
      display: flex;
  }
  
  /*CORPORATE: article1*/
  .corporate .article1 section{
      padding: 1rem;
      display: flex;
      flex-direction: column;
      border: 1px solid black;
  }
  .corporate .article1 .section1{
      width: 50%;
      border-right: none;
  }
  .corporate .article1 .section2{
      flex-grow: 1;
  }
  .corporate .article1 section input{
      width: 100%;
  }
  
  /*CORPORATE: article2*/
  .corporate .article2 {
      display: grid;
      grid-template-columns:60% 20% 20%;
      border: 1px solid black;
      border-top: none;
  }
  .corporate .article2  .section1{
      border-right: 1px solid black;
      /* width: 60%; */
      padding:  1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  .corporate .article2  .section1 input{
      border: none;
      border-bottom: 1px solid black;
  }
  .corporate .article2  .section2{
      border-right: 1px solid black;
      /* width: 30%; */
      padding: 1rem;
      display: flex;
      flex-direction: column;
  }
  .corporate .article2  .section2 .status{
      display: flex;
      flex-wrap: wrap;
      gap: .5rem;
      width: 80%;
      margin: auto;
  }
  .corporate .article2  .section2 .status section{
      min-width: 60px;
      display: flex;
      align-items: center;
      gap: .5rem;
      min-width: 70px;
  }
  .corporate .article2  .section3{
      display: flex;
      flex-direction: column;
      padding: 1rem;
  }
  .corporate .article2  .section3 input{
      border: none;
      border-bottom: 1px solid black;
      text-align: center;
  }
  @media screen and (max-width: 749px) {
      .corporate .article2  .section2 .status{
      justify-content: center;
      } 
      .corporate .article2  .section1{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      }
      .corporate .article2  .section3{
      text-align: center;
      padding: 1rem .5rem;
      }
      .corporate .article2 {
      grid-template-columns:50% 35% 15%;
      }
  }
  @media screen and (max-width: 555px){
      .corporate .article2 {
      grid-template-columns:50% 50% ;
      }
      .corporate .article2  .section1{
      border-bottom: 1px solid black;
      }
      .corporate .article2  .section2{
          border-bottom: 1px solid black;
      }
      .corporate .article2  .section3{
          border-right: 1px solid black;
      }
  }
  
  
  /*CORPORATE: article3*/
  .corporate .article3{
      /* display: flex; */
      border: 1px solid black;
      display: grid;
      grid-template-columns: 70% 30%;
  }
  .corporate .article3 input{
      border: none;
      border-bottom: 1px solid black;
  }
  .corporate .article3 .section1-left{
      box-sizing: border-box;
      /* width: 70%; */
      border-right: 1px solid black;
      padding: 1rem;
      word-wrap: break-word;
  }
  .corporate .article3  .section1-left .names{
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
  }
  .corporate .article3  .section1-right{
      /* flex-grow: 1; */
      padding: 1rem;
      display: flex;
      flex-direction: column;
      word-wrap: break-word;
      text-align: center;
  }
  @media screen and (max-width: 732px) {
      .corporate .article3{
      grid-template-columns: 50% 50%;
      }
      .corporate .article3 .section1-left{
          text-align: center;
          padding: .5rem;
      }
      .corporate .article3  .section1-left .names{
          padding: 0;
          flex-direction: column;
          align-items: center;
      }
      .corporate .article3  .section1-left .names section{
          width: 95%;
          margin-right: 1rem;
          text-align: center;
      }
      .corporate .article3  .section1-left .names section input{
          width: 100%;
      }
      .corporate .article3 .section1-right{
          /* width: 40%; */
          text-align: center;
          padding: .5rem;
      }
  }
  
  /*CORPORATE: article4*/
  .corporate .article4 {
      display: grid;
      grid-template-columns: 60% 15% 25%;
      border: 1px solid black;
      border-top: none;
  }
  .corporate .article4  .div1{
      border-right: 1px solid black;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  .corporate .article4  .div1 input{
      border: none;
      border-bottom: 1px solid black;
  }
  .corporate .article4 .div2{
      border-right: 1px solid black;
      padding: 1rem;
  }
  .corporate .article4  .div2 .status{
      display: flex;
      /* justify-content: center; */
      flex-wrap: wrap;
      gap: .3rem;
  }
  .corporate .article4  .div2 .status section{
      /* border: 1px solid black; */
      min-width: 60px;
      display: flex;
      align-items: center;
  }
  .corporate .article4 .div3{
      /* width: 25%; */
      display: flex;
      flex-direction: column;
      gap: .5rem;
      padding: 1rem;
  }
  @media screen and (max-width: 749px){
      .corporate .article4 {
      grid-template-columns: 50% 15% 35%;
      }
  }
  @media screen and (max-width: 555px){
      .corporate .article4 {
          grid-template-columns: 50% 50%;
      }
      .corporate .article4 .div2{
          border-right: none;
      }
      .corporate .article4 .div3{
          border-right: 1px solid black;
      }
  }
  
  /*CORPORATE: article5*/
  .corporate .article5{
      display: grid;
      grid-template-columns: 40% 40% 20% ;
  }
  .corporate .article5 .div1{
      border:  1px solid black;
      border-top: none;
      border-bottom: none;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: .5rem;
  }
  .corporate .article5 .div1 section{
      display: flex;
      gap: .2rem;
      /* height: 50%; */
  }
  .corporate .article5 .div1 section div{
      display: flex;
      flex-direction: column;
      width: 50%;
      box-sizing: border-box;
  }
  .corporate .article5 .div1 input{
      width: 100%;
  }
  .corporate .article5 .div2{
      border-right: 1px solid black;
      padding: 1rem;
      display: flex;
      justify-content: start;
      flex-direction: column;
      gap: .5rem;
  }
  .corporate .article5 .div2 .div{
      /* height: 50%; */
      display: flex;
      /* flex-direction: column; */
      gap: .2rem;   
  }
  .corporate .article5 .div2 .div section{
      width: 50%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      /* border: 1px solid black; */
  }
  .corporate .article5 .div2 .section{
      display: flex;
      flex-direction: column;
      /* border: 1px solid black; */
  }
  .corporate .article5 .div3{
      border-right: 1px solid black;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: .5rem;
  }
  .corporate .article5 .div3 .section1,
  .corporate .article5 .div3 .section2{
      display: flex;
      flex-direction: column;
      /* border: 1px solid black; */
  }
  .corporate .article5 .div3 .section2 section {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      width: 90%;
      margin: auto;
      /* border: 1px solid black; */
  }
  .corporate .article5 .div3 .section2 section span{
      display: flex;
      align-items: center;
      gap: 3px;
      min-width: 80px;
  }
  @media screen and (max-width: 703px){
      .corporate .article5{
      grid-template-columns: 50% 50%;
      }
      .corporate .article5 .div1{
      border-bottom:  1px solid black;
      }
      .corporate .article5 .div2{
      border-bottom:  1px solid black;
      flex-direction: column;
      }
      .corporate .article5 .div2 .div{
      flex-direction: column;
      }
      .corporate .article5 .div2 .div section{
      width: 100%;
      }
      .corporate .article5 .div3{
      border-left:  1px solid black;
      }
      .corporate .article5 .div3 .section2 section {
      column-gap:1rem;
  }
  }
  @media screen and (max-width: 505px) {
      .corporate .article5 .div1 section{
      display: flex;
      flex-direction: column;
      }
      .corporate .article5 .div1 section div{
      width: 100%;
      }
  }
  
  
  /*CORPORATE: article6*/
  .article6{
      padding: 1rem;
      border: 1px solid black;
      border-bottom: none;
      display: flex;
      flex-direction: column;
  }
  .article6 div{
      display: flex;
      flex-wrap: wrap;
      gap: .5rem;
  }
  .article6 div section{ 
      margin: .1rem .5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      /* border: 1px solid black; */
  }
  .article6 div span{ 
      /* border: 1px solid black; */
      min-width: 60px;
      width: 10vw;
      max-width: 250px;
      display: flex;
      align-items: center;
      gap: 3px;
  }
  </style>