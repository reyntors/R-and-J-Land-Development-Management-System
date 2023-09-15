<template>
  <div id="carousel-control" class="carousel slide carousel-fade carousel-dark " data-bs-ride="carousel" data-bs-interval="3000">
    <div class="carousel-indicators c-">  
  
      <button type="button" data-bs-target="#carousel-control" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carousel-control" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carousel-control" data-bs-slide-to="2" aria-label="Slide 3"></button>        

    </div>
    
    <div class="carousel-inner">
      <div class="carousel-item active c-item">
        <img src="https://picsum.photos/id/10/200/200" class="d-block w-100 c-img" alt="...">
        <div class="carousel-caption d-md-block c-desc ">
          <h1 class="title">R & J Land Development Corporation</h1>
        </div>
      </div>
      <div class="carousel-item c-item">
        <img src="https://picsum.photos/id/11/200/200" class="d-block w-100 c-img" alt="...">
        <div class="carousel-caption d-md-block c-desc">
          <h1 class="title">R & J Land Development Corporation</h1>
        </div>
      </div>
      <div class="carousel-item c-item" >
        <img src="https://picsum.photos/id/12/200/200" class="d-block w-100 c-img" alt="...">
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
    /* height: 85vh; */
    /* margin: 3rem auto; */
    text-align: center;
    /* border: 5px solid black; */
    z-index: 0;
}
.title{
  text-transform: uppercase;
  font-weight: 900;
  font-size: clamp(2rem, 5vw, 5rem);
  text-shadow: 0 3px 5px white;
} 
.c-item{
  height: 85vh;
  box-sizing: border-box;
}
.c-img{
  height: 85vh;
}
.c-desc{
  position: absolute;
  top: 50px;
}

</style>