<template>
  <div class="model-house-cont">
      <header>
        <h2>Model Houses</h2>
        <section>
            <button @click="clickBtn(1)">House Model #1</button>
            <button @click="clickBtn(2)">House Model #2</button>
            <button @click="clickBtn(3)">House Model #3</button>
        </section>
      </header>
      <section>
        <virtual-view :link-view="selectedHouse "></virtual-view>
      </section>
  </div>
  

</template>

<script>
import VirtualView from './subfolder/VirtualView.vue'
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
}
.model-house-cont h2{
  font-weight: 600;
  color: black;
  text-align: center;
}
.model-house-cont header section{
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
}
</style>