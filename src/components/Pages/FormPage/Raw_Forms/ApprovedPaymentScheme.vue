<template>
    <form-card title="Approved Payment Scheme" >
    <div id="ApprovementPaymentScheme">

        <div class="name-date">        
            <span><label class="name">Buyer's Name</label>:<input></span>
            <span><label class="date">Date</label>:<input type="date"></span>
        </div>

        <div class="details">
            <section>
                <label class="details-label">Account Details</label>:
                <div>
                    <span><label>Block No.</label>:<input></span>
                    <span><label>Phase No.</label>:<input></span>
                </div>                
            </section>
            <section>
                <label class="details-label-dummy-spacer"></label>
                <div>
                    <span><label>Lot No.</label>:<input></span>
                </div>  
            </section>
        </div>

        <div class="reservation">
            <section>
                <label class="details-label">Reservation Fee</label>:
                <div>
                    <span><label>Amount</label>:<input></span>
                    <span><label>Date Paid</label>:<input></span>
                </div>                
            </section> 
        </div>

        <strong>Please make all cheques payable to R&J Land Development Corporation</strong>
        <div class="terms">

            <article>
                <div class="cash-cont-flex">
                    <div>
                        <input type="checkbox">
                    </div>
                    <div class="cash-flex">
                        <p><strong>CASH</strong>- with <input style="width: calc(100vw/20);">% Discount on the Total Contract Price</p>
                        <section>
                            <p>
                                Total amount due, net of Reservation Fee and Discount Due date to avail
                                of <input style="width: calc(100vw/20);">% Discount
                            </p>
                            <p>P <input></p>
                        </section>
                    </div>
                </div>  
            </article>
            
            <article>
                <div class="installment-cont-flex">
                    <div>
                        <input type="checkbox">
                    </div>
                    <div class="installment-flex">
                        <strong>INSTALLMENT PAYMENT</strong>
                        <ol>
                            <li>
                                <p>Total Downpayment is <input style="width: calc(100vw/20);">% of the Contract Price</p>
                                <section class="section1">
                                    <p>
                                        Downpayment, net of Reservation Fee and Discount Due date to avail of <input style="width: calc(100vw/20);">%
                                        Discount on the Down Payment
                                    </p>
                                    <p>P <input style="width: calc(100vw/10)"></p>
                                </section>
                            </li>

                            <li>
                                <section class="section2">
                                    <p>
                                        Balance for amortization, net of Reservation Fee, Downpayment and Discount on DP.
                                    </p>
                                    <p>P <input style="width: calc(100vw/10)"></p>
                                </section>

                                <section class="section3">
                                    <div class="amortization">
                                        <p>Monthly Amortization</p>
                                        <p>Amount due</p>
                                        <div>
                                            <p><input style="width: calc(100vw/20);">months</p>
                                            <p><input style="width: calc(100vw/20);">months</p>
                                        </div>
                                    </div>
                                    <!-- <p>P <input></p> -->
                                    <div class="amortization-payment">
                                        <p>P <input style="width: calc(100vw/10)"></p>
                                        <p>P <input style="width: calc(100vw/10)"></p>
                                    </div>
                                </section>
                            <br>
                                <p>First monthly amortization is due on <input> and every <input> thereafter.</p>
                                <p style="margin-top: .5rem;">TERM: <input></p>
                            </li>
                        </ol>
                    </div>
                </div>  
            </article>
            
            <article>
                <div class="other-cont-flex">
                    <div>
                        <input type="checkbox">
                    </div>
                    <div class="other-flex">
                        <strong>OTHER TERMS</strong>

                        <section class="section1">
                            <p>
                                Total amount net of Reservation Fee
                            </p>
                            <p>P <input style="width: calc(100vw/10)"></p>
                        </section>

                        <section class="section2">
                            <p>Balance payable in <input style="width: calc(100vw/10)"> equal monthly installments</p>   
                        </section>
                        
                        <section class="section3">
                            <div class="amortization">
                                <p>Monthly Amortization</p>
                                <p>Amount due</p>
                                <div>
                                    <p><input style="width: calc(100vw/20);">months</p>
                                    <p><input style="width: calc(100vw/20);">months</p>
                                </div>
                            </div>
                            <div class="amortization-payment">
                                <p>P <input style="width: calc(100vw/10)"></p>
                                <p>P <input style="width: calc(100vw/10)"></p>
                            </div>
                        </section>
                        <p style="margin-top: .5rem;">TERM: <input></p>

                    </div>
                </div>  
            </article>

        </div>

        <div class="instruction">
            <p>
            SPECIALINSTRUCITONS/REMARKS (Pease specify)
            </p>
            <textarea ></textarea>
            <p style="text-align: center;"><strong>IMPORTANT</strong></p>
            <ol>
                <li>
                    Sale is subject to all conditions and restrictions contained in the Contract to Sell or Deed of Absolute and its annexes.
                </li>
                <li>
                    Other Fees to be considered:
                    <div class="other-fees-flex">
                        <section>
                            <p>For Transfer of Rights</p>
                        </section>
                        <section>
                            <p>P 10,000 per lot for Northrown of Northcrest</p>
                            <p>P 20,000 per lot for Last Terrazas or Fernwood/Eden Ridge</p>
                        </section>
                    </div>
                    <div class="other-fees-flex">
                        <section>
                            <p>Photocopy of lost Notarized Contract</p>
                        </section>
                        <section>
                            <p>P 200 per contract</p>
                        </section>
                    </div>
                    <div class="other-fees-flex">
                        <section>
                            <p>Change/Amendment of Contract</p>
                        </section>
                        <section>
                            <p>P 500 per contract</p>
                        </section>
                    </div>
                    
                </li>
                <li>
                    Sale is subject to all conditions and restrictions contained in the Contract to Sell or Deed of Absolute and its annexes.
                </li>
                <li>
                    A Deed of Assignment (dully notarized) is required for all transfers made.
                </li>
                <li>
                    A photocopy of Birth Certificate is required for transfers made between parents/children or vice versa, and between siblings.
                </li>
                <li>
                    A Notarized Special Power of Attorney shall be required if the buyer is represented by another person.
                </li>
                <li>
                    A Notarized Board Resolution is required if the buyer is a Corporation.
                </li>
                <li>
                    A Notarized Waiver of Claims is required when the buyer's spouse is a foreigner.
                </li>
            </ol>
        </div>
    <br>
        <p>I/we certify all tine ifnormation given are true and correct</p>
        
        <div class="signature-cont">
            <section>
                <p>Conformed by:</p>
                <input style="display: block; border: none; border-bottom: 1px solid black;">
                <span style="display: block; margin-top: .5rem;">
                    Date : <input type="date">
                </span>
            </section>
            <section>
                <p>Conformed by:</p>
                <input style="display: block; border: none; border-bottom: 1px solid black;">
                <span style="display: block; margin-top: .5rem;">
                    Date : <input type="date">
                </span>
            </section>
        </div>

    </div>
    </form-card>
</template>

<style scoped>
#ApprovementPaymentScheme{
    font-size: clamp(.6rem, 1.2vw, 2rem); 
    padding-top: 1rem;
}
li,ol{
    padding: 0;
    margin: 0.3rem;
}

/*signature*/
.signature-cont{
    display: flex;
}
.signature-cont section{
    margin-top: .5rem;
    width: 50%;
    padding: 0 .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/*instruction*/
.instruction{
    border: 1px solid black;
    padding: .5rem 2rem;
}
.instruction textarea{
    width: 100%;
    min-height: 5rem;
    resize: none;
    padding: .5rem;
}
.instruction .other-fees-flex{
    /* border: 1px solid black; */
    display: flex;
    margin: 0 1rem;
}
.instruction .other-fees-flex section{
    width: 50%;
}
@media screen and (max-width: 655px) {
    .instruction .other-fees-flex{
        flex-direction: column;
        margin: .5rem 0;
    }
    .instruction .other-fees-flex section{
        width: 100%;
    }
    .instruction .other-fees-flex :nth-child(2){
        font-weight: 500;
    }
}

/*name-date */
.name-date{
    display: flex;
    justify-content: space-between;
    margin-bottom: .5rem;
}
.name-date .name{
    width: 10vw;
    min-width: 70px;
}
.name-date .date{
    width: 6vw;
    min-width: 45px;
}
.name-date span input{
    margin-left: 5px;
    flex-grow: .5;
}
.name-date span{
    width: 50%;
    display: flex;
}
@media screen and (max-width: 655px) {
    .name-date{
        flex-direction: column;
        gap: .5rem;
    }
    .name-date .date{
        width: 10vw;
        min-width: 70px;
    }
}


/*details */
.details{
    display: flex;
    margin-bottom: .5rem;
}
.details .details-label{
    width: 10vw;
    min-width: 70px;
}
.details section{
    width: 50%;
    display: flex;
}
.details section div{
   flex-grow: 1;
   display: flex;
   flex-direction: column;
}
.details section div span{
    display: flex;
}
.details section div span label{
    width: 6vw;
    min-width: 45px;
}
.details section div span input{
    margin-left: 5px;
    flex-grow: .5;
}
@media screen and (max-width: 655px) {
    .details{
        flex-direction: column;
    }
    .details-label-dummy-spacer{
        width: 10vw;
        min-width: 72px; 
    }
}

/*reservation */
.reservation{
    display: flex;
}
.reservation .details-label{
    width: 10vw;
    min-width: 70px;
}
.reservation section{
    display: flex;
    width: 50%;
}
.reservation section div{
   /* border: 1px solid black; */
   flex-grow: 1;
   display: flex;
   flex-direction: column;
}
.reservation section div span{
    display: flex;
}
.reservation section div span label{
    width: 6vw;
    min-width: 45px;
}
.reservation section div span input{
    margin-left: 5px;
    flex-grow: .5;
}

.terms{
    border-top: 1px dashed black;
    padding-top: .5rem;
}

/*TERMS:CASH*/
.terms article{
    padding: .5rem;
    border-bottom: .5px dashed rgb(0, 0, 0,.5);
}
.terms article .cash-cont-flex{
    display: flex;
}
.terms article .cash-cont-flex .cash-flex{
    /* border: 1px solid red; */
    width: 90%;
}
.terms article .cash-cont-flex .cash-flex section{
    display: flex;
    margin-top: .5rem;
    align-items: center;
}
.terms article .cash-cont-flex .cash-flex section :nth-child(1){
   width: 65%;
   /* border: 1px solid red; */
}
.terms article .cash-cont-flex .cash-flex section :nth-child(2){
    margin-left: 5rem;
}
@media screen and (max-width: 655px) {
    .terms article .cash-cont-flex .cash-flex section :nth-child(1){
        width: 75%;
    }
    .terms article .cash-cont-flex .cash-flex section :nth-child(2){
        margin-left: 1.5rem;
    }
}

/*TERMS:INSTALLMENT PAYMENT*/
.terms article .installment-cont-flex{
    display: flex;
}

.terms article .installment-cont-flex .installment-flex{
    /* border: 1px solid yellow; */
    width: 90%;
}
.terms article .installment-cont-flex .installment-flex section{
    display: flex;
    margin-top: .5rem;
    align-items: center;
    /* border: 1px solid black; */
}
.terms article .installment-cont-flex .installment-flex .section1 :nth-child(1),
.terms article .installment-cont-flex .installment-flex .section2 :nth-child(1),
.terms article .installment-cont-flex .installment-flex .section3 .amortization{
    width: 65%;
    /* border:1px solid black; */
}
.terms article .installment-cont-flex .installment-flex .section3 .amortization{
    display: flex;
    justify-content: space-evenly;
}
.terms article .installment-cont-flex .installment-flex .section1 :nth-child(2),
.terms article .installment-cont-flex .installment-flex .section2 :nth-child(2),
.terms article .installment-cont-flex .installment-flex .section3 .amortization-payment{
    margin-left: 3rem;
}
@media screen and (max-width: 655px) {
    .terms article .installment-cont-flex .installment-flex .section1 :nth-child(1),
    .terms article .installment-cont-flex .installment-flex .section2 :nth-child(1),
    .terms article .installment-cont-flex .installment-flex .section3 .amortization{
        width: 70%;
    }

    .terms article .installment-cont-flex .installment-flex .section1 :nth-child(2),
    .terms article .installment-cont-flex .installment-flex .section2 :nth-child(2),
    .terms article .installment-cont-flex .installment-flex .section3 .amortization-payment{
        margin-left: 1rem;
    }
}

/*TERMS: others */
.terms article .other-cont-flex{
    display: flex;
}
.terms article .other-cont-flex .other-flex {
    /* border: 1px solid black; */
    width: 90%;
}
.terms article .other-cont-flex .other-flex section{
    display: flex;
    margin-top: .5rem;
    align-items: center;
}
.terms article .other-cont-flex .other-flex .section1 :nth-child(1),
.terms article .other-cont-flex .other-flex .section2 p,
.terms article .other-cont-flex .other-flex .section3 .amortization{
    width: 65%;
    /* border:1px solid black; */
}
.terms article .other-cont-flex .other-flex .section3 .amortization{
    display: flex;
    justify-content: space-evenly;
}
.terms article .other-cont-flex .other-flex .section1 :nth-child(2),
.terms article .other-cont-flex .other-flex .section3 .amortization-payment{
    margin-left: 3rem;
}
@media screen and (max-width: 655px) {
    .terms article .other-cont-flex .other-flex .section1 :nth-child(1),
    .terms article .other-cont-flex .other-flex .section2 p,
    .terms article .other-cont-flex .other-flex .section3 .amortization{
        width: 70%;
    }

    .terms article .other-cont-flex .other-flex .section1 :nth-child(2),
    .terms article .other-cont-flex .other-flex .section3 .amortization-payment{
        margin-left: 1rem;
    }
}
@media screen and (max-width: 600px) {
    .terms article .installment-cont-flex .installment-flex .section3 .amortization,
    .terms article .other-cont-flex .other-flex .section3 .amortization{
        flex-direction: column;
    }
}



</style>