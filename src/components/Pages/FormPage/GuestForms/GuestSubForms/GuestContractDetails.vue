<template>
    <the-header/>

    <form-card title="CONTRACT DETAILS FORM">

        <div class="c-cont property-details">
            <header>PROPERTY DETAILS</header>
            <article>
                <section class="section1" :class="{empty:ispropertyEmpty}">
                    <div>
                        <span>
                            <input type="radio" id="propertyradio1" value="Northtown" v-model="property">
                            <label for="propertyradio1">Northtown</label>
                        </span>
                        <span>
                            <input type="radio" id="propertyradio2" value="Northcrest" v-model="property">
                            <label for="propertyradio2">Northcrest</label>
                        </span>
                        <span>
                            <input type="radio" id="propertyradio3" value="Woodlane Residence" v-model="property">
                            <label for="propertyradio3">Woodlane Residence</label>
                        </span>
                        <span>
                            <input type="radio" id="propertyradio4" value="Fernwood" v-model="property"  >
                            <label for="propertyradio4">Fernwood</label>
                        </span>
                        <span>
                            <input type="radio" id="propertyradio5" value="Eden Ridge" v-model="property"  >
                            <label for="propertyradio5">Eden Ridge</label>
                        </span>
                        <span>
                            <input type="radio" id="propertyradio6" :value="propertyOther" v-model="property">
                            <label for="propertyradio6">Others</label>
                            <input for="propertyradio6" style="border: none; border-bottom: 1px solid black;" v-model="propertyOthers" @input="updatePropertyOther">
                            
                        </span>                       
                    </div>  
                </section>

                <section class="section2" :class="{empty:istypeBuyerEmpty}">
                    <p>Type of Buyer</p>
                    <div><input type="radio" id="typeBuyer1" value="individual" v-model="typeBuyer"><label for="typeBuyer1">Individual</label></div>
                    <div><input type="radio" id="typeBuyer2" value="corporate" v-model="typeBuyer"><label for="typeBuyer2">Corporate</label></div>
                </section>
            </article>
        </div>

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

        <div class="c-cont business-employment">
            <header>BUSINESS / EMPLOYMENT INFORMATION</header>
                <div class="div1">
                    <!-- <div> -->
                        <section>
                            <p>Company / Business Name</p>
                            <input v-model="businessName" :class="{empty:isbusinessNameEmpty}">
                        </section>
                        <section>
                            <p>Company / Business Address</p>
                            <input v-model="businessAddress" :class="{empty:isbusinessAddressEmpty}">
                        </section>                        
                    <!-- </div> -->

                </div>

                <div class="div2">
                    <section class="section1">
                        <p>Office / Business Phone No.</p>
                        <input v-model="businessPhoneNo" :class="{empty:isbusinessPhoneNoEmpty}">
                    </section>
                    <section class="section2">
                        <p>Fax No.</p>
                        <input v-model="businessfaxNo" :class="{empty:isbusinessfaxNoEmpty}">
                    </section>
                    <section class="section3">
                        <p>Position</p>
                        <input v-model="businessPosition" :class="{empty:isbusinessPositionEmpty}">
                    </section>
                    <section class="section4">
                        <p>Profession</p>
                        <input v-model="businessProfession" :class="{empty:isbusinessProfessionEmpty}">
                    </section>
                    <section class="section5" :class="{empty:isbusinessEmploymentStatusEmpty}">
                        <p>Employment Status</p>
                        <div>
                            <span><input type="radio" value="local" v-model="businessEmploymentStatus" id="busEmplLocal"><label for="busEmplLoca">Local</label> </span>
                            <span><input type="radio" value="OFW" v-model="businessEmploymentStatus" id="busEmplOFW"> <label for="busEmplOFW">OFW</label></span>
                            <span><input type="radio" value="self-employed" v-model="businessEmploymentStatus" id="busEmplSelfEmployed"> <label for="busEmplSelfEmployed">self-Employed</label></span>
                        </div>
                    </section>
                </div>
        </div>

        <div class="c-cont spouse">
            <header>SPOUSE'S INFORMATION</header>

            <div class="div1">
                    <div class="section1-left">
                            <p>NAME OF SPOUSE</p>
                        <br>
                        <div class="names">
                            <section>
                                <input type="text" v-model="spouseLastname" :class="{empty:isspouseLastnameEmpty}">
                                <p>Last Name</p>
                            </section>
                            <section>
                                <input type="text" v-model="spouseFirstname" :class="{empty:isspouseFirstnameEmpty}">
                                <p>First Name</p>
                            </section>
                            <section>
                                <input type="text" v-model="spouseMiddleName" :class="{empty:isspouseMiddleNameEmpty}">
                                <p>Middle Name</p>
                            </section>
                        </div>
                    </div>

                    <div class="section1-right">
                        <p>Occupation / Profession</p>
                        <br>
                        <input v-model="spouseOccupation" :class="{empty:isspouseOccupationEmpty}">
                         <br>
                    </div>
            </div>

            <div class="div2">
                <section>
                    <p>HOME PHONE NO.</p>
                    <input style="display: block;" v-model="spousePhoneNo" :class="{empty:isspousePhoneNoEmpty}">
                </section>
                <section>
                    <p>MOBILE NO.</p>
                    <input style="display: block;" v-model="spouseMobileNo" :class="{empty:isspouseMobileNoEmpty}">
                </section>
                <section>
                    <p>EMAIL ADDRESS</p>
                    <input style="display: block;" v-model="spouseEmail" :class="{empty:isspouseEmailEmpty}">
                </section>
                <section>
                    <p>T.I.N.</p>
                    <input style="display: block;" v-model="spouseTIN" :class="{empty:isspouseTINEmpty}">
                </section>
                <section>
                    <p>CITIZENSHIP</p>
                    <input style="display: block;" v-model="spouseCitizenship" :class="{empty:isspouseCitizenshipEmpty}">
                </section>
            </div>

            <div class="div3">
                <section class="section1">
                    <p>FAX NO.</p>
                    <input v-model="spouseFaxNo" :class="{empty:isspouseFaxNoEmpty}">
                </section>

                <section class="section2" :class="{empty:isspouseSexEmpty}">
                    Sex
                    <div>
                        <span><input type="radio" value="Male" id="spouseMale" v-model="spouseSex"><label for="spouseMale">Male</label></span>
                        <span><input type="radio" value="Female" id="spouseFemale" v-model="spouseSex"><label for="spouseFemale">Female</label></span>
                    </div>
                </section>

                <section class="section3" :class="{empty:isspouseEmploymentEmpty}">
                    <p>Employment Status</p>
                    <div>
                        <span><input type="radio" value="Local" id="spouseLocal" v-model="spouseEmployment"><label for="spouseLocal">Local</label></span>
                        <span><input type="radio" value="Self-Employed" id="spouseSE" v-model="spouseEmployment"><label for="spouseSE">Self-Employed</label></span>
                        <span><input type="radio" value="OFW" id="spouseOFW" v-model="spouseEmployment"><label for="spouseOFW">OFW</label></span>
                        <span><input type="radio" value="Expatriate" id="spouseExp" v-model="spouseEmployment"><label for="spouseExp">Expatriate</label></span>
                    </div>
                </section>

                <section class="section4">
                    <p>No. of Children</p>
                    <input v-model="spouseNoChildren" :class="{empty:isspouseNoChildrenEmpty}">
                </section>
            </div>

        </div>

        <div class="c-cont buyer-spa">
            <header>BUYER WITH A SPECIAL POWER OF A ATTORNEY (SPA)</header>
            <article>

                <section class="section1">
                    <div class="section1-left">
                            <p>SPA's Name</p>
                        <br>
                        <div class="names">
                            <section>
                                <input type="text" v-model="attyLastname" :class="{empty:isattyLastnameEmpty}">
                                <p>Last Name</p>
                            </section>
                            <section>
                                <input type="text" v-model="attyFirstname" :class="{empty:isattyFirstnameEmpty}">
                                <p>First Name</p>
                            </section>
                            <section>
                                <input type="text" v-model="attyMiddlename" :class="{empty:isattyMiddlenameEmpty}">
                                <p>Middle Name</p>
                            </section>
                        </div>
                    </div>

                    <div class="section1-right">
                        <p>Occupation / Profession</p>
                        <br>
                        <input v-model="attyOccupation" :class="{empty:isattyOccupationEmpty}">
                        <br>
                    </div>
                    
                </section>

                <section class="section2">
                    <div class="div1">
                        <p>PRIMARY/MAILING ADDRESS</p>
                        <input style="width:100%;" v-model="attyPrimaryAddress" :class="{empty:isattyPrimaryAddressEmpty}">
                        <p>Zip Code: <input style="width:100%;" v-model="attyPrimaryZip" :class="{empty:isattyPrimaryZipEmpty}"></p>
                    </div>
                    <div class="div2" :class="{empty:isattyCivilStatusEmpty}">
                        <p>Civil Status</p>
                        <div class="status">
                            <section><input type="radio" id="attySingle" value="Single" v-model="attyCivilStatus"><label for="attySingle" >Single</label></section>
                            <section><input type="radio" id="attyWidow" value="Widow/er" v-model="attyCivilStatus"><label for="attyWidow">Widow/er</label></section>
                            <section><input type="radio" id="attyMarried" value="Married" v-model="attyCivilStatus"><label for="attyMarried">Married</label></section>
                            <section><input type="radio" id="attySeparated" value="Separated" v-model="attyCivilStatus"><label for="attySeparated">Separated</label></section>
                        </div>
                    </div>
                    <div class="div3">
                        <p>Age</p>
                        <input style="display: block;" v-model="attyAge" :class="{empty:isattyAgeEmpty}">
                    </div>
                </section>

                <section class="section3">
                    <div class="div1">
                        <p>SECONDARY ADDRESS</p>
                        <input style="width:100%;" v-model="attySecondaryAddress" :class="{empty:isattySecondaryAddressEmpty}">
                        <br>
                        <p>Zip Code: <input style="width:100%;" v-model="attySecondaryZip" :class="{empty:isattySecondaryZipEmpty}"></p>
                    </div>
                    <div class="div2" :class="{empty:isattySexEmpty}">
                        <p>Sex</p>
                        <div class="status">
                            <section><input type="radio" id="attyMale" value="Male" v-model="attySex"> <label for="attyMale">Male</label></section>
                            <section><input type="radio" id="attyFemale" value="Female" v-model="attySex"> <label for="attyFemale">Female</label></section>  
                        </div>
                    </div>
                    <div class="div3">
                        <p>Birthdate</p>
                        <input style="display: block;" type="date" v-model="attyBirthdate" :class="{empty:isattyBirthdateEmpty}">
                        <p>Place of Birth</p>
                        <input style="border: none; border-bottom: 1px solid black;" v-model="attyPlaceBirth" :class="{empty:isattyPlaceBirthEmpty}">
                    </div>
                </section>

                <section class="section4">
                    <div class="div1">
                        <section>
                            <div>
                                <p>HOME PHONE NO.</p>
                                <input v-model=" attyHomeNo" :class="{empty:isattyHomeNoEmpty}">
                            </div>
                            <div>
                                <p>FAX NO.</p>
                                <input v-model="attyFaxNo" :class="{empty:isattyFaxNoEmpty}">
                            </div>
                        </section>
                    
                        <p style="font-size: clamp(.5rem, 1vw, 1rem);">(please incluse country and area codes, if possible)</p>
                        <input type="text" style="display: block;" v-model="attyIncludeCountry" :class="{empty:isattyIncludeCountryEmpty}">
                    </div>

                    <div class="div2">
                        <div class="div">
                            <section>
                                <p>MOBILE NO.</p>
                                <input v-model="attyMobileNo" :class="{empty:isattyMobileNoEmpty}">
                            </section>
                            <section>
                                <p>T.I.N.</p>
                                <input v-model="attyTIN" :class="{empty:isattyTINEmpty}">
                            </section>
                        </div>
                        <section class="section">
                            <p>EMAIL ADDRESS.</p>
                            <input style="display: block;" v-model="attyEmail" :class="{empty:isattyEmailEmpty}">
                        </section>
                    </div>

                    <div class="div3">
                        <section>
                            <p>CITIZENSHIP.</p>
                            <input v-model="attyCitizenship" :class="{empty:isattyCitizenshipEmpty}">
                        </section>
                    </div>
                </section>

                <section class="section5" :class="{empty:isattyGovtIssuedIDEmpty}">
                    <p>ANY GOVERNEMNT ISSUED I.D. (<span style="font-style: oblique;">please check one</span>)</p>
                    <div>
                        <section>
                            <span><input type="checkbox" id="attySSS/GSIS" v-model="attyGovtIssuedID" value="SSS/GSIS"><label for="attySSS/GSIS">SSS/GSIS</label></span>:<input>
                        </section>
                        <section>
                            <span><input type="checkbox" id="attyDriverLicense" v-model="attyGovtIssuedID" value="Driver's License"><label for="attyDriverLicense">Driver's License</label> </span>:<input>
                        </section>
                        <section>
                            <span><input type="checkbox" id="attyPRC" v-model="attyGovtIssuedID" value="PRC"><label for="attyPRC">PRC</label> </span>:<input>
                        </section>
                        <section>
                            <span><input type="checkbox" id="attyPassport" v-model="attyGovtIssuedID" value="Passport"><label for="attyPassport">Passport</label> </span>:<input>
                        </section>
                        <section>
                            <span><input type="checkbox" id="attyOthers" v-model="attyGovtIssuedID" value="Others"><label for="attyOthers">Others</label> </span>:<input>
                        </section>
                    </div>
                </section>

            </article>
        </div>

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

        <div class="c-cont others">
            <header>OTHERS</header>

            <div class="div1">
                <section class="section1">
                    <p>Bank Refererence</p>
                    <div>
                        <section>
                            <p>Banks</p>
                            <textarea v-model="otherBanks"></textarea>
                        </section>
                        <section>
                            <p>Type of Account</p>
                            <textarea v-model="otherTypeAccount"></textarea>
                        </section>
                    </div>
                </section>
                
                <section class="section2">
                    <p>Reason for the Purchase (check all, if applicable)</p>
                    <div class="checkboxes">
                        <span><input type="checkbox">Investment</span>
                        <span><input type="checkbox">For children</span>
                        <span><input type="checkbox">New Home</span>
                        <span><input type="checkbox">Others<input class="text"></span>
                    </div>
                    <p>What are the factors that you had considred in buying Alsons Properties?</p>
                    <div class="checkboxes">
                        <span><input type="checkbox">Reliability</span>
                        <span><input type="checkbox">Prestige</span>
                        <span><input type="checkbox">Unique Concept Development</span>
                        <span><input type="checkbox">Trustworthiness</span>
                        <span><input type="checkbox">Attractive Payment Terms</span>
                        <span><input type="checkbox">Value-for-Money</span>
                        <span><input type="checkbox">Integrity</span>
                        <span><input type="checkbox">Service</span>
                        <span><input type="checkbox">Location</span>
                        <span><input type="checkbox">Others<input class="text"></span>
                    </div>
                </section>
            </div>

            <div class="div2">
                <p>FROM WHERE HAVE YOU HEARD OF OUR DEVELOPMENT</p>
                <div class="checkboxes">
                    <span><input type="checkbox">Advertisement</span>
                    <span><input type="checkbox">Newspaper write-up</span>
                    <span><input type="checkbox">Sales Exhibit</span>
                    <span><input type="checkbox">A friend referred it to you</span>
                    <span><input type="checkbox">An Agent approached you</span>
                    <span><input type="checkbox">Others<input class="text"></span>
                </div>
            </div>

            <div class="div3">
                <p>HAVE YOU PURCHASED A LOT FROM ALSONS PROPERTIES BEFORE? <span><input type="checkbox">Yes</span> <span><input type="checkbox">No</span></p> 
                <p>If yes, please state project:</p>
                <div class="checkboxes">
                    <span><input type="checkbox">Ladislawa Garden Village</span>
                    <span><input type="checkbox">Las Terrazas</span>
                    <span><input type="checkbox">Fernwood</span>
                    <span><input type="checkbox">Woodridge Park</span>
                    <span><input type="checkbox">Northcrest</span>
                    <span><input type="checkbox">Others<i>(pls. specify)</i><input class="text"></span>
                </div>
            </div>
        </div>


        <div class="remarks">
            <p>SPECIAL INSTRUCTIONS/ REMARKS (Please specify:)</p>
            <textarea></textarea>
        </div>

        <div class="signature">
            <div>
                <section>
                    <input>
                    <p>Signature of buyer(s)</p>
                </section>   
                <section>
                    <input type="date">
                    <p>Date)</p>
                </section>            
            </div>
            
        </div>
        <submit-form-button @click="submit">Submit</submit-form-button>
    </form-card>
    
    <the-footer/>
</template>

<script>
import SubmitFormButton from '@/components/Reusable/SubmitFormButton.vue'
export default {
  components: { SubmitFormButton },
    data(){
        return{
            //property details
            property: '', propertyOthers: '',
            propertyEmpty: false,
            typeBuyer: '',
            typeBuyerEmpty: false,

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
            buyerIssuedIDEmpty: false,

            //business information
            businessName: '',
            businessNameEmpty: false,
            businessAddress: '',
            businessAddressEmpty: false,
            businessPhoneNo: '',
            businessPhoneNoEmpty: false,
            businessfaxNo: '',
            businessfaxNoEmpty: false,
            businessPosition: '',
            businessPositionEmpty: false,
            businessProfession: '',
            businessProfessionEmpty: false,
            businessEmploymentStatus: '',
            businessEmploymentStatusEmpty: false,

            //spouse
            spouseLastname: '',
            spouseLastnameEmpty: false,
            spouseFirstname: '',
            spouseFirstnameEmpty: false,
            spouseMiddleName: '',
            spouseMiddleNameEmpty: false,
            spouseOccupation: '',
            spouseOccupationEmpty: false,
            spousePhoneNo: '',
            spousePhoneNoEmpty: false,
            spouseMobileNo: '',
            spouseMobileNoEmpty: false,
            spouseEmail: '',
            spouseEmailEmpty: false,
            spouseTIN: '',
            spouseTINEmpty: false,
            spouseCitizenship: '',
            spouseCitizenshipEmpty: false,
            spouseFaxNo: '',
            spouseFaxNoEmpty: false,
            spouseSex: '',
            spouseSexEmpty: false,
            spouseEmployment: '',
            spouseEmploymentEmpty: false,
            spouseNoChildren: '',
            spouseNoChildrenEmpty: false,

            //buyer with SPA
            attyLastname: '',
            attyLastnameEmpty: false,
            attyFirstname: '',
            attyFirstnameEmpty: false,
            attyMiddlename: '',
            attyMiddlenameEmpty: false,
            attyOccupation: '',
            attyOccupationEmpty: false,
            attyPrimaryAddress: '',
            attyPrimaryAddressEmpty: false,
            attyPrimaryZip: '',
            attyPrimaryZipEmpty: false,
            attyCivilStatus: '',
            attyCivilStatusEmpty: false,
            attyAge: '',
            attyAgeEmpty: false,
            attySecondaryAddress: '',
            attySecondaryAddressEmpty: false,
            attySecondaryZip: '',
            attySecondaryZipEmpty: false,
            attyBirthdate: '',
            attyBirthdateEmpty: false,
            attyPlaceBirth: '',
            attyPlaceBirthEmpty: false,
            attySex: '',
            attySexEmpty: false,
            attyHomeNo: '',
            attyHomeNoEmpty: false,
            attyFaxNo: '',
            attyFaxNoEmpty: false,
            attyIncludeCountry: '',
            attyIncludeCountryEmpty: false,
            attyMobileNo: '',
            attyMobileNoEmpty: false,
            attyTIN: '',
            attyTINEmpty: false,
            attyEmail: '',
            attyEmailEmpty: false,
            attyCitizenship: '',
            attyCitizenshipEmpty: false,
            attyGovtIssuedID: '',
            attyGovtIssuedIDEmpty: false,

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

            //others
            otherBanks: '',
            otherBanksEmpty: false,
            otherTypeAccount: '',
            otherTypeAccountEmtpy: false,
            otherReasonPurchase: '',
            otherReasonPurchaseEmpty: false,
            otherConsideredFactor: '',
            otherConsideredFactorEmpty: false,
            otherWhereHeard: '',
            otherWhereHeardEmpty: false,
            otherPurchasedBefore: '',
            otherPurchasedBeforeEmpty: false,
            
        }
    },
    computed: {

        propertyOther(){
            return this.propertyOthers
        },


        // property details
        ispropertyEmpty(){return this.propertyEmpty},
        istypeBuyerEmpty(){ return this.typeBuyerEmpty},

        //contract details
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

        //py
        isbusinessNameEmpty(){return this.businessNameEmpty},
        isbusinessAddressEmpty(){return this.businessAddressEmpty},
        isbusinessPhoneNoEmpty(){return this.businessPhoneNoEmpty},
        isbusinessfaxNoEmpty(){return this.businessfaxNoEmpty},
        isbusinessPositionEmpty(){return this.businessPositionEmpty},
        isbusinessProfessionEmpty(){return this.businessProfessionEmpty},
        isbusinessEmploymentStatusEmpty(){return this.businessEmploymentStatusEmpty},
        isspouseLastnameEmpty(){return this.spouseLastnameEmpty},
        isspouseFirstnameEmpty(){return this.spouseFirstnameEmpty},
        isspouseMiddleNameEmpty(){return this.spouseMiddleNameEmpty},
        isspouseOccupationEmpty(){return this.spouseOccupationEmpty},
        isspousePhoneNoEmpty(){return this.spousePhoneNoEmpty},
        isspouseMobileNoEmpty(){return this.spouseMobileNoEmpty},
        isspouseEmailEmpty(){return this.spouseEmailEmpty},
        isspouseTINEmpty(){return this.spouseTINEmpty},
        isspouseCitizenshipEmpty(){return this.spouseCitizenshipEmpty},
        isspouseFaxNoEmpty(){return this.spouseFaxNoEmpty},
        isspouseSexEmpty(){return this.spouseSexEmpty},
        isspouseEmploymentEmpty(){return this.spouseEmploymentEmpty},
        isspouseNoChildrenEmpty(){return this.spouseNoChildrenEmpty},
        isattyLastnameEmpty(){return this.attyLastnameEmpty},
        isattyFirstnameEmpty(){return this.attyFirstnameEmpty},
        isattyMiddlenameEmpty(){return this.attyMiddlenameEmpty},
        isattyOccupationEmpty(){return this.attyOccupationEmpty},
        isattyPrimaryAddressEmpty(){return this.attyPrimaryAddressEmpty},
        isattyPrimaryZipEmpty(){return this.attyPrimaryZipEmpty},
        isattyCivilStatusEmpty(){return this.attyCivilStatusEmpty},
        isattyAgeEmpty(){return this.attyAgeEmpty},
        isattySecondaryAddressEmpty(){return this.attySecondaryAddressEmpty},
        isattySecondaryZipEmpty(){return this.attySecondaryZipEmpty},
        isattyBirthdateEmpty(){return this.attyBirthdateEmpty},
        isattyPlaceBirthEmpty(){return this.attyPlaceBirthEmpty},
        isattySexEmpty(){return this.attySexEmpty},
        isattyHomeNoEmpty(){return this.attyHomeNoEmpty},
        isattyFaxNoEmpty(){return this.attyFaxNoEmpty},
        isattyIncludeCountryEmpty(){return this.attyIncludeCountryEmpty},
        isattyMobileNoEmpty(){return this.attyMobileNoEmpty},
        isattyTINEmpty(){return this.attyTINEmpty},
        isattyEmailEmpty(){return this.attyEmailEmpty},
        isattyCitizenshipEmpty(){return this.attyCitizenshipEmpty},
        isattyGovtIssuedIDEmpty(){return this.attyGovtIssuedIDEmpty},
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
        
        isotherBanksEmpty(){return this.otherBanksEmpty},
        isotherTypeAccountEmpty(){return this.otherTypeAccountEmpty},
        isotherReasonPurchaseEmpty(){return this.otherReasonPurchaseEmpty},
        isotherConsideredFactorEmpty(){return this.otherConsideredFactorEmpty},
        isotherWhereHeardEmpty(){return this.otherWhereHeardEmpty},
        isotherPurchasedBeforeEmpty(){return this.otherPurchasedBeforeEmpty},

    },
    
    methods: {
        //properties
        updatePropertyOther(){
            this.property = this.propertyOthers
        },
        checkproperty(){
            return this.propertyEmpty = this.property!==''?false:true
        },
    
        checktypeBuyer(){
            return this.typeBuyerEmpty = this.typeBuyer!==''?false:true
        },

        //contract details buyer
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
        checkbusinessName(){return this.businessNameEmpty = this.businessName!==""?false:true},
        checkbusinessAddress(){return this.businessAddressEmpty = this.businessAddress!==""?false:true},
        checkbusinessPhoneNo(){return this.businessPhoneNoEmpty = this.businessPhoneNo!==""?false:true},
        checkbusinessfaxNo(){return this.businessfaxNoEmpty = this.businessfaxNo!==""?false:true},
        checkbusinessPosition(){return this.businessPositionEmpty = this.businessPosition!==""?false:true},
        checkbusinessProfession(){return this.businessProfessionEmpty = this.businessProfession!==""?false:true},
        checkbusinessEmploymentStatus(){return this.businessEmploymentStatusEmpty = this.businessEmploymentStatus!==""?false:true},
        checkspouseLastname(){return this.spouseLastnameEmpty = this.spouseLastname!==""?false:true},
        checkspouseFirstname(){return this.spouseFirstnameEmpty = this.spouseFirstname!==""?false:true},
        checkspouseMiddleName(){return this.spouseMiddleNameEmpty = this.spouseMiddleName!==""?false:true},
        checkspouseOccupation(){return this.spouseOccupationEmpty = this.spouseOccupation!==""?false:true},
        checkspousePhoneNo(){return this.spousePhoneNoEmpty = this.spousePhoneNo!==""?false:true},
        checkspouseMobileNo(){return this.spouseMobileNoEmpty = this.spouseMobileNo!==""?false:true},
        checkspouseEmail(){return this.spouseEmailEmpty = this.spouseEmail!==""?false:true},
        checkspouseTIN(){return this.spouseTINEmpty = this.spouseTIN!==""?false:true},
        checkspouseCitizenship(){return this.spouseCitizenshipEmpty = this.spouseCitizenship!==""?false:true},
        checkspouseFaxNo(){return this.spouseFaxNoEmpty = this.spouseFaxNo!==""?false:true},
        checkspouseSex(){return this.spouseSexEmpty = this.spouseSex!==""?false:true},
        checkspouseEmployment(){return this.spouseEmploymentEmpty = this.spouseEmployment!==""?false:true},
        checkspouseNoChildren(){return this.spouseNoChildrenEmpty = this.spouseNoChildren!==""?false:true},
        checkattyLastname(){return this.attyLastnameEmpty = this.attyLastname!==""?false:true},
        checkattyFirstname(){return this.attyFirstnameEmpty = this.attyFirstname!==""?false:true},
        checkattyMiddlename(){return this.attyMiddlenameEmpty = this.attyMiddlename!==""?false:true},
        checkattyOccupation(){return this.attyOccupationEmpty = this.attyOccupation!==""?false:true},
        checkattyPrimaryAddress(){return this.attyPrimaryAddressEmpty = this.attyPrimaryAddress!==""?false:true},
        checkattyPrimaryZip(){return this.attyPrimaryZipEmpty = this.attyPrimaryZip!==""?false:true},
        checkattyCivilStatus(){return this.attyCivilStatusEmpty = this.attyCivilStatus!==""?false:true},
        checkattyAge(){return this.attyAgeEmpty = this.attyAge!==""?false:true},
        checkattySecondaryAddress(){return this.attySecondaryAddressEmpty = this.attySecondaryAddress!==""?false:true},
        checkattySecondaryZip(){return this.attySecondaryZipEmpty = this.attySecondaryZip!==""?false:true},
        checkattyBirthdate(){return this.attyBirthdateEmpty = this.attyBirthdate!==""?false:true},
        checkattyPlaceBirth(){return this.attyPlaceBirthEmpty = this.attyPlaceBirth!==""?false:true},
        checkattySex(){return this.attySexEmpty = this.attySex!==""?false:true},
        checkattyHomeNo(){return this.attyHomeNoEmpty = this.attyHomeNo!==""?false:true},
        checkattyFaxNo(){return this.attyFaxNoEmpty = this.attyFaxNo!==""?false:true},
        checkattyIncludeCountry(){return this.attyIncludeCountryEmpty = this.attyIncludeCountry!==""?false:true},
        checkattyMobileNo(){return this.attyMobileNoEmpty = this.attyMobileNo!==""?false:true},
        checkattyTIN(){return this.attyTINEmpty = this.attyTIN!==""?false:true},
        checkattyEmail(){return this.attyEmailEmpty = this.attyEmail!==""?false:true},
        checkattyCitizenship(){return this.attyCitizenshipEmpty = this.attyCitizenship!==""?false:true},
        checkattyGovtIssuedID(){return this.attyGovtIssuedIDEmpty = this.attyGovtIssuedID!==""?false:true},
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
        checkotherBanks(){return this.otherBanksEmpty = this.otherBanks!==""?false:true},
        checkotherTypeAccount(){return this.otherTypeAccountEmpty = this.otherTypeAccount!==""?false:true},
        checkotherReasonPurchase(){return this.otherReasonPurchaseEmpty = this.otherReasonPurchase!==""?false:true},
        checkotherConsideredFactor(){return this.otherConsideredFactorEmpty = this.otherConsideredFactor!==""?false:true},
        checkotherWhereHeard(){return this.otherWhereHeardEmpty = this.otherWhereHeard!==""?false:true},
        checkotherPurchasedBefore(){return this.otherPurchasedBeforeEmpty = this.otherPurchasedBefore!==""?false:true},



        //CHECK
            checkAllEmpty(){
                this.checkproperty() 
                this.checktypeBuyer()
                this.checkbuyerLastname() 
                this.checkbuyerFirstname() 
                this.checkbuyerMiddlename() 
                this.checkbuyerOccupation() 
                this.checkbuyerPrimaryAddress() 
                this.checkbuyerPrimaryZip() 
                this.checkbuyerCivilStatus() 
                this.checkbuyerAge() 
                this.checkbuyerSecondaryAddress() 
                this.checkbuyerSecondaryZip() 
                this.checkbuyerSex() 
                this.checkbuyerBirthday() 
                this.checkbuyerPlaceBirth() 
                this.checkbuyerHomePhoneNo() 
                this.checkbuyerFaxNo() 
                this.checkbuyerIncludeCountry() 
                this.checkbuyerMobileNo() 
                this.checkbuyerEmail() 
                this.checkbuyerTIN() 
                this.checkbuyerCitizen()
                this.checkbuyerReligion()
                this.checkbuyerIssuedID()
                //PY
                this.checkbusinessName()
                this.checkbusinessAddress()
                this.checkbusinessPhoneNo()
                this.checkbusinessfaxNo()
                this.checkbusinessPosition()
                this.checkbusinessProfession()
                this.checkbusinessEmploymentStatus()
                this.checkspouseLastname()
                this.checkspouseFirstname()
                this.checkspouseMiddleName()
                this.checkspouseOccupation()
                this.checkspousePhoneNo()
                this.checkspouseMobileNo()
                this.checkspouseEmail()
                this.checkspouseTIN()
                this.checkspouseCitizenship()
                this.checkspouseFaxNo()
                this.checkspouseSex()
                this.checkspouseEmployment()
                this.checkspouseNoChildren()
                this.checkattyLastname()
                this.checkattyFirstname()
                this.checkattyMiddlename()
                this.checkattyOccupation()
                this.checkattyPrimaryAddress()
                this.checkattyPrimaryZip()
                this.checkattyCivilStatus()
                this.checkattyAge()
                this.checkattySecondaryAddress()
                this.checkattySecondaryZip()
                this.checkattyBirthdate()
                this.checkattyPlaceBirth()
                this.checkattySex()
                this.checkattyHomeNo()
                this.checkattyFaxNo()
                this.checkattyIncludeCountry()
                this.checkattyMobileNo()
                this.checkattyTIN()
                this.checkattyEmail()
                this.checkattyCitizenship()
                this.checkattyGovtIssuedID()
                this.checkcorpName()
                this.checkcorpBusinessName()
                this.checkcorpBusinessAddress()
                this.checkcorpZipCode()
                this.checkcorpBusinessPhoneNo()
                this.checkcorpFaxNo()
                this.checkcorpAuthorizedLastname()
                this.checkcorpAuthorizedFirstname()
                this.checkcorpAuthorizedMiddlename()
                this.checkcorpAuthorizedPosition()
                this.checkcorpAuthorizedSecondaryAddress()
                this.checkcorpAuthorizedZip()
                this.checkcorpAuthorizedBirthdate()
                this.checkcorpAuthorizedBirthPlace()
                this.checkcorpAuthorizedSex()
                this.checkcorpAuthorizedHomePhoneNo()
                this.checkcorpAuthorizedFaxNo()
                this.checkcorpAuthorizedIncludeCtry()
                this.checkcorpAuthorizedMobileNo()
                this.checkcorpAuthorizedTIN()
                this.checkcorpAuthorizedEmail()
                this.checkcorpAuthorizedCitizenship()
                this.checkcorpAuthorizedCivilStatus()
                this.checkcorpAuthorizedGovtIssuedID()
                this.checkotherBanks()
                this.checkotherTypeAccount()
                this.checkotherReasonPurchase()
                this.checkotherConsideredFactor()
                this.checkotherWhereHeard()
                this.checkotherPurchasedBefore()
        },
        checkReadySubmit(){
            if(
                !this.checkproperty() &&
                !this.checktypeBuyer() &&
                !this.checkbuyerLastname() &&
                !this.checkbuyerFirstname() &&
                !this.checkbuyerMiddlename() &&
                !this.checkbuyerOccupation() &&
                !this.checkbuyerPrimaryAddress() &&
                !this.checkbuyerPrimaryZip() &&
                !this.checkbuyerCivilStatus() &&
                !this.checkbuyerAge() &&
                !this.checkbuyerSecondaryAddress() &&
                !this.checkbuyerSecondaryZip() &&
                !this.checkbuyerSex() &&
                !this.checkbuyerBirthday() &&
                !this.checkbuyerPlaceBirth() &&
                !this.checkbuyerHomePhoneNo() &&
                !this.checkbuyerFaxNo() &&
                !this.checkbuyerIncludeCountry() &&
                !this.checkbuyerMobileNo() &&
                !this.checkbuyerEmail() &&
                !this.checkbuyerTIN() &&
                !this.checkbuyerCitizen() &&
                !this.checkbuyerReligion() &&
                !this.checkbuyerIssuedID() &&
                !this.checkbusinessName() &&
                !this.checkbusinessAddress() &&
                !this.checkbusinessPhoneNo() &&
                !this.checkbusinessfaxNo() &&
                !this.checkbusinessPosition() &&
                !this.checkbusinessProfession() &&
                !this.checkbusinessEmploymentStatus() &&
                !this.checkspouseLastname() &&
                !this.checkspouseFirstname() &&
                !this.checkspouseMiddleName() &&
                !this.checkspouseOccupation() &&
                !this.checkspousePhoneNo() &&
                !this.checkspouseMobileNo() &&
                !this.checkspouseEmail() &&
                !this.checkspouseTIN() &&
                !this.checkspouseCitizenship() &&
                !this.checkspouseFaxNo() &&
                !this.checkspouseSex() &&
                !this.checkspouseEmployment() &&
                !this.checkspouseNoChildren() &&
                !this.checkattyLastname() &&
                !this.checkattyFirstname() &&
                !this.checkattyMiddlename() &&
                !this.checkattyOccupation() &&
                !this.checkattyPrimaryAddress() &&
                !this.checkattyPrimaryZip() &&
                !this.checkattyCivilStatus() &&
                !this.checkattyAge() &&
                !this.checkattySecondaryAddress() &&
                !this.checkattySecondaryZip() &&
                !this.checkattyBirthdate() &&
                !this.checkattyPlaceBirth() &&
                !this.checkattySex() &&
                !this.checkattyHomeNo() &&
                !this.checkattyFaxNo() &&
                !this.checkattyIncludeCountry() &&
                !this.checkattyMobileNo() &&
                !this.checkattyTIN() &&
                !this.checkattyEmail() &&
                !this.checkattyCitizenship() &&
                !this.checkattyGovtIssuedID() &&
                !this.checkcorpName() &&
                !this.checkcorpBusinessName() &&
                !this.checkcorpBusinessAddress() &&
                !this.checkcorpZipCode() &&
                !this.checkcorpBusinessPhoneNo() &&
                !this.checkcorpFaxNo() &&
                !this.checkcorpAuthorizedLastname() &&
                !this.checkcorpAuthorizedFirstname() &&
                !this.checkcorpAuthorizedMiddlename() &&
                !this.checkcorpAuthorizedPosition() &&
                !this.checkcorpAuthorizedSecondaryAddress() &&
                !this.checkcorpAuthorizedZip() &&
                !this.checkcorpAuthorizedBirthdate() &&
                !this.checkcorpAuthorizedBirthPlace() &&
                !this.checkcorpAuthorizedSex() &&
                !this.checkcorpAuthorizedHomePhoneNo() &&
                !this.checkcorpAuthorizedFaxNo() &&
                !this.checkcorpAuthorizedIncludeCtry() &&
                !this.checkcorpAuthorizedMobileNo() &&
                !this.checkcorpAuthorizedTIN() &&
                !this.checkcorpAuthorizedEmail() &&
                !this.checkcorpAuthorizedCitizenship() &&
                !this.checkcorpAuthorizedCivilStatus() &&
                !this.checkcorpAuthorizedGovtIssuedID()
                // !this.checkotherBanks() &&
                // !this.checkotherTypeAccount() &&
                // !this.checkotherReasonPurchase() &&
                // !this.checkotherConsideredFactor() &&
                // !this.checkotherWhereHeard() &&
                // !this.checkotherPurchasedBefore()
            ){
                return true
            }else{
                return false
            }
        },

        getAllData(){
            return{
            property: this.property,
            typeBuyer: this.typeBuyer,
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

            //py
            businessName: this.businessName,
            businessAddress: this.businessAddress,
            businessPhoneNo: this.businessPhoneNo,
            businessfaxNo: this.businessfaxNo,
            businessPosition: this.businessPosition,
            businessProfession: this.businessProfession,
            businessEmploymentStatus: this.businessEmploymentStatus,
            spouseLastname: this.spouseLastname,
            spouseFirstname: this.spouseFirstname,
            spouseMiddleName: this.spouseMiddleName,
            spouseOccupation: this.spouseOccupation,
            spousePhoneNo: this.spousePhoneNo,
            spouseMobileNo: this.spouseMobileNo,
            spouseEmail: this.spouseEmail,
            spouseTIN: this.spouseTIN,
            spouseCitizenship: this.spouseCitizenship,
            spouseFaxNo: this.spouseFaxNo,
            spouseSex: this.spouseSex,
            spouseEmployment: this.spouseEmployment,
            spouseNoChildren: this.spouseNoChildren,
            attyLastname: this.attyLastname,
            attyFirstname: this.attyFirstname,
            attyMiddlename: this.attyMiddlename,
            attyOccupation: this.attyOccupation,
            attyPrimaryAddress: this.attyPrimaryAddress,
            attyPrimaryZip: this.attyPrimaryZip,
            attyCivilStatus: this.attyCivilStatus,
            attyAge: this.attyAge,
            attySecondaryAddress: this.attySecondaryAddress,
            attySecondaryZip: this.attySecondaryZip,
            attyBirthdate: this.attyBirthdate,
            attyPlaceBirth: this.attyPlaceBirth,
            attySex: this.attySex,
            attyHomeNo: this.attyHomeNo,
            attyFaxNo: this.attyFaxNo,
            attyIncludeCountry: this.attyIncludeCountry,
            attyMobileNo: this.attyMobileNo,
            attyTIN: this.attyTIN,
            attyEmail: this.attyEmail,
            attyCitizenship: this.attyCitizenship,
            attyGovtIssuedID: this.attyGovtIssuedID,
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
            otherBanks: this.otherBanks,
            otherTypeAccount: this.otherTypeAccount,
            otherReasonPurchase: this.otherReasonPurchase,
            otherConsideredFactor: this.otherConsideredFactor,
            otherWhereHeard: this.otherWhereHeard,
            otherPurchasedBefore: this.otherPurchasedBefore,
            }
        },

        submit(){
            this.checkAllEmpty()
            const isGood = this.checkReadySubmit()
            const payload = this.getAllData()
            console.log(payload)
            if(isGood){
                const payload = this.getAllData()
                console.log(payload)
            }else{
                console.log('submit rejected')
            }
        }

    },

    watch:{
        //buyer details
        property(){
            this.checkproperty()
        },
        typeBuyer(){
            this.checktypeBuyer()
        },
        buyerLastname(){
            this.checkbuyerLastname()
        },
        buyerFirstname(){
            this.checkbuyerFirstname()
        },
        buyerMiddlename(){
            this.checkbuyerMiddlename()
        },
        buyerOccupation(){
            this.checkbuyerOccupation()
        },
        buyerPrimaryAddress(){
            this.checkbuyerPrimaryAddress()
        },
        buyerPrimaryZip(){
            this.checkbuyerPrimaryZip()
        },
        buyerCivilStatus(){
            this.checkbuyerCivilStatus()
        },
        buyerAge(){
            this.checkbuyerAge()
        },
        buyerSecondaryAddress(){
            this.checkbuyerSecondaryAddress()
        },
        buyerSecondaryZip(){
            this.checkbuyerSecondaryZip()
        },
        buyerSex(){
            this.checkbuyerSex()
        },
        buyerBirthday(){
            this.checkbuyerBirthday()
        },
        buyerPlaceBirth(){
            this.checkbuyerPlaceBirth()
        },
        buyerHomePhoneNo(){
            this.checkbuyerHomePhoneNo()
        },
        buyerFaxNo(){
            this.checkbuyerFaxNo()
        },
        buyerIncludeCountry(){
            this.checkbuyerIncludeCountry()
        },
        buyerMobileNo(){
            this.checkbuyerMobileNo()
        },
        buyerEmail(){
            this.checkbuyerEmail()
        },
        buyerTIN(){
            this.checkbuyerTIN()
        },
        buyerCitizen(){
            this.checkbuyerCitizen()
        },
        buyerReligion(){
            this.checkbuyerReligion()
        },
        buyerIssuedID(){
            this.checkbuyerIssuedID()
        },    
        
        //PY
        businessName(){this.checkbusinessName()},
        businessAddress(){this.checkbusinessAddress()},
        businessPhoneNo(){this.checkbusinessPhoneNo()},
        businessfaxNo(){this.checkbusinessfaxNo()},
        businessPosition(){this.checkbusinessPosition()},
        businessProfession(){this.checkbusinessProfession()},
        businessEmploymentStatus(){this.checkbusinessEmploymentStatus()},
        spouseLastname(){this.checkspouseLastname()},
        spouseFirstname(){this.checkspouseFirstname()},
        spouseMiddleName(){this.checkspouseMiddleName()},
        spouseOccupation(){this.checkspouseOccupation()},
        spousePhoneNo(){this.checkspousePhoneNo()},
        spouseMobileNo(){this.checkspouseMobileNo()},
        spouseEmail(){this.checkspouseEmail()},
        spouseTIN(){this.checkspouseTIN()},
        spouseCitizenship(){this.checkspouseCitizenship()},
        spouseFaxNo(){this.checkspouseFaxNo()},
        spouseSex(){this.checkspouseSex()},
        spouseEmployment(){this.checkspouseEmployment()},
        spouseNoChildren(){this.checkspouseNoChildren()},
        attyLastname(){this.checkattyLastname()},
        attyFirstname(){this.checkattyFirstname()},
        attyMiddlename(){this.checkattyMiddlename()},
        attyOccupation(){this.checkattyOccupation()},
        attyPrimaryAddress(){this.checkattyPrimaryAddress()},
        attyPrimaryZip(){this.checkattyPrimaryZip()},
        attyCivilStatus(){this.checkattyCivilStatus()},
        attyAge(){this.checkattyAge()},
        attySecondaryAddress(){this.checkattySecondaryAddress()},
        attySecondaryZip(){this.checkattySecondaryZip()},
        attyBirthdate(){this.checkattyBirthdate()},
        attyPlaceBirth(){this.checkattyPlaceBirth()},
        attySex(){this.checkattySex()},
        attyHomeNo(){this.checkattyHomeNo()},
        attyFaxNo(){this.checkattyFaxNo()},
        attyIncludeCountry(){this.checkattyIncludeCountry()},
        attyMobileNo(){this.checkattyMobileNo()},
        attyTIN(){this.checkattyTIN()},
        attyEmail(){this.checkattyEmail()},
        attyCitizenship(){this.checkattyCitizenship()},
        attyGovtIssuedID(){this.checkattyGovtIssuedID()},
        corpName(){this.checkcorpName()},
        corpBusinessName(){this.checkcorpBusinessName()},
        corpBusinessAddress(){this.checkcorpBusinessAddress()},
        corpZipCode(){this.checkcorpZipCode()},
        corpBusinessPhoneNo(){this.checkcorpBusinessPhoneNo()},
        corpFaxNo(){this.checkcorpFaxNo()},
        corpAuthorizedLastname(){this.checkcorpAuthorizedLastname()},
        corpAuthorizedFirstname(){this.checkcorpAuthorizedFirstname()},
        corpAuthorizedMiddlename(){this.checkcorpAuthorizedMiddlename()},
        corpAuthorizedPosition(){this.checkcorpAuthorizedPosition()},
        corpAuthorizedSecondaryAddress(){this.checkcorpAuthorizedSecondaryAddress()},
        corpAuthorizedZip(){this.checkcorpAuthorizedZip()},
        corpAuthorizedBirthdate(){this.checkcorpAuthorizedBirthdate()},
        corpAuthorizedBirthPlace(){this.checkcorpAuthorizedBirthPlace()},
        corpAuthorizedSex(){this.checkcorpAuthorizedSex()},
        corpAuthorizedHomePhoneNo(){this.checkcorpAuthorizedHomePhoneNo()},
        corpAuthorizedFaxNo(){this.checkcorpAuthorizedFaxNo()},
        corpAuthorizedIncludeCtry(){this.checkcorpAuthorizedIncludeCtry()},
        corpAuthorizedMobileNo(){this.checkcorpAuthorizedMobileNo()},
        corpAuthorizedTIN(){this.checkcorpAuthorizedTIN()},
        corpAuthorizedEmail(){this.checkcorpAuthorizedEmail()},
        corpAuthorizedCitizenship(){this.checkcorpAuthorizedCitizenship()},
        corpAuthorizedCivilStatus(){this.checkcorpAuthorizedCivilStatus()},
        corpAuthorizedGovtIssuedID(){this.checkcorpAuthorizedGovtIssuedID()},
        otherBanks(){this.checkotherBanks()},
        otherTypeAccount(){this.checkotherTypeAccount()},
        otherReasonPurchase(){this.checkotherReasonPurchase()},
        otherConsideredFactor(){this.checkotherConsideredFactor()},
        otherWhereHeard(){this.checkotherWhereHeard()},
        otherPurchasedBefore(){this.checkotherPurchasedBefore()},
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

/*PROPERTY DETAILS */
.property-details article{
    display: flex;
    border: 1px solid black;
    border-bottom: none;

}
.property-details article .section1 {
    border-right: 1px solid black;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}
.property-details article .section2 {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: start;
    align-items: center;
    padding: 1rem;
    gap: .5rem;
}
.property-details article .section1 div{
    padding-left: 1rem;
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
}
.property-details article .section2  div{
    gap: 3px;
    display: flex;
    align-items: center;
}
.property-details article .section1 div span{
    display: flex;
    align-items: center;
    gap: 3px;
}
@media screen and (max-width: 415px) {
    .property-details article {
        flex-direction: column;
    }
    .property-details article .section1{
        border-right: none;
        border-bottom: 1px dashed black;
    }
    .property-details article .section2{
        padding-left: 2rem;
    }
    .property-details article .section2 p{
       font-weight: 700;
    }
    .property-details article .section1,
    .property-details article .section2{
        width: 100%;
    }
    .property-details article .section2{
        align-items: start;
    }
}


/*CONTACT DETAILS: section1*/
.contact-details article .section1{
    /* display: flex; */
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
    /* width: 70%; */
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
        /* border-bottom: 1px dashed black; */
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
    /* width: 60%; */
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
    /* width: 30%; */
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
    /* justify-content: center; */
    margin-top: .5rem;
    flex-wrap: wrap;
    column-gap: 1rem;
    row-gap: .5rem;
}
.contact-details article .section3  .div2 .status section{
    /* border: 1px solid black; */
    min-width: 50px;
    display: flex;
    align-items: center;
    gap: .3rem;
}
.contact-details article .section3 .div3{
    /* width: 25%; */
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
    /* height: 50%; */
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
    /* border: 1px solid black; */
}
.contact-details article .section5 div span{ 
    /* border: 1px solid black; */
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


/*BUSINESS-PROPERTY-INFORMATION*/
.business-employment{
    border: 1px solid black;
    border-bottom: none;
}
.business-employment input{
    border: none;
    border-bottom: 1px solid black;
}
.business-employment .div1{
    display: grid;
    grid-template-columns: 50% 50%;
}
.business-employment .div1 section{
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-bottom: 1px dashed black;
}
.business-employment .div2{
    /* border: 1px solid black; */
    border-bottom: none;
    display: grid;
    grid-template-columns: 50% 50%;
}
.business-employment .div2 section{
    width: 100%;
    margin: auto;    
    box-sizing: border-box;
    display: flex;    
    flex-direction: column;
    padding: 1rem;
    border-bottom: 1px dashed black;
}
.business-employment .div2 .section5{
    border-bottom: none;
}
.business-employment .div2 section div{
    display: flex;
    column-gap: 1rem;
    flex-flow: wrap;
}
.business-employment .div2 section div span{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
}
@media screen and (max-width: 500px) {
    .business-employment .div1,
    .business-employment .div2{
    grid-template-columns: 1fr;
    /* border: 1px solid black; */
    }
    .business-employment .div1 section,
    .business-employment .div2 section{
    width: 90%;
    /* border-bottom: none; */
    border: none;
    }
    .business-employment .div2 .section5{
        border-top: 1px dashed black;
    }
}


/*SPOUSE-INFORMATION : .div1*/
.spouse .div1{
    border: 1px solid black;
    display: grid;
    grid-template-columns: 70% 30%;
}
.spouse .div1 input{
    border: none;
    border-bottom: 1px solid black;
}
.spouse .div1 .section1-left{
    box-sizing: border-box;
    border-right: 1px solid black;
    padding: 1rem;
    word-wrap: break-word;
}
.spouse .div1  .section1-left .names{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}
.spouse  .div1  .section1-right{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    word-wrap: break-word;
    text-align: center;
    width: 90%;
    margin: auto;
}
@media screen and (max-width: 732px) {
    .spouse .div1{
        border: 1px solid black;
        grid-template-columns: 50% 50%;
    }
    .spouse  .div1 .section1-left{
        text-align: center;
    }
    .spouse  .div1  .section1-left .names{
        padding: 0;
        flex-direction: column;
        align-items: center;
    }
    .spouse  .div1  .section1-left .names section{
        width: 100%;
        margin-right: 1rem;
        text-align: center;
    }
    .spouse  .div1  .section1-left .names section input{
        width: 100%;
    }
    .spouse .div1 .section1-right{
        text-align: center;
        padding: .5rem;
        justify-content: center;
    }
}@media screen and (max-width: 500px) {
    .spouse .div1{
        border: 1px solid black;
        grid-template-columns: 1fr;
    }
    .spouse .div1 .section1-left{
        padding: 1rem 0 0;
        width: 80%;
        margin: auto;
        border: none;
    }
    .spouse .div1 .section1-right{
        flex-direction: column-reverse;
        padding: 0 0 1rem;
        width: 80%;
        margin: auto;
        border: none;
    }
}

/*SPOUSE-INFORMATION : .div2*/
.spouse .div2 {
    display: grid;
    grid-template-columns: 25% calc(75%/4) calc(75%/4) calc(75%/4) calc(75%/4);
}
.spouse .div2 input{
    border: none;
    border-bottom: 1px solid black;
}
.spouse .div2 section{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
}
@media screen and (max-width: 703px) {
.spouse .div2 {
    grid-template-columns: 25%  25% 25% 25%;
    }
}
@media screen and (max-width: 576px) {
.spouse .div2 {
    grid-template-columns: calc(100%/3) calc(100%/3) calc(100%/3);
    }
}
@media screen and (max-width: 441px) {
.spouse .div2 {
    grid-template-columns: 50% 50%;
    }
}

/*SPOUSE-INFORMATION : .div3*/
.spouse .div3{
    display: grid;
    grid-template-columns: 25% 20% 30% 25% ;
}
.spouse .div3 input{
    border: none;
    border-bottom: 1px solid black;
}
.spouse .div3 section{
    padding: 1rem;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
}
.spouse .div3 .section2 div{
    display: flex;
    gap: .5rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.spouse .div3 .section2 div span{
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
}
.spouse .div3 .section3 div{
    display: flex;
    gap: .5rem;
    flex-wrap: wrap;
    align-items: center;
}
.spouse .div3 .section3 div span{
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
}
@media screen and (max-width: 576px) {
.spouse .div3{
    display: grid;
    grid-template-columns: calc(100%/3) calc(100%/3) calc(100%/3);
    }
}
@media screen and (max-width: 441px) {
.spouse .div3 {
    grid-template-columns: 50% 50%;
    }
}

/*BUYER WITH SPA*/
/*BUYER-SPA: section1*/
.buyer-spa input{
    border: none;
    border-bottom: 1px solid black;
}
.buyer-spa article .section1{
    display: grid;
    grid-template-columns: 70% 30%;
    border: 1px solid black;
}
.buyer-spa article .section1 input{
    border: none;
    border-bottom: 1px solid black;
}
.buyer-spa article .section1 .section1-left{
    box-sizing: border-box;
    /* width: 70%; */
    border-right: 1px solid black;
    padding: 1rem;
    word-wrap: break-word;
}
.buyer-spa article .section1  .section1-left .names{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}
.buyer-spa article .section1  .section1-right{
    flex-grow: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    text-align: center;
}
@media screen and (max-width: 732px) {
    .buyer-spa article .section1{
    display: grid;
    grid-template-columns: 50% 50%;
    border: 1px solid black;
    }
    .buyer-spa article .section1 .section1-left{
        text-align: center;
        padding: .5rem;
    }
    .buyer-spa article .section1  .section1-left .names{
        padding: 0;
        flex-direction: column;
        align-items: center;
    }
    .buyer-spa article .section1  .section1-left .names section{
        width: 95%;
        margin-right: 1rem;
        text-align: center;
    }
    .buyer-spa article .section1  .section1-left .names section input{
        width: 100%;
    }
    .buyer-spa article .section1 .section1-right{
        /* width: 40%; */
        text-align: center;
        padding: .5rem;
    }
}

/*BUYER-SPA: section2*/
.buyer-spa article .section2 {
    display: grid;
    grid-template-columns:60% 30% 10%;
    border: 1px solid black;
    border-top: none;
}
.buyer-spa article .section2  .div1{
    border-right: 1px solid black;
    /* width: 60%; */
    padding:  1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.buyer-spa article .section2  .div1 input{
    border: none;
    border-bottom: 1px solid black;
}
.buyer-spa article .section2  .div2{
    border-right: 1px solid black;
    /* width: 30%; */
    padding: 1rem;
}
.cbuyer-spa article .section2  .div2 .status{
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    width: 80%;
    margin: auto;
}
.buyer-spa article .section2  .div2 .status section{
    min-width: 60px;
    display: flex;
    align-items: center;
    gap: .5rem;
    min-width: 70px;
}
.buyer-spa article .section2 .div3{
    display: flex;
    flex-direction: column;
    padding: 1rem;
}
.buyer-spa article .section2 .div3 input{
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
}
@media screen and (max-width: 749px) {
    .buyer-spa article .section2  .div2 .status{
    justify-content: center;
    } 
    .buyer-spa article .section2  .div1{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }
    .buyer-spa article .section2 .div3{
    text-align: center;
    padding: 1rem .5rem;
    }
    .buyer-spa article .section2 {
    grid-template-columns:50% 35% 15%;
    }
}

/*BUYER-SPA: section3*/
.buyer-spa article .section3 {
    display: grid;
    grid-template-columns: 60% 15% 25%;
    border: 1px solid black;
    border-top: none;
}
.buyer-spa article .section3  .div1{
    border-right: 1px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.buyer-spa article .section3  .div1 input{
    border: none;
    border-bottom: 1px solid black;
}
.buyer-spa article .section3 .div2{
    border-right: 1px solid black;
    padding: 1rem;
}
.buyer-spa article .section3  .div2 .status{
    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
    gap: .3rem;
}
.buyer-spa article .section3  .div2 .status section{
    /* border: 1px solid black; */
    min-width: 60px;
    display: flex;
    align-items: center;
}
.buyer-spa article .section3 .div3{
    /* width: 25%; */
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 1rem;
}
@media screen and (max-width: 749px){
    .buyer-spa article .section3 {
    grid-template-columns: 50% 15% 35%;
    }
}
@media screen and (max-width: 555px){
    .buyer-spa article .section3 {
        grid-template-columns: 50% 50%;
    }
    .buyer-spa article .section3 .div2{
        border-right: none;
    }
    .buyer-spa article .section3 .div3{
        border-right: 1px solid black;
    }
}

/*BUYER-SPA: section4*/
.buyer-spa article .section4{
    display: grid;
    grid-template-columns: 40% 40% 20% ;
}
.buyer-spa article .section4 .div1{
    border:  1px solid black;
    border-top: none;
    border-bottom: none;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
.buyer-spa article .section4 .div1 section{
    display: flex;
    gap: .2rem;
    height: 50%;
}
.buyer-spa article .section4 .div1 section div{
    display: flex;
    flex-direction: column;
    width: 50%;
    box-sizing: border-box;
}
.buyer-spa article .section4 .div1 input{
    width: 100%;
}
.buyer-spa article .section4 .div2{
    border-right: 1px solid black;
    padding: 1rem;
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: .5rem;
}
.buyer-spa article .section4 .div2 .div{
    /* height: 50%; */
    display: flex;
    /* flex-direction: column; */
    gap: .5rem;   
}
.buyer-spa article .section4 .div2 .div section{
    width: 50%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    /* border: 1px solid black; */
}
.buyer-spa article .section4 .div2 .section{
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
}
.buyer-spa article .section4 .div3{
    border-right: 1px solid black;
    padding: 1rem;
    min-height: 80px;
}
.buyer-spa article .section4 .div3 section{
    height: 50%;
    display: flex;
    flex-direction: column;
}
@media screen and (max-width: 703px){
    .buyer-spa article .section4{
    grid-template-columns: 50% 50%;
    }
    .buyer-spa article .section4 .div1{
    border-bottom:  1px solid black;
    }
    .buyer-spa article .section4 .div2{
    border-bottom:  1px solid black;
    flex-direction: column;
    }
    .buyer-spa article .section4 .div2 .div{
    flex-direction: column;
    }
    .buyer-spa article .section4 .div2 .div section{
    width: 100%;
    }
    .buyer-spa article .section4 .div3{
    border-left:  1px solid black;
    }
}
@media screen and (max-width: 505px) {
    .buyer-spa article .section4 .div1 section{
    display: flex;
    flex-direction: column;
    }
    .buyer-spa article .section4 .div1 section div{
    width: 100%;
    }
}

/*BUYER-SPA: section5*/
.buyer-spa article .section5{
    padding: 1rem;
    border: 1px solid black;
    border-bottom: none;
}
.buyer-spa article .section5 div{
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
}
.buyer-spa article .section5 div section{ 
    margin: .1rem .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
}
.buyer-spa article .section5 div span{ 
    /* border: 1px solid black; */
    min-width: 60px;
    width: 10vw;
    max-width: 250px;
    display: flex;
    align-items: center;
    gap: 3px;
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

/*OTHER*/
/*OTHER: div1*/
.others .div1{
    display:grid;
    grid-template-columns: 40% 60%;
}
.others .div1 .section1{
    padding: 1rem;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
}
.others .div1 .section1 div{
    /* border: 1px solid black; */
    display: flex;
    gap: .5rem;
}
.others .div1 .section1 div section{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
}
.others .div1 .section1 div section textarea{
    width: 100%;
    resize: none;
    min-height: 5rem;
}
.others .div1 .section2{
    padding: 1rem;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
}
.others .div1 .section2 .checkboxes{
    padding: .5rem 0 .5rem 1rem;
    /* border: 1px solid black; */
    display: flex;
    column-gap: 1rem;
    row-gap: .5rem;
    flex-wrap: wrap;
}
.others .div1 .section2 .checkboxes span{
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
}
.others .div1 .section2 .checkboxes span .text{
    width: 100%;
}
@media screen and (max-width: 563px) {
    .others .div1{
    grid-template-columns: 50% 50%;
    }    
}
@media screen and (max-width: 530px) {
    .others .div1{
    grid-template-columns: 40% 60%;
    }      
    .others .div1 .section1 div{
    padding-top: .5rem;
    flex-direction: column;
    text-align: center;
    }
    .others .div1 .section2 .checkboxes{
    padding-left: .5rem;
    }
}


/*OTHER: div2*/
.others .div2{
    border: 1px solid black;
    border-top: none;
    padding: 1rem;
}
.others .div2 .checkboxes{
    padding: .5rem 0 .5rem 1rem;
    /* border: 1px solid black; */
    display: flex;
    column-gap: 1rem;
    row-gap: .5rem;
    flex-wrap: wrap;
}
.others .div2 .checkboxes span{
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
}
.others .div2 .checkboxes span .text{
    width: 100%;
}


/*OTHER: div3*/
.others .div3{
    border: 1px solid black;
    border-top: none;
    padding: 1rem;
}
.others .div3 .checkboxes{
    padding: .5rem 0 .5rem 1rem;
    /* border: 1px solid black; */
    display: flex;
    column-gap: 1rem;
    row-gap: .5rem;
    flex-wrap: wrap;
}
.others .div3 .checkboxes span{
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

/*remarks*/
.remarks{
    padding: 1rem;
    width: 90%;
    margin: auto;
}
.remarks textarea{
    padding: 1rem;
    resize: none;
    min-height: 8rem;
    width: 100%;
}
.signature{
    width: 100%;
    display: flex;
    justify-content: end;
}
.signature div{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.signature div section{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.signature div section input{
    width: 100%;
}
</style>