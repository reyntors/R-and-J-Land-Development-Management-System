<template>
    <form-card id="reservation-agreement"  title="Reservation Agreement Lot Only">
        <progress-loading v-if="isLoading" type="torks" class="overRideLoading"></progress-loading>
    <div class="address">
        <h5>THE MANAGEMENT</h5>
        <p>{{ companyName }}</p>
        <p>{{ companyAddress }}</p>
    </div>

    <div class="gentlemen">
        <p>GentleMen:</p>
        <p>I <input v-model.trim="name" placeholder="enter name"> 
            hereby reserve for a parcel of land at <input v-model.trim="land_at" placeholder="enter here">
            , situated
           at <input v-model.trim="situated_at" placeholder="enter here">
           , Philippines with the following specifation
           and payment terms:</p>
    </div>

    <div class="table-cont mt-3"> 
        <table>
            <tr>
                <th>Phase</th>
                <th>Block</th>
                <th>Lot</th>
                <th>Area</th>
                <th>Price/sq.m.</th>
                <th>Contract Price</th>
                <th>Downpayment</th>
                <th>Balance</th>
            </tr>
            <tbody>
                <tr>
                    <td><input v-model.trim="phase_1"></td>
                    <td><input v-model.trim="block_1"></td>
                    <td><input v-model.trim="lot_1"></td>
                    <td><input v-model.trim="area_1"></td>
                    <td><input v-model.trim="price_per_sq_1"></td>
                    <td><input v-model.trim="contract_price_1"></td>
                    <td><input v-model.trim="downpayment_1"></td>
                    <td><input v-model.trim="balance_1"></td>
                </tr>
                <tr>
                    <td><input v-model.trim="phase_2"></td>
                    <td><input v-model.trim="block_2"></td>
                    <td><input v-model.trim="lot_2"></td>
                    <td><input v-model.trim="area_2"></td>
                    <td><input v-model.trim="price_per_sq_2"></td>
                    <td><input v-model.trim="contract_price_2"></td>
                    <td><input v-model.trim="downpayment_2"></td>
                    <td><input v-model.trim="balance_2"></td>
                </tr>
                <tr>
                    <td><input v-model.trim="phase_3"></td>
                    <td><input v-model.trim="block_3"></td>
                    <td><input v-model.trim="lot_3"></td>
                    <td><input v-model.trim="area_3"></td>
                    <td><input v-model.trim="price_per_sq_3"></td>
                    <td><input v-model.trim="contract_price_3"></td>
                    <td><input v-model.trim="downpayment_3"></td>
                    <td><input v-model.trim="balance_3"></td>
                </tr>
            </tbody>
        </table>        
    </div>

    <div class="mt-2 mb-2"> 
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="cashPayment" value="cash payment" v-model="typePayment">
            <label class="form-check-label" for="cashPayment">
                Cash Payment
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="installmentPayment" value="installment payment" v-model="typePayment">
            <label class="form-check-label" for="installmentPayment">
                Installment Payment
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="zeroDownPayment" value="zero down-payment" v-model="typePayment">
            <label class="form-check-label" for="zeroDownPayment">
                Zero Down Payment
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="other" value="others" v-model="typePayment">
            <label class="form-check-label" for="other">
               Other
            </label>
        </div>        
    </div>

    <!-- <p>The following sets out the basic terms upon which I/We would be prepared to purchase the
        property above-mentioned. The terms are not comprehensive and I/We expect that additional
        terms will be  incorporated into a formal agreement (Contract to Sell/ Deed of Absolute Sale).
    </p>

    <div class="terms-conditions">
        <p>I further acknowledge and agree to the following terms and conditions:</p>
        <ol>
            <li>
                That the Reservation Fee is <strong>NON-REFUNDABLE</strong> and <strong>NON-TRANSFERABLE.</strong>
            </li>
            <li>
                That any transfer or assignment of rights without the written approval of {{ company }} <strong>(VENDOR)</strong>
                is null and void, and shall cause for the cancellation of this Reservation Agreement and forfeiture of the Reservation Fee
                and other payments already made to the <strong>VENDOR</strong>
            </li>
            <li>
                That <strong> failure to submit documentary requirements within SIXTY (60) DAYS from date of reservation and/or failure to pay THREE (3)
                consecutive monthly installments or its value equivalent in principal, penalties and interest, over-due taxes and assessments levied
                on the property during the term of this contract, by virtue of the mere fact of non-submission and/or non-payment, shall render this
                Agreement automatically ineffective and deemed cancelled without prior notice or court action,</strong> and the subject unit shall be offered for
                sale by Alsons Development and Investment Corporation to other prospective buyers.
            </li>
            <li>
                That non-delivery of the signed copy of the Contract to Sell to the <strong>VENDOR</strong> shall not delay the commencement of monthly installments. However,
                should the buyer not sign and return the Contract within three (3) months from down payment, it is understood that the buyer is not interested to
                continue with the purchase and the <strong>VENDOR</strong>  may cause the cancellation of the contract. 
            </li>
            <li>
                That <strong>equity payments should be covered with Post Dated Checks payable to ALSONS DEVELOPMENT AND INVESTMENT
                CORPORATION or ALSONS DEV. A penalty of 2% per month, compounded monthly, shall be charged on overdue accounts.</strong>
            </li>
            <li>
                That the processing and transfer fees including but not limited to documentary stamps tax, transfer fees, registration fees, notarial fees and other
                expenses related to the transfer of title shall be paid by the buyer. Such fees shall be paid not later than 30 days from the scheduled date of full
                payment of account. <br><br>
                In case of non-payment of these fees and related charges as required, Alsons Development and Investment Corporation may execute a Unilateral
                Deed of Sale. This means that the corresponding taxes and fees shall already be due and payable to the government agencies, as scheduled.
                It is understood that all charges including interest and penalties arising from non-payment of processing fees shall be for the account of the
                buyer.
            </li>
            <li>
                That the name to indicate in the Contract to Sell and Deed of Absolute Sale shall be:
            </li>
        </ol>
        <div class="signature">
           
        </div>
        <p>
            Inasmuch as it is my responsiblity to withhold and remit to BIR the related taxes, for speedy facilitation, I hereby authorize Alsons Development and
            Investment Corporation to collect, file and pay the said taxes, transact, sign, and submit the required BIR Forms and related documents in accordance
            with the applicable rules and regulations of the BIR. I also acknowledge that I shall be liable for the penalties, interest and surcharge on the withholding
            tax because of my late payment of accounts due. And should Alsons Development and Investment Corporation advance such tax payments (whichmay include penalties, surcharge, interests and other fees that may be charged), I shall pay, in addition to the payments made by Alsons Development
            and Investment Corporation, an additional interest to be computed from the date of payment until the same is reimbursed by me, at 16% per annum
            on the actual payment made to the B.I.R.
        </p>
        <p>
            Further, I acknowledge that Alsons Development and Investment Corporation may cause for the cancellation of this Reservation Agreement without
            further notice and <strong>FORFEIT</strong> the Reservation Fee and whatever other payments I have made in case Alsons Development and Investment Corporation
            incur damages due to actions solely attributed to me.
        </p>
        <p>
            In case of increase and decrease in the actual area due to technical reasons, I hereby acknowledge and agree that such is subject to the corresponding
            adjustment in the contract price based on the same price/ sq.m. as hereby agreed.       
        </p>
        <p>
            In the event that property is found to be unavailable for sale to me due to technical reasons or due to a prior sale commitment or transactions with
            another party, the same having been offered to me by mistake or inadvertence, I may have the property exchanged with another parcel of land and/or
            house and lot at <input class="{disabled: true}" disabled>of equal value to be agreed by herein parties, or I may cancel this Reservation Agreement, and be
            refunded of all payments I have made, without interest.
        </p>
        <p>
            I understand that any representation or warranty made to me by the Broker and its Sales Person who handled this sale, which is not embodied herein,
            shall not be binding unless reduced into writing and confirmed by Alsons Development and Investment Corporation through its duly authorized
            representatives. This agreement states the entire understanding of both parties, hereto and any stipulation, condition, representation or warranty, oral
            or otherwise not contained in this Reservation Agreement or incorporated herein by reference shall not be binding and this Agreement shall not be
            considered as changed, modified, altered or in any way attended by acts of tolerance unless such changes, modification or amendments are made in
            writing signed by both the buyer and Alsons Development and Investment Corporation thru its duly authorized representative.
        </p>
        <p>
            All notices and correspondence of any nature sent to me/us at the address provided below shall bind me/us regardless of actual receipt, unless written
            notice of change of my/our address is received by Alsons Development and Investment Corporation.
        </p>
        <p>
            It is further agreed that the venue of any court action which may arise from this Agreement shall be in the proper courts of Davao City.
        </p>
        <p>
            IN WITNESS WHEREOF, the parties hereby affix their signature on <input class="{disabled: true}" disabled>at Davao City, Philippines.
        </p>
    </div>

    <div class="form pt-3">
        <article class="details">
            <div class="signatureOverPrinted">
                Name of Buyer (Signature over printed Name)
            </div>
            <div>
                <span class="label">
                    <span>Tel. No.</span>
                    <span>:</span>
                </span>
                <input :class="{disabled: true}" disabled>
            </div>
            <div>
                <span class="label">
                    <span>Address</span>
                    <span>:</span>
                </span>
                <input :class="{disabled: true}" disabled>
            </div>
            <div>
                <span class="label">
                    <span>Email Address</span>
                    <span>:</span>
                </span>
                <input :class="{disabled: true}" disabled>
            </div>
            <div>
                <span class="label">
                    <span>T.I.N.</span>
                    <span>:</span>
                </span>
                <input :class="{disabled: true}" disabled>
            </div>
            <div>
                <span class="label">
                    <span>Gov't issued ID</span>
                    <span>:</span>
                </span>
                <input  :class="{disabled: true}" disabled>
            </div>
            <div>
                <span class="label">
                    <span>Expiration Date</span>
                    <span>:</span>
                </span>
                <input :class="{disabled: true}" disabled>
            </div>
                          
        </article>
        <article class="conforme">
            <div>
                Conforme:
            </div>
            <br>
            <div>
                {{ company }}
            </div>
            <br><br>

            <div class="representative">
                Authorized Representative
            </div>
        </article>
        <article>
            <div class="maritalSig">
                With my Marital Consent(Signature over printed Name)
            </div>
        </article>
    </div>

    <div class="acknowledgement">
        <section class="republic">
        </section>
        
        <div class="notary-message">
            <p> 
                BEFORE ME, a Notary Public for Davao City, Philippines, personally appeared <input :class="{disabled: true}" disabled> who
                exhibited to me his/her <input  :class="{disabled: true}" disabled > issued in <input :class="{disabled: true}" disabled > on <input :class="{disabled: true}" disabled > known to me to be the same person
                who executed the forgoing instrument and who acknowledged to me that the same in his free and voluntary act and deed.
            </p>
            <p>
                IN WITNESS WHEREOF, I have hereunto affixed my signature and Notarial Seal in Davao City this <input :class="{disabled: true}" disabled > day of <input :class="{disabled: true}" disabled >, 20 <input :class="{disabled: true}" disabled >.
            </p>
            <p>
                This instrument is composed of two (2) pages, including this page on which this acknowledgement is written, all copies duly signed by the parties.
            </p>   
        </div>
        
        <section class="notary">
            Notary Public
            <div>
                <label>Doc. No.</label>
                <input v-model.trim="doc_no" :class="{disabled: true}" disabled>;
            </div>
            <div>
                <label>Page No.</label>
                <input v-model.trim="page_no" :class="{disabled: true}" disabled>;
            </div>
            <div>
                <label>Book No.</label>
                <input v-model.trim="book_no" :class="{disabled: true}" disabled>;
            </div>
            <div>
                <label>Series of</label>
                <input v-model.trim="series_no" :class="{disabled: true}" disabled>;
            </div>
        </section>
    </div> -->

    <section class="button-container">
       <submit-form-button class="mt-2" @click="submit">Submit</submit-form-button> 
    </section>
    
    </form-card>
</template>

<script>
import { toast } from 'vue3-toastify'
export default{
    props:['clientID'],
    data(){
        return{
            isLoading: false,

            name: '',
            land_at: '',
            situated_at: '',


            // // first: {
                phase_1:'',
                block_1:'',
                lot_1:'',
                area_1:'',
                price_per_sq_1:'',
                contract_price_1:'',
                downpayment_1:'', 
                balance_1: '',
            // // },
            // // second: {
                phase_2:'',
                block_2:'',
                lot_2:'',
                area_2:'',
                price_per_sq_2:'',
                contract_price_2:'',
                downpayment_2:'',
                balance_2: '' ,
            // // },
            // // third: {
                phase_3:'',
                block_3:'',
                lot_3:'',
                area_3:'',
                price_per_sq_3:'',
                contract_price_3:'',
                downpayment_3:'', 
                balance_3: '',
            // // },

            // checkboxes
            typePayment: '',
        }
    },
    methods: {
        async submit(){
            // console.log('submitting')
            var details1 = null
            var details2 = null
            var details3 = null
            if(this.phase_1 !== '' &&
                this.block_1 !== '' &&
                this.lot_1 !== '' &&
                this.area_1 !== '' &&
                this.price_per_sq_1 !== '' &&
                this.contract_price_1 !== '' &&
                this.downpayment_1 !== '' &&
                this.balance_1 !== ''){
                    details1 = {
                        phase_1: this.phase_1,
                        block_1: this.block_1,
                        lot_1: this.lot_1,
                        area_1: parseInt(this.area_1),
                        price_per_sq_1: parseInt(this.price_per_sq_1),
                        contract_price_1: parseInt(this.contract_price_1),
                        downpayment_1: parseInt(this.downpayment_1), 
                        balance_1: parseInt(this.balance_1),                   
                    }
            }

            if(this.phase_2!== '' &&
                this.block_2 !== '' &&
                this.lot_2 !== '' &&
                this.area_2 !== '' &&
                this.price_per_sq_2 !== '' &&
                this.contract_price_2 !== '' &&
                this.downpayment_2 !== '' &&
                this.balance_2 !== ''){
                    details2 = {
                        phase_2: this.phase_2,
                        block_2: this.block_2,
                        lot_2: this.lot_2,
                        area_2: parseInt(this.area_2),
                        price_per_sq_2: parseInt(this.price_per_sq_2),
                        contract_price_2: parseInt(this.contract_price_2),
                        downpayment_2: parseInt(this.downpayment_2), 
                        balance_2: parseInt(this.balance_2),                   
                    }
            }
            if(this.phase_3!== '' &&
                this.block_3 !== '' &&
                this.lot_3 !== '' &&
                this.area_3 !== '' &&
                this.price_per_sq_3 !== '' &&
                this.contract_price_3 !== '' &&
                this.downpayment_3 !== '' &&
                this.balance_3 !== ''){
                    details3 = {
                        phase_3: this.phase_3,
                        block_3: this.block_3,
                        lot_3: this.lot_3,
                        area_3: parseInt(this.area_3),
                        price_per_sq_3: parseInt(this.price_per_sq_3),
                        contract_price_3: parseInt(this.contract_price_3),
                        downpayment_3: parseInt(this.downpayment_3), 
                        balance_3: parseInt(this.balance_3),                   
                    }
            }
            
            var details = {}
            const object = {}
            if(details1){
                details = {...details, ...details1}
            }
            if(details2){
                details = {...details, ...details2}
            }
            if(details3){
                details = {...details, ...details3}
            }

            console.log(details)
            console.log(object)
            
            if( this.name !== '' && //ensure there is value
                this.land_at !== '' && //ensure there is value
                this.typePayment !== '' &&  //ensure there is value
                Object.keys(details).length>7){ //get the list of the keys of details object and measure if it is more than 7
                this.isLoading = true
                const body = { 
                        ...details,
                        name: this.name,
                        land_at: this.land_at,
                        typePayment: this.typePayment,
                        situated_at: this.situated_at,
                    
                }    
                console.log(body)     
                try{
                    const response = await this.$store.dispatch('client/submitReservationForm',{
                        userId: this.clientID,
                        body,
                    })

                    // download the FORM
                    console.log(response.pdfPath)
                    window.open(response.pdfPath);
                    toast.success(response.message)   
                }catch(error){
                    console.error(error)
                    toast.error(error)
                }
                this.isLoading = false       
            }else{
                toast.warning('Please check the informations',{autoClose: false})
            }

        }
    },
    
    computed: {
        companyName(){
        return this.$store.getters.companyName
        },
        companyAddress(){
        return this.$store.getters.companyAddress
        }
    },

    created(){
            this.$store.commit('client/resetTempArrays')
            const list = this.$store.getters['client/clientsGetter']            //get all the list of the legit clients
            const index = list.findIndex(item => item.userId === this.clientID) //get the full details of the current user
            // const userSubmmitedLetterOfIntent = list[index].letterOfIntent      //extraxt the letter of intent details of the user
            this.name = list[index].fullname        //get the full name of current client
            this.land_at = list[index].letterOfIntent.project   //get the project name
            this.situated_at = list[index].letterOfIntent.project //geth the project name
            const arrayOfLots = list[index].letterOfIntent.lotNumber    //get the array of lots the user want to reserve
            console.log(arrayOfLots)
            const emptyArray = []
            if(arrayOfLots.length>0){           //search the details of each lot in the arrayOfLots
                for(let i =0; i<arrayOfLots.length; i++){
                    this.$store.commit('subdivision/searchNow','lot'+arrayOfLots[i]) //search the lot details
                    let result = this.$store.getters['subdivision/searchedResultGetter'] //get the each search result
                    emptyArray.push(result)     //push the each details into the empty array
                }
            }

            if(emptyArray.length>0){
                for(let i=0; i<emptyArray.length; i++){
                    if(i == 0){
                        this.lot_1 = emptyArray[i].lotNumber;
                        this.area_1 = emptyArray[i].totalSqm;
                        this.price_per_sq_1 = emptyArray[i].amountperSquare;
                    }else if(i == 1){
                        this.lot_2 = emptyArray[i].lotNumber;
                        this.area_2 = emptyArray[i].totalSqm;
                        this.price_per_sq_2 = emptyArray[i].amountperSquare;
                    }else if(i==2){
                        this.lot_3 = emptyArray[i].lotNumber;
                        this.area_3 = emptyArray[i].totalSqm;
                        this.price_per_sq_3 = emptyArray[i].amountperSquare;
                    }else{
                        toast.error('something wrong initializing the lot details')
                    }
                }
            }

            console.log(emptyArray)
    }
}

</script>

<style scoped>
.overRideLoading{
    bottom: 0;
}
#reservation-agreement{
    /* width: 100%; */
    height: 95%;
    /* border: 1px solid black; */
    white-space: normal;
    position: relative;
}
th{
    text-align: center;
    white-space: nowrap;
    padding: 0 .5rem;
}
td{
    border-right: 1px solid black;
}
tr{
    border: 1px solid black;
}
.table-cont{
    overflow-x: auto;
    /* min-width: 800px; */
    border: 1px solid black;
}

.table-cont input{
    width: 100%;
    border: none;
    text-align: center;
    padding: 5px .5rem;
}
.table-cont input:focus{
    outline: none;
}

p{
    font-size: clamp(.6rem, 1.2vw, 2rem);
    margin: 0;
}

/*address */
.address{
    margin-top: 1rem;
}

/*gentlemen*/
.gentlemen{
    margin-top: 1rem;
}
.gentlemen input{
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
    margin-top: 5px;
    background-color: transparent;
}
.gentlemen input:focus{
    outline: none;
}

/*grid*/
.grid{
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 10% 10% 10% 10% 15% 15% 15% 15%;
    margin-top: 1rem;
    overflow: auto;
}
.grid-item{
    font-size: clamp(.5rem, 1vw, 1.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.grid-item header{
    border: .2px solid rgba(0, 0, 0, 0.54);
    min-height: 1.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
}
.grid-item input{
    text-align: center;
} 

/* checkbox */
.checkboxes{
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    margin-left: 2rem;
}
.checkboxes section{
    display: flex;
    gap: .5rem;
    align-items: center;
    font-size: clamp(.7rem, 1.5vw, 2rem);
}
.checkboxes input{
    border: none;
    border-bottom: 1px solid black;
}

/*terms and conditions*/
.terms-conditions{
    margin: 1rem 0;
}
.terms-conditions li{
    font-size: clamp(.6rem, 1.2vw, 2rem);
    margin-top: .5rem;
}
.terms-conditions .signature{
    width: 50%;
    margin: 2rem auto;
    border: 1px solid black;
}
.terms-conditions p{
    margin-bottom: .5rem;
}
.terms-conditions input{
    border: none;
    border-bottom: 1px solid black;
}

/* form */
.form{
    display: grid;
    grid-template-columns: 60% 40%;
    font-size: clamp(.6rem, 1.2vw, 2rem);
}
.form .signatureOverPrinted{
    border-top: 1px solid black;
}   
.form article{
    padding: 1rem;
    /* border: 1px solid black; */
    min-height: 150px;
}
.form .details div{
    display: flex;
}
.form .details div .label{
    height: 1rem;
    /* width: 30%; */
    min-width: 150px;
    display: flex;
    justify-content: space-between;
}
.form .details div input{
    box-sizing: border-box;
    margin-left: .1rem;
    width: 70%;
    border-bottom: 1px solid black;
}
.form .conforme{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.form .conforme .representative{
    border-top: 1px solid black;
    display: flex;
    justify-content: center;
}
.form article .maritalSig{
    margin-top: 2rem;
    border-top: 1px solid black;
    display: flex;
    justify-content: center;
}
@media screen and (max-width: 768px) {
    .form{
        grid-template-columns: 1fr;
    }
}
@media screen and (max-width: 350px){
    .form .details div .label{
        width: 50%;
    }
    form .details div input{
        width: 50%;
    }
}

/* NOTARY */
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
.disabled{
    border: none;
    outline: none;
}
.button-container{
    position: absolute;
    bottom: 0;
    margin-bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
}
</style>