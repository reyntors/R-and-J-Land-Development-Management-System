<template>
  <div class="footer">
      <article>
        <section class="section1">
          <img :src="logo">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus </p>
        </section>
        <section class="section2">
          <ul>
            <li>
              <a>Quick Links</a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a>Model Houses</a>
            </li>
            <li>
              <a>Lots</a>
            </li>  
          </ul>
        </section>

        <section class="section3">
          <p>Contact Us</p>
          <section>
            <font-awesome-icon icon="fa-brands fa-facebook" style="color: #005eff;" size="2x"/>
            <font-awesome-icon icon="fa-brands fa-whatsapp" style="color: #00ff00;" size="2x"/>
            <font-awesome-icon icon="fa-solid fa-envelope" size="2x"/>
            <!-- <img :src="email"> -->
          </section>
        </section>
      </article>
      <div class="copyright">
        <p>&copy;R&J Land Development Corporation. Digods, Davao City Philippines. All Rights Reserved</p>
      </div>
  </div>
</template>

<script>
import logo from '@/assets/R&J Land Logo.png'
import emailLogo from '@/assets/gmailLogo.png'
export default {
    data(){
      return{
        logo: logo,
        email:emailLogo
      }
    }
}
</script>

<style scoped>
.footer{
    width: 100%;
    z-index: 2;
    padding-top: 1rem ;
    background: rgb(34,156,134);
    background: linear-gradient(163deg, rgba(34,156,134,1) 35%, rgba(11,109,49,1) 100%);
}
article{
  width: 95%;
  margin: auto;
  display: flex;
  /* border-bottom: 1px solid black; */
}
article .section1{
  width: 30%;
  display: flex;
  flex-direction: column;
}
article .section1 p{
  font-size: 15px;
}
article .section1 img{
  width: 50%;
}

article .section2{
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
}
article .section2 ul{
  display: flex;
  flex-direction: column;
  gap: .5rem;
  list-style: none;
  margin: 0;
  padding-left: 1rem;
}

.section3 section{
  display: flex;
  justify-content: center;
  gap: .3rem;
}

.copyright{
  margin: .5rem 0;
  text-align: center;
}
.copyright p{
  font-size: 15px;
}
</style>