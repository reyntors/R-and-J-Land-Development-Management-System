<template>
  <div id="residential-house" class="model-house-cont">
      <!-- <header>
        <h2>MODEL HOUSES</h2>
      </header> -->

      <article>
        <section class="section1">
          <div class="div1">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae officia 
              pariatur mollitia hic omnis ad animi. Quae, voluptatibus minus? Aliquam at quos culpa labore odit.
              omnis ad animi. Quae, voluptatibus minus? Aliquam at quos culpa labore odit</p>
          </div>
          
          <div class="div2">
              <model-house></model-house>
          </div>
        </section>


      </article>
  </div>
  

</template>

<script>
import modelHouse from './modelHouse.vue'
export default {
  components: {modelHouse },

}
</script>

<style scoped>
.model-house-cont{
  /* margin-top: 2rem;
  padding-top: 1rem; */
}
.model-house-cont h2{
  text-align: center;
  margin-bottom: 1rem;
}
.section1 p{
  width: 100%;
  position: relative;
}
.section1{
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: 45% 55%;
  column-gap: .5rem;
}
.section1 .div1{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  justify-content: center;
  line-height: 2rem;
}
.section1 .div2{
  height: 50vh;
}

@media only screen and (max-width: 1200px){
  .section1{
    display: flex;
    flex-direction: column;
  }
}
</style>