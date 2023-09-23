<template>
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
</template>

<script>
export default {
    data(){
        return{
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
        }
    },
    methods:{
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

        //////////////////////////////////////////////////////////////
        passData(){
            const payload = {
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
            }
            this.$emit('pass-data',payload)
        }
    },
    computed: {
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
    },
    watch:{
        spouseLastname(){
            this.checkspouseLastname()
            this.passData()
        },
        spouseFirstname(){
            this.checkspouseFirstname()
            this.passData()
        },
        spouseMiddleName(){
            this.checkspouseMiddleName()
            this.passData()
        },
        spouseOccupation(){
            this.checkspouseOccupation()
            this.passData()
        },
        spousePhoneNo(){
            this.checkspousePhoneNo()
            this.passData()
        },
        spouseMobileNo(){
            this.checkspouseMobileNo()
            this.passData()
        },
        spouseEmail(){
            this.checkspouseEmail()
            this.passData()
        },
        spouseTIN(){
            this.checkspouseTIN()
            this.passData()
        },
        spouseCitizenship(){
            this.checkspouseCitizenship()
            this.passData()
        },
        spouseFaxNo(){
            this.checkspouseFaxNo()
            this.passData()
        },
        spouseSex(){
            this.checkspouseSex()
            this.passData()
        },
        spouseEmployment(){
            this.checkspouseEmployment()
            this.passData()
        },
        spouseNoChildren(){
            this.checkspouseNoChildren()
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
</style>