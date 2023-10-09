<template>
  <div class="model-house-cont">
      <header>
        <h2>MODEL HOUSES</h2>
      </header>

      <article>
        <section class="section1">
          <div class="div1">
            <h4>Model House 1</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae officia 
              pariatur mollitia hic omnis ad animi. Quae, voluptatibus minus? Aliquam at quos culpa labore odit.
              omnis ad animi. Quae, voluptatibus minus? Aliquam at quos culpa labore odit</p>
          </div>
          
          <div class="div2">
               <virtual-view link-view="https://webobook.com/public/65236fef5ab8bd604e5f11a2,en"></virtual-view> 
          </div>
        </section>

        <section class="section2">
          <div class="div1">
               <virtual-view link-view="https://webobook.com/public/65236fae1f154b06f11a4a12,en"></virtual-view> 
          </div>
          <div class="div2">
            <h4>Model House 2</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae officia 
              pariatur mollitia hic omnis ad animi. Quae, voluptatibus minus? Aliquam at quos culpa labore odit.
              omnis ad animi. Quae, voluptatibus minus? Aliquam at quos culpa labore odit</p>
          </div>    
        </section>

        <section class="section3">
          <div class="div1">
            <h4>Model House 3</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae officia 
              pariatur mollitia hic omnis ad animi. Quae, voluptatibus minus? Aliquam at quos culpa labore odit.
              omnis ad animi. Quae, voluptatibus minus? Aliquam at quos culpa labore odit</p>
          </div>  
          <div class="div2">
               <virtual-view link-view="https://webobook.com/public/65236decff7224387d0d7b02,en"></virtual-view> 
          </div>
  
        </section>

      </article>


      <!-- <header>
        <h2>Model Houses</h2>
        //provide text description per model balance 50:50
        <section>
            <button @click="clickBtn(1)">House Model #1</button>
            <button @click="clickBtn(2)">House Model #2</button>
            <button @click="clickBtn(3)">House Model #3</button>
        </section>
      </header>
      <section>
        <virtual-view :link-view="selectedHouse "></virtual-view>
      </section> -->
  </div>
  

</template>

<script>
import VirtualView from './VirtualView.vue'
export default {
  components: { VirtualView },
  data(){
    return{
      selectedHouse: 'https://webobook.com/public/65236fef5ab8bd604e5f11a2,en',
      value: 1,

      link1:'https://webobook.com/public/65236fef5ab8bd604e5f11a2,en',
      link2:'https://webobook.com/public/65236fae1f154b06f11a4a12,en',
      link3:'https://webobook.com/public/65236decff7224387d0d7b02,en',
    }
  },
  methods:{
    clickBtn(param){
      this.value = param
      if(this.value == 1){
        this.selectedHouse = this.link1
      }else if(this.value == 2){
        this.selectedHouse = this.link2
      }else{
        this.selectedHouse = this.link3
      }
    }
  },
}
</script>

<style scoped>
.model-house-cont{
  margin-top: 2rem;
  padding-top: 1rem;
  background-color:rgba(0, 128, 0, 0.5);
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
  grid-template-columns: 50% 50%;
  column-gap: .5rem;
}
.section1 .div1{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  justify-content: center;
}
.section2{
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: .5rem;
}
.section2 .div2{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  justify-content: center;
}
.section3{
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: .5rem;
}
.section3 .div1{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  justify-content: center;
}
/* .model-house-cont header section{
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: .5rem;
}
.model-house-cont header section button{
  border: none;
  padding: .5rem;
  outline: 1px solid black;
  font-weight: 500;
} */
</style>