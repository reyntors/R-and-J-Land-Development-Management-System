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

    <section class="button-container">
       <submit-form-button class="mt-2" @click="submit">Submit</submit-form-button> 
    </section>
    
    </form-card>
</template>

<script>
import { toast } from 'vue3-toastify'
export default{
    props:['clientID'],
    emits:['gotoPaymentDetails'],
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
                    alert('Downloading Reservation Form file directly')
                    window.open(response.pdfPath);
                    toast.success(response.message)   
                    this.$emit('gotoPaymentDetails')    //redirect to payment details
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
                        this.contract_price_1 = this.area_1 * this.price_per_sq_1
                    }else if(i == 1){
                        this.lot_2 = emptyArray[i].lotNumber;
                        this.area_2 = emptyArray[i].totalSqm;
                        this.price_per_sq_2 = emptyArray[i].amountperSquare;
                        this.contract_price_2 = this.area_2 * this.price_per_sq_2
                    }else if(i==2){
                        this.lot_3 = emptyArray[i].lotNumber;
                        this.area_3 = emptyArray[i].totalSqm;
                        this.price_per_sq_3 = emptyArray[i].amountperSquare;
                        this.contract_price_3 = this.area_3 * this.price_per_sq_3
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
    /* font-size: clamp(.6rem, 1.2vw, 2rem); */
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
    /* font-size: clamp(.5rem, 1vw, 1.5rem); */
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
    /* font-size: clamp(.7rem, 1.5vw, 2rem); */
}
.checkboxes input{
    border: none;
    border-bottom: 1px solid black;
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
</style>