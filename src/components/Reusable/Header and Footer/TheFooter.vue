<template>
  <div class="footer-cont">

    <div class="footer-title">
      <h4 style="margin: 0; padding: 0;" class="fs-2 fw-bold">CONTACT R&J LAND DEVELOPMENT CORPORATION STAFF</h4>
      <button @click="contacts">Contact Us</button>
    </div>

    <hr>

    <div class="grid">
      
      <section class="section1">
          <img :src="logo">
      </section>

      <section class="section2">
        <h5>About</h5>
        <ul>
          <li>Commitments</li>
          <li>Sustainability</li>
          <li>Corporate Officers</li>
          <li>Licenses and Permits</li>
        </ul>          
      </section>

      <section class="section3">
        <h5>We Build</h5>
        <ul>
          <li>Resedential House</li>
          <li>Commercial Building</li>
          <li>Amenities</li>
          <li>Structural Foundation</li>
        </ul>          
      </section>

      <section class="section4">
        <h5>We Sell</h5>
        <ul>
          <li>Land for Sale</li>
          <li>Others</li>
        </ul>          
      </section>

      <section class="section5">
        <h5>We Provide</h5>
        <ul>
          <li>Land for Sale</li>
          <li>Others</li>
        </ul>          
      </section>

      <section class="section6">
        <h5>Projects</h5>
      </section>
      <section class="section7">
        <h5>Careers</h5>
      </section>
      <section class="section8">
        <h5>Customer Services</h5>
      </section>

    </div>
  </div>

</template>

<script>
import logo from '@/assets/logo.png'
export default {
    data(){
      return{
        logo: logo,
      }
    },
    methods:{
      contacts(){
        this.$router.push('/customer-service')
      }
    }
}
</script>

<style scoped>
.footer-cont{
  background: rgb(34,156,134);
  background: linear-gradient(163deg, rgba(34,156,134,1) 35%, rgba(11,109,49,1) 100%);
  padding: 2rem;
}

.footer-title{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;  
}
button{
  border: none;
  padding: 1rem 2rem;
  background-color: gold;
  outline: 1px solid black;
  text-transform: uppercase;
  font-weight: 700;
  white-space: nowrap;
}

.grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
section{
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

}
.section1{
  grid-row: span 2;
  justify-content: center;
}
.section1 img{
  width: 100%;
}
h5{
  font-weight: 500;
}
</style>