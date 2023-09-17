<template>
    <form-card id="letterOfIntent" title="Letter of Intent">
      <p style="margin-top: 1rem;">Date: <input type="date"></p> 
      <br>
      <p>{{ companyName }}</p>
      <p>{{ companyAddress }}</p> 
      <br>
      <p>Gentlemen:</p>
      <p>I/We hereby manifest my/our intent to purchase <input style="border: none;
        border-bottom: 1px solid black;"  > lot(s)/unit(s)</p>
      <div class="checkboxes">
        <strong>Project:</strong>
        <input type="checkbox" value="" id="check1"><label for="check1">Northown</label>
        <input type="checkbox" value="" id="check2"><label for="check2">Northcrest</label>
        <input type="checkbox" value="" id="check3"><label for="check3">Eden Ridge</label>
        <input type="checkbox" value="" id="check4"><label for="check4">Narra Park Residence</label>
      </div>
      <div class="location">
        <b>Location:</b>
        <div>PH:<input></div>
        <div>Blk:<input></div>
        <div>Lot/Unit:<input></div>
      </div>

      <section class="reference">
            For your reference, please see my information below;
            <div>
                <label>Name</label>
                <input>
            </div>
            <div>
                <label>Address</label>
                <input>
            </div>
            <div>
                <label>Citizenship</label>
                <input>
            </div>
            <div>
                <label>Contact No.</label>
                <input>
            </div>
            <div>
                <label>Email Address</label>
                <input>
            </div>
        </section>

        <div class="intalicize">
          <strong>I understand  and agree on the following:</strong>
          <ul>
            <li>
              That this document does not  sifnify official booking of the sale.
            </li>
            <li>
              That the purpose of this document is <strong>only to BLOCK-OFF the lot/unit within SEVEN (7)
                WORKING DAYS.</strong>
            </li>
            <li>
              That I must submit all complete requirements and reservation fee not later than <input style="border: none; border-bottom: 1px solid black;"> to
              officially record the above-mentioned lot/unit as a safe, otherwise, ALsons Deve will <strong>
                automatically</strong> open the blocked off lot/unit other interested prospect buyers.
            </li>
          </ul>
        </div>

        <div class="client">
          <p>Sincerley yours,</p>
          <div>
            <div class="signature">Name of Client & Signature</div>
            <div class="date">DATE</div>
          </div>
        </div>
        <div class="receiver">
          <p>Received by:</p>
          <div>
            <div class="signature">Name of Client & Signature</div>
            <div class="date">DATE</div>
          </div>
        </div>
    </form-card>
</template>
  
<script>
export default{
  computed: {
    companyName(){
      return this.$store.getters.companyName
    },
    companyAddress(){
      return this.$store.getters.companyAddress
    }
  }
}
</script>
  
  <style scoped>
  #letterOfIntent{
    font-size: clamp(.6rem, 1.2vw, 2rem);
  }
  p{
    margin: 0;
    
  }

  /*project*/
  .checkboxes{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap:.5rem;
    margin-top: .5rem;
  }

  /*location*/
  .location{
    margin-top: .5rem;
    display: flex;
    align-items: center;
  }
  .location b{
    margin-right: 2px;
  }
  .location div{
    /* border: 1px solid black; */
    /* width: 20%; */
    display: flex;
    align-items: center;
  }
  .location input{
    width: 100%;
    
  }

  /*Reference */
.reference{
    margin-top: .5rem;
    font-size: clamp(.6rem, 1.2vw, 2rem);
}
.reference label{
    width: 10vw;
    min-width: 60px;
}

/*italic*/
.intalicize{
  margin-top: .5rem;
  font-style: oblique;
}

/*client & receiver */
.client, .receiver{
  text-align: start;
  margin-top: .5rem;
}
.client div, .receiver div{
  display: flex;
  justify-content: start;
  margin-top: .5rem;
}
.client div .signature, .receiver div .signature{
  border-top: 1px solid black;
  width: 50%;
  padding: 0 .5rem;
  display: flex;
  justify-content: center;
}
.client div .date, .receiver div .date{
  border-top: 1px solid black;
  width: 30%;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
}
  </style>