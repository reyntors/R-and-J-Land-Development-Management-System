<template>
    <div class="primary">
        <h5>PRINCIPAL BUYER'S INFORMATION</h5>
<!-- name -->
        <div class="row g-2"> 
          <div class="col-md">
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="firstName" placeholder="Juan" v-model="buyerFirstname">
              <label for="firstName">First Name:</label>
            </div>
          </div>
          <div class="col-md mb-2">
            <div class="form-floating">
              <input type="text" class="form-control" id="middleName" placeholder="sample" v-model="buyerMiddlename">
              <label for="middleName">Middle Name:</label>
            </div>            
          </div>
          <div class="col-md">
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="lastName" placeholder="sample" v-model="buyerLastname">
              <label for="lastName">Last Name:</label>
            </div>            
          </div>
        </div>
<!-- date of birth and religion -->
        <div class="row g-2 mt-0 mb-2"> 
          <div class="col-md">
            <div class="row g-2"> 
              <div class="col-md"> 
                <div class="form-floating mb-2">
                  <input type="date" class="form-control" id="floatingInput" placeholder="" v-model="buyerBirthdate">
                  <label for="floatingInput">Date of Birth:</label>
                </div>                
              </div>
              <div class="col-md">
                <div class="form-floating mb-2">
                  <input type="text" class="form-control" id="floatingInput" placeholder="Catholic" v-model="buyerReligion">
                  <label for="floatingInput">Religion:</label>
                </div>
              </div>
            </div>
          </div>
        </div>
<!-- civil status,sex -->
        <div class="row"> 
          <div class="col-md mt-0">
            <p>Civil Status:</p>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="" id="buyer-single" value="single" v-model="buyerCivilStatus">
              <label class="form-check-label" for="buyer-single">
                Single
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="" id="buyer-widow" value="widow" v-model="buyerCivilStatus">
              <label class="form-check-label" for="buyer-widow">
                Widower/Widow
              </label>
            </div>                           
            <div class="form-check">
              <input class="form-check-input" type="radio" name="" id="buyer-married" value="married" v-model="buyerCivilStatus">
              <label class="form-check-label" for="buyer-married">
                Married
              </label>
            </div>               
          </div>      
          <div class="col-md mt-0">
            <p>Sex:</p>
            <div class="form-check">
              <input class="form-check-input" type="radio" id="buyer-male" value="male" v-model="buyerSex">
              <label class="form-check-label" for="buyer-male">
                Male
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" id="buyer-female" value="female" v-model="buyerSex">
              <label class="form-check-label" for="buyer-female">
                Female
              </label>
            </div>                             
          </div>          
        </div>
<!-- citizen,tin No -->
        <div class="row g-2 mt-0"> 
          <div class="col-md">
            <div class="row g-2"> 
              <div class="col-md"> 
                <div class="form-floating mb-2">
                  <input type="text" class="form-control" id="buyer-citizen" placeholder="Filipino" v-model="buyerCitizenship">
                  <label for="buyer-citizen">Citizenship:</label>
                </div>                
              </div>
              <div class="col-md">
                <div class="form-floating mb-2">
                  <input type="text" class="form-control" id="buyer-tin" placeholder="" v-model="buyerTIN">
                  <label for="buyer-tin">TIN No:</label>
                </div>
              </div>
            </div>
          </div>
        </div>
<!-- passport -->
        <div class="row g-2"> 
          <div class="col-md">
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="buyer-passportNo" placeholder="" v-model="buyerPassportNo">
              <label for="buyer-passportNo">Passport No:</label>
            </div>
          </div>
          <div class="col-md mb-2">
            <div class="form-floating">
              <input type="date" class="form-control" id="buyer-passportDateIssued" placeholder="" v-model="buyerPassportDateIssued">
              <label for="buyer-passportDateIssued">Date Issued:</label>
            </div>            
          </div>
          <div class="col-md">
            <div class="form-floating mb-2">
              <input type="date" class="form-control" id="buyer-passportDateExpired" placeholder="" v-model="buyerPassportDateExpiration">
              <label for="buyer-passportDateExpired">Expiration Date:</label>
            </div>            
          </div>
        </div>
<!-- mobile No, messenger acc -->
        <div class="row g-2 mt-0"> 
          <div class="col-md">
            <div class="row g-2"> 
              <div class="col-md"> 
                <div class="form-floating mb-2">
                  <input type="text" class="form-control" id="buyer-mobileNo" placeholder="" v-model="buyerMobileNo">
                  <label for="buyer-mobileNo">Mobile No:</label>
                </div>                
              </div>
              <div class="col-md">
                <div class="form-floating mb-2">
                  <input type="text" class="form-control" id="buyer-messengerAcc" placeholder="" v-model="buyerMessengerAccount">
                  <label for="buyer-messengerAcc">Messenger Account:</label>
                </div>
              </div>
            </div>
          </div>
        </div>
<!-- email,viber No -->
        <div class="row g-2 mt-0"> 
          <div class="col-md">
            <div class="row g-2"> 
              <div class="col-md"> 
                <div class="form-floating mb-2">
                  <input type="text" class="form-control" id="buyer-emailAddress" placeholder="name@example.com" v-model="buyerEmailAddress">
                  <label for="buyer-emailAddress">Email Address:</label>
                </div>                
              </div>
              <div class="col-md">
                <div class="form-floating mb-2">
                  <input type="text" class="form-control" id="buyer-viberNo" placeholder="" v-model="buyerViberNo">
                  <label for="buyer-viberNo">Viber No:</label>
                </div>
              </div>
            </div>
          </div>
        </div>
<!-- gov't issued ID -->
        <div class="row g-2 mt-0 mb-2"> 
          <p>Government Issued ID:</p>
          <div class="col-md mt-0">
            <div class="form-check">
              <input class="form-check-input" type="radio" id="buyer-IDissuedDriver" value="drivers license"  v-model="buyerGovtIssuedID">
              <label class="form-check-label" for="buyer-IDissuedDriver">
                Driver's License
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" id="buyer-IDissuedSSS-GSIS" value="sss/gsis" v-model="buyerGovtIssuedID">
              <label class="form-check-label" for="buyer-IDissuedSSS-GSIS">
                SSS/GSIS
              </label>
            </div>
            <div class="form-check">
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="buyer-govtIssuedIDno" placeholder="" v-model="buyerGovtIssuedIDNo">
                <label for="buyer-govtIssuedIDno">Government Issued ID No:</label>
              </div> 
            </div>

          </div>
        </div>
<!-- address -->
        <div class="mb-2"> 
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="buyer-primaryAddress" placeholder="" v-model="buyerPrimaryAddress">
            <label for="buyer-primaryAddress">Primary Address:</label>
          </div>           
          <div class="form-floating mb-2">
            <input type="text" class="form-control" id="buyer-abroadAddress" placeholder="" v-model="buyerAbroadAddress">
            <label for="buyer-abroadAddress">Address Abroad (If applicable)</label>
          </div>           
        </div>
<!-- ownership residence -->
        <div class="row g-2 mt-0 mb-1"> 
          <p>Ownership of Current Residence in the Philippines:</p>
          <div class="col-md mt-0">
            <div class="form-check">
              <input class="form-check-input" type="radio" id="buyer-owned" value="owned" v-model="buyerOwnershipCurrentResidence">
              <label class="form-check-label" for="buyer-owned">
                Owned
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" id="buyer-rented" value="rented" v-model="buyerOwnershipCurrentResidence">
              <label class="form-check-label" for="buyer-rented">
                Rented
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" id="buyer-liveW/Relatives" value="living with relatives" v-model="buyerOwnershipCurrentResidence">
              <label class="form-check-label" for="buyer-liveW/Relatives">
                Living with relatives
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" id="buyer-mortgaged" value="mortgaged" v-model="buyerOwnershipCurrentResidence">
              <label class="form-check-label" for="buyer-mortgaged">
                Mortgaged
              </label>
            </div>
            <div class="form-check">
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="buyer-yearsResidenceOwned" placeholder="" v-model="buyerOwnershipCurrentResidenceYears">
                <label for="buyer-yearsResidenceOwned">Years of residency:</label>
              </div> 
            </div>
          </div>
        </div>
<!-- primary source -->
        <div class="row g-2 mt-0 mb-2"> 
          <p>Employment Type (Primary Source of Income):</p>
          <div class="col-md mt-0">
            <div class="form-check">
              <input class="form-check-input" type="radio" id="buyer-proprietor" value="propreitor" v-model="buyerEmploymentType">
              <label class="form-check-label" for="buyer-proprietor">
                Proprietor
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" id="buyer-locallyEmpmloyed" value="locally employed" v-model="buyerEmploymentType">
              <label class="form-check-label" for="buyer-locallyEmpmloyed">
                Locally Employed
              </label>
            </div>
            <div class="form-check mb-2">
              <input class="form-check-input" type="radio" id="buyer-OFW" value="overseas" v-model="buyerEmploymentType">
              <label class="form-check-label" for="buyer-OFW">
                Overseas Contract Worker
              </label>
            </div>
          </div>
        </div>
<!-- business/employer-->
        <div class="mb-5">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="buyer-businessEmplyerName" placeholder="sample" v-model="buyerEmployerBusinessName">
            <label for="buyer-businessEmplyerName">Business/Employer Name:</label>
          </div> 
          <div class="form-floating mb-2">
            <input type="text" class="form-control" id="buyer-officeAddress" placeholder="sample" v-model="buyerOfficeAddress">
            <label for="buyer-officeAddress">Office Address:</label>
          </div> 
          <div class="row g-2 mt-2">
            <div class="col-md"> 
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="buyer-employmentIndustry" placeholder="sample" v-model="buyerEmploymentIndustry">
                <label for="buyer-employmentIndustry">Industry:</label>
              </div> 
            </div>
            <div class="col-md"> 
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="buyer-EmploymentPosition" placeholder="sample" v-model="buyerEmploymentPosition">
                <label for="buyer-EmploymentPosition">Position:</label>
              </div> 
            </div>
            <div class="col-md"> 
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="buyer-yearsServiceEmployment" placeholder="sample" v-model="buyerEmploymentYearsService">
                <label for="buyer-yearsServiceEmployment">Years in Service:</label>
              </div> 
            </div>
          </div>
          <div class="row g-2 mt-0">
            <div class="col-md"> 
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="buyer-officeMobile" placeholder="sample" v-model="buyerEmploymentOfficeMobileNo">
                <label for="buyer-officeMobile">Office Mobile No:</label>
              </div> 
            </div>
            <div class="col-md"> 
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="buyer-officeEmail" placeholder="sample" v-model="buyerEmploymentOfficeEmail">
                <label for="buyer-officeEmail">Office Email Address</label>
              </div> 
            </div>
            <div class="col-md"> 
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="buyer-monthlyGross" placeholder="sample" v-model="buyerEmploymentGrossMonthly">
                <label for="buyer-monthlyGross">Gross Monthly Income</label>
              </div> 
            </div>
          </div>
        </div> 
      </div>
</template>

<script>
export default {
  emits:['passData','toggleCivilStatus'],
  data(){
    return{
      buyerFirstname : null,
      buyerMiddlename : null,
      buyerLastname : null,
      buyerBirthdate : null,
      buyerReligion : null,
      buyerCivilStatus : null,
      buyerSex : null,
      buyerCitizenship : null,
      buyerTIN : null,
      buyerPassportNo : null,
      buyerPassportDateIssued : null,
      buyerPassportDateExpiration : null,
      buyerMobileNo : null,
      buyerMessengerAccount : null,
      buyerEmailAddress : null,
      buyerViberNo : null,
      buyerGovtIssuedID : null,
      buyerGovtIssuedIDNo : null,
      buyerPrimaryAddress : null,
      buyerAbroadAddress : null,
      buyerOwnershipCurrentResidence : null,
      buyerOwnershipCurrentResidenceYears : null,
      buyerEmploymentType : null,
      buyerEmployerBusinessName : null,
      buyerOfficeAddress : null,
      buyerEmploymentIndustry : null,
      buyerEmploymentPosition : null,
      buyerEmploymentYearsService : null,
      buyerEmploymentOfficeMobileNo : null,
      buyerEmploymentOfficeEmail : null,
      buyerEmploymentGrossMonthly : null
    }
  },
  methods:{
    passData(){
      this.$emit('passData',
        {
          buyerFirstname: this.buyerFirstname,
          buyerMiddlename: this.buyerMiddlename,
          buyerLastname: this.buyerLastname,
          buyerBirthdate: this.buyerBirthdate,
          buyerReligion: this.buyerReligion,
          buyerCivilStatus: this.buyerCivilStatus,
          buyerSex: this.buyerSex,
          buyerCitizenship: this.buyerCitizenship,
          buyerTIN: this.buyerTIN,
          buyerPassportNo: this.buyerPassportNo,
          buyerPassportDateIssued: this.buyerPassportDateIssued,
          buyerPassportDateExpiration: this.buyerPassportDateExpiration,
          buyerMobileNo: this.buyerMobileNo,
          buyerMessengerAccount: this.buyerMessengerAccount,
          buyerEmailAddress: this.buyerEmailAddress,
          buyerViberNo: this.buyerViberNo,
          buyerGovtIssuedID: this.buyerGovtIssuedID,
          buyerGovtIssuedIDNo: this.buyerGovtIssuedIDNo,
          buyerPrimaryAddress: this.buyerPrimaryAddress,
          buyerAbroadAddress: this.buyerAbroadAddress,
          buyerOwnershipCurrentResidence: this.buyerOwnershipCurrentResidence,
          buyerOwnershipCurrentResidenceYears: this.buyerOwnershipCurrentResidenceYears,
          buyerEmploymentType: this.buyerEmploymentType,
          buyerEmployerBusinessName: this.buyerEmployerBusinessName,
          buyerOfficeAddress: this.buyerOfficeAddress,
          buyerEmploymentIndustry: this.buyerEmploymentIndustry,
          buyerEmploymentPosition: this.buyerEmploymentPosition,
          buyerEmploymentYearsService: this.buyerEmploymentYearsService,
          buyerEmploymentOfficeMobileNo: this.buyerEmploymentOfficeMobileNo,
          buyerEmploymentOfficeEmail: this.buyerEmploymentOfficeEmail,
          buyerEmploymentGrossMonthly: this.buyerEmploymentGrossMonthly
        }
      )
    }
  },
  watch:{
    buyerFirstname(){this.passData()},
    buyerMiddlename(){this.passData()},
    buyerLastname(){this.passData()},
    buyerBirthdate(){this.passData()},
    buyerReligion(){this.passData()},
    buyerCivilStatus(status){
      this.passData()
      if(status === 'single'){
        this.$emit('toggleCivilStatus',false)
      }else{
        this.$emit('toggleCivilStatus',true)
      }
      
    },
    buyerSex(){this.passData()},
    buyerCitizenship(){this.passData()},
    buyerTIN(){this.passData()},
    buyerPassportNo(){this.passData()},
    buyerPassportDateIssued(){this.passData()},
    buyerPassportDateExpiration(){this.passData()},
    buyerMobileNo(){this.passData()},
    buyerMessengerAccount(){this.passData()},
    buyerEmailAddress(){this.passData()},
    buyerViberNo(){this.passData()},
    buyerGovtIssuedID(){this.passData()},
    buyerGovtIssuedIDNo(){this.passData()},
    buyerPrimaryAddress(){this.passData()},
    buyerAbroadAddress(){this.passData()},
    buyerOwnershipCurrentResidence(){this.passData()},
    buyerOwnershipCurrentResidenceYears(){this.passData()},
    buyerEmploymentType(){this.passData()},
    buyerEmployerBusinessName(){this.passData()},
    buyerOfficeAddress(){this.passData()},
    buyerEmploymentIndustry(){this.passData()},
    buyerEmploymentPosition(){this.passData()},
    buyerEmploymentYearsService(){this.passData()},
    buyerEmploymentOfficeMobileNo(){this.passData()},
    buyerEmploymentOfficeEmail(){this.passData()},
    buyerEmploymentGrossMonthly(){this.passData()}
  }
}
</script>

<style scoped>
h5{
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.4);
    text-align: center;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.1);
}
</style>

