<template>
    <div class="c-cont others">
            <header>OTHERS</header>

            <div class="div1">
                <section class="section1">
                    <p>Bank Refererence</p>
                    <div>
                        <section>
                            <p>Banks</p>
                            <textarea v-model="otherBanks"></textarea>
                        </section>
                        <section>
                            <p>Type of Account</p>
                            <textarea v-model="otherTypeAccount"></textarea>
                        </section>
                    </div>
                </section>
                
                <section class="section2">
                    <p>Reason for the Purchase (check all, if applicable)</p>
                    <div class="checkboxes">
                        <span><input type="checkbox" value="investment" v-model="otherReasonPurchase" id="reason1"><label for="reason1">Investment</label></span>
                        <span><input type="checkbox" value="for children" v-model="otherReasonPurchase" id="reason2"><label for="reason2">For children</label></span>
                        <span><input type="checkbox" value="new home" v-model="otherReasonPurchase" id="reason3"><label for="reason3">Home</label> </span>
                        <span><input type="checkbox" :value="otherReasonPurchaseOTHERComputed" v-model="otherReasonPurchase" id="reason4"><label for="reason4">Others</label>
                            <input class="text" v-model="otherReasonPurchaseOTHER" @blur="addotherReasonPurchaseOTHER">
                        </span>
                    </div>
                    <p>What are the factors that you had considred in buying Alsons Properties?</p>
                    <div class="checkboxes">
                        <span><input type="checkbox" value="reliablity" id="whyBuy1" v-model="otherConsideredFactor"><label for="whyBuy1">Reliability</label></span>
                        <span><input type="checkbox" value="prestige" id="whyBuy2" v-model="otherConsideredFactor"><label for="whyBuy2">Prestige</label></span>
                        <span><input type="checkbox" value="unique concept" id="whyBuy3" v-model="otherConsideredFactor"><label for="whyBuy3">Unique Concept Development</label></span>
                        <span><input type="checkbox" value="turstworthy" id="whyBuy4" v-model="otherConsideredFactor"><label for="whyBuy4">Trustworthiness</label></span>
                        <span><input type="checkbox" value="attractive" id="whyBuy6" v-model="otherConsideredFactor"><label for="whyBuy6">Attractive Payment Terms</label></span>
                        <span><input type="checkbox" value="value for money" id="whyBuy7" v-model="otherConsideredFactor"><label for="whyBuy7">Value-for-Money</label></span>
                        <span><input type="checkbox" value="integrity" id="whyBuy8" v-model="otherConsideredFactor"><label for="whyBuy8">Integrity</label></span>
                        <span><input type="checkbox" value="service" id="whyBuy9" v-model="otherConsideredFactor"><label for="whyBuy9">Service</label></span>
                        <span><input type="checkbox" value="location" id="whyBuy10" v-model="otherConsideredFactor"><label for="whyBuy10">Location</label></span>
                        <span><input type="checkbox" id="whyBuy11" :value="otherConsideredFactorOTHERComputed" v-model="otherConsideredFactor">
                        <label for="whyBUy11" >Others</label>
                            <input class="text" v-model="otherConsideredFactorOTHER" @blur="addotherConsideredFactorOTHER">
                        </span>
                    </div>
                </section>
            </div>

            <div class="div2">
                <p>FROM WHERE HAVE YOU HEARD OF OUR DEVELOPMENT</p>
                <div class="checkboxes">
                    <span><input type="checkbox" value="advertisement"          id="heard1" v-model=" otherWhereHeard"><label for="heard1">Advertisement</label></span>
                    <span><input type="checkbox" value="newspaper"              id="heard2" v-model=" otherWhereHeard"><label for="heard2">Newspaper write-up</label></span>
                    <span><input type="checkbox" value="sales exhibit"          id="heard3" v-model=" otherWhereHeard"><label for="heard3">Sales Exhibit</label></span>
                    <span><input type="checkbox" value="a friend"               id="heard4" v-model=" otherWhereHeard"><label for="heard4">A friend referred it to you</label></span>
                    <span><input type="checkbox" value="agent approached me"    id="heard6" v-model=" otherWhereHeard"><label for="heard6">An Agent approached you</label></span>
                    <span><input type="checkbox" id="heard7" :value="otherWhereHeardOTHERComputed" v-model=" otherWhereHeard">
                        <label for="heard7">OTHER</label>
                        <input class="text" v-model="otherWhereHeardOTHER" @blur="addotherWhereHeardOTHER"></span>
                </div>
            </div>

            <div class="div3">
                <p>HAVE YOU PURCHASED A LOT FROM ALSONS PROPERTIES BEFORE? <span><input type="checkbox">Yes</span> <span><input type="checkbox">No</span></p> 
                <p>If yes, please state project:</p>
                <div class="checkboxes">
                    <span><input type="checkbox" value="SALE1" id="SALE1" v-model="otherPurchasedBefore"><label for="SALE1">Ladislawa Garden Village</label></span>
                    <span><input type="checkbox" value="SALE2" id="SALE2" v-model="otherPurchasedBefore"><label for="SALE2">Las Terrazas</label></span>
                    <span><input type="checkbox" value="SALE3" id="SALE3" v-model="otherPurchasedBefore"><label for="SALE3">Fernwood</label></span>
                    <span><input type="checkbox" value="SALE4" id="SALE4" v-model="otherPurchasedBefore"><label for="SALE4">Woodridge Park</label></span>
                    <span><input type="checkbox" value="SALE5" id="SALE5" v-model="otherPurchasedBefore"><label for="SALE5">Northcrest</label></span>
                    <span><input type="checkbox" id="saleOthers" :value="otherPurchasedBeforeOTHERComputed" v-model="otherPurchasedBefore">
                        <label for="saleOthers"></label>
                        Others<i>(pls. specify)</i>
                        <input class="text" v-model="otherPurchasedBeforeOTHER" @blur="addotherPurchasedBeforeOTHER">
                    </span>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return{
            otherBanks: '',
            otherBanksEmpty: false,
            otherTypeAccount: '',
            otherTypeAccountEmtpy: false,
            otherReasonPurchase: [],   otherReasonPurchaseOTHER: '',
            otherConsideredFactor: [], otherConsideredFactorOTHER: '',
            otherWhereHeard: [],  otherWhereHeardOTHER: '',
            otherPurchasedBefore: [], otherPurchasedBeforeOTHER: '',
        }
    },
    methods:{
        checkotherBanks(){return this.otherBanksEmpty = this.otherBanks!==""?false:true},
        checkotherTypeAccount(){return this.otherTypeAccountEmpty = this.otherTypeAccount!==""?false:true},
        checkotherReasonPurchase(){return this.otherReasonPurchaseEmpty = this.otherReasonPurchase!==""?false:true},
        checkotherConsideredFactor(){return this.otherConsideredFactorEmpty = this.otherConsideredFactor!==""?false:true},
        checkotherWhereHeard(){return this.otherWhereHeardEmpty = this.otherWhereHeard!==""?false:true},
        checkotherPurchasedBefore(){return this.otherPurchasedBeforeEmpty = this.otherPurchasedBefore!==""?false:true},

        //////////////////////////////////////////////////////////////
        addotherReasonPurchaseOTHER(){
            this.otherReasonPurchase.push(this.otherReasonPurchaseOTHER)
        },
        addotherConsideredFactorOTHER(){
            this.otherConsideredFactor.push(this.otherConsideredFactorOTHER)
        },
        addotherWhereHeardOTHER(){
            this.otherWhereHeard.push(this.otherWhereHeardOTHER)
        },
        addotherPurchasedBeforeOTHER(){
            this.otherPurchasedBefore.push(this.otherPurchasedBeforeOTHER)
        },
        //////////////////////////////////////////////////////////////
        passData(){
            const payload = {
                otherBanks: this.otherBanks,
                otherTypeAccount: this.otherTypeAccount,
                otherReasonPurchase: this.otherReasonPurchase,
                otherConsideredFactor: this.otherConsideredFactor,
                otherWhereHeard: this.otherWhereHeard,
                otherPurchasedBefore: this.otherPurchasedBefore,
            }
            this.$emit('pass-data',payload)
        }
    },
    computed:{
        isotherBanksEmpty(){return this.otherBanksEmpty},
        isotherTypeAccountEmpty(){return this.otherTypeAccountEmpty},
        isotherReasonPurchaseEmpty(){return this.otherReasonPurchaseEmpty},
        isotherConsideredFactorEmpty(){return this.otherConsideredFactorEmpty},
        isotherWhereHeardEmpty(){return this.otherWhereHeardEmpty},
        isotherPurchasedBeforeEmpty(){return this.otherPurchasedBeforeEmpty},

        //////////////////////////////////////////////////////////////
        otherReasonPurchaseOTHERComputed(){
            return this.otherReasonPurchaseOTHER
        },
        otherConsideredFactorOTHERComputed(){
            return this.otherConsideredFactorOTHER
        },
        otherWhereHeardOTHERComputed(){
            return this.otherWhereHeardOTHER
        },
        otherPurchasedBeforeOTHERComputed(){
            return this.otherPurchasedBeforeOTHER
        },

    },
    watch:{
        otherBanks(){
            this.checkotherBanks()
            this.passData()
        },
        otherTypeAccount(){
            this.checkotherTypeAccount()
            this.passData()
        },
        otherReasonPurchase(){
            this.checkotherReasonPurchase()
            this.passData()
        },
        otherConsideredFactor(){
            this.checkotherConsideredFactor()
            this.passData()
        },
        otherWhereHeard(){
            this.checkotherWhereHeard()
            this.passData()
        },
        otherPurchasedBefore(){
            this.checkotherPurchasedBefore()
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
/*OTHER*/
/*OTHER: div1*/
.others .div1{
    display:grid;
    grid-template-columns: 40% 60%;
}
.others .div1 .section1{
    padding: 1rem;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
}
.others .div1 .section1 div{
    /* border: 1px solid black; */
    display: flex;
    gap: .5rem;
}
.others .div1 .section1 div section{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
}
.others .div1 .section1 div section textarea{
    width: 100%;
    resize: none;
    min-height: 5rem;
}
.others .div1 .section2{
    padding: 1rem;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
}
.others .div1 .section2 .checkboxes{
    padding: .5rem 0 .5rem 1rem;
    /* border: 1px solid black; */
    display: flex;
    column-gap: 1rem;
    row-gap: .5rem;
    flex-wrap: wrap;
}
.others .div1 .section2 .checkboxes span{
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
}
.others .div1 .section2 .checkboxes span .text{
    width: 100%;
}
@media screen and (max-width: 563px) {
    .others .div1{
    grid-template-columns: 50% 50%;
    }    
}
@media screen and (max-width: 530px) {
    .others .div1{
    grid-template-columns: 40% 60%;
    }      
    .others .div1 .section1 div{
    padding-top: .5rem;
    flex-direction: column;
    text-align: center;
    }
    .others .div1 .section2 .checkboxes{
    padding-left: .5rem;
    }
}


/*OTHER: div2*/
.others .div2{
    border: 1px solid black;
    border-top: none;
    padding: 1rem;
}
.others .div2 .checkboxes{
    padding: .5rem 0 .5rem 1rem;
    /* border: 1px solid black; */
    display: flex;
    column-gap: 1rem;
    row-gap: .5rem;
    flex-wrap: wrap;
}
.others .div2 .checkboxes span{
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
}
.others .div2 .checkboxes span .text{
    width: 100%;
}


/*OTHER: div3*/
.others .div3{
    border: 1px solid black;
    border-top: none;
    padding: 1rem;
}
.others .div3 .checkboxes{
    padding: .5rem 0 .5rem 1rem;
    /* border: 1px solid black; */
    display: flex;
    column-gap: 1rem;
    row-gap: .5rem;
    flex-wrap: wrap;
}
.others .div3 .checkboxes span{
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
</style>