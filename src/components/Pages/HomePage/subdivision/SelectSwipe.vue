
<template>
    <swiper
      :pagination="{
        type: 'fraction',
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
    <swiper-slide v-for="(img,index) in imageList" :key="index">
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
    import { Pagination, Navigation } from 'swiper/modules';
  
    export default {
        props: ['imageList'],
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Pagination, Navigation],
        };
      },
    };
</script>
  
  
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  position: absolute;
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