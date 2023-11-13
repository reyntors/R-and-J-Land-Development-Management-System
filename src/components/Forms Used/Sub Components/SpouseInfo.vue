<template>
  <div class="primary">
      <h5>SPOUSE/ CO-BUYERS INFORMATION</h5>
<!-- name -->
      <div class="row g-2"> 
        <div class="col-md">
          <div class="form-floating mb-2">
            <input type="text" class="form-control" id="firstName" placeholder="Juan" v-model="spouseFirstname">
            <label for="firstName">First Name:</label>
          </div>
        </div>
        <div class="col-md mb-2">
          <div class="form-floating">
            <input type="text" class="form-control" id="middleName" placeholder="sample" v-model="spouseMiddlename">
            <label for="middleName">Middle Name:</label>
          </div>            
        </div>
        <div class="col-md">
          <div class="form-floating mb-2">
            <input type="text" class="form-control" id="lastName" placeholder="sample" v-model="spouseLastname">
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
                <input type="date" class="form-control" id="floatingInput" placeholder="" v-model="spouseBirthdate">
                <label for="floatingInput">Date of Birth:</label>
              </div>                
            </div>
            <div class="col-md">
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="Catholic" v-model="spouseReligion">
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
            <input class="form-check-input" type="radio" name="" id="spouse-single" value="single" checked v-model="spouseCivilStatus">
            <label class="form-check-label" for="spouse-single">
              Single
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="" id="spouse-widow" value="widow-widower" v-model="spouseCivilStatus">
            <label class="form-check-label" for="spouse-widow">
              Widower/Widow
            </label>
          </div>                           
          <div class="form-check">
            <input class="form-check-input" type="radio" name="" id="spouse-married" value="married" v-model="spouseCivilStatus">
            <label class="form-check-label" for="spouse-married">
              Married
            </label>
          </div>               
          <div class="form-check">
            <input class="form-check-input" type="radio" name="" id="spouse-spouse" value="spouse" v-model="spouseCivilStatus">
            <label class="form-check-label" for="spouse-spouse">
              Spouse
            </label>
          </div>               
        </div>      
        <div class="col-md mt-0">
          <p>Sex:</p>
          <div class="form-check">
            <input class="form-check-input" type="radio" id="spouse-male" value="male" checked v-model="spouseSex">
            <label class="form-check-label" for="spouse-male">
              Male
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" id="spouse-female" value="female" v-model="spouseSex">
            <label class="form-check-label" for="spouse-female">
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
                <input type="text" class="form-control" id="spouse-citizen" placeholder="Filipino" v-model="spouseCitizenship">
                <label for="spouse-citizen">Citizenship:</label>
              </div>                
            </div>
            <div class="col-md">
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="spouse-tin" placeholder="" v-model="spouseTIN">
                <label for="spouse-tin">TIN No:</label>
              </div>
            </div>
          </div>
        </div>
      </div>
<!-- passport -->
      <div class="row g-2"> 
        <div class="col-md">
          <div class="form-floating mb-2">
            <input type="text" class="form-control" id="spouse-passportNo" placeholder="" v-model="spousePassportNo">
            <label for="spouse-passportNo">Passport No:</label>
          </div>
        </div>
        <div class="col-md mb-2">
          <div class="form-floating">
            <input type="date" class="form-control" id="spouse-passportDateIssued" placeholder="" v-model="spousePassportDateIssued">
            <label for="spouse-passportDateIssued">Date Issued:</label>
          </div>            
        </div>
        <div class="col-md">
          <div class="form-floating mb-2">
            <input type="date" class="form-control" id="spouse-passportDateExpired" placeholder="" v-model="spousePassportDateExpiration">
            <label for="spouse-passportDateExpired">Expiration Date:</label>
          </div>            
        </div>
      </div>
<!-- mobile No, messenger acc -->
      <div class="row g-2 mt-0"> 
        <div class="col-md">
          <div class="row g-2"> 
            <div class="col-md"> 
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="spouse-mobileNo" placeholder="" v-model="spouseMobileNo">
                <label for="spouse-mobileNo">Mobile No:</label>
              </div>                
            </div>
            <div class="col-md">
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="spouse-messengerAcc" placeholder="" v-model="spouseMessengerAccount">
                <label for="spouse-messengerAcc">Messenger Account:</label>
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
                <input type="text" class="form-control" id="spouse-emailAddress" placeholder="name@example.com" v-model="spouseEmailAddress">
                <label for="spouse-emailAddress">Email Address:</label>
              </div>                
            </div>
            <div class="col-md">
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="spouse-viberNo" placeholder="" v-model="spouseViberNo">
                <label for="spouse-viberNo">Viber No:</label>
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
            <input class="form-check-input" type="radio" id="spouse-IDissuedDriver" value="driver's license" checked  v-model="spouseGovtIssuedID">
            <label class="form-check-label" for="spouse-IDissuedDriver">
              Driver's License
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" id="spouse-IDissuedSSS-GSIS" value="SSS-GSIS" v-model="spouseGovtIssuedID">
            <label class="form-check-label" for="spouse-IDissuedSSS-GSIS">
              SSS/GSIS
            </label>
          </div>
          <div class="form-check">
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="spouse-govtIssuedIDno" placeholder="" v-model="spouseGovtIssuedIDNo">
              <label for="spouse-govtIssuedIDno">Government Issued ID No:</label>
            </div> 
          </div>

        </div>
      </div>
<!-- address -->
      <div class="mb-2"> 
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="spouse-primaryAddress" placeholder="" v-model="spousePrimaryAddress">
          <label for="spouse-primaryAddress">Primary Address:</label>
        </div>           
        <div class="form-floating mb-2">
          <input type="text" class="form-control" id="spouse-abroadAddress" placeholder="" v-model="spouseAbroadAddress">
          <label for="spouse-abroadAddress">Address Abroad (If applicable)</label>
        </div>           
      </div>
<!-- primary source -->
      <div class="row g-2 mt-0 mb-2"> 
        <p>Employment Type (Primary Source of Income):</p>
        <div class="col-md mt-0">
          <div class="form-check">
            <input class="form-check-input" type="radio" id="spouse-proprietor" value="propreitor" checked v-model="spouseEmploymentType">
            <label class="form-check-label" for="spouse-proprietor">
              Proprietor
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" id="spouse-locallyEmpmloyed" value="locally Employed" v-model="spouseEmploymentType">
            <label class="form-check-label" for="spouse-locallyEmpmloyed">
              Locally Employed
            </label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="radio" id="spouse-OFW" value="OFW" v-model="spouseEmploymentType">
            <label class="form-check-label" for="spouse-OFW">
              Overseas Contract Worker
            </label>
          </div>
        </div>
      </div>
<!-- business/employer-->
      <div class="mb-5">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="spouse-businessEmplyerName" placeholder="sample" v-model="spouseEmployerBusinessName">
          <label for="spouse-businessEmplyerName">Business/Employer Name:</label>
        </div> 
        <div class="form-floating mb-2">
          <input type="text" class="form-control" id="spouse-officeAddress" placeholder="sample" v-model="spouseOfficeAddress">
          <label for="spouse-officeAddress">Office Address:</label>
        </div> 
        <div class="row g-2 mt-2">
          <div class="col-md"> 
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="spouse-employmentIndustry" placeholder="sample" v-model="spouseEmploymentIndustry">
              <label for="spouse-employmentIndustry">Industry:</label>
            </div> 
          </div>
          <div class="col-md"> 
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="spouse-EmploymentPosition" placeholder="sample" v-model="spouseEmploymentPosition">
              <label for="spouse-EmploymentPosition">Position:</label>
            </div> 
          </div>
          <div class="col-md"> 
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="spouse-yearsServiceEmployment" placeholder="sample" v-model="spouseEmploymentYearsService">
              <label for="spouse-yearsServiceEmployment">Years in Service:</label>
            </div> 
          </div>
        </div>
        <div class="row g-2 mt-0">
          <div class="col-md"> 
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="spouse-officeMobile" placeholder="sample" v-model="spouseEmploymentOfficeMobileNo">
              <label for="spouse-officeMobile">Office Mobile No:</label>
            </div> 
          </div>
          <div class="col-md"> 
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="spouse-officeEmail" placeholder="sample" v-model="spouseEmploymentOfficeEmail">
              <label for="spouse-officeEmail">Office Email Address</label>
            </div> 
          </div>
          <div class="col-md"> 
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="spouse-monthlyGross" placeholder="sample" v-model="spouseEmploymentGrossMonthly">
              <label for="spouse-monthlyGross">Gross Monthly Income</label>
            </div> 
          </div>
        </div>
      </div> 
    </div>
</template>

<script>
export default {
data(){
  return{
    spouseFirstname : null,
    spouseMiddlename : null,
    spouseLastname : null,
    spouseBirthdate : null,
    spouseReligion : null,
    spouseCivilStatus : null,
    spouseSex : null,
    spouseCitizenship : null,
    spouseTIN : null,
    spousePassportNo : null,
    spousePassportDateIssued : null,
    spousePassportDateExpiration : null,
    spouseMobileNo : null,
    spouseMessengerAccount : null,
    spouseEmailAddress : null,
    spouseViberNo : null,
    spouseGovtIssuedID : null,
    spouseGovtIssuedIDNo : null,
    spousePrimaryAddress : null,
    spouseAbroadAddress : null,
    spouseOwnershipCurrentResidence : null,
    spouseOwnershipCurrentResidenceYears : null,
    spouseEmploymentType : null,
    spouseEmployerBusinessName : null,
    spouseOfficeAddress : null,
    spouseEmploymentIndustry : null,
    spouseEmploymentPosition : null,
    spouseEmploymentYearsService : null,
    spouseEmploymentOfficeMobileNo : null,
    spouseEmploymentOfficeEmail : null,
    spouseEmploymentGrossMonthly : null
  }
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

