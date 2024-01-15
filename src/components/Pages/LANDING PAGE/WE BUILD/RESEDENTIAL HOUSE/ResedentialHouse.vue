<template>
  <div id="residential-house" class="model-house-cont mb-5">
      <article>
        <section class="section1">
          <div class="div1" id="div1">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae officia 
              pariatur mollitia hic omnis ad animi. Quae, voluptatibus minus? Aliquam at quos culpa labore odit.
              omnis ad animi. Quae, voluptatibus minus? Aliquam at quos culpa labore odit</p>
          </div>
          
          <div class="div2" id="div2">
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
  mounted(){
        const scrollObserver = new IntersectionObserver(
            (entries,scrollObserver) => {
                console.log("hello world")
                entries.forEach((entry) => {
                    if(entry.isIntersecting){
                        entry.target.classList.add('animateNow')
                        scrollObserver.unobserve(entry.target)
                    }
                })
            }
        )
        
        const div1 = document.getElementById('div1')
        div1.classList.add('before-enter1')
        scrollObserver.observe(div1)
        const div2 = document.getElementById('div2')
        div2.classList.add('before-enter2')
        scrollObserver.observe(div2)
        
    }

}
</script>

<style scoped>
.before-enter1{
  opacity: 0;
  transform: translateX(-6rem);
  transition: all 1s cubic-bezier(.56,-0.01,.23,1.43);
}
.before-enter2{
  opacity: 0;
  transform: translateX(6rem);
  transition: all 1s cubic-bezier(.56,-0.01,.23,1.43);
}
.animateNow{
  opacity: 1;
  transform: translateX(0px);
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