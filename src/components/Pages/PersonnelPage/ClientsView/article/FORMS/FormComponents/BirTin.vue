<template>
    <form-card>
    <div class="navigation">
        <font-awesome-icon class="icon" icon="fa-solid fa-arrow-left-long" size="2x" @click="back"/> 
    </div>
    
    <h4 style="text-align: center">BIR Tin Request</h4>

    <div class="c-container">
            <input style="display: block; border: none; border-bottom: 1px solid black;" v-model="date" readonly>
        <br>    
            <p>BUREAU OF INTERNAL REVENUE</p>
            <p>Davao City</p>
        <br>
            <p>This is to authorize Mr./Mrs. <input  style="border: none; border-bottom: 1px solid black;" v-model="authorizedTo" readonly> to get my Tax Identification Number 
                Verification Slip (TIN Verification Slip) in my behalf.</p>
            <p>Please find below the details:</p>
            
            <div class="details">
                <section>
                    <span>Name</span>:<input v-model="name" readonly></section>
                <section>
                    <span>Address</span>:<input v-model="address" readonly></section>
                <section>
                    <span>Birthday</span>:<input v-model="birthday" readonly></section>
                <section>
                    <span>TIN Number</span>:<input v-model="tinNumber" readonly></section>  
            </div>
        <br>
            <p>Thank you.</p>
        <br>
            <p>Respectful Yours,</p>
        <br>
            <input style="border: none; border-bottom: 1px solid black;" v-model="respectfulYours" readonly>
    </div>
    </form-card>

    <form-card title="SPECIAL POWER OF ATTORNEY">
    <div class="spa-form">
    <strong>KNOW ALL, MEN BY THESE PRESENTS:</strong>
        
        <div class="center">
            <p>
                That I,<input v-model="spaName" readonly> single/married, of legal age, <input v-model="spaAge" readonly> and resident of <input v-model="spaResident" readonly>, do hereby appoint, name consittute and appoint,
                <input v-model="spaAttyName" readonly>, single/married of legal age, <input v-model="spaAttyAge" readonly> and a resident of <input v-model="spaAttyResident" readonly>. tp be my true and lawfule <strong>Attorney-In-Face</strong>,
                for me and in my name, to do and perfrom any or all of the following act or acts, to wit:
            </p>
            <br>
            <p> 1.  To secure Tax Identification Number (TIN) Verification Slip from the Bureau of Internal Revenue (BIR).</p>
            <br>
            <p><strong>IN WITNESS OF,</strong> we have hereunto set our hands this <input v-model="witnessMonth" readonly> day of <input v-model="witnessDay" readonly>, 20<input v-model="witnessYear" readonly> at <input v-model="witnessAddress" readonly>, Philippines.</p>
            <br>
            <div class="signature-flex">
                <section>
                    <strong style="display: block;">GRANTOR</strong>
                    <br>
                    <input style="display: block;" readonly>
                    <p>CEI:</p>
                </section>
                <section>
                    <strong style="display: block;">GRANTEE</strong>
                    <br>
                    <input style="display: block;" readonly>
                    <p>CEI:</p>
                </section>
            </div>
        </div>
    <p>
        SUBSCRIBED AND SWORN to before me this <input v-model="witnessMonth" readonly> day of <input v-model="witnessDay" readonly> , 20<input v-model="witnessYear" readonly> at Davao City, Philippines
        Affian exhibit to be their Competent Evidence of Identities (CEI) written below their names.
    </p>
    <section class="notary">
            Notary Public
            <div>
                <label>Doc. No.</label>
                <input readonly>;
            </div>
            <div>
                <label>Page No.</label>
                <input readonly>;
            </div>
            <div>
                <label>Book No.</label>
                <input readonly>;
            </div>
            <div>
                <label>Series of</label>
                <input readonly>;
            </div>
        </section>
    </div>

        <span style="display: flex">
            <submit-form-button @click="submit" :href="downloadURL" :download="downloadName">Download</submit-form-button>
        </span>

    </form-card>
</template>

<script>
import SubmitFormButton from '@/components/Reusable/SubmitFormButton.vue'
export default {
    props: ['clientObj', 'wholeObject'],
    components: {SubmitFormButton},
    data(){
        return{
            editable: false,

            date: this.clientObj.date,
            authorizedTo: this.clientObj.authorizedTo,
            name: this.clientObj.name,
            address: this.clientObj.address,
            birthday: this.clientObj.birthday,
            tinNumber: this.clientObj.tinNumber,
            respectfulYours: this.clientObj.respectfulYours,
            spaName: this.clientObj.spaName,
            spaAge: this.clientObj.spaAge,
            spaResident: this.clientObj.spaResident,
            spaAttyName: this.clientObj.spaAttyName,
            spaAttyAge: this.clientObj.spaAttyAge,
            spaAttyResident: this.clientObj.spaAttyResident,
            witnessDay: this.clientObj.witnessDay,
            witnessMonth: this.clientObj.witnessMonth,
            witnessYear: this.clientObj.witnessYear,
            witnessAddress: this.clientObj.witnessAddress,

            downloadURL: this.wholeObject.BirTinRequestURL,
            downloadName: this.wholeObject.BirTinRequestFilename

        }
    },
    methods: {
        toggleEdit(){
            console.log(this.clientObj)
            this.editable = !this.editable
        },
        back(){
            this.$emit('back-click')
        }
    },
    computed: {
        //navigation
        editableComputed(){
            return this.editable
        },
        editBtnText(){
            if(this.editable === true){
                return 'Cancel'
            }else{
                return 'Edit'
            }
        },
    },

    mounted(){
        console.log(this.wholeObject)
    }
}
</script>


<style scoped>

  /* NAVIGATION */
  input{
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
  }
  input:focus{
    outline: none;
  }
  .navigation{
    display: flex;
    justify-content: space-between;
  }
  .navigation button{
    background-color: #31A72A;
    padding: .2rem 1rem;
    font-weight: 600;
    box-shadow: 0 0 1px 1px rgb(0, 0, 0);
    cursor: pointer;
    margin: 5px 0;
    color: white;
    border: none;
  }
  .navigation button:hover{
    background-color: #30a72a8e;
    }
    .navigation button:active{
    color: black;
    }
  .navigation .icon{
    cursor: pointer;
  }
  .navigation .icon:hover{
    color: blue;
    scale: 1.2;
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