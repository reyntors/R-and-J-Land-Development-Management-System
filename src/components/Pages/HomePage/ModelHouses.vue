<template>
    <div id="model" class="c-cont">
        <h2>Model Houses</h2>
        <select class="dropdown" v-model="dropValue">
            <option value="1">TYPE1</option>
            <option value="2">TYPE2</option>
            <option value="3">TYPE3</option>
            <option value="4">TYPE4</option>
        </select>
        <div class="images">
            <img class="img1" :src="getImage">
            <img class="img2" :src="getImage">
            <img class="img3" :src="getImage">
            <img class="img4" :src="getImage">
            <!-- <div class="btn-cont"> -->
               <button class="btn-item">See the interior design</button> 
            <!-- </div> -->
            
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data(){
        return{
            dropValue: 1,
            image1 : 'https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000',
            image2 : 'https://floranext.com/wp-content/uploads/2016/07/013614.img_assist_custom.jpg',
            image3 : 'https://vid.alarabiya.net/images/2023/04/12/2d220739-e6e3-4f4a-86f0-672691659959/2d220739-e6e3-4f4a-86f0-672691659959.jpg?crop=1:1&width=1000',
            image4 : 'https://adayinourshoes.com/wp-content/uploads/strong-child.jpg'
        }
    },
    computed: {
        getImage(){
            if(this.dropValue == 1){
                return this.image1
            }else if(this.dropValue == 2){
                return this.image2
            }else if(this.dropValue == 3){
                return this.image3
            }else{
                return this.image4
            }
        }
    }
  }
  </script>
  
  <style scoped>
  img{
    min-width: 230px;
    width: 40vw;
  }
  .c-cont{
      text-align: center;
      margin: 1rem;
      box-sizing: border-box;
  }
  .c-cont h2{
    padding: 1rem;
    font-weight: 500;
  }
  .dropdown{
    display: block;
    width: 85%;
    margin: .5rem auto 0;
    border: .5px solid rgba(0, 0, 0, 0.601);
    padding: 1rem .5rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .images{
    width: 85%;
    margin: auto;
    padding: 1rem .5rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: .5rem;
  }
  .btn-item{
    /* width: 50%; */
    padding: .5rem 1rem; 
    box-shadow: 0 0 5px .5px rgba(0, 0, 0, 0.381);
    border: none;
    animation: buttonColor 1s ease-in-out infinite alternate;
}

@keyframes buttonColor {
    0%{ 
        background-color: gold;
        color:black;
    }
    100%{
        background-color: red;
        color: white;
    }
}

  @media screen and (min-width: 768px) {
    .images{
        grid-template-columns: 1fr 1fr; 
    }
    .btn-item{
        grid-column: span 2;
        width: 50%;
    }
  }
  </style>