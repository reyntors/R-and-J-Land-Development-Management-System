<template>
    <form-card title="BIR Tin Request">
    <div class="c-container">
            <input style="display: block; border: none; border-bottom: 1px solid black;">
        <br>    
            <p>BUREAU OF INTERNAL REVENUE</p>
            <p>Davao City</p>
        <br>
            <p>This is to authorize Mr./Mrs. <input  style="border: none; border-bottom: 1px solid black;"> to get my Tax Identification Number 
                Verification Slip (TIN Verification Slip) in my behalf.</p>
            <p>Please find below the details:</p>
            
            <div class="details">
                <section>
                    <span>Name</span>:<input></section>
                <section>
                    <span>Address</span>:<input></section>
                <section>
                    <span>Birthday</span>:<input></section>
                <section>
                    <span>TIN Number</span>:<input></section>  
            </div>
        <br>
            <p>Thank you.</p>
        <br>
            <p>Respectful Yours,</p>
        <br>
            <input style="border: none; border-bottom: 1px solid black;">
    </div>
    </form-card>

    <form-card title="SPECIAL POWER OF ATTORNEY">
    <div class="spa-form">
    <strong>KNOW ALL, MEN BY THESE PRESENTS:</strong>
        
        <div class="center">
            <p>
                That I,<input> single/married, of legal age, <input> and resident of <input>, do hereby appoint, name consittute and appoint,
                <input>, single/married of legal age, <input> and a resident of <input>. tp be my true and lawfule <strong>Attorney-In-Face</strong>,
                for me and in my name, to do and perfrom any or all of the following act or acts, to wit:
            </p>
            <br>
            <p> 1.  To secure Tax Identification Number (TIN) Verification Slip from the Bureau of Internal Revenue (BIR).</p>
            <br>
            <p><strong>IN WITNESS OF,</strong> we have hereunto set our hands this <input> day of <input>, 20<input> at <input>, Philippines.</p>
            <br>
            <div class="signature-flex">
                <section>
                    <strong style="display: block;">GRANTOR</strong>
                    <br>
                    <input style="display: block;">
                    <p>CEI:</p>
                </section>
                <section>
                    <strong style="display: block;">GRANTEE</strong>
                    <br>
                    <input style="display: block;">
                    <p>CEI:</p>
                </section>
            </div>
        </div>
    <p>
        SUBSCRIBED AND SWORN to before me this <input> day of <input> , 20<input> at Davao City, Philippines
        Affian exhibit to be their Competent Evidence of Identities (CEI) written below their names.
    </p>
    <section class="notary">
            Notary Public
            <div>
                <label>Doc. No.</label>
                <input>;
            </div>
            <div>
                <label>Page No.</label>
                <input>;
            </div>
            <div>
                <label>Book No.</label>
                <input>;
            </div>
            <div>
                <label>Series of</label>
                <input>;
            </div>
        </section>
    </div>
    </form-card>
</template>

<style scoped>
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