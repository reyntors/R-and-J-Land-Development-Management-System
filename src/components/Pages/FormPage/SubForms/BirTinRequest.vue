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
</style>