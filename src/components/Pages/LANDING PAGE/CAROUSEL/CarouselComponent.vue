<template>
  <div id="carousel-control" class="carousel slide carousel-fade carousel-dark" data-bs-ride="carousel" data-bs-interval="2000">
    
    <div class="carousel-inner carousel-cont">
      <div class="title-cont">
        <div>
          <span class="line"/>
          <p>Building Dreams to Life</p>  
          <span class="line" />
        </div>
        
        <h1 class="title">R & J Land Development Corporation</h1>
        
        <span class="redirect-buttons">
          <clickable-button>Reserve Now</clickable-button>
          <clickable-button>Inquire Now</clickable-button>
          <!-- <button class="clickme fw-bold" @click="reserveNow"></button>
          <button class="clickme fw-bold" @click="inquireNow">Inquire Now</button> -->
        </span>
      </div>
      <video class="video" autoplay muted loop>
        <source src="https://aws-bucket-nodejs.s3.amazonaws.com/uploads/videos/video.mp4">
      </video>
    </div>


   
  </div>
</template>

<script>
export default {
  methods: {
    reserveNow(){
      this.$router.push('/sell')
    },
    inquireNow(){
      this.$router.push('/inquire')
    }
  }
}
</script>

<style scoped>
.redirect-buttons{
  display: flex;
  gap: .5rem;
  /* border: 1px solid white; */
  justify-content: center;
}
.title-cont{
  width: 70%;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: .3rem;
}
.title-cont .title{
  text-transform: uppercase;
  font-weight: 900;
  font-size: clamp(2rem, 5vw, 5rem);
  color: white; 
  font-weight: bolder;
  text-shadow: 2px 2px 4px black;
}
.title-cont div{
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.title-cont div p{
  color:  white; 
  font-weight: bolder;
  letter-spacing: .3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0 .5rem;
}
.line{
  display: inline-block;
  width: 20%;
  height: 1px;
  border: 2px solid rgba(0, 0, 0, 0.7);
}
/* .title-cont button{
  border: none;
  padding: .5rem 1rem;
  border-radius: 5px;
  background-color: rgba(255, 217, 0, 0.797);
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-reflect: below 10px linear-gradient(to bottom, transparent, rgba(0, 0, 0, .6));
  animation: blink ease-in 1s infinite both alternate;
}
.title-cont button:hover{
  background-color: red;
  color: white;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2), 0 0 3px 1px rgba(255, 255, 255, 0.2);
}
@keyframes blink {
  0%{
    outline: 2px solid white;
  }
  100%{
    outline: 2px solid rgba(0, 0, 0, 0.5);
  }
} */
.carousel-cont{
  position: relative;
}
#carousel-control{
    text-align: center;
    z-index: 0;
}


.video{
  width: 100%;
  height: 85vh;
  object-fit: cover;
  object-position: center;
}
</style>