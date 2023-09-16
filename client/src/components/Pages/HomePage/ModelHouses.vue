<template>
    <div id="model" class="c-cont">
        <h2>Model Houses</h2>
        <div class="buttons">
            <button @click="setValue(1)" :class="{flat: btn1}">Type 1</button>
            <button @click="setValue(2)" :class="{flat: btn2}">Type 2</button>
            <button @click="setValue(3)" :class="{flat: btn3}">Type 3</button>
            <button @click="setValue(4)" :class="{flat: btn4}">Type 4</button>
        </div>
        <hr>
        <div class="images">
            <img class="img1" :src="getImage">
            <img class="img2" :src="getImage">
            <img class="img3" :src="getImage">
            <img class="img4" :src="getImage">
        </div>        
    </div>
    <div class="virtualViewContainer">
        <button class="btn-item" @click="toggleVirtualView">{{ buttonName }}</button>
        <!-- <button @click="toggleVirtualView">{{ buttonName }}</button> -->
        <virtual-view v-if="virtualViewVisibleComputed"/>      
    </div>
        
  </template>
  
  <script>
  import VirtualView from './subfolder/VirtualView.vue'
  export default {
    components: {VirtualView},
    data(){
        return{
            value: 1,
            btn1: true,
            btn2: false,
            btn3: false,
            btn4: false,
            virtualViewVisible: false,
            image1 : 'https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000',
            image2 : 'https://floranext.com/wp-content/uploads/2016/07/013614.img_assist_custom.jpg',
            image3 : 'https://vid.alarabiya.net/images/2023/04/12/2d220739-e6e3-4f4a-86f0-672691659959/2d220739-e6e3-4f4a-86f0-672691659959.jpg?crop=1:1&width=1000',
            image4 : 'https://adayinourshoes.com/wp-content/uploads/strong-child.jpg'
        }
    },
    methods:{
        toggleVirtualView(){
            this.virtualViewVisible = !this.virtualViewVisible
        },
        setButtonsToFalse (){
            this.btn1 = false
            this.btn2 = false
            this.btn3 = false
            this.btn4 = false
        },
        setValue(param){
            this.value = param
            this.setButtonsToFalse();
            if(param ==1){
                this.btn1 = true
            }else if(param ==2){
                this.btn2 = true
            }else if(param ==3){
                this.btn3 = true
            }else{
                this.btn4 = true
            }
        }
    },
    computed: {
        getImage(){
            if(this.value == 1){
                return this.image1
            }else if(this.value == 2){
                return this.image2
            }else if(this.value == 3){
                return this.image3
            }else{
                return this.image4
            }
        },
        virtualViewVisibleComputed(){
            return this.virtualViewVisible
        },
        buttonName(){
            if(this.virtualViewVisible === false){
                return 'Watch the virtual'
            }else{
                return 'Close'
            }
        }
    }
  }
  </script>
  
  <style scoped>
  img{
    width: 100%;
    box-shadow: 0 0 2px 1px black;
    border-radius: 5px;
  }
  .c-cont{
      text-align: center;
      /* margin: 1rem; */
      box-sizing: border-box;
  }
  .c-cont h2{
    padding: 3rem 0 1rem;
    font-weight: 500;
    font-size: clamp(2rem, 3vw, 4rem);
  }
  .buttons{
    display: flex;
    gap: .5rem;
    justify-content: center;
    padding: 0;
  }
  .buttons button {
    border: none;
    padding: .5rem 1rem;
    margin: .2rem;
    box-shadow: 0 0 1px 1px gray;
    box-sizing: border-box;
    font-size: clamp(.6rem, 1.2vw, 2rem);
  }
  .buttons button:active, .buttons button:hover {
    border: none;
    box-shadow: none;
  }
  .buttons .flat{
    /* outline: 1px solid black; */
    box-shadow: none;
    background-color: #86D916;;
  }
  .images{
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 1rem;
    padding: .2rem;
  }
  .virtualViewContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .btn-item{
    font-size: clamp(.5rem, 2vw, 2rem);
    margin: .5rem;
    padding: .5rem 2rem; 
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.381);
    border: none;
    border-radius: 20px;
    animation: buttonColor 1s ease-in-out infinite alternate;
}

@keyframes buttonColor {
    0%{ 
        background-color: gold;
    }
    100%{
        background-color: #191970;
        /* color: white; */
    }
}

  @media screen and (min-width: 768px) {
    .images{
        grid-template-columns: 1fr 1fr; 
    }
  }
  </style>