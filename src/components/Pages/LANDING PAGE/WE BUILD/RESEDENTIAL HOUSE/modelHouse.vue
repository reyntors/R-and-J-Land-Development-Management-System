<template>
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper}"
      :modules="modules"
      class="mySwiper2"
    >
      <swiper-slide
        ><img
          :src="img1" /></swiper-slide
      ><swiper-slide
        ><img
          :src="img2" /></swiper-slide
      ><swiper-slide
        ><img
          :src="img3"/></swiper-slide
      ><swiper-slide
        ><img
          :src="img4" /></swiper-slide
      >
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :loop="true"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
    <swiper-slide
        ><img
          :src="img1" /></swiper-slide
      ><swiper-slide
        ><img
          :src="img2" /></swiper-slide
      ><swiper-slide
        ><img
          :src="img3"/></swiper-slide
      ><swiper-slide
        ><img
          :src="img4" /></swiper-slide
      >
    </swiper>
  </template>
  <script>
    import { ref } from 'vue';
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // import required modules
    import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
  
    //import the images
    import model1 from '@/assets/model house/House Model 1.jpg'
    import model2 from '@/assets/model house/House Model 2.jpg'
    import model3 from '@/assets/model house/House Model 3.jpg'
    import model4 from '@/assets/model house/House Model 4.jpg'

    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const thumbsSwiper = ref(null);
  
        const setThumbsSwiper = (swiper) => {
          thumbsSwiper.value = swiper;
        };
  
        return {
          thumbsSwiper,
          setThumbsSwiper,
          modules: [FreeMode, Navigation, Thumbs],

          img1: model1,
          img2: model2,
          img3: model3,
          img4: model4,
        };
      },
    };
  </script>

<style scoped>
  

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

  </style>
  