<template>

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
</template>

<script>
export default {
    data(){
        return {
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
        }
    },
    methods:{
        checkbusinessName(){return this.businessNameEmpty = this.businessName!==""?false:true},
        checkbusinessAddress(){return this.businessAddressEmpty = this.businessAddress!==""?false:true},
        checkbusinessPhoneNo(){return this.businessPhoneNoEmpty = this.businessPhoneNo!==""?false:true},
        checkbusinessfaxNo(){return this.businessfaxNoEmpty = this.businessfaxNo!==""?false:true},
        checkbusinessPosition(){return this.businessPositionEmpty = this.businessPosition!==""?false:true},
        checkbusinessProfession(){return this.businessProfessionEmpty = this.businessProfession!==""?false:true},
        checkbusinessEmploymentStatus(){return this.businessEmploymentStatusEmpty = this.businessEmploymentStatus!==""?false:true},

        //////////////////////////////////////////////////////////////
        passData(){
            const payload = {
                businessName: this.businessName,
                businessAddress: this.businessAddress,
                businessPhoneNo: this.businessPhoneNo,
                businessfaxNo: this.businessfaxNo,
                businessPosition: this.businessPosition,
                businessProfession: this.businessProfession,
                businessEmploymentStatus: this.businessEmploymentStatus,
            }
            this.$emit('pass-data',payload)
        }
        
    },
    computed:{
        isbusinessNameEmpty(){return this.businessNameEmpty},
        isbusinessAddressEmpty(){return this.businessAddressEmpty},
        isbusinessPhoneNoEmpty(){return this.businessPhoneNoEmpty},
        isbusinessfaxNoEmpty(){return this.businessfaxNoEmpty},
        isbusinessPositionEmpty(){return this.businessPositionEmpty},
        isbusinessProfessionEmpty(){return this.businessProfessionEmpty},
        isbusinessEmploymentStatusEmpty(){return this.businessEmploymentStatusEmpty},
    },
    watch:{
        businessName(){
            this.checkbusinessName() 
            this.passData()
        },
        businessAddress(){
            this.checkbusinessAddress()
            this.passData()
        },
        businessPhoneNo(){
            this.checkbusinessPhoneNo()
            this.passData()
        },
        businessfaxNo(){
            this.checkbusinessfaxNo()
            this.passData()
        },
        businessPosition(){
            this.checkbusinessPosition()
            this.passData()
        },
        businessProfession(){
            this.checkbusinessProfession()
            this.passData()
        },
        businessEmploymentStatus(){
            this.checkbusinessEmploymentStatus()
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
</style>