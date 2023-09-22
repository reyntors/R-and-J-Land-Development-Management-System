<template>
    <the-header/>

    <form-card title="BIR Tin Request">fdsafa
    <div class="c-container">
            <input type="date" style="display: block; border: none; border-bottom: 1px solid black;" :class="{empty:isdateEmpty}" v-model.trim="date">
        <br>    
            <p>BUREAU OF INTERNAL REVENUE</p>
            <p>Davao City</p>
        <br>
            <p>This is to authorize Mr./Mrs. <input  style="border: none; border-bottom: 1px solid black;" :class="{empty:isauthorizedToEmpty}" v-model.trim="authorizedTo"> to get my Tax Identification Number 
                Verification Slip (TIN Verification Slip) in my behalf.</p>
            <p>Please find below the details:</p>
            
            <div class="details">
                <section>
                    <span>Name</span>:<input :class="{empty:isnameEmpty}" v-model.trim="name"></section>
                <section>
                    <span>Address</span>:<input :class="{empty:isaddressEmpty}" v-model.trim="address"></section>
                <section>
                    <span>Birthday</span>:<input type="date" :class="{empty:isbirthdayEmpty}" v-model.trim="birthday"></section>
                <section>
                    <span>TIN Number</span>:<input :class="{empty:istinNumberEmpty}" v-model.trim="tinNumber"></section>  
            </div>
        <br>
            <p>Thank you.</p>
        <br>
            <p>Respectful Yours,</p>
        <br>
            <input style="border: none; border-bottom: 1px solid black;" :class="{empty:isrespectfulYoursEmpty}" v-model.trim="respectfulYours">
    </div>
    </form-card>

    <form-card title="SPECIAL POWER OF ATTORNEY">
    <div class="spa-form">
    <strong>KNOW ALL, MEN BY THESE PRESENTS:</strong>
        
        <div class="center">
            <p>
                That I,<input :class="{empty:isspaNameEmpty}" v-model.trim="spaName"> single/married, of legal age, <input :class="{empty:isspaAgeEmpty}" v-model.trim="spaAge"> and resident of <input :class="{empty:isspaResidentEmpty}" v-model.trim="spaResident">, do hereby Atty, name consittute and Atty,
                <input :class="{empty:isspaAttyNameEmpty}" v-model.trim="spaAttyName" >, single/married of legal age, <input :class="{empty:isspaAttyAgeEmpty}" v-model.trim="spaAttyAge"> and a resident of <input :class="{empty:isspaAttyResidentEmpty}" v-model.trim="spaAttyResident">. to be my true and lawful <strong>Attorney-In-Face</strong>,
                for me and in my name, to do and perfrom any or all of the following act or acts, to wit:
            </p>
            <br>
            <p> 1.  To secure Tax Identification Number (TIN) Verification Slip from the Bureau of Internal Revenue (BIR).</p>
            <br>
            <p><strong>IN WITNESS OF,</strong> we have hereunto set our hands this <input :class="{empty:iswitnessDayEmpty}" v-model.trim="witnessDay"> day of <input :class="{empty:iswitnessMonthEmpty}" v-model.trim="witnessMonth">, 20 <input :class="{empty:iswitnessYearEmpty}" v-model.trim="witnessYear"> at <input :class="{empty:iswitnessAddressEmpty}" v-model.trim="witnessAddress">, Philippines.</p>
            <br>
            <div class="signature-flex">
                <section>
                    <strong style="display: block;">GRANTOR</strong>
                    <br>
                    <!-- <input style="display: block;"> -->
                    <p style="border-top: 1px solid black;">CEI:</p>
                </section>
                <section>
                    <strong style="display: block;">GRANTEE</strong>
                    <br>
                    <!-- <input style="display: block;"> -->
                    <p style="border-top: 1px solid black;">CEI:</p>
                </section>
            </div>
        </div>
    <p>
        SUBSCRIBED AND SWORN to before me this <input> day of <input> , 20<input> at Davao City, Philippines
        Affian exhibit to be their Competent Evidence of Identities (CEI) written below their names.
    </p>
    <section class="notary">
            Notary Public
            <div>
                <label>Doc. No.</label>
                <input>;
            </div>
            <div>
                <label>Page No.</label>
                <input>;
            </div>
            <div>
                <label>Book No.</label>
                <input>;
            </div>
            <div>
                <label>Series of</label>
                <input>;
            </div>
        </section>
    </div>
    </form-card>
    <submit-form-button @click="submit">Submit</submit-form-button>
    <the-footer/>
</template>

<script>
import SubmitFormButton from '@/components/Reusable/SubmitFormButton.vue'
export default {
  components: { SubmitFormButton },
    data(){
        return{

            //BIR TIN Request
            date: '',
            dateEmpty: false,
            authorizedTo: '',
            authorizedToEmpty: false,
            name: '',
            nameEmpty: false,
            address: '',
            addressEmpty: false,
            birthday: '',
            birthdayEmpty: false,
            tinNumber: '',
            tinNumberEmpty: false,
            respectfulYours: '',
            respectfulYoursEmpty: false,

            //Special Power Attorney
            spaName: '',
            spaNameEmpty: false,
            spaAge: '',
            spaAgeEmpty: false,
            spaResident: '',
            spaResidentEmpty: false,
            spaAttyName: '',
            spaAttyNameEmpty: false,
            spaAttyAge: '',
            spaAttyAgeEmpty: false,
            spaAttyResident: '',
            spaAttyResidentEmpty: false,

            //witness
            witnessDay: '',
            witnessDayEmpty: false,
            witnessMonth: '',
            witnessMonthEmpty: false,
            witnessYear: '',
            witnessYearEmpty: false,
            witnessAddress: '',
            witnessAddressEmpty: false,

        }
    },
    computed:{
            isdateEmpty(){
                return this.dateEmpty
            },
            isauthorizedToEmpty(){
                return this.authorizedToEmpty
            },
            isnameEmpty(){
                return this.nameEmpty
            },
            isaddressEmpty(){
                return this.addressEmpty
            },
            isbirthdayEmpty(){
                return this.birthdayEmpty
            },
            istinNumberEmpty(){
                return this.tinNumberEmpty
            },
            isrespectfulYoursEmpty(){
                return this.respectfulYoursEmpty
            },
            isspaNameEmpty(){
                return this.spaNameEmpty
            },
            isspaAgeEmpty(){
                return this.spaAgeEmpty
            },
            isspaResidentEmpty(){
                return this.spaResidentEmpty
            },
            isspaAttyNameEmpty(){
                return this.spaAttyNameEmpty
            },
            isspaAttyAgeEmpty(){
                return this.spaAttyAgeEmpty
            },
            isspaAttyResidentEmpty(){
                return this.spaAttyResidentEmpty
            },
            iswitnessDayEmpty(){
                return this.witnessDayEmpty
            },
            iswitnessMonthEmpty(){
                return this.witnessMonthEmpty
            },
            iswitnessYearEmpty(){
                return this.witnessYearEmpty
            },
            iswitnessAddressEmpty(){
                return this.witnessAddressEmpty
            }
    },

    methods: {
            checkdate(){
               return  this.dateEmpty =  this.date!==''?false:true
                // this.dateEmpty
            },
            checkauthorizedTo(){
                this.authorizedToEmpty = this.authorizedTo!==''?false:true
                return this.authorizedToEmpty
            },
            checkname(){
                this.nameEmpty = this.name!==''?false:true
                return this.nameEmpty
            },
            checkaddress(){
                this.addressEmpty = this.address!==''?false:true
                return this.addressEmpty
            },
            checkbirthday(){
                this.birthdayEmpty = this.birthday!==''?false:true
                return this.birthdayEmpty
            },
            checktinNumber(){
                this.tinNumberEmpty = this.tinNumber!==''?false:true
                return this.tinNumberEmpty
            },
            checkrespectfulYours(){
                this.respectfulYoursEmpty = this.respectfulYours!==''?false:true
                return this.respectfulYoursEmpty
            },
            checkspaName(){
                this.spaNameEmpty = this.spaName!==''?false:true
                return this.spaNameEmpty
            },
            checkspaAge(){
                this.spaAgeEmpty = this.spaAge!==''?false:true
                return this.spaAgeEmpty
            },
            checkspaResident(){
                this.spaResidentEmpty = this.spaResident!=''?false:true
                return this.spaResidentEmpty
            },
            checkspaAttyName(){
                this.spaAttyNameEmpty = this.spaAttyName!=''?false:true
                return this.spaAttyNameEmpty
            },
            checkspaAttyAge(){
                this.spaAttyAgeEmpty = this.spaAttyAge!=''?false:true
                return this.spaAttyAgeEmpty
            },
            checkspaAttyResident(){
                this.spaAttyResidentEmpty = this.spaAttyResident!=''?false:true
                return this.spaAttyResidentEmpty
            },
            checkwitnessDay(){
                this.witnessDayEmpty = this.witnessDay!==''?false:true
                return this.witnessDayEmpty
            },
            checkwitnessMonth(){
                this.witnessMonthEmpty = this.witnessMonth!==''?false:true
                return this.witnessMonthEmpty
            },
            checkwitnessYear(){
                this.witnessYearEmpty = this.witnessYear!==''?false:true
                return this.witnessYearEmpty
            },
            checkwitnessAddress(){
                this.witnessAddressEmpty = this.witnessAddress!==''?false:true
                return this.witnessAddressEmpty
            },

            checkAllEmpty(){
                this.checkdate()
                this.checkauthorizedTo()
                this.checkname()
                this.checkaddress()
                this.checkbirthday()
                this.checktinNumber()
                this.checkrespectfulYours()
                this.checkspaName()
                this.checkspaAge()
                this.checkspaResident()
                this.checkspaAttyName()
                this.checkspaAttyAge()
                this.checkspaAttyResident()
                this.checkwitnessDay()
                this.checkwitnessMonth()
                this.checkwitnessYear()
                this.checkwitnessAddress()
            },
            checkReadySubmit(){
                if(
                !this.checkdate() &&
                !this.checkauthorizedTo() && 
                !this.checkname() &&
                !this.checkaddress() &&
                !this.checkbirthday() &&
                !this.checktinNumber() &&
                !this.checkrespectfulYours() &&
                !this.checkspaName() &&
                !this.checkspaAge() &&
                !this.checkspaResident() &&
                !this.checkspaAttyName() &&
                !this.checkspaAttyAge() &&
                !this.checkspaAttyResident() &&
                !this.checkwitnessDay() &&
                !this.checkwitnessMonth() &&
                !this.checkwitnessYear() &&
                !this.checkwitnessAddress()
                ){
                    return true
                }else{
                    return false
                }
            },

            getAllData(){
                return {
                date: this.date,
                authorizedTo: this.authorizedTo,
                name: this.name,
                address: this.address,
                birthday: this.birthday,
                tinNumber: this.tinNumber,
                respectfulYours: this.respectfulYours,
                spaName: this.spaName,
                spaAge: this.spaAge,
                spaResident: this.spaResident,
                spaAttyName: this.spaAttyName,
                spaAttyAge: this.spaAttyAge,
                spaAttyResident: this.spaAttyResident,
                witnessDay: this.witnessDay,
                witnessMonth: this.witnessMonth,
                witnessYear: this.witnessYear,
                witnessAddress: this.witnessAddress,                  
                }
            },

            submit(){
                this.checkAllEmpty()
                const isGood = this.checkReadySubmit()
                if(isGood){
                    const payload = this.getAllData()
                    console.log(payload)

                    //perform try and catch here
                }else{
                    console.log('submit rejected')
                }
            }
    },

    watch:{
            date(){
                this.checkdate()
            },
            authorizedTo(){
                this.checkauthorizedTo()
            },
            name(){
                this.checkname()
            },
            address(){
                this.checkaddress()
            },
            birthday(){
                this.checkbirthday()
            },
            tinNumber(){
                this.checktinNumber()
            },
            respectfulYours(){
                this.checkrespectfulYours()
            },
            spaName(){
                this.checkspaName()
            },
            spaAge(){
                this.checkspaAge()
            },
            spaResident(){
                this.checkspaResident()
            },
            spaAttyName(){
                this.checkspaAttyName()
            },
            spaAttyAge(){
                this.checkspaAttyAge()
            },
            spaAttyResident(){
                this.checkspaAttyResident()
            },
            witnessDay(){
                this.checkwitnessDay()
            },
            witnessMonth(){
                this.checkwitnessMonth()
            },
            witnessYear(){
                this.checkwitnessYear()
            },
            witnessAddress(){
                this.checkwitnessAddress()
            },
    }
}
</script>


<style scoped>
.empty{
    outline: 1px solid red;
    background-color: rgba(255, 0, 0, 0.222);
    box-shadow: 0 0 1px 1px red;
}
input{
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
}
.c-container{
    width: 100%;
    margin: 1rem 0;
    font-size: clamp(.6rem, 1.2vw, 2rem);
}
.c-container .details{
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    padding-top: .5rem;
}
.c-container .details span{
    display: inline-block;
    width: 10vw;
    min-width: 60px;
}
.c-container .details input{
    margin-left: .5rem;
    min-width: 120px;
    width: 15%;
}

/*2ND FORM */
.spa-form{
    font-size: clamp(.6rem, 1.2vw, 2rem);
}.spa-form input{
    border: none;
    border-bottom: 1px solid black;
}
.spa-form .center{
     padding: 1rem;
}
.spa-form .center .signature-flex{
    display: flex;
    justify-content: space-between;
}
.spa-form .center .signature-flex section{
    width: 48%;
    display: flex;
    flex-direction: column;
}
.notary-message input{
    border: none;
    border-bottom: 1px solid black;   
}
.notary{
    margin-top: 1rem;
    font-size: clamp(.6rem, 1.2vw, 2rem);
}
.notary label{
    width: 8vw;
    min-width: 50px;
}
.notary input{
    border: none;
    border-bottom: 1px solid black;
}
</style>