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
      @autoplayTimeLeft="onAutoplayTimeLeft"
      class="mySwiper"
    >
      <swiper-slide>
        <img src="https://th.bing.com/th/id/OIP.OyBCzXdyN_dgagdiBbVR4gHaE8?pid=ImgDet&rs=1">
      </swiper-slide>
      <swiper-slide>
        <img src="https://th.bing.com/th/id/OIP.hkudbOrdfSp_pDhmj6G-JAHaE8?pid=ImgDet&rs=1">
      </swiper-slide>
      <swiper-slide>
        <img src="https://i.pinimg.com/originals/79/35/43/79354348fc972d07d63b4f2d4732d75d.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="https://i2.wp.com/precision-ironworks.com/wp-content/gallery/subdivision-entrances/SOLID-SCREENING-GATES-002.jpg?ssl=1">
      </swiper-slide>
      <template #container-end>
        <div class="autoplay-progress">
          <svg viewBox="0 0 48 48" ref="progressCircle">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref="progressContent"></span>
        </div>
      </template>
    </swiper>
  </template>
  <script>
    import { ref } from 'vue';
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    // import required modules
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const progressCircle = ref(null);
        const progressContent = ref(null);
        const onAutoplayTimeLeft = (s, time, progress) => {
          progressCircle.value.style.setProperty('--progress', 1 - progress);
          progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
        };
        return {
          onAutoplayTimeLeft,
          progressCircle,
          progressContent,
          modules: [Autoplay, Pagination, Navigation],
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

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}
</style>