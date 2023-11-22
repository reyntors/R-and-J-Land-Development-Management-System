<template>
<div class="bir-container">
    <the-header/>
    <form-card title="BIR Tin Request">
        <div class="c-container">
                <strong>{{ dateNow }}</strong>
            <br>    
            <br>
                <p>BUREAU OF INTERNAL REVENUE</p>
                <p>Digos City</p>
            <br>
                <p>This is to authorize <strong style="text-decoration: underline;">REAH JOAQUIN-SONZA</strong> to get my Tax Identification Number 
                    Verification Slip in my behalf.</p>
            <br>    
                <p>Please find below the details:</p>
                <div class="row g-2">
                    <div class="col-md">
                        <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="guest-bir-firstname" placeholder="" v-model="firstname">
                        <label for="guest-bir-firstname"><span>*</span> First Name:</label>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="guest-bir-secondname" placeholder="" v-model="middlename">
                        <label for="guest-bir-secondname"><span>*</span> Middle Name:</label>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="guest-bir-lastname" placeholder="" v-model="lastname">
                        <label for="guest-bir-lastname"><span>*</span> Last Name:</label>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                        <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="guest-bir-address" placeholder="project name" v-model="address">
                        <label for="guest-bir-address"><span>*</span> Address:</label>
                        </div>
                </div>
                <div class="col-md">
                        <div class="form-floating mb-2">
                        <input type="date" class="form-control" id="guest-bir-birthday" placeholder="project name" v-model="birthday">
                        <label for="guest-bir-birthday"><span>*</span> Birthday:</label>
                        </div>
                </div>
                <div class="col-md">
                        <div class="form-floating mb-2">
                        <input type="number" class="form-control" id="guest-bir-tinNo" placeholder="project name" v-model="tinNumber">
                        <label for="guest-bir-tinNo"><span>*</span> TIN Number:</label>
                        </div>
                </div>

                <!-- <div class="details">
                    
                    <section>
                        <span>Name</span>:<input :class="{empty:isnameEmpty}" v-model.trim="name"></section>
                    <section>
                        <span>Address</span>:<input :class="{empty:isaddressEmpty}" v-model.trim="address"></section>
                    <section>
                        <span>Birthday</span>:<input type="date" :class="{empty:isbirthdayEmpty}" v-model.trim="birthday"></section>
                    <section>
                        <span>TIN Number</span>:<input :class="{empty:istinNumberEmpty}" v-model.trim="tinNumber"></section>  
                </div> -->
            <br>
                <p>Thank you.</p>
            <!-- <br> -->
                <p>Respectfully Yours,</p>
            <!-- <br> -->
            <div style="display: inline-block;"> 
               <input v-model.trim="respectfulYours" class="yours">
                <p style="text-align: center;">Printed name</p> 
            </div>
                
        </div>
        </form-card>

    <submit-form-button @click="submit">Submit</submit-form-button>

    <div class="shade" v-if="isLoading"></div>
    <progress-loading type="torks" v-if="isLoading"/>
</div>
<the-footer/>
</template>

<script>

import { toast } from 'vue3-toastify'
import ProgressLoading from '../Reusable/LoadingScreens/ProgressLoading.vue'
export default {
  components: { ProgressLoading },
    data(){
        return{
            dateNow: null,

            firstname:null,
            middlename: null,
            lastname: null,
            firstnameEmpty: false,
            middlenameEmpty: false,
            lastnameEmpty: false,

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


            isLoading: false,

        }
    },
    methods: {
            checkFirstname(){
                console.log('checking first name')
                this.firstnameEmpty = this.firstname!==''?false:true
                return this.firstnameEmpty
            },
            checkMiddlename(){
                console.log('checking middle name')
                this.middlenameEmpty = this.middlename!==''?false:true
                return this.middlenameEmpty
            },
            checkLastname(){
                console.log('checking last name')
                this.lastnameEmpty = this.lastname!==''?false:true
                return this.lastnameEmpty
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

            checkAllEmpty(){
                // this.checkname()
                this.checkFirstname()
                this.checkMiddlename()
                this.checkLastname()
                this.checkaddress()
                this.checkbirthday()
                this.checktinNumber()
                this.checkrespectfulYours()
            },
            checkReadySubmit(){
                if(
                !this.checkFirstname() &&
                !this.checkMiddlename() &&
                !this.checkLastname() &&
                !this.checkaddress() &&
                !this.checkbirthday() &&
                !this.checktinNumber() &&
                !this.checkrespectfulYours()
                ){
                    return true
                }else{
                    return false
                }
            },

            getAllData(){
                return {
                date: this.dateNow,
                firstname: this.firstname,
                middlename: this.middlename, 
                lastname: this.lastname,
                address: this.address,
                birthday: this.birthday,
                tinNumber: String(this.tinNumber),
                respectfulYours: this.respectfulYours,                  
                }
            },

            async submit(){
                this.checkAllEmpty()
                const isGood = this.checkReadySubmit()
                if(isGood){
                    this.isLoading = true
                    const payload = this.getAllData()
                    console.log(payload)
                    try{
                        const response = await this.$store.dispatch('form/submitBirTinRequest',payload)
                        console.log(response)
                        toast.success(response, {autoClose: 1000,}); 
                        await new Promise(resolve => setTimeout(resolve, 2000)) 
                        this.$router.replace('/guest-forms')       
                    }catch(error){
                        toast.error(error, {autoClose:1000})
                    }
                    await new Promise(resolve => setTimeout(resolve, 2000))
                    this.isLoading = false
                }else{
                    toast.warning('Please check your informations')
                }
            }
    },
    created(){
        const dateNow = new Date();
        const dateString = dateNow.toISOString().split('T')[0];
        this.dateNow = dateString
    }
}
</script>

<style scoped>
.yours{
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
    padding: .5rem;
}
.yours:focus{
    outline: none;
}
.shade{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 2;
}
.bir-container{
    position: relative;
    padding-bottom: 2rem;
}
</style>
<!-- 
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
</style> -->