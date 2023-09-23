<template>
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

</template>

<script>
export default {
    data(){
        return{
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
        }
    },
    methods:{
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

        //////////////////////////////////////////////////////////////
        passData(){
            const payload = {
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
            }
            this.$emit('pass-data',payload)
        }
    },
    computed:{
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

    },
    watch:{
        attyLastname(){
            this.checkattyLastname()
            this.passData()
        },
        attyFirstname(){
            this.checkattyFirstname()
            this.passData()
        },
        attyMiddlename(){
            this.checkattyMiddlename()
            this.passData()
        },
        attyOccupation(){
            this.checkattyOccupation()
            this.passData()
        },
        attyPrimaryAddress(){
            this.checkattyPrimaryAddress()
            this.passData()
        },
        attyPrimaryZip(){
            this.checkattyPrimaryZip()
            this.passData()
        },
        attyCivilStatus(){
            this.checkattyCivilStatus()
            this.passData()
        },
        attyAge(){
            this.checkattyAge()
            this.passData()
        },
        attySecondaryAddress(){
            this.checkattySecondaryAddress()
            this.passData()
        },
        attySecondaryZip(){
            this.checkattySecondaryZip()
            this.passData()
        },
        attyBirthdate(){
            this.checkattyBirthdate()
            this.passData()
        },
        attyPlaceBirth(){
            this.checkattyPlaceBirth()
            this.passData()
        },
        attySex(){
            this.checkattySex()
            this.passData()
        },
        attyHomeNo(){
            this.checkattyHomeNo()
            this.passData()
        },
        attyFaxNo(){
            this.checkattyFaxNo()
            this.passData()
        },
        attyIncludeCountry(){
            this.checkattyIncludeCountry()
            this.passData()
        },
        attyMobileNo(){
            this.checkattyMobileNo()
            this.passData()
        },
        attyTIN(){
            this.checkattyTIN()
            this.passData()
        },
        attyEmail(){
            this.checkattyEmail()
            this.passData()
        },
        attyCitizenship(){
            this.checkattyCitizenship()
            this.passData()
        },
        attyGovtIssuedID(){
            this.checkattyGovtIssuedID()
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
</style>