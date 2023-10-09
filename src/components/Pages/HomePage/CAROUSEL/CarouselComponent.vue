<template>
  <div id="carousel-control" class="carousel slide carousel-fade carousel-dark " data-bs-ride="carousel" data-bs-interval="1000">
    <div class="carousel-indicators c-">  
  
      <button type="button" data-bs-target="#carousel-control" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carousel-control" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carousel-control" data-bs-slide-to="2" aria-label="Slide 3"></button>        

    </div>
    
    <div class="carousel-inner">
      <div class="carousel-item active c-item">
        <article id="img1"></article>

        <div class="carousel-caption d-md-block c-desc ">
          <h1 class="title">R & J Land Development Corporation</h1>
        </div>

      </div>
      <div class="carousel-item c-item">
        <article id="img2"></article>

        <div class="carousel-caption d-md-block c-desc">
          <h1 class="title">R & J Land Development Corporation</h1>
        </div>

      </div>
      <div class="carousel-item c-item" >
        <article id="img3"></article>
 
        <div class="carousel-caption d-md-block c-desc">
          <h1 class="title">R & J Land Development Corporation</h1>
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
  
}
</script>

<style scoped>
#carousel-control{
    text-align: center;
    z-index: 0;
}
.title{
  text-transform: uppercase;
  font-weight: 900;
  font-size: clamp(2rem, 5vw, 5rem);

  /* background: #B5F40A; */
  color: white; 
  font-weight: bolder;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  
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