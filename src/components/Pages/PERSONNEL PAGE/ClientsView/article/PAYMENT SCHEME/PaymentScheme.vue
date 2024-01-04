<template>
    <form-card id="paymentScheme"  title="Approved Payment Scheme">
        <progress-loading v-if="isLoading" type="torks" class="overRideLoading"></progress-loading>

    <div class="mb-2 row">
        <div class="col-md"> 
            <label for="buyer name" class=" col-form-label">Buyer's Name:</label>
            <input type="text" class="form-control" id="buyer name" v-model="name">
        </div>
        <div class="col-md"> 
            <label for="date" class=" col-form-label">Date:</label>
            <input type="date" class="form-control" id="date" v-model="date" disabled>
        </div>
    </div>

    <div class="mb-2 row">    
        <label class="col-form-label">Account Details:</label>
        <div class="col-md">   
            <div class="form-floating mb-1">
                <input type="text" class="form-control" id="block no" placeholder="" v-model="blockNo">
                <label for="block no">Block No.:</label>
            </div>
        </div>
        <div class="col-md">   
            <div class="form-floating mb-1">
                <input type="text" class="form-control" id="lot no" placeholder="" v-model="lotNo">
                <label for="lot no">Lot No.:</label>
            </div>
        </div>
        <div class="col-md">   
            <div class="form-floating mb-1">
                <input type="text" class="form-control" id="phase no" placeholder="" v-model="phaseNo">
                <label for="phase no">Phase No.:</label>
            </div>
        </div>
    </div>

    <div class="mb-2 row">    
        <label class=" col-form-label">Reservation Fee:</label>
        <div class="col-md">   
            <div class="form-floating mb-1">
                <input type="text" class="form-control" id="Amount" placeholder="" v-model="amount">
                <label for="Amount">Amount</label>
            </div>
        </div>
        <div class="col-md">   
            <div class="form-floating mb-1">
                <input type="date" class="form-control" id="Date Paid" placeholder="" v-model="datePaid">
                <label for="Date Paid">Date Paid</label>
            </div>
        </div>
    </div>

    <div class="mb-3">
        <div class="form-check form-switch">
            <input class="form-check-input" type="radio" name="cash" id="cash" value="cash" v-model="typePayment">
            <label class="form-check-label" for="cash">CASH</label>
        </div>
        <div class="form-check form-switch">
            <input class="form-check-input" type="radio" name="installment payment" id="installment payment" value="installment" v-model="typePayment">
            <label class="form-check-label" for="installment payment">INSTALLMENT PAYMENT</label>
        </div>
        <div class="form-check form-switch">
            <input class="form-check-input" type="radio" name="other terms" id="other terms" value="others" v-model="typePayment">
            <label class="form-check-label" for="other terms">OTHER TERMS</label>
        </div>
    </div>

    <div class="cash" v-if="typePayment === 'cash'"> 
        <h5 class="fw-bold mb-1">CASH</h5> 
        <div class="cash-container">   
            <div> 
                <p>With <input class="input-custom" v-model="cash.contractPriceDiscountCash">% Discount on the Total Contract Price</p>
                <p>Total amound due, net of Reservation Fee and Discount Due date to avail of <input class="input-custom" v-model="cash.discountAvailCash">% Discount</p>            
            </div>
            <div class="form-floating mb-1">
                <input type="text" class="form-control" id="cash-total" placeholder="" v-model="cash.totalCash">
                <label for="cash-total">Total</label>
            </div>
        </div>        
    </div> 

    <div class="installment" v-if="typePayment === 'installment'"> 
        <h5 class="fw-bold mb-1">INSTALLMENT PAYMENT</h5> 

        <ol class="list">
            <li class="mb-3 row">
                <div class="col-md"> 
                    <p>Total Downpayment is <input class="input-custom" v-model="installment.PercentageDonwpayment">% of the Contract Price</p>
                    <p>Downpayment, net of Reservation Fee and Discount Due date to avail of <input class="input-custom" v-model="installment.DiscountOnDownpayment">% Discount on the Down payment</p>            
                </div>
                <!-- <div class="form-floating mb-1">
                    <input type="text" class="form-control" id="isntallment-a" placeholder="" v-model="installment.TotalDownpayment">
                    <label for="isntallment-a">Total</label>
                </div> -->
                <div class="col-md"> 
                    <div class="input-group mb-1">
                        <span class="input-group-text">P</span>
                        <input type="text" class="form-control" v-model="installment.TotalDownpayment1">
                    </div>
                    <div class="input-group mb-1">
                        <span class="input-group-text">P</span>
                        <input type="text" class="form-control" v-model="installment.TotalDownpayment2">
                    </div>                    
                </div>

            </li>
            <li class="mb-3 row">
                <div class="col-md"> 
                    <p>Balance for amortization, net of Reservation Fee, Downpayment and Discount and DP</p>          
                </div>
                <div class="col-md"> 
                    <div class="input-group mb-1">
                        <span class="input-group-text">P</span>
                        <input type="text" class="form-control" v-model="installment.TotalbalanceOfAmortization1">
                    </div>
                    <div class="input-group mb-1">
                        <span class="input-group-text">P</span>
                        <input type="text" class="form-control" v-model="installment.TotalbalanceOfAmortization2">
                    </div>                    
                </div>
            </li>
        </ol>

        <ul>
            <li class="mb-3">
                <p>Monthly Amrotization</p>
                <p>Amount Due</p>
                <div class="row g2">
                    <div class="col-md"> 
                        <div class="input-group mb-1">
                            <span class="input-group-text">Month</span>
                            <input type="text" class="form-control" v-model="installment.DueMonth1">
                            <span class="input-group-text">P</span>
                            <input type="text" class="form-control" v-model="installment.AmountDue1">
                        </div>
                    </div>
                    <div class="col-md"> 
                        <div class="input-group mb-1">
                            <span class="input-group-text">Month</span>
                            <input type="text" class="form-control" v-model="installment.DueMonth2">
                            <span class="input-group-text">P</span>
                            <input type="text" class="form-control" v-model="installment.AmountDue2">
                        </div>
                    </div>
                </div>
            </li>

            <li class="mb-4">
                <p>First monthly amortization is due on <input class="input-custom2" v-model="installment.FirstDueDate"> and every <input class="input-custom2" v-model="installment.EveryDate">thereafter.</p>
            </li>

            <li>
                TERM: <input class="input-custom2" v-model="installment.Term">
            </li>
 
        </ul>
    </div>

    <div class="others" v-if="typePayment === 'others'"> 
        <h5 class="fw-bold mb-1">OTHER TERMS</h5> 

        <ul>
            <li class="mb-2 row">
                <div class="col-md">
                    <label>Total amount net of Reservation Fee</label>
                </div>
                <div class="col-md">
                    <div class="input-group mb-1">
                        <span class="input-group-text">P</span>
                        <input type="text" class="form-control" v-model="others.totalReservationFee">
                    </div>
                </div>
            </li>
            <li class="mb-3">
                <p>Balance payable in <input class="input-custom" v-model="others.balancePayableIn"> equal monthly installments</p>
            </li>
            <li class="mb-3">
                <p>Monthly Amrotization</p>
                <p>Amount Due</p>
                <div class="row g2">
                    <div class="col-md"> 
                        <div class="input-group mb-1">
                            <span class="input-group-text">Month</span>
                            <input type="text" class="form-control" v-model="others.DueMonth1">
                            <span class="input-group-text">P</span>
                            <input type="text" class="form-control" v-model="others.AmountDue1">
                        </div>
                    </div>
                    <div class="col-md"> 
                        <div class="input-group mb-1">
                            <span class="input-group-text">Month</span>
                            <input type="text" class="form-control" v-model="others.DueMonth2">
                            <span class="input-group-text">P</span>
                            <input type="text" class="form-control" v-model="others.AmountDue2">
                        </div>
                    </div>
                </div>
            </li>

            <li class="mb-4">
                <p>First monthly amortization is due on <input class="input-custom2" v-model="others.FirstDueDate"> and every <input class="input-custom2" v-model="others.EveryDate">thereafter.</p>
            </li>

            <li>
                TERM: <input class="input-custom2" v-model="others.Term">
            </li>
 
        </ul>
    </div>



    <section class="button-container">
       <submit-form-button class="mt-2" @click="submit">Submit</submit-form-button> 
    </section>
    
    </form-card>
</template>

<script>
import { toast } from 'vue3-toastify'
export default{
    props: ['clientID'],
    data(){
        return{
            isLoading : false,
            typePayment : null,
        
            date: null,
            name: '',
            blockNo: '',
            phaseNo: '',
            lotNo: '',
            amount: '',
            datePaid: '',

            //cash type Payment
            cash: {
                contractPriceDiscountCash: '',
                discountAvailCash: '',
                totalCash: '',                
            },
            cashCopy: {
                contractPriceDiscountCash: '',
                discountAvailCash: '',
                totalCash: '',                
            },

            //isntallment type Payment
            installment: {
                PercentageDonwpayment: '',
                DiscountOnDownpayment: '',
                TotalDownpayment1: '',
                TotalDownpayment2: '',
                TotalbalanceOfAmortization1: '',
                TotalbalanceOfAmortization2: '',
                DueMonth1: '',
                DueMonth2: '',
                AmountDue1: '',
                AmountDue2: '',
                FirstDueDate: '',
                EveryDate: '',
                Term: '',                
            },
            installmentCopy: {
                PercentageDonwpayment: '',
                DiscountOnDownpayment: '',
                TotalDownpayment1: '',
                TotalDownpayment2: '',
                TotalbalanceOfAmortization1: '',
                TotalbalanceOfAmortization2: '',
                DueMonth1: '',
                DueMonth2: '',
                AmountDue1: '',
                AmountDue2: '',
                FirstDueDate: '',
                EveryDate: '',
                Term: '',                
            },

            //other terms
            others: {
                totalReservationFee: '',
                balancePayableIn: '',
                DueMonth1: '',
                DueMonth2: '',
                AmountDue1: '',
                AmountDue2: '',
                FirstDueDate: '',
                EveryDate: '',
                Term: '',                
            },
            othersCopy: {
                totalReservationFee: '',
                balancePayableIn: '',
                DueMonth1: '',
                DueMonth2: '',
                AmountDue1: '',
                AmountDue2: '',
                FirstDueDate: '',
                EveryDate: '',
                Term: '',                
            }

        }
    },
    methods: {
        getData(){
            return {
                userId: this.clientID,
                typePayment: this.typePayment,
                name: this.name,
                blockNo: this.blockNo,
                phaseNo: this.phaseNo,
                lotNo: this.lotNo,
                amount: this.amount,
                datePaid: this.datePaid,
                cash: this.cash,
                installment: this.installment,
                others: this.others            
            }
        },
        nullChecker(details){          //check if the all details has null or empty values
            // console.log(details)
            if(
                this.name === '' ||
                this.blockNo === '' ||
                this.phaseNo === '' ||
                this.lotNo === '' ||
                this.amount === '' ||
                this.datePaid === '' ||
                this.typePayment === null
                ){
                    return false
            }

            // console.log('continue')
            function checkValues(object){       //create function to test the object values if null or not
                // console.log(object)
                //get the list of keys
                const listKeys = Object.keys(object)
                // console.log(listKeys.length )
                if(listKeys.length === 0){
                    return false
                }else{
                    let isObjectValueNull  = false;
                    for(let i = 0; i<listKeys.length; i++){     //loop the object and see if the values are null or empty
                        if(object[listKeys[i]] === '' || object[listKeys[i]] === null){     //test if the value is null
                            isObjectValueNull  = true        
                            break;                  //stop the function if there is one value its null and the fucntion will return false
                        }
                    }

                    if(isObjectValueNull){
                        return false            //return false if the object value has null
                    }else{  
                        return true             //return true if the object value is complete
                    }                    
                }


            }

            if(this.typePayment ===  'cash'){
                return checkValues(details.cash)
            }else if(this.typePayment === 'installment'){
                return checkValues(details.installment)
            }else if(this.typePayment === 'others'){
                return checkValues(details.others)
            }

        },
        async submit(){
            this.isLoading = true
            const details = this.getData()          //gather the all data into one object
            console.log(details)
            const isSubmit  = this.nullChecker(details)     //decide if ready to submit via checking if there is null values
            if(isSubmit){
                
                try{
                    const response = await this.$store.dispatch('client/submitPaymentScheme',details) 
                    toast.success(response.message)
                    alert('Downloading the file directly')
                    window.open(response.data.url)      //donwload the created file directly
                }catch(error){
                    console.error(error)
                }     
            }else{
                toast.warning('Please complete the required details')
            }
            this.isLoading = false
        }
    },
    created(){
        const dateNow = new Date();
        const dateString = dateNow.toISOString().split('T')[0];
        this.date = dateString
    },
    watch:{
        typePayment(value){
            if(value ===  'cash'){
                this.others = {}
                this.installment = {}
                this.cash == this.cashCopy
            }else if(value === 'installment'){
                this.others = {}
                this.cash = {}
                this.installment = this.installmentCopy
            }else if(value === 'others'){
                this.installment = {}
                this.cash = {}
                this.others = this.othersCopy
            }
        }
    }
}
</script>

<style scoped>
#paymentScheme{
    white-space: wrap;
    position: relative;
}
.input-custom{
    text-align: center;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    width: 3rem;
}
.input-custom2{
    text-align: center;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
}
.cash-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.list{
    list-style-type: upper-alpha;
}
ul{
    list-style: none;
}
p{
    display: inline-block;
}
</style>