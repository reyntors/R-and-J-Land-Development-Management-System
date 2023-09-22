<template>
    <the-header/>

    <form-card title="CONTRACT DETAILS FORM">

        <div class="c-cont property-details">
            <header>PROPERTY DETAILS</header>
            <article>
                <section class="section1" :class="{empty:ispropertyEmpty}">
                    <div>
                        <span>
                            <input type="radio" id="propertyradio1" value="1" v-model="property">
                            <label for="propertyradio1">Northtown</label>
                        </span>
                        <span>
                            <input type="radio" id="propertyradio2" value="2" v-model="property">
                            <label for="propertyradio2">Northcrest</label>
                        </span>
                        <span>
                            <input type="radio" id="propertyradio3" value="3" v-model="property">
                            <label for="propertyradio3">Woodlane Residence</label>
                        </span>
                        <span>
                            <input type="radio" id="propertyradio4" value="4" v-model="property">
                            <label for="propertyradio4">Fernwood</label>
                        </span>
                        <span>
                            <input type="radio" id="propertyradio5" value="5" v-model="property">
                            <label for="propertyradio5">Eden Ridge</label>
                        </span>
                        <span>
                            <input type="radio" id="propertyradio6" value="6" v-model="property">
                            <label for="propertyradio6">Others</label>
                            <input style="border: none; border-bottom: 1px solid black;">
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
                                <span><input type="radio" id="govtIdSSS/GSIS" value="SSS/GSIS" v-model="buyerIssuedID"><label for="govtIdSSS/GSIS">SSS/GSIS</label> </span>:<input>
                            </section>
                            <section>
                                <span><input type="radio" id="govtIdDriverLicense" value="Driver's License" v-model="buyerIssuedID"><label for="govtIdDriverLicense">Driver's License</label> </span>:<input>
                            </section>
                            <section>
                                <span><input type="radio" id="govtIdPRC" value="PRC" v-model="buyerIssuedID"><label for="govtIdPRC">PRC</label> </span>:<input>
                            </section>
                            <section>
                                <span><input type="radio" id="govtIdPassport" value="Passport" v-model="buyerIssuedID"><label for="govtIdPassport">Passport</label> </span>:<input>
                            </section>
                            <section>
                                <span><input type="radio" id="others" value="others" v-model="buyerIssuedID"><label for="others">Others</label> </span>:<input style="border: none; border-bottom: 1px solid black;">
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
                            <input>
                        </section>
                        <section>
                            <p>Company / Business Address</p>
                            <input>
                        </section>                        
                    <!-- </div> -->

                </div>

                <div class="div2">
                    <section class="section1">
                        <p>Office / Business Phone No.</p>
                        <input>
                    </section>
                    <section class="section2">
                        <p>Fax No.</p>
                        <input>
                    </section>
                    <section class="section3">
                        <p>Position</p>
                        <input>
                    </section>
                    <section class="section4">
                        <p>Profession</p>
                        <input>
                    </section>
                    <section class="section5">
                        <p>Employment Status</p>
                        <div>
                            <span><input type="checkbox"> Local</span>
                            <span><input type="checkbox"> OFW</span>
                            <span><input type="checkbox"> self-Employed</span>
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
                                <input type="text">
                                <p>Last Name</p>
                            </section>
                            <section>
                                <input type="text">
                                <p>First Name</p>
                            </section>
                            <section>
                                <input type="text">
                                <p>Middle Name</p>
                            </section>
                        </div>
                    </div>

                    <div class="section1-right">
                        <p>Occupation / Profession</p>
                        <br>
                        <input>
                         <br>
                    </div>
            </div>

            <div class="div2">
                <section>
                    <p>HOME PHONE NO.</p>
                    <input style="display: block;">
                </section>
                <section>
                    <p>MOBILE NO.</p>
                    <input style="display: block;">
                </section>
                <section>
                    <p>EMAIL ADDRESS</p>
                    <input style="display: block;">
                </section>
                <section>
                    <p>T.I.N.</p>
                    <input style="display: block;">
                </section>
                <section>
                    <p>CITIZENSHIP</p>
                    <input style="display: block;">
                </section>
            </div>

            <div class="div3">
                <section class="section1">
                    <p>FAX NO.</p>
                    <input>
                </section>

                <section class="section2">
                    Sex
                    <div>
                        <span><input type="checkbox">Male</span>
                        <span><input type="checkbox">Male</span>
                    </div>
                </section>

                <section class="section3">
                    <p>Employment Status</p>
                    <div>
                        <span><input type="checkbox">Local</span>
                        <span><input type="checkbox">Self-Employed</span>
                        <span><input type="checkbox">OFW</span>
                        <span><input type="checkbox">Expatriate</span>
                    </div>
                </section>

                <section class="section4">
                    <p>No. of Children</p>
                    <input>
                </section>
            </div>

        </div>

        <div class="c-cont buyer-spa">
            <header>BUYER WITH A SPECIAL POWER OF A ATTORNEY (SPA)</header>
            <article>

                <section class="section1">
                    <div class="section1-left">
                            <p>CONTRACT NAME (Individual Buyer)</p>
                        <br>
                        <div class="names">
                            <section>
                                <input type="text">
                                <p>Last Name</p>
                            </section>
                            <section>
                                <input type="text">
                                <p>First Name</p>
                            </section>
                            <section>
                                <input type="text">
                                <p>Middle Name</p>
                            </section>
                        </div>
                    </div>

                    <div class="section1-right">
                        <p>Occupation / Profession</p>
                        <br>
                        <input>
                        <br>
                    </div>
                    
                </section>

                <section class="section2">
                    <div class="div1">
                        <p>PRIMARY/MAILING ADDRESS</p>
                        <input style="width:100%;">
                        <p>Zip Code: <input style="width:100%;"></p>
                    </div>
                    <div class="div2">
                        <p>Civil Status</p>
                        <div class="status">
                            <section><input type="checkbox">Single</section>
                            <section><input type="checkbox">Widow/er</section>
                            <section><input type="checkbox">Married</section>
                            <section><input type="checkbox">Separated</section>
                        </div>
                    </div>
                    <div class="div3">
                        <p>Age</p>
                        <input style="display: block;">
                    </div>
                </section>

                <section class="section3">
                    <div class="div1">
                        <p>SECONDARY ADDRESS</p>
                        <input style="width:100%;">
                        <br>
                        <p>Zip Code: <input style="width:100%;"></p>
                    </div>
                    <div class="div2">
                        <p>Sex</p>
                        <div class="status">
                            <section><input type="checkbox">Male</section>
                            <section><input type="checkbox">Female</section>  
                        </div>
                    </div>
                    <div class="div3">
                        <p>Birthdate</p>
                        <input style="display: block;" type="date">
                        <p>Place of Birth</p>
                        <input style="border: none; border-bottom: 1px solid black;">
                    </div>
                </section>

                <section class="section4">
                    <div class="div1">
                        <section>
                            <div>
                                <p>HOME PHONE NO.</p>
                                <input>
                            </div>
                            <div>
                                <p>FAX NO.</p>
                                <input>
                            </div>
                        </section>
                    
                        <p style="font-size: clamp(.5rem, 1vw, 1rem);">(please incluse country and area codes, if possible)</p>
                        <input type="text" style="display: block;">
                    </div>

                    <div class="div2">
                        <div class="div">
                            <section>
                                <p>MOBILE NO.</p>
                                <input>
                            </section>
                            <section>
                                <p>T.I.N.</p>
                                <input>
                            </section>
                        </div>
                        <section class="section">
                            <p>EMAIL ADDRESS.</p>
                            <input style="display: block;">
                        </section>
                    </div>

                    <div class="div3">
                        <section>
                            <p>CITIZENSHIP.</p>
                            <input>
                        </section>
                    </div>
                </section>

                <section class="section5">
                    <p>ANY GOVERNEMNT ISSUED I.D. (<span style="font-style: oblique;">please check one</span>)</p>
                    <div>
                        <section>
                            <span><input type="checkbox"> SSS/GSIS</span>:<input>
                        </section>
                        <section>
                            <span><input type="checkbox"> Driver's License</span>:<input>
                        </section>
                        <section>
                            <span><input type="checkbox"> PRC</span>:<input>
                        </section>
                        <section>
                            <span><input type="checkbox"> Passport</span>:<input>
                        </section>
                        <section>
                            <span><input type="checkbox"> Others</span>:<input>
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
                    <input>
                </section>
                <section class="section2">
                    <p>Name of Business</p>
                    <input>
                </section>
            </article>

            <article class="article2">
                <div class="section1">
                    <p>BUSINESS ADDRESS</p>
                    <input style="width:100%;">
                    <p>Zip Code: <input style="width:100%;"></p>
                </div>

                <div class="section2">
                    <p>BUSINESS PHONE NO.</p>
                    <input>
                </div>
                <div class="section3">
                    <p>FAX NO.</p>
                    <input>
                </div>
            </article>

            <article class="article3">
                <div class="section1-left">
                        <p>NAME OF AUTHORIZED SIGNATORY</p>
                    <br>
                    <div class="names">
                        <section>
                            <input type="text">
                            <p>Last Name</p>
                        </section>
                        <section>
                            <input type="text">
                            <p>First Name</p>
                        </section>
                        <section>
                            <input type="text">
                            <p>Middle Name</p>
                        </section>
                    </div>
                </div>

                <div class="section1-right">
                    <p>DESIGNATION / POSITION</p>
                    <br>
                    <input>
                    <br>
                </div>
            </article>

            <article class="article4">
                <div class="div1">
                    <p>SECONDARY ADDRESS</p>
                    <input style="width:100%;">
                    <br>
                    <p>Zip Code: <input style="width:100%;"></p>
                </div>
                <div class="div2">
                    <p>Sex</p>
                    <div class="status">
                        <section><input type="checkbox">Male</section>
                        <section><input type="checkbox">Female</section>  
                    </div>
                </div>
                <div class="div3">
                    <p>Birthdate</p>
                    <input style="display: block;" type="date">
                    <p>Place of Birth</p>
                    <input style="border: none; border-bottom: 1px solid black;">
                </div>
            </article>

            <article class="article5">
                <div class="div1">
                    <section>
                        <div>
                            <p>HOME PHONE NO.</p>
                            <input>
                        </div>
                        <div>
                            <p>FAX NO.</p>
                            <input>
                        </div>
                    </section>
                    
                    <p style="font-size: clamp(.5rem, 1vw, 1rem);">(please incluse country and area codes, if possible)</p>
                    <input type="text" style="display: block;">
                </div>

                <div class="div2">
                    <div class="div">
                        <section>
                            <p>MOBILE NO.</p>
                            <input>
                        </section>
                        <section>
                            <p>T.I.N.</p>
                            <input>
                        </section>
                    </div>
                    <section class="section">
                        <p>EMAIL ADDRESS.</p>
                        <input style="display: block;">
                    </section>
                </div>

                <div class="div3">
                    <section class="section1">
                        <p>CITIZENSHIP.</p>
                        <input>
                    </section>
                    <section class="section2">
                        <p>Civil Status</p>
                        <section>
                            <span><input type="checkbox">Single</span>
                            <span><input type="checkbox">Widow/er</span>
                            <span><input type="checkbox">Married</span>
                            <span><input type="checkbox">Separated</span>
                        </section>
                    </section>
                </div>
            </article>

            <article class="article6">
                <p>ANY GOVERNEMNT ISSUED I.D. (<span style="font-style: oblique;">please check one</span>)</p>
                <div>
                    <section>
                        <span><input type="checkbox"> SSS/GSIS</span>:<input>
                    </section>
                    <section>
                        <span><input type="checkbox"> Driver's License</span>:<input>
                    </section>
                    <section>
                        <span><input type="checkbox"> PRC</span>:<input>
                    </section>
                    <section>
                        <span><input type="checkbox"> Passport</span>:<input>
                    </section>
                    <section>
                        <span><input type="checkbox"> Others</span>:<input>
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
                            <textarea></textarea>
                        </section>
                        <section>
                            <p>Type of Account</p>
                            <textarea></textarea>
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
            property: '',
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
        }
    },
    computed: {

        //property details
        ispropertyEmpty(){
            return this.propertyEmpty
        },
        istypeBuyerEmpty(){
            return this.typeBuyerEmpty
        },

        //contract details
        isbuyerLastnameEmpty(){
            return this.buyerLastnameEmpty
        },
        isbuyerFirstnameEmpty(){
            return this.buyerFirstnameEmpty
        },
        isbuyerMiddlenameEmpty(){
            return this.buyerMiddlenameEmpty
        },
        isbuyerOccupationEmpty(){
            return this.buyerOccupationEmpty
        },
        isbuyerPrimaryAddressEmpty(){
            return this.buyerPrimaryAddressEmpty
        },
        isbuyerPrimaryZipEmpty(){
            return this.buyerPrimaryZipEmpty
        },
        isbuyerCivilStatusEmpty(){
            return this.buyerCivilStatusEmpty
        },
        isbuyerAgeEmpty(){
            return this.buyerAgeEmpty
        },
        isbuyerSecondaryAddressEmpty(){
            return this.buyerSecondaryAddressEmpty
        },
        isbuyerSecondaryZipEmpty(){
            return this.buyerSecondaryZipEmpty
        },
        isbuyerSexEmpty(){
            return this.buyerSexEmpty
        },
        isbuyerBirthdayEmpty(){
            return this.buyerBirthdayEmpty
        },
        isbuyerPlaceBirthEmpty(){
            return this.buyerPlaceBirthEmpty
        },
        isbuyerHomePhoneNoEmpty(){
            return this.buyerHomePhoneNoEmpty
        },
        isbuyerFaxNoEmpty(){
            return this.buyerFaxNoEmpty
        },
        isbuyerIncludeCountryEmpty(){
            return this.buyerIncludeCountryEmpty
        },
        isbuyerMobileNoEmpty(){
            return this.buyerMobileNoEmpty
        },
        isbuyerEmailEmpty(){
            return this.buyerEmailEmpty
        },
        isbuyerTINEmpty(){
            return this.buyerTINEmpty
        },
        isbuyerCitizenEmpty(){
            return this.buyerCitizenEmpty
        },
        isbuyerReligionEmpty(){
            return this.buyerReligionEmpty
        },
        isbuyerIssuedIDEmpty(){
            return this.buyerIssuedIDEmpty
        },

    },
    
    methods: {
        //properties
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
                !this.checkbuyerIssuedID()
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
            buyerIssuedID: this.buyerIssuedID
            }
        },

        submit(){
            this.checkAllEmpty()
            const isGood = this.checkReadySubmit()
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
        border-bottom: 1px dashed black;
    }
    .contact-details article .section1  .section1-left .names section{
        width: 80%;
    }
    .contact-details article .section1  .section1-right{
        width: 80%;
        padding: 0;
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
    /* border: 1px solid black; */
    border-bottom: none;
}
.business-employment .div1 :nth-child(1){
    border-right: none;
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
    border-bottom: 1px solid black;
}
.business-employment .div2 .section1{
    border-right: 1px solid black;
}
.business-employment .div2 .section3{
    border-right: 1px solid black;
}
.business-employment .div2 .section5{
    border-right: 1px solid black;
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
    border: 1px solid black;
    }
    .business-employment .div1 section,
    .business-employment .div2 section{
    width: 90%;
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
    /* width: 70%; */
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
    flex-grow: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    text-align: center;
}
@media screen and (max-width: 732px) {
    .spouse .div1{
        border: 1px solid black;
        grid-template-columns: 50% 50%;
    }
    .spouse  .div1 .section1-left{
        text-align: center;
        padding: .5rem;
    }
    .spouse  .div1  .section1-left .names{
        padding: 0;
        flex-direction: column;
        align-items: center;
    }
    .spouse  .div1  .section1-left .names section{
        width: 95%;
        margin-right: 1rem;
        text-align: center;
    }
    .spouse  .div1  .section1-left .names section input{
        width: 100%;
    }
    .spouse .div1 .section1-right{
        /* width: 40%; */
        text-align: center;
        padding: .5rem;
    }
}

/*SPOUSE-INFORMATION : .div2*/
.spouse .div2 {
    display: grid;
    grid-template-columns: 25% calc(75%/4) calc(75%/4) calc(75%/4) calc(75%/4);
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