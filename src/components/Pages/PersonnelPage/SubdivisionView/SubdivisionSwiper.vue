<template>
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
      
    >
      <swiper-slide v-for="img in list" :key="img">
        <img :src="img.url">
      </swiper-slide>


    </swiper>
  </template>

<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';

  
    // import required modules
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';
  
    export default {
      props: ['list'],
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Autoplay, Pagination, Navigation],
        };
      },
    };
</script>
  
<style scoped>
#app {
  height: 100%;
}

.swiper {
  position: absolute;
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

</style>