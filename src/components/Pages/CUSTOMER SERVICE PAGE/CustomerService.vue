<template>
  
  <the-header></the-header>

  <div class="display">
    <article class="article1">
    </article>

    <article class="article2">
      <h1 class="fw-bold">CONTACT US</h1>
      <p>Connect with us through our contact details below.</p>
      <section style="margin-top: .5rem;">
        <p>Phone Number: +639388534616</p>
        <p>Email Address: randjLandDevelopementCorp@gmail.com</p>
        <p @click="openFB">Facebook Page:  
          <span class="fblink">
            <font-awesome-icon icon="fa-brands fa-square-facebook" size="1x" style="color: #0b68ff;" />
          RandJLandDevCorp
        </span>
          
        </p>
      </section>
      
      <button class="otherBtn" @click="openReserve">Reserve Now</button>
      <button class="otherBtn" @click="openInquire">Inquire Now</button>

      <hr>
      
      <form @submit.prevent="">
          <section class="grid">
            <input placeholder="First name">
            <input placeholder="Last name">
          
            <input placeholder="Company">
            <input placeholder="Job Title">
          
            <input placeholder="Phone">
            <input placeholder="Email">
          
            <input placeholder="Facebook Link (optional)">
            <select v-model="typeClient">
              <option value="default">I am a...</option>
              <option value="current-client">Current Client</option>
              <option value="potential-client">Potential Client</option>
              <option value="guest">Guest</option>
              <option value="other">Other</option>
            </select>
          </section>

          <section class="checkboxes">
              <h6>Interest id:</h6>
              <section>
                <input type="checkbox" id="val1">
                <label for="val1">Value 1</label>
              </section>
              <section>
                <input type="checkbox" id="val2">
                <label for="val2">Value 2</label>
              </section>
              <section>
                <input type="checkbox" id="val3">
                <label for="val3">Value 3</label>
              </section>
              <section>
                <input type="checkbox" id="val4">
                <label for="val4">Value 4</label>
              </section>
              <section>
                <input type="checkbox" id="val5">
                <label for="val5">Value 5</label> 
              </section>
          </section>  

          <textarea placeholder="Message"></textarea>

          <button class="submit">Send</button>
      </form>
      
    </article>
  </div>

</template>

<script>
export default {
  data(){
    return{
      typeClient: 'default',
    }
  },
  methods:{
    openFB(){
      window.open('https://www.facebook.com/')
    },
    openReserve(){
      this.$router.push('/sell')
    },
    openInquire(){
      this.$router.push('/inquire')
    }
  }
}
</script>

<style scoped>
.otherBtn{
  padding: .5rem 1rem;
  border: none;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.299);;
  margin-bottom: .5rem;
  background-color: gold;
  display: block;
  border-radius: 5px;
}
p {
  font-size: clamp(16px, 3vw, 24px);
}
.fblink:hover{
  border-bottom: 2px solid rgba(0, 0, 255, 0.75); 
  display: inline; color: rgba(0, 0, 255, 0.75); 
}
.fblink{
  border-bottom: 2px solid blue; 
  display: inline; color: blue; 
  cursor: pointer;
}
.submit{
  border: none;
  outline: 1px solid black;
  padding: .5rem 0;
  width: 100%;
  background-color: gold;
}
textarea{
  resize: none;
  width: 100%;
  min-height: 100px;
  padding: .5rem;
  box-sizing: border-box;
}
.checkboxes h6{
  grid-column-start: 1;
  grid-column-end: 3;
  padding: 0 .2rem;
}
.checkboxes section{
  /* border: 1px solid black; */
  padding: .2rem;
  display: flex;
  align-items: center;
  gap: .5rem;
}
.checkboxes{
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: .2rem;
}
select{
  padding:.5rem;
}
input{
  padding: .5rem;
}
.grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: .5rem;
  gap: .5rem;
}
.article2{
  padding: 2rem;
}
.article1{
  display: flex;
  background-image: url('https://media.istockphoto.com/id/991072110/photo/advertising-billboard-immersed-in-a-rural-scene-with-vacant-land-for-sale-written-on-it-image.jpg?s=612x612&w=0&k=20&c=5eIIcRJmzyketlCJLlwwLiLcFqVDR7ESlhCqeTlUpSo=');
  /* height: 85vh; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.display{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>