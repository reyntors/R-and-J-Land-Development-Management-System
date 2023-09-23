<template>
    <div class="c-cont contact-details">
       <header>CONTACT DETAILS - PRINCIPAL BUYER</header>
       <article>

           <section class="section1">
               <div class="section1-left">
                       <p>CONTRACT NAME (Individual Buyer)</p>
                   <br>
                   <div class="names">
                       <section>
                           <input type="text" :class="{empty:isbuyerLastnameEmpty}" v-model="buyerLastname">
                           <p>Last Name</p>
                       </section>
                       <section>
                           <input type="text" :class="{empty:isbuyerFirstnameEmpty}" v-model="buyerFirstname">
                           <p>First Name</p>
                       </section>
                       <section>
                           <input type="text" :class="{empty:isbuyerMiddlenameEmpty}" v-model="buyerMiddlename">
                           <p>Middle Name</p>
                       </section>
                   </div>
               </div>

               <div class="section1-right">
                   <p>Occupation / Profession</p>
                   <br>
                   <input :class="{empty:isbuyerOccupationEmpty}" v-model="buyerOccupation">
                   <br>
               </div>
               
           </section>

           <section class="section2">
               <div class="div1">
                   <div>
                       <p>PRIMARY/MAILING ADDRESS</p>
                       <input style="width:100%;" :class="{empty:isbuyerPrimaryAddressEmpty}" v-model="buyerPrimaryAddress">
                       <br><br>
                       <p>Zip Code: <input style="width:100%;" :class="{empty:isbuyerPrimaryZipEmpty}" v-model="buyerPrimaryZip"></p>                            
                   </div>

               </div>
               <div class="div2" :class="{empty:isbuyerCivilStatusEmpty}">
                   <p>Civil Status</p>
                   <div class="status" >
                       <section><input type="radio" id="buyerSingle" value="single" v-model="buyerCivilStatus"><label for="buyerSingle">Single</label></section>
                       <section><input type="radio" id="buyerWidow" value="widow/er" v-model="buyerCivilStatus"><label for="buyerWidow">Widow/er</label></section>
                       <section><input type="radio" id="buyerMarried" value="married" v-model="buyerCivilStatus"><label for="buyerMarried">Married</label></section>
                       <section><input type="radio" id="buyerSeparated" value="separated" v-model="buyerCivilStatus"><label for="buyerSeparated">Separated</label></section>
                   </div>
               </div>
               <div class="div3">
                   <div>
                       <p>Age</p>
                       <input style="display: block;" :class="{empty:isbuyerAgeEmpty}" v-model="buyerAge">                            
                   </div>

               </div>
           </section>

           <section class="section3">
               <div class="div1">
                   <div>
                       <p>SECONDARY ADDRESS</p>
                       <input style="width:100%;" :class="{empty:isbuyerSecondaryAddressEmpty}" v-model="buyerSecondaryAddress">
                       <br><br>
                       <p>Zip Code: <input style="width:100%;" :class="{empty:isbuyerSecondaryZipEmpty}" v-model="buyerSecondaryZip"></p>                         
                   </div>

               </div>
               <div class="div2" :class="{empty:isbuyerSexEmpty}">
                   <p>Sex</p>
                   <div class="status">
                       <section><input type="radio" id="buyerMale" value="male" v-model="buyerSex"><label for="buyerMale">Male</label></section>
                       <section><input type="radio" id="buyerFemale" value="female"  v-model="buyerSex"><label for="buyerFemale">Female</label></section>  
                   </div>
               </div>
               <div class="div3">
                   <p>Birthdate</p>
                   <input style="display: block;" type="date" :class="{empty:isbuyerBirthdayEmpty}" v-model="buyerBirthday">
                   <p>Place of Birth</p>
                   <input style="border: none; border-bottom: 1px solid black;" :class="{empty:isbuyerPlaceBirthEmpty}" v-model="buyerPlaceBirth">
               </div>
           </section>

           <section class="section4">
               <div class="div1">
                   <article>
                       <section>
                           <div>
                               <p>HOME PHONE NO.</p>
                               <input :class="{empty:isbuyerHomePhoneNoEmpty}" v-model="buyerHomePhoneNo">
                           </div>
                           <div>
                               <p>FAX NO.</p>
                               <input :class="{empty:isbuyerFaxNoEmpty}" v-model="buyerFaxNo">
                           </div>
                       </section>
                       <span style="display:block">
                           <p style="font-size: clamp(.5rem, 1vw, 1rem);">(please incluse country and area codes, if possible)</p>
                           <input type="text" style="display: block;" :class="{empty:isbuyerIncludeCountryEmpty}" v-model="buyerIncludeCountry"> 
                       </span>
                       
                   </article>

               </div>

               <div class="div2">
                   <article>
                       <section>
                           <p>MOBILE NO.</p>
                           <input :class="{empty:isbuyerMobileNoEmpty}" v-model="buyerMobileNo">
                       </section>
                       <section>
                           <p>EMAIL ADDRESS.</p>
                           <input style="display: block;" :class="{empty:isbuyerEmailEmpty}" v-model="buyerEmail">
                       </section>
                   </article>

               </div>

               <div class="div3">
                   <article>
                       <section>
                           <p>T.I.N.</p>
                           <input :class="{empty:isbuyerTINEmpty}" v-model="buyerTIN">
                       </section>
                       <section>
                           <p>CITIZENSHIP.</p>
                           <input :class="{empty:isbuyerCitizenEmpty}" v-model="buyerCitizen">
                       </section>
                   </article>

               </div>

               <div class="div4">
                   <article :class="{empty:isbuyerReligionEmpty}">
                       <p>RELIGION</p>    
                       <span><input type="radio" id="buyerRelgionCatholic" value="roman catholic" v-model="buyerReligion"><label for="buyerRelgionCatholic">Roman Catholic</label></span>
                       <span><input type="radio" id="buyerRelgionProtestant" value="protestant" v-model="buyerReligion"><label for="buyerRelgionProtestant">Protestant</label><br></span>
                       <span><input type="radio" id="buyerRelgionOthers" value="others" v-model="buyerReligion"><label for="buyerRelgionOthers">Others (pl. specify)</label><br></span>
                       <input>                            
                   </article>

               </div>
           </section>

           <section class="section5">
               <article>
                   <p>ANY GOVERNEMNT ISSUED I.D. (<span style="font-style: oblique;">please check one</span>)</p>
                   <div :class="{empty:isbuyerIssuedIDEmpty}">
                       <section>
                           <span><input type="radio" id="govtIdSSS/GSIS" value="SSS/GSIS" v-model="buyerIssuedID"><label for="govtIdSSS/GSIS">SSS/GSIS</label> </span>:
                                 <input >
                       </section>
                       <section>
                           <span><input type="radio" id="govtIdDriverLicense" value="Driver's License" v-model="buyerIssuedID"><label for="govtIdDriverLicense">Driver's License</label> </span>:
                                 <input>
                       </section>
                       <section>
                           <span><input type="radio" id="govtIdPRC" value="PRC" v-model="buyerIssuedID"><label for="govtIdPRC">PRC</label> </span>:
                                 <input>
                       </section>
                       <section>
                           <span><input type="radio" id="govtIdPassport" value="Passport" v-model="buyerIssuedID"><label for="govtIdPassport">Passport</label> </span>:
                               <input>
                       </section>
                       <section>
                           <span><input type="radio" id="others" value="others" v-model="buyerIssuedID"><label for="others">Others</label> </span>:
                               <input style="border: none; border-bottom: 1px solid black;">
                       </section>
                   </div>                        
               </article>

           </section>
       </article>
   </div>
</template>

<script>
export default {
data(){
   return {
       //contact details
       buyerLastname: '',
       buyerLastnameEmpty: false,
       buyerFirstname: '',
       buyerFirstnameEmpty: false,
       buyerMiddlename: '',
       buyerMiddlenameEmpty: false,
       buyerOccupation: '',
       buyerOccupationEmpty: false,
       buyerPrimaryAddress: '',
       buyerPrimaryAddressEmpty: false,
       buyerPrimaryZip: '',
       buyerPrimaryZipEmpty: false,
       buyerCivilStatus: '',
       buyerCivilStatusEmpty: false,
       buyerAge: '',
       buyerAgeEmpty: false,
       buyerSecondaryAddress: '',
       buyerSecondaryAddressEmpty: false,
       buyerSecondaryZip: '',
       buyerSecondaryZipEmpty: false,
       buyerSex: '',
       buyerSexEmpty: false,
       buyerBirthday: '',
       buyerBirthdayEmpty: false,
       buyerPlaceBirth: '',
       buyerPlaceBirthEmpty: false,
       buyerHomePhoneNo: '',
       buyerHomePhoneNoEmpty: false,
       buyerFaxNo: '',
       buyerFaxNoEmpty: false,
       buyerIncludeCountry: '',
       buyerIncludeCountryEmpty: false,
       buyerMobileNo: '',
       buyerMobileNoEmpty: false,
       buyerEmail: '',
       buyerEmailEmpty: false,
       buyerTIN: '',
       buyerTINEmpty: false,
       buyerCitizen: '',
       buyerCitizenEmpty: false,
       buyerReligion: '',
       buyerReligionEmpty: false,
       buyerIssuedID: '',
       buyerIssuedIDEmpty: false
   }
},
methods:{
   checkbuyerLastname(){
       return this.buyerLastnameEmpty = this.buyerLastname!==''?false:true
   },
   checkbuyerFirstname(){
       return this.buyerFirstnameEmpty = this.buyerFirstname!==''?false:true
   },
   checkbuyerMiddlename(){
       return this.buyerMiddlenameEmpty = this.buyerMiddlename!==''?false:true
   },
   checkbuyerOccupation(){
       return this.buyerOccupationEmpty = this.buyerOccupation!==''?false:true
   },
   checkbuyerPrimaryAddress(){
       return this.buyerPrimaryAddressEmpty = this.buyerPrimaryAddress!==''?false:true
   },
   checkbuyerPrimaryZip(){
       return this.buyerPrimaryZipEmpty = this.buyerPrimaryZip!==''?false:true
   },
   checkbuyerCivilStatus(){
       return this.buyerCivilStatusEmpty = this.buyerCivilStatus!==''?false:true
   },
   checkbuyerAge(){
       return this.buyerAgeEmpty = this.buyerAge!==''?false:true
   },
   checkbuyerSecondaryAddress(){
       return this.buyerSecondaryAddressEmpty = this.buyerSecondaryAddress!==''?false:true
   },
   checkbuyerSecondaryZip(){
       return this.buyerSecondaryZipEmpty = this.buyerSecondaryZip!==''?false:true
   },
   checkbuyerSex(){
       return this.buyerSexEmpty = this.buyerSex!==''?false:true
   },
   checkbuyerBirthday(){
       return this.buyerBirthdayEmpty = this.buyerBirthday!==''?false:true
   },
   checkbuyerPlaceBirth(){
       return this.buyerPlaceBirthEmpty = this.buyerPlaceBirth!==''?false:true
   },
   checkbuyerHomePhoneNo(){
       return this.buyerHomePhoneNoEmpty = this.buyerHomePhoneNo!==''?false:true
   },
   checkbuyerFaxNo(){
       return this.buyerFaxNoEmpty = this.buyerFaxNo!==''?false:true
   },
   checkbuyerIncludeCountry(){
       return this.buyerIncludeCountryEmpty = this.buyerIncludeCountry!==''?false:true
   },
   checkbuyerMobileNo(){
       return this.buyerMobileNoEmpty = this.buyerMobileNo!==''?false:true
   },
   checkbuyerEmail(){
       return this.buyerEmailEmpty = this.buyerEmail!==''?false:true
   },
   checkbuyerTIN(){
       return this.buyerTINEmpty = this.buyerTIN!==''?false:true
   },
   checkbuyerCitizen(){
       return this.buyerCitizenEmpty = this.buyerCitizen!==''?false:true
   },
   checkbuyerReligion(){
       return this.buyerReligionEmpty = this.buyerReligion!==''?false:true
   },
   checkbuyerIssuedID(){
       return this.buyerIssuedIDEmpty = this.buyerIssuedID!==''?false:true
   },

   //////////////////////////////////////////////////////////////
   passData(){
       const payload = {
           buyerLastname: this.buyerLastname,
           buyerFirstname: this.buyerFirstname,
           buyerMiddlename: this.buyerMiddlename,
           buyerOccupation: this.buyerOccupation,
           buyerPrimaryAddress: this.buyerPrimaryAddress,
           buyerPrimaryZip: this.buyerPrimaryZip,
           buyerCivilStatus: this.buyerCivilStatus,
           buyerAge: this.buyerAge,
           buyerSecondaryAddress: this.buyerSecondaryAddress,
           buyerSecondaryZip: this.buyerSecondaryZip,
           buyerSex: this.buyerSex,
           buyerBirthday: this.buyerBirthday,
           buyerPlaceBirth: this.buyerPlaceBirth,
           buyerHomePhoneNo: this.buyerHomePhoneNo,
           buyerFaxNo: this.buyerFaxNo,
           buyerIncludeCountry: this.buyerIncludeCountry,
           buyerMobileNo: this.buyerMobileNo,
           buyerEmail: this.buyerEmail,
           buyerTIN: this.buyerTIN,
           buyerCitizen: this.buyerCitizen,
           buyerReligion: this.buyerReligion,
           buyerIssuedID: this.buyerIssuedID,
       }
       
       this.$emit('pass-data',payload)
   }
},

computed:{
   isbuyerLastnameEmpty(){return this.buyerLastnameEmpty},
   isbuyerFirstnameEmpty(){return this.buyerFirstnameEmpty},
   isbuyerMiddlenameEmpty(){return this.buyerMiddlenameEmpty},
   isbuyerOccupationEmpty(){return this.buyerOccupationEmpty},
   isbuyerPrimaryAddressEmpty(){return this.buyerPrimaryAddressEmpty},
   isbuyerPrimaryZipEmpty(){return this.buyerPrimaryZipEmpty},
   isbuyerCivilStatusEmpty(){return this.buyerCivilStatusEmpty},
   isbuyerAgeEmpty(){return this.buyerAgeEmpty},
   isbuyerSecondaryAddressEmpty(){return this.buyerSecondaryAddressEmpty},
   isbuyerSecondaryZipEmpty(){return this.buyerSecondaryZipEmpty},
   isbuyerSexEmpty(){return this.buyerSexEmpty},
   isbuyerBirthdayEmpty(){return this.buyerBirthdayEmpty},
   isbuyerPlaceBirthEmpty(){return this.buyerPlaceBirthEmpty},
   isbuyerHomePhoneNoEmpty(){return this.buyerHomePhoneNoEmpty},
   isbuyerFaxNoEmpty(){return this.buyerFaxNoEmpty},
   isbuyerIncludeCountryEmpty(){return this.buyerIncludeCountryEmpty},
   isbuyerMobileNoEmpty(){return this.buyerMobileNoEmpty},
   isbuyerEmailEmpty(){return this.buyerEmailEmpty},
   isbuyerTINEmpty(){return this.buyerTINEmpty},
   isbuyerCitizenEmpty(){return this.buyerCitizenEmpty},
   isbuyerReligionEmpty(){return this.buyerReligionEmpty},
   isbuyerIssuedIDEmpty(){return this.buyerIssuedIDEmpty},
},
watch: {
   buyerLastname(){
       this.checkbuyerLastname()
       this.passData()
   },
   buyerFirstname(){
       this.checkbuyerFirstname()
       this.passData()
   },
   buyerMiddlename(){
       this.checkbuyerMiddlename()
       this.passData()
   },
   buyerOccupation(){
       this.checkbuyerOccupation()
       this.passData()
   },
   buyerPrimaryAddress(){
       this.checkbuyerPrimaryAddress()
       this.passData()
   },
   buyerPrimaryZip(){
       this.checkbuyerPrimaryZip()
       this.passData()
   },
   buyerCivilStatus(){
       this.checkbuyerCivilStatus()
       this.passData()
   },
   buyerAge(){
       this.checkbuyerAge()
       this.passData()
   },
   buyerSecondaryAddress(){
       this.checkbuyerSecondaryAddress()
       this.passData()
   },
   buyerSecondaryZip(){
       this.checkbuyerSecondaryZip()
       this.passData()
   },
   buyerSex(){
       this.checkbuyerSex()
       this.passData()
   },
   buyerBirthday(){
       this.checkbuyerBirthday()
       this.passData()
   },
   buyerPlaceBirth(){
       this.checkbuyerPlaceBirth()
       this.passData()
   },
   buyerHomePhoneNo(){
       this.checkbuyerHomePhoneNo()
       this.passData()
   },
   buyerFaxNo(){
       this.checkbuyerFaxNo()
       this.passData()
   },
   buyerIncludeCountry(){
       this.checkbuyerIncludeCountry()
       this.passData()
   },
   buyerMobileNo(){
       this.checkbuyerMobileNo()
       this.passData()
   },
   buyerEmail(){
       this.checkbuyerEmail()
       this.passData()
   },
   buyerTIN(){
       this.checkbuyerTIN()
       this.passData()
   },
   buyerCitizen(){
       this.checkbuyerCitizen()
       this.passData()
   },
   buyerReligion(){
       this.checkbuyerReligion()
       this.passData()
   },
   buyerIssuedID(){
       this.checkbuyerIssuedID()
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

/*CONTACT DETAILS: section1*/
.contact-details article .section1{
border: 1px solid black;
display: grid;
grid-template-columns: 70% 30%;
}
.contact-details article .section1 input{
border: none;
border-bottom: 1px solid black;
}
.contact-details article .section1 .section1-left{
box-sizing: border-box;
border-right: 1px solid black;
padding: 1rem;
word-wrap: break-word;
}
.contact-details article .section1  .section1-left .names{
display: flex;
gap: 1rem;
flex-wrap: wrap;
}
.contact-details article .section1  .section1-left .names section{
text-align: center;
}
.contact-details article .section1  .section1-right{
flex-grow: 1;
padding: 1rem;
display: flex;
flex-direction: column;
word-wrap: break-word;
text-align: center;
width: 80%;
margin: auto;
}
@media screen and (max-width: 732px) {
.contact-details article .section1{
grid-template-columns: 60% 40%;
}
.contact-details article .section1 .section1-left{
   padding: .5rem;
}
.contact-details article .section1  .section1-left .names{
   padding: 0;
   flex-direction: column;
   align-items: center;
}
.contact-details article .section1  .section1-left .names section{
   width: 95%;
   margin:auto;
   text-align: center;
}
.contact-details article .section1  .section1-left .names section input{
   width: 100%;
}
.contact-details article .section1 .section1-right{
   width: 95%;
   margin: auto;
   text-align: center;
   padding: .5rem;
}
}
@media screen and (max-width: 500px){
.contact-details article .section1{
grid-template-columns: 1fr;
}
.contact-details article .section1  .section1-left{
   padding: 0;
   border-right: none;
}
.contact-details article .section1  .section1-left .names section{
   width: 80%;
}
.contact-details article .section1  .section1-right{
   width: 80%;
   padding: 0 0 1rem;
   flex-direction: column-reverse;
}
}


/*CONTACT DETAILS: section2*/
.contact-details article .section2 {
display: grid;
grid-template-columns:60% 30% 10%;
border: 1px solid black;
border-top: none;
}
.contact-details article .section2  .div1{
border-right: 1px solid black;
padding:  1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
}
.contact-details article .section2  .div1 input{
border: none;
border-bottom: 1px solid black;
}
.contact-details article .section2  .div2{
border-right: 1px solid black;
padding: 1rem;
}
.contact-details article .section2  .div2 .status{
display: flex;
flex-wrap: wrap;
gap: .5rem;
width: 80%;
margin: auto;
}
.contact-details article .section2  .div2 .status section{
min-width: 60px;
display: flex;
align-items: center;
gap: .5rem;
min-width: 70px;
}
.contact-details article .section2 .div3{
display: flex;
flex-direction: column;
padding: 1rem;
text-align: center;
margin: 0 auto;
}
.contact-details article .section2 .div3 input{
border: none;
border-bottom: 1px solid black;
text-align: center;
width: 100%;
}
@media screen and (max-width: 749px) {
.contact-details article .section2  .div2 .status{
justify-content: center;
} 
.contact-details article .section2  .div1{
display: flex;
flex-direction: column;
justify-content: space-between;
}
.contact-details article .section2 .div3{
text-align: center;
padding: 1rem .5rem;
width: 70%;
}
.contact-details article .section2 {
grid-template-columns:60% 25% 15%;
}
}
@media screen and (max-width: 500px){
.contact-details article .section2 {
grid-template-columns:70% 30%;
}
.contact-details article .section2 .div1 {
   grid-column: span 2;
   padding:1rem 0;
   border-right: none;
   border-bottom: 1px dashed black;
}
.contact-details article .section2 .div1 div {
   width: 80%;
   margin: auto;
   padding: 0;
}
.contact-details article .section2 .div2 {
   border-right: 1px dashed black;
}
.contact-details article .section2 .div3{
   width: 70%;
}
}


/*CONTACT DETAILS: section3*/
.contact-details article .section3 {
display: grid;
grid-template-columns: 60% 20% 20%;
border: 1px solid black;
border-top: none;
}
.contact-details article .section3  .div1{
border-right: 1px solid black;
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
}
.contact-details article .section3  .div1 input{
border: none;
border-bottom: 1px solid black;
}
.contact-details article .section3 .div2{
border-right: 1px solid black;
padding: 1rem;
}
.contact-details article .section3  .div2 .status{
display: flex;
margin-top: .5rem;
flex-wrap: wrap;
column-gap: 1rem;
row-gap: .5rem;
}
.contact-details article .section3  .div2 .status section{
min-width: 50px;
display: flex;
align-items: center;
gap: .3rem;
}
.contact-details article .section3 .div3{
display: flex;
flex-direction: column;
gap: .5rem;
padding: 1rem;
}
.contact-details article .section3 .div3 input{
border: none;
border-bottom: 1px solid black;
}
@media screen and (max-width: 749px){
.contact-details article .section3 {
grid-template-columns: 60% 15% 25%;
}
}
@media screen and (max-width: 642px){
.contact-details article .section3 {
   grid-template-columns: 45% 55%;
}
.contact-details article .section3 .div1{
   grid-column: span 2;
   border-right: none;
   border-bottom: 1px dashed black;
}
.contact-details article .section3 .div2{
   border-right: 1px dashed black;
   padding-left: 1rem;
}
.contact-details article .section3 .div3{
   border-right: none;
}
}
@media screen and (max-width: 500px){
.contact-details article .section3 .div1{
   padding: 1rem 0;
}
.contact-details article .section3 .div1 div{
   width:80%;
   margin: auto;
}
}


/*CONTACT DETAILS: section4*/
.contact-details article .section4{
display: grid;
grid-template-columns: 40% 20% 18% 22%;
}
.contact-details article .section4 .div1{
border:  1px solid black;
border-top: none;
border-bottom: none;
}
.contact-details article .section4 .div1 article{
padding: 1rem;
display: flex;
flex-direction: column;
gap: .5rem;
}
.contact-details article .section4 .div1 section{
display: flex;
gap: .3rem;
}
.contact-details article .section4 .div1 section div{
display: flex;
flex-direction: column;
width: 50%;
box-sizing: border-box;
}
.contact-details article .section4 .div1 input{
width: 100%;
border: none;
border-bottom: 1px solid black;
}
.contact-details article .section4 .div2{
border-right: 1px solid black;
}
.contact-details article .section4 .div2 article{
padding: 1rem;
display: flex;
justify-content: start;
flex-direction: column;
gap: .3rem;
}
.contact-details article .section4 .div2 section{
display: flex;
flex-direction: column;
}
.contact-details article .section4 .div2 input{
border: none;
border-bottom: 1px solid black;
}
.contact-details article .section4 .div3{
border-right: 1px solid black;
}
.contact-details article .section4 .div3 article{
padding: 1rem;
display: flex;
flex-direction: column;
gap: .3rem;
}
.contact-details article .section4 .div3 section{
height: 50%;
display: flex;
flex-direction: column;
}
.contact-details article .section4 .div3 input{
border: none;
border-bottom: 1px solid black;
}
.contact-details article .section4 .div4{
border-right: 1px solid black;
padding: 1rem;
}
.contact-details article .section4 .div4 article{
display: flex;
flex-direction: column;
}
@media screen and (max-width: 703px){
.contact-details article .section4{
grid-template-columns: 50% 50%;
}
.contact-details article .section4 .div1{
border-bottom:  1px solid black;
}
.contact-details article .section4 .div2{
border-bottom:  1px solid black;
}
.contact-details article .section4 .div3{
border-left:  1px solid black;
}
}
@media screen and (max-width: 505px) {
.contact-details article .section4{
grid-template-columns: 1fr;
}
.contact-details article .section4 .div1,
.contact-details article .section4 .div2,
.contact-details article .section4 .div3,
.contact-details article .section4 .div4{
   border-bottom: 1px dashed black;
   border-left: 1px solid black;
   border-right: 1px solid black;
}
.contact-details article .section4 .div4{
   border-bottom: 1px solid black
}

.contact-details article .section4 .div1 article,
.contact-details article .section4 .div2 article,
.contact-details article .section4 .div3 article,
.contact-details article .section4 .div4 article{
   width: 90%;
   margin: auto;
}

.contact-details article .section4 .div1 section{
display: flex;
flex-direction: column;
}
.contact-details article .section4 .div1 section div{
width: 100%;
}
}

/*CONTACT DETAILS: section5*/
.contact-details article .section5{
padding: 1rem;
border: 1px solid black;
border-bottom: none;
}
.contact-details article .section5 div{
display: flex;
flex-wrap: wrap;
gap: .5rem;
}
.contact-details article .section5 div section{ 
margin: .1rem .5rem;
display: flex;
justify-content: center;
align-items: center;
}
.contact-details article .section5 div span{ 
min-width: 60px;
width: 10vw;
max-width: 250px;
display: flex;
align-items: center;
gap: 3px;
}
@media screen and (max-width: 500px) {
.contact-details article .section5 article{
   width: 90%;
   margin: auto;
}
.contact-details article .section5{
border-top: none;
}
}

</style>