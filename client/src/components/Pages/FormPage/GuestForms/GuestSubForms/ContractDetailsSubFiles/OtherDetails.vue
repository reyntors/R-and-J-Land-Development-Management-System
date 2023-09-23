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
                        <span><input type="checkbox">Investment</span>
                        <span><input type="checkbox">For children</span>
                        <span><input type="checkbox">New Home</span>
                        <span><input type="checkbox">Others<input class="text"></span>
                    </div>
                    <p>What are the factors that you had considred in buying Alsons Properties?</p>
                    <div class="checkboxes">
                        <span><input type="checkbox">Reliability</span>
                        <span><input type="checkbox">Prestige</span>
                        <span><input type="checkbox">Unique Concept Development</span>
                        <span><input type="checkbox">Trustworthiness</span>
                        <span><input type="checkbox">Attractive Payment Terms</span>
                        <span><input type="checkbox">Value-for-Money</span>
                        <span><input type="checkbox">Integrity</span>
                        <span><input type="checkbox">Service</span>
                        <span><input type="checkbox">Location</span>
                        <span><input type="checkbox">Others<input class="text"></span>
                    </div>
                </section>
            </div>

            <div class="div2">
                <p>FROM WHERE HAVE YOU HEARD OF OUR DEVELOPMENT</p>
                <div class="checkboxes">
                    <span><input type="checkbox">Advertisement</span>
                    <span><input type="checkbox">Newspaper write-up</span>
                    <span><input type="checkbox">Sales Exhibit</span>
                    <span><input type="checkbox">A friend referred it to you</span>
                    <span><input type="checkbox">An Agent approached you</span>
                    <span><input type="checkbox">Others<input class="text"></span>
                </div>
            </div>

            <div class="div3">
                <p>HAVE YOU PURCHASED A LOT FROM ALSONS PROPERTIES BEFORE? <span><input type="checkbox">Yes</span> <span><input type="checkbox">No</span></p> 
                <p>If yes, please state project:</p>
                <div class="checkboxes">
                    <span><input type="checkbox">Ladislawa Garden Village</span>
                    <span><input type="checkbox">Las Terrazas</span>
                    <span><input type="checkbox">Fernwood</span>
                    <span><input type="checkbox">Woodridge Park</span>
                    <span><input type="checkbox">Northcrest</span>
                    <span><input type="checkbox">Others<i>(pls. specify)</i><input class="text"></span>
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
            otherReasonPurchase: '',
            otherReasonPurchaseEmpty: false,
            otherConsideredFactor: '',
            otherConsideredFactorEmpty: false,
            otherWhereHeard: '',
            otherWhereHeardEmpty: false,
            otherPurchasedBefore: '',
            otherPurchasedBeforeEmpty: false,
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