<template>
    <h5>ATTORNEY-IN-FACT (for buyer's abroad) Pls attach notarized Special Power of Attorney (SPA)</h5>
<!-- name -->
    <div class="row g-2">
        <div class="col-md">
          <div class="form-floating mb-2">
            <input type="text" class="form-control" id="spa-firstname" placeholder="" v-model="spaFirstname">
            <label for="spa-firstname"> First Name:</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating mb-2">
            <input type="text" class="form-control" id="spa-middlename" placeholder="" v-model="spaMiddlename">
            <label for="spa-middlename"> Middle Name:</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating mb-2">
            <input type="text" class="form-control" id="spa-lastname" placeholder="" v-model="spaLastname">
            <label for="spa-lastname"> Last Name:</label>
          </div>
        </div>
    </div> 
<!-- contact -->
    <div class="row g-2 mt-1 mb-2">
        <div class="col-md">
          <div class="form-floating mb-2">
            <input type="text" class="form-control" id="spa-MobileNo" placeholder="" v-model="spaMobileNo">
            <label for="spa-MobileNo"> Mobile No:</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating mb-2">
            <input type="text" class="form-control" id="spa-MessengerAcc" placeholder="" v-model="spaMessengerAcc">
            <label for="spa-MessengerAcc"> Messenger Account:</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating mb-2">
            <input type="text" class="form-control" id="spa-emailAddress" placeholder="" v-model="spaEmailAddress">
            <label for="spa-emailAddress"> Email Address:</label>
          </div>
        </div>
    </div> 
<!-- spa -->
    <div class="form-floating mb-2">
        <input type="text" class="form-control" id="spa-postalAddress" placeholder="" v-model="spaPostalAddress">
        <label for="spa-postalAddress"> SPA's Postal Address:</label>
    </div>
<!-- civil status,sex -->
    <div class="row"> 
        <div class="col-md mt-0">
        <p>Civil Status:</p>
        <div class="form-check">
            <input class="form-check-input" type="radio" id="spa-single" value="single" v-model="spaCivilStatus">
            <label class="form-check-label" for="spa-single">
            Single
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" id="spa-widow-widower" value="widow/widower" v-model="spaCivilStatus">
            <label class="form-check-label" for="spa-widow-widower">
            Widower/Widow
            </label>
        </div>               
        <div class="form-check">
            <input class="form-check-input" type="radio" id="spa-married" value="married" v-model="spaCivilStatus">
            <label class="form-check-label" for="spa-married">
            Married
            </label>
        </div>               
        </div>      
        <div class="col-md mt-0">
        <p>Sex:</p>
        <div class="form-check">
            <input class="form-check-input" type="radio" id="spa-male" value="male" v-model="spaSex">
            <label class="form-check-label" for="spa-male">
            Male
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" id="spa-female" value="female" v-model="spaSex">
            <label class="form-check-label" for="spa-female">
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
                    <input type="text" class="form-control" id="spa-citizenshipt" placeholder="" v-model="spaCitizenship">
                    <label for="spa-citizenshipt">Citizenship:</label>
                </div>                
            </div>
            <div class="col-md">
                <div class="form-floating mb-2">
                    <input type="text" class="form-control" id="spa-TIN" placeholder="" v-model="spaTIN">
                    <label for="spa-TIN">TIN No:</label>
                </div>
            </div>
        </div>
        </div>
    </div>
<!-- realtionship,date of birth -->
    <div class="row g-2">
        <div class="col-md">
            <div class="form-floating mb-2">
                <input type="text" class="form-control" id="spa-realtionship-buyer" placeholder="" v-model="spaRelationToBuyer">
                <label for="spa-realtionship-buyer">Relationship to Buyer:</label>
            </div>
        </div>
        <div class="col-md">
            <div class="form-floating mb-2">
                <input type="date" class="form-control" id="spa-dateBirth" placeholder="" v-model="spaDateBirth">
                <label for="spa-dateBirth">Date of Birth:</label>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    emits:['passData'],
    data(){
        return{
            spaFirstname: null,
            spaMiddlename: null,
            spaLastname: null,
            spaMobileNo: null,
            spaMessengerAcc: null,
            spaEmailAddress: null,
            spaPostalAddress: null,
            spaCivilStatus: null,
            spaSex: null,
            spaCitizenship: null,
            spaTIN: null,
            spaRelationToBuyer: null,
            spaDateBirth: null,
        }
    },
    methods:{
        passData(){
            this.$emit('passData',{
                spaFirstname:this.spaFirstname,
                spaMiddlename:this.spaMiddlename,
                spaLastname:this.spaLastname,
                spaMobileNo:this.spaMobileNo,
                spaMessengerAcc:this.spaMessengerAcc,
                spaEmailAddress:this.spaEmailAddress,
                spaPostalAddress:this.spaPostalAddress,
                spaCivilStatus:this.spaCivilStatus,
                spaSex:this.spaSex,
                spaCitizenship:this.spaCitizenship,
                spaTIN:this.spaTIN,
                spaRelationToBuyer:this.spaRelationToBuyer,
                spaDateBirth:this.spaDateBirth,
            })
        }
    },
    watch:{
        spaFirstname(){this.passData()},
        spaMiddlename(){this.passData()},
        spaLastname(){this.passData()},
        spaMobileNo(){this.passData()},
        spaMessengerAcc(){this.passData()},
        spaEmailAddress(){this.passData()},
        spaPostalAddress(){this.passData()},
        spaCivilStatus(){this.passData()},
        spaSex(){this.passData()},
        spaCitizenship(){this.passData()},
        spaTIN(){this.passData()},
        spaRelationToBuyer(){this.passData()},
        spaDateBirth(){this.passData()},
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

