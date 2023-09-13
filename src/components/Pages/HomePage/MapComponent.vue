<template>
    <div id="map" class="containerMap">
        <h4>Phase 1 Location</h4>
        <div class="locationBody">

        </div>
        <button class="btn-item">Click to select a lot</button>  
    </div> 
</template>

  <style scoped>
  .containerMap{
      width: 90vw;
      /* border: 1px dashed black; */
      margin: 2rem auto 1rem;
      text-align: center;
  }
  .containerMap h4{
    text-align: start;
  }
  .locationBody{
    border: 1px solid black;
    width: 100%;
    height: 60vh;
    margin: .2rem 0;
  }
  .btn-item{
    padding: .5rem 1rem; 
    box-shadow: 0 0 5px .5px rgba(0, 0, 0, 0.381);
    border: none;
    background-color: gold;
    color:black;
  }
  .btn-item:active, .btn-item:hover{
    background-color: rgba(255, 217, 0, 0.733);
    font-weight: 600;
  }

  </style>