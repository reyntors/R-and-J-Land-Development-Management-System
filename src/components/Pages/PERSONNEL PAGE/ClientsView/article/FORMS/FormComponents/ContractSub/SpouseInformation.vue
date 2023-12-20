<template>
  <div class="c-cont spouse">
            <header>SPOUSE'S INFORMATION</header>

            <div class="div1">
                    <div class="section1-left">
                            <p>NAME OF SPOUSE</p>
                        <br>
                        <div class="names">
                            <section>
                                <input type="text" v-model="spouseLastname" readonly>
                                <p>Last Name</p>
                            </section>
                            <section>
                                <input type="text" v-model="spouseFirstname"  readonly>
                                <p>First Name</p>
                            </section>
                            <section>
                                <input type="text" v-model="spouseMiddleName"  readonly>
                                <p>Middle Name</p>
                            </section>
                        </div>
                    </div>

                    <div class="section1-right">
                        <p>Occupation / Profession</p>
                        <br>
                        <input v-model="spouseOccupation"  readonly>
                         <br>
                    </div>
            </div>

            <div class="div2">
                <section class="section1">
                    <p>HOME PHONE NO.</p>
                    <input style="display: block;" v-model="spousePhoneNo"  readonly>
                </section>
                <section class="section2">
                    <p>MOBILE NO.</p>
                    <input style="display: block;" v-model="spouseMobileNo"  readonly>
                </section>
                <section class="section3">
                    <p>EMAIL ADDRESS</p>
                    <input style="display: block;" v-model="spouseEmail" readonly>
                </section>
                <section class="section4">
                    <p>T.I.N.</p>
                    <input style="display: block;" v-model="spouseTIN" readonly>
                </section>
                <section class="section5">
                    <p>CITIZENSHIP</p>
                    <input style="display: block;" v-model="spouseCitizenship" readonly>
                </section>
            </div>

            <div class="div3">
                <section class="section1">
                    <p>FAX NO.</p>
                    <input v-model="spouseFaxNo"  readonly>
                </section>

                <section class="section2" :class="{empty:isspouseSexEmpty}">
                    Sex
                    <div>
                        <span><input type="radio" value="Male" id="spouseMale" v-model="spouseSex" disabled><label for="spouseMale">Male</label></span>
                        <span><input type="radio" value="Female" id="spouseFemale" v-model="spouseSex" disabled><label for="spouseFemale">Female</label></span>
                    </div>
                </section>

                <section class="section3" :class="{empty:isspouseEmploymentEmpty}">
                    <p>Employment Status</p>
                    <div>
                        <span><input type="radio" value="Local" id="spouseLocal" v-model="spouseEmployment" disabled><label for="spouseLocal">Local</label></span>
                        <span><input type="radio" value="Self-Employed" id="spouseSE" v-model="spouseEmployment" disabled><label for="spouseSE">Self-Employed</label></span>
                        <span><input type="radio" value="OFW" id="spouseOFW" v-model="spouseEmployment" disabled><label for="spouseOFW">OFW</label></span>
                        <span><input type="radio" value="Expatriate" id="spouseExp" v-model="spouseEmployment" disabled><label for="spouseExp">Expatriate</label></span>
                    </div>
                </section>

                <section class="section4">
                    <p>No. of Children</p>
                    <input v-model="spouseNoChildren" readonly>
                </section>
            </div>

        </div>
</template>

<script>
export default {
    props: ['clientObj'],
    data(){
        return{
            spouseLastname: this.clientObj.spouseLastname,
        
            spouseFirstname: this.clientObj.spouseFirstname,
        
            spouseMiddleName: this.clientObj.spouseMiddleName,
        
            spouseOccupation: this.clientObj.spouseOccupation,
        
            spousePhoneNo: this.clientObj.spousePhoneNo,
        
            spouseMobileNo: this.clientObj.spouseMobileNo,
        
            spouseEmail: this.clientObj.spouseEmail,
    
            spouseTIN: this.clientObj.spouseTIN,
    
            spouseCitizenship: this.clientObj.spouseCitizenship,
            
            spouseFaxNo: this.clientObj.spouseFaxNo,
    
            spouseSex: this.clientObj.spouseSex,
    
            spouseEmployment: this.clientObj.spouseEmployment,
        
            spouseNoChildren: this.clientObj.spouseNoChildren,
        
        }
    },
}
</script>

<style scoped>
input{
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
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
    /* grid-template-columns: 25% calc(74%/4) calc(74%/4) calc(74%/4) calc(74%/4); */
}
.spouse .div2 input{
    border: none;
    border-bottom: 1px solid black;
}
.spouse .div2 .section1{
    border-left: 1px solid black;
}
.spouse .div2 section{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-right: 1px solid black;
}
@media screen and (max-width: 703px) {
.spouse .div2 section{
    border-bottom: 1px solid black;
}
.spouse .div2 .section5{
    border-bottom: none;
    border-left: 1px solid black;
}
.spouse .div2 {
    grid-template-columns: 25%  25% 25% 25%;
    }
}
@media screen and (max-width: 576px) {
    .spouse .div2 {
    grid-template-columns: calc(100%/3) calc(100%/3) calc(100%/3);
    }
    .spouse .div2 .section4{
    border: none;
    border-left: 1px solid black;
    }
}
@media screen and (max-width: 441px) {
.spouse .div2 {
    grid-template-columns: 50% 50%;
    }
    .spouse .div2 .section3{
        border-right: none;
        border-left: 1px solid black;
    }
    .spouse .div2 .section4{
        border-bottom: 1px solid black;
        border-right: 1px solid black;
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
    border-right: none;
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
.spouse .div3 .section4{
    border-right: 1px solid black;
}
@media screen and (max-width: 576px) {
.spouse .div3{
    display: grid;
    grid-template-columns: calc(100%/3) calc(100%/3) calc(100%/3);
    }
    .spouse .div3 .section1{
        border-bottom: none;
    }
}
@media screen and (max-width: 441px) {
.spouse .div3 {
    grid-template-columns: 50% 50%;
    }
    .spouse .div3 .section2{
        border-right: 1px solid black;
        border-bottom: none;
    }
}
</style>