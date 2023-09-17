<template>
    <form-card title="Call Slip">
      <div class="call-slip">
<br>
        <p style="text-align: end;">Date: <input type="date"></p>
<br>
        <div class="prospect-name">
          Prospect's Name:
          <span>
            <input placeholder="Lastname">
            <input placeholder="Firstname">
            <input placeholder="Middle">
          </span>
        </div>
<br>
        <div class="spouse">
          Spouse Name (if married)
          <span>
            <input placeholder="Spouse fullname">
          </span>
        </div>
<br>
        <div class="contact">
          Contact Numbers: 
          <span>Tel No.</span><input>
          <span>Mobile</span><input>
          <span>Email Address</span><input>
        </div>
<br>
        <div>
          <p>Prospect/s interested in:</p>
          <div>
            <p>Prospects from:</p>
            <div class="checkboxes-cont">
              <section class="checkbox-item">
                <input type="checkbox" id="check-1"> <label for="check-1">regular prospect</label></section>
              <section class="checkbox-item">
                <input type="checkbox" id="check-2"> <label for="check-2">referral</label></section>
              <section class="checkbox-item">
                <input type="checkbox" id="check-3"> <label for="check-3">open house</label></section>
              <section class="checkbox-item">
                <input type="checkbox" id="check-4"> <label for="check-4">office-in-charge</label></section>
              <section class="checkbox-item">
                <input type="checkbox" id="check-5"> <label for="check-5">fb/website</label></section>
              <section class="checkbox-item">
                <input type="checkbox" id="check-6"> <label for="check-6">mall exhibits</label></section>           
            </div>
          </div>
        </div>
<br>
        <div class="signature-cont">
          
          <div class="grid-item">
            <div>
              <span class="label">Signed By:</span>
              <span class="underline"></span>
            </div>
            <div>
              <span class="label"></span>
              <div class="underline-text">Prospect Buyer</div>
            </div> 
          </div>

          <div class="grid-item">
            <div>
              <span class="label">Submitted By:</span>
              <span class="underline"></span>
            </div>
            <div>
              <span class="label"></span>
              <div class="underline-text">Real Estate Broker</div>
            </div> 
          </div>

          <div class="grid-item">
            <div>
              <span class="label">Received By:</span>
              <span class="underline"></span>
            </div>
            <div>
              <span class="label"></span>
              <div class="underline-text"><p>Signature/Date/Time</p><p>Sales Staff</p></div>
            </div> 
          </div>
          
          <div class="grid-item">
            <div>
              <span class="label">Noted By:</span>
              <span class="underline"></span>
            </div>
            <div>
              <span class="label"></span>
              <div class="underline-text"><p><strong>JESSSA MAED D. SISI</strong></p><p>Sales Manager</p></div>
            </div> 
          </div>
          
        </div>

      </div>
    </form-card>
</template>
  

<style scoped>
p{
  margin: 0;
}
.call-slip{
  font-size: clamp(.6rem, 1.2vw, 2rem);  
}

/*prospect and spouse */
.prospect-name,.spouse {
  /* Ensure that the div container only takes as much width as necessary */
  display: flex;
}
.prospect-name span,.spouse span {
  display: flex;
  flex-grow: 1;
  margin-left: .5rem;
}
.prospect-name span input {
  box-sizing: border-box;
  margin: 0 3px;
  width: calc(100%/3);
  height: 100%;
  padding: 0 .5rem;
  border: none;
  border-bottom: 1px solid black;
}
.spouse span input{
  width: 100%;
  height: 100%;
  padding: 0 .5rem;
  border: none;
  border-bottom: 1px solid black;
}

.contact{
  display: flex;
  column-gap: .5rem;
  /* flex-direction: column; */
}
@media screen and (max-width: 655px) {
  .contact{
    flex-direction: column;
  }
}

/*PROSPECTS*/
.checkboxes-cont{
  display: flex;
  flex-wrap: wrap;
}
.checkboxes-cont .checkbox-item{
  padding: .2rem;
  display: flex;
}

.signature-cont{
  /* border: 1px solid black; */
  display: grid;
  grid-template-columns: repeat(2,1fr);
}
.grid-item{
  padding: .5rem;
}
.grid-item div{
  display: flex;
}
.grid-item div span{
  display: inline-block;
}
.grid-item .label{
  display: inline-block;
  width: 10vw;
  min-width: 60px;
  /* outline: 1px solid black; */
}
.grid-item div .underline{
  width: 100%;
  border-bottom: 1px solid black;
}
.grid-item div .underline-text{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start; 
  align-items: center;
}
@media screen and (max-width: 655px) {
  .signature-cont{
  grid-template-columns: repeat(1,1fr);
  }
}

</style>