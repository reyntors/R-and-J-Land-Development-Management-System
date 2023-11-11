<template>
  <div id="carousel-control" class="carousel slide carousel-slide carousel-dark" data-bs-ride="carousel" data-bs-interval="1000">
    <div class="carousel-indicators c-">  
  
      <button type="button" data-bs-target="#carousel-control" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carousel-control" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carousel-control" data-bs-slide-to="2" aria-label="Slide 3"></button>        

    </div>
    
    <div class="carousel-inner carousel-cont">
      <div class="title-cont">
        <div>
          <span class="line"/>
          <p>Building Dreams to Life</p>  
          <span class="line" />
        </div>
        
        <h1 class="title">R & J Land Development Corporation</h1>
        
        <span class="redirect-buttons">
          <button class="clickme fw-bold" @click="reserveNow">Reserve Now</button>
          <button class="clickme fw-bold" @click="inquireNow">Inquire Now</button>
        </span>
        
      </div>
      

      <div class="carousel-item active c-item">
        <article id="img1"></article>

        <div class="carousel-caption d-md-block c-desc ">
          <!-- <h1 class="title">R & J Land Development Corporation</h1> -->
        </div>

      </div>
      <div class="carousel-item c-item">
        <article id="img2"></article>

        <div class="carousel-caption d-md-block c-desc">
          <!-- <h1 class="title">R & J Land Development Corporation</h1> -->
        </div>

      </div>
      <div class="carousel-item c-item" >
        <article id="img3"></article>
 
        <div class="carousel-caption d-md-block c-desc">
          <!-- <h1 class="title">R & J Land Development Corporation</h1> -->
        </div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carousel-control" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carousel-control" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
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
  top: 10%;
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
.title-cont button{
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
    /* box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2); */
    outline: 2px solid white;
  }
  100%{
    outline: 2px solid rgba(0, 0, 0, 0.5);
    /* box-shadow: 0 0 1px 2px rgba(255, 217, 0, 0.515); */
  }
}
.carousel-cont{
  position: relative;
}
#carousel-control{
    text-align: center;
    z-index: 0;
}
.c-item{
  height: 85vh;
  box-sizing: border-box;
}
.carousel-control-prev-icon,
.carousel-control-next-icon{
  background-color: red;
  color: white;
}

#img1{
  background-image: url(https://media.istockphoto.com/id/152494090/photo/aerial-home-housing-development-community-images.jpg?s=612x612&w=0&k=20&c=sHjAG8aUMgxcuFxuN91FATVWO6-LxHBAlyAExwxBOmo=);
  height: 85vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.392);
  background-blend-mode: darken;
}
#img2{
  background-image: url(https://media.istockphoto.com/id/182247315/photo/for-sale-everywhere.jpg?s=612x612&w=0&k=20&c=3jwniCEd1YJ4OsxXgW6bjUOeqgFGiUJuhAQCM4lEpLw=);
  height: 85vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.392);
  background-blend-mode: darken;
}
#img3{
  background-image: url(https://media.istockphoto.com/id/1091532578/photo/homes-in-a-suburban-master-planned-subdivision.jpg?s=612x612&w=0&k=20&c=pNkSfDVjDOCmAKBPk8oScXFTOtSVrwh1IABLF1AJemA=);
  height: 85vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.392);
  background-blend-mode: darken;
}

.c-desc{
  /* position: absolute; */
  top: 50px;
}

</style>