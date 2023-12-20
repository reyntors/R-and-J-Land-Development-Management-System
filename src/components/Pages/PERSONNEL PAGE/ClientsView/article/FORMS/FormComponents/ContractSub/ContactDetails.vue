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
                                <input type="text"  v-model="buyerLastname" readonly>
                                <p>Last Name</p>
                            </section>
                            <section>
                                <input type="text"  v-model="buyerFirstname" readonly>
                                <p>First Name</p>
                            </section>
                            <section>
                                <input type="text" v-model="buyerMiddlename" readonly>
                                <p>Middle Name</p>
                            </section>
                        </div>
                    </div>

                    <div class="section1-right">
                        <p>Occupation / Profession</p>
                        <br>
                        <input  v-model="buyerOccupation" readonly>
                        <br>
                    </div>
                    
                </section>

                <section class="section2">
                    <div class="div1">
                        <div>
                            <p>PRIMARY/MAILING ADDRESS</p>
                            <input style="width:100%;"  v-model="buyerPrimaryAddress" readonly>
                            <br><br>
                            <p>Zip Code: <input style="width:100%;" v-model="buyerPrimaryZip" readonly></p>                            
                        </div>

                    </div>
                    <div class="div2">
                        <p>Civil Status</p>
                        <div class="status" >
                            <section><input type="radio" id="buyerSingle" value="single" v-model="buyerCivilStatus" disabled><label for="buyerSingle">Single</label></section>
                            <section><input type="radio" id="buyerWidow" value="widow/er" v-model="buyerCivilStatus" disabled><label for="buyerWidow">Widow/er</label></section>
                            <section><input type="radio" id="buyerMarried" value="married" v-model="buyerCivilStatus" disabled><label for="buyerMarried">Married</label></section>
                            <section><input type="radio" id="buyerSeparated" value="separated" v-model="buyerCivilStatus" disabled><label for="buyerSeparated">Separated</label></section>
                        </div>
                    </div>
                    <div class="div3">
                        <div>
                            <p>Age</p>
                            <input style="display: block;"  v-model="buyerAge" readonly>                            
                        </div>

                    </div>
                </section>

                <section class="section3">
                    <div class="div1">
                        <div>
                            <p>SECONDARY ADDRESS</p>
                            <input style="width:100%;" v-model="buyerSecondaryAddress" readonly>
                            <br><br>
                            <p>Zip Code: <input style="width:100%;"  v-model="buyerSecondaryZip" readonly></p>                         
                        </div>

                    </div>
                    <div class="div2" >
                        <p>Sex</p>
                        <div class="status">
                            <section><input type="radio" id="buyerMale" value="male" v-model="buyerSex" disabled><label for="buyerMale">Male</label></section>
                            <section><input type="radio" id="buyerFemale" value="female"  v-model="buyerSex" disabled><label for="buyerFemale">Female</label></section>  
                        </div>
                    </div>
                    <div class="div3">
                        <p>Birthdate</p>
                        <input style="display: block;" type="date"  v-model="buyerBirthday" readonly>
                        <p>Place of Birth</p>
                        <input style="border: none; border-bottom: 1px solid black;"  v-model="buyerPlaceBirth" readonly>
                    </div>
                </section>

                <section class="section4">
                    <div class="div1">
                        <article>
                            <section>
                                <div>
                                    <p>HOME PHONE NO.</p>
                                    <input  v-model="buyerHomePhoneNo" readonly>
                                </div>
                                <div>
                                    <p>FAX NO.</p>
                                    <input v-model="buyerFaxNo" readonly>
                                </div>
                            </section>
                            <span style="display:block">
                                <p style="font-size: clamp(.5rem, 1vw, 1rem);">(please incluse country and area codes, if possible)</p>
                                <input type="text" style="display: block;"  v-model="buyerIncludeCountry" readonly> 
                            </span>
                            
                        </article>

                    </div>

                    <div class="div2">
                        <article>
                            <section>
                                <p>MOBILE NO.</p>
                                <input  v-model="buyerMobileNo" readonly>
                            </section>
                            <section>
                                <p>EMAIL ADDRESS.</p>
                                <input style="display: block;"  v-model="buyerEmail" readonly>
                            </section>
                        </article>

                    </div>

                    <div class="div3">
                        <article>
                            <section>
                                <p>T.I.N.</p>
                                <input  v-model="buyerTIN" readonly>
                            </section>
                            <section>
                                <p>CITIZENSHIP.</p>
                                <input v-model="buyerCitizen" readonly>
                            </section>
                        </article>

                    </div>

                    <div class="div4">
                        <article >
                            <p>RELIGION</p>    
                            <span><input type="radio" id="buyerRelgionCatholic" value="roman catholic" v-model="buyerReligion" disabled><label for="buyerRelgionCatholic">Roman Catholic</label></span>
                            <span><input type="radio" id="buyerRelgionProtestant" value="protestant" v-model="buyerReligion" disabled><label for="buyerRelgionProtestant">Protestant</label><br></span>
                            <span><input type="radio" id="buyerRelgionOthers" :value="buyerReligionOtherComputed" v-model="buyerReligion" disabled><label for="buyerRelgionOthers">Others (pl. specify)</label><br></span>
                            <input v-model="buyerReligionOther" @input="setBuyerReligion" readonly>                            
                        </article>

                    </div>
                </section>

                <section class="section5">
                    <article>
                        <p>ANY GOVERNEMNT ISSUED I.D. (<span style="font-style: oblique;">please check one</span>)</p>
                        <div >
                            <section>
                                <span><input type="radio" id="govtIdSSS/GSIS" value="SSS" v-model="buyerIssuedID" disabled><label for="govtIdSSS/GSIS">SSS/GSIS</label> </span>:
                                      <input v-model="idSSS" readonly @input="setidSSS">
                            </section>
                            <section>
                                <span><input type="radio" id="govtIdDriverLicense" value="DRIVER" v-model="buyerIssuedID" disabled><label for="govtIdDriverLicense">Driver's License</label> </span>:
                                      <input v-model="idDriver" readonly @input="setidDriver">
                            </section>
                            <section>
                                <span><input type="radio" id="govtIdPRC" value="PRC" v-model="buyerIssuedID" disabled><label for="govtIdPRC">PRC</label> </span>:
                                      <input v-model="idPrc" readonly @input="setidPrc">
                            </section>
                            <section>
                                <span><input type="radio" id="govtIdPassport" value="PASSPORT" v-model="buyerIssuedID" disabled><label for="govtIdPassport">Passport</label> </span>:
                                    <input v-model="idPassport" readonly @input="setidPassport">
                            </section>
                            <section>
                                <span><input type="radio" id="others" value="OTHERS" v-model="buyerIssuedID" disabled><label for="others">Others</label> </span>:
                                    <input v-model="idOthers" readonly @input="setidOthers">
                            </section>
                        </div>                        
                    </article>

                </section>
            </article>
        </div>
</template>

<script>
export default {
    props: ['clientObj'],
    data(){
        return {
            //contact details
            buyerLastname: this.clientObj.buyerLastname,

            buyerFirstname: this.clientObj.buyerFirstname,
    
            buyerMiddlename: this.clientObj.buyerMiddlename,
    
            buyerOccupation: this.clientObj.buyerOccupation,
    
            buyerPrimaryAddress: this.clientObj.buyerPrimaryAddress,
        
            buyerPrimaryZip: this.clientObj.buyerPrimaryZip,
    
            buyerCivilStatus: this.clientObj.buyerCivilStatus,
    
            buyerAge: this.clientObj.buyerAge,
            buyerSecondaryAddress: this.clientObj.buyerSecondaryAddress,
        
            buyerSecondaryZip: this.clientObj.buyerSecondaryZip,
    
            buyerSex: this.clientObj.buyerSex,

            buyerBirthday: this.clientObj.buyerBirthday,

            buyerPlaceBirth: this.clientObj.buyerPlaceBirth,

            buyerHomePhoneNo: this.clientObj.buyerHomePhoneNo,
    
            buyerFaxNo: this.clientObj.buyerFaxNo,

            buyerIncludeCountry: this.clientObj.buyerIncludeCountry,
        
            buyerMobileNo: this.clientObj.buyerMobileNo,

            buyerEmail: this.clientObj.buyerEmail,

            buyerTIN: this.clientObj.buyerTIN,

            buyerCitizen: this.clientObj.buyerCitizen,

            buyerReligionOther: null,

        }
    },

    mounted(){

        const religion = this.clientObj.buyerReligion
        if(religion === 'roman catholic' || religion === 'protestant'){
            this.buyerReligion = religion
        }else{
            this.buyerReligionOther = religion
        }


        const parts = this.clientObj.buyerIssuedID.split(" ID = ");
        const typeOfId = parts[0]
        const numberID = parts[1]
        this.buyerIssuedID = parts[0]
        if(typeOfId === 'SSS'){
            this.idSSS = numberID
        }else if(typeOfId === 'DRIVER'){
            this.idDriver = numberID
        }else if(typeOfId === 'PRC'){
            this.idPrc = numberID
        }else if(typeOfId === 'PASSPORT'){
            this.idPassport = numberID
        }else{
            this.idOthers = numberID
        }
    }
}
</script>

<style scoped>
input{
    border: none;
    border-bottom: 1px solid black;
}
input:focus{
    outline: none;
}
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
    border: none; 
    border-bottom: 1px solid black;
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