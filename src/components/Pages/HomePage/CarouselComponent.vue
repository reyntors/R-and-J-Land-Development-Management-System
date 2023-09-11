<template>
  <div id="carousel-control" class="carousel slide carousel-fade carousel-dark " data-bs-ride="carousel" data-bs-interval="500">
    <div class="logo">
      <img src="@/assets/logo.png" alt="ERROR"> 
    </div>
    <h1 class="title">R & J Land Development Corporation</h1>
    <div class="carousel-indicators c-">
      <button type="button" data-bs-target="#carousel-control" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carousel-control" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carousel-control" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active c-item">
        <img src="https://picsum.photos/id/10/200/200" class="d-block w-100 c-img" alt="...">
        <div class="carousel-caption d-none d-md-block c-desc">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item c-item">
        <img src="https://picsum.photos/id/11/200/200" class="d-block w-100 c-img" alt="...">
      </div>
      <div class="carousel-item c-item" >
        <img src="https://picsum.photos/id/12/200/200" class="d-block w-100 c-img" alt="...">
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
    width: 80vw;
    margin: 3rem auto;
    text-align: center;
    /* border: 5px solid black; */
}
.logo img{
  width: 400px;
}
.title{
  text-transform: uppercase;
  font-weight: 900;
  font-size: 3rem;
} 
.c-item{
  height: 70vh;
  box-sizing: border-box;
}
.c-desc{
  position: absolute;
  top: 50px;
}

</style>